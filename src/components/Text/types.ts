export const TEXT_WEIGHT = {
  100: 100,
  200: 200,
  300: 300,
  400: 400,
  500: 500,
  600: 600,
  700: 700,
  800: 800,
  900: 900,
  THIN: "thin",
  EXTRA_LIGHT: "extra-light",
  LIGHT: "light",
  REGULAR: "regular",
  MEDIUM: "Medium",
  SEMI_BOLD: "semi-bold",
  BOLD: "bold",
  EXTRA_BOLD: "extra-bold",
  BLACK: "black",
} as const;

export const TEXT_FAMILIES = {
  INTER: "Inter",
  FAMILJEN_GROTESK: "Familjen-Grotesk",
};

export const TEXT_ALIGNMENTS = {
  RIGHT: "right",
  CENTER: "center",
  LEFT: "left",
  JUSTIFY: "justify",
};

type TextWeightTypes = typeof TEXT_WEIGHT[keyof typeof TEXT_WEIGHT];
type TextFamilyTypes = typeof TEXT_FAMILIES[keyof typeof TEXT_FAMILIES];
type TextAlignmentTypes = typeof TEXT_ALIGNMENTS[keyof typeof TEXT_ALIGNMENTS];

type TextOwnProps<E extends React.ElementType> = {
  children: React.ReactNode;
  className?: string;
  weight?: TextWeightTypes;
  family?: TextFamilyTypes;
  align?: TextAlignmentTypes;
  as?: E;
};

export type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;
