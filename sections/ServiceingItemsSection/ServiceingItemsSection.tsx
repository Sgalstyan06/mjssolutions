import React, { useRef } from "react";
import Card from "../../components/Card/Card";
import * as Styled from "./ServiceingItemsSection.styles";
import { useOnScreen } from "../../utilities/hooks";

export interface Icards {
  image: string;
  title: string;
  description: string;
}

export interface IIconCards extends Icards {
  visible?: boolean;
  children?: JSX.Element;
  animated?: boolean | undefined;
  dimensions?: boolean;
}
export const CardList: Array<Icards> = [
  {
    image: "/cards/coffeMachines.png",
    title: "Coffee machines",
    description: "",
  },
  { image: "/cards/dishWashers.png", title: "Dishwashers", description: "" },
  { image: "/cards/ranges.png", title: "Ranges", description: "" },
  {
    image: "/cards/refrigerators.png",
    title: "Refrigerators",
    description: "",
  },
  {
    image: "/cards/ventilationHood.png",
    title: "Ventilation hood",
    description: "",
  },
  {
    image: "/cards/washingMachines.png",
    title: "Washing machines",
    description: "",
  },
];

const ServiceingItemsSection = () => {
  const ref = useRef(null);
  const visible = useOnScreen(ref);
  return (
    <Styled.CardsContainer id="service">
      <Styled.Title>What we service?</Styled.Title>
      <Styled.Cards ref={ref}>
        {CardList.map((item, index) => {
          return (
            <Card
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              dimensions={true}
              visible={visible}
            />
          );
        })}
      </Styled.Cards>
    </Styled.CardsContainer>
  );
};
export default ServiceingItemsSection;
