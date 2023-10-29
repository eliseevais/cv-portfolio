import { myTheme } from "./Theme.styled";

type FontPropsType = {
  family?: string;
  weight?: number;
  color?: string;
  lineHeight?: number;
  Fmin?: number;
  Fmax?: number;
}

export const myFont = (
  {family, weight, color, lineHeight, Fmin, Fmax}: FontPropsType ) => `
  font-family: ${family || "Poppins"};
  font-weigh: ${weight || 400};
  color: ${color || myTheme.colors.accentA};
  line-height: ${lineHeight || 1.2};
  font-size: calc( (100vw - 360px)/(1920 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`

