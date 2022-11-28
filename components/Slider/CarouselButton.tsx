import { EmblaDot } from "./Slider.styles";

interface IDotButtonProp {
  selected: boolean;
  onClick: any;
}

export const DotButton: React.FC<IDotButtonProp> = ({ selected, onClick }) => (
  <EmblaDot selected={selected} onClick={onClick} />
);
