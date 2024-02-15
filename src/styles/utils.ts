import {
  type DefaultTheme,
  type ThemedCssFunction,
  css,
} from "styled-components";
import {
  type MediaQueryKey,
  type ScreenSize,
  MEDIA_QUERY,
  MEDIA_QUERY_KEY,
} from "./contants";

const mediaFunction =
  (mediaQuery: string) =>
  (...args: Parameters<ThemedCssFunction<DefaultTheme>>) =>
    css`
      @media ${mediaQuery} {
        ${css(...args)}
      }
    `;

const createMediaKeys = () => {
  const mediaObj: {
    [key in MediaQueryKey]?: ReturnType<typeof mediaFunction>;
  } = {};

  let mediaKey: MediaQueryKey;

  for (mediaKey in MEDIA_QUERY_KEY) {
    mediaObj[mediaKey] = mediaFunction(MEDIA_QUERY[mediaKey]);
  }

  return mediaObj as Required<typeof mediaObj>;
};

export const media = createMediaKeys();

export const percentage = (value: number | string) => {
  return `${value}%`;
};

export const px = (value: number | string) => {
  return `${value}px`;
};

export const vw = (value: number | string) => {
  return `${value}vw`;
};

export const vh = (value: number | string) => {
  return `${value}vh`;
};

export const dvw = (value: number | string) => {
  return `${value}dvw`;
};

export const dvh = (value: number | string) => {
  return `${value}dvh`;
};

export const crossm = (
  value: number,
  base: ScreenSize,
  options: { resultInPercentage?: boolean } = {}
) => {
  options.resultInPercentage ??= false;

  const calc = (value * 100) / base;

  if (options.resultInPercentage) {
    return percentage(calc);
  }

  return calc;
};

export const proportionalToScreen = (value: number) => {
  return `calc((${value} * 100vw) / var(--currentScreenSize)`;
};
