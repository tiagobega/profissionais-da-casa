export const HEADER_LINK = {
  BLOG: "BLOG",
  HOME_SITE: "HOME_SITE",
  CASA_FAST: "CASA_FAST",
  CATALOG: "CATALOG",
} as const;

export type HeaderLink = (typeof HEADER_LINK)[keyof typeof HEADER_LINK];

export const headerLinks = {
  [HEADER_LINK.BLOG]: {
    name: "Blog",
    link: "https://cadacasa.com.br/blog-2/",
    external: true,
  },
  [HEADER_LINK.HOME_SITE]: {
    name: "Cada Casa",
    link: "https://cadacasa.com.br/",
    external: true,
  },
  [HEADER_LINK.CASA_FAST]: {
    name: "Casa Fast",
    link: "https://cadacasa.com.br/casa-fast-inicial/",
    external: true,
  },
  [HEADER_LINK.CATALOG]: {
    name: "Catalogo",
    link: "/catalog",
    external: false,
  },
};
