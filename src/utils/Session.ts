const COOKIE_NAME = `cada-casa-app`;

export interface SetCookieOptions {
  /**
   * Name of the context of the cookie
   * @example "nome legal"
   * @default "main"
   */
  context?: string;
  /**
   * Time of the cookie expiration in days
   * @example expires = 10; the cookie will expires in 10 days from today
   * @default 6
   */
  expires?: number;
  /**
   * Defines if the cookie will be deleted when the session in the domain is over
   * @default false
   */
  sessionCookie?: boolean;
  /**
   * Defines the cookie domain
   * @default window.location.hostname
   */
  domain?: string;
  /**
   * Defines the path of the cookie
   * @default "/"
   */
  path?: string;
}

export class Session {
  static set(
    authParams: { [key: string]: any } = {},
    {
      context = "main",
      expires = 6,
      path = "/",
      domain = window.location.hostname,
      sessionCookie = false,
    }: SetCookieOptions = {}
  ) {
    const currentSession = this.get(context);
    authParams.createdAt = Date.now();

    const date = new Date();
    const duration = expires * 24 * 60 * 60 * 1000;
    date.setTime(date.getTime() + duration);

    const cookieExpires = !sessionCookie
      ? `expires=${date.toUTCString()};`
      : "";

    const cookieDomain = `domain=${domain};`;
    const cookiePath = `path=${path}`;

    const baseValue = window.btoa(
      JSON.stringify({ ...currentSession, ...authParams })
    );

    document.cookie = `${COOKIE_NAME}-${context}=${baseValue};${cookieExpires}${cookieDomain}${cookiePath}`;
  }

  static get<SessionObject extends { [key: string]: any }>(
    context: string = "main"
  ): SessionObject {
    const name = `${COOKIE_NAME}-${context}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(";");
    let token = null;

    cookieArray.forEach((cookiePart) => {
      let c = cookiePart;

      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }

      if (c.indexOf(name) == 0) {
        token = c.substring(name.length, c.length);
      }
    });

    document.cookie;

    return token ? JSON.parse(window.atob(token)) : ({} as SessionObject);
  }

  static destroy(context: string = "main") {
    document.cookie = `${COOKIE_NAME}-${context}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
  }
}
