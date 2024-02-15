import { DefaultTheme, ThemedCssFunction, css } from "styled-components";

export const HEADER_SIZE = {
  DESKTOP: 80,
  TABLET: 80,
  MOBILE: 80,
};

export const SCREEN_SIZE = {
  MOBILE: 360,
  MOBILE_BIG: 576,
  TABLET: 768,
  DESKTOP: 1280,
  DESKLTOP_BIG: 1440,
} as const;
export type ScreenSize = (typeof SCREEN_SIZE)[keyof typeof SCREEN_SIZE];

export const MEDIA_QUERY_KEY = {
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
  xxl: "xxl",
  only_xs: "only_xs",
  only_sm: "only_sm",
  only_md: "only_md",
  only_lg: "only_lg",
  only_xl: "only_xl",
  only_xxl: "only_xxl",
  to_xs: "to_xs",
  to_sm: "to_sm",
  to_md: "to_md",
  to_lg: "to_lg",
  to_xl: "to_xl",
} as const;

export type MediaQueryKey =
  (typeof MEDIA_QUERY_KEY)[keyof typeof MEDIA_QUERY_KEY];

export const MEDIA_QUERY: {
  [key in MediaQueryKey]: string;
} = {
  [MEDIA_QUERY_KEY.sm]: "(min-width: 576px)",
  [MEDIA_QUERY_KEY.md]: "(min-width: 768px)",
  [MEDIA_QUERY_KEY.lg]: "(min-width: 1025px)",
  [MEDIA_QUERY_KEY.xl]: "(min-width: 1280px)",
  [MEDIA_QUERY_KEY.xxl]: "(min-width: 1440px)",
  [MEDIA_QUERY_KEY.only_xs]: "(max-width: 575.98px)",
  [MEDIA_QUERY_KEY.only_sm]: "(min-width: 576px) and (max-width: 767.98px)",
  [MEDIA_QUERY_KEY.only_md]: "(min-width: 768px) and (max-width: 991.98px)",
  [MEDIA_QUERY_KEY.only_lg]: "(min-width: 992px) and (max-width: 1199.98px)",
  [MEDIA_QUERY_KEY.only_xl]: "(min-width: 1200px) and (max-width: 1399.98px)",
  [MEDIA_QUERY_KEY.only_xxl]: "(min-width: 1400px)",
  [MEDIA_QUERY_KEY.to_xs]: "(max-width: 575.98px)",
  [MEDIA_QUERY_KEY.to_sm]: "(max-width: 767.98px)",
  [MEDIA_QUERY_KEY.to_md]: "(max-width: 991.98px)",
  [MEDIA_QUERY_KEY.to_lg]: "(max-width: 1199.98px)",
  [MEDIA_QUERY_KEY.to_xl]: "(max-width: 1399.98px)",
} as const;

export const LAYER = {
  HEADER: 100,
  MODAL: 200,
} as const;

export type Layer = (typeof LAYER)[keyof typeof LAYER];
