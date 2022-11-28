import React, { useRef, useMemo } from "react";
import Link from "next/link";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import { Icards } from "../ServiceingItemsSection/ServiceingItemsSection";
import * as Styled from "./StatisticsSection.styles";
import { useOnScreen, useWindowSize } from "../../utilities/hooks";
import { ButtonSize } from "../../constants/sizes";
import CountToUp from "../../components/CountToUp/CountToUP";

interface IIconList extends Icards {
  quantity: number;
  action: string;
}

const IconList: Array<IIconList> = [
  {
    image: "/cards/еxperience.png",
    title: "Experience",
    description: "",
    quantity: 15,
    action: "y +",
  },
  {
    image: "/cards/completed_jobs.png",
    title: "Completed projects",
    description: "",
    quantity: 1000,
    action: " +",
  },
  {
    image: "/cards/happy_clients.png",
    title: "Happy clients",
    description: "",
    quantity: 100,
    action: " %",
  },
  {
    image: "/cards/excellence.png",
    title: "Satisfaction Guaranteed",
    description: "",
    quantity: 100,
    action: " %",
  },
];

const StatisticsSection = () => {
  const ref = useRef(null);
  const visible = useOnScreen(ref);

  const { width } = useWindowSize();
  return (
    <Styled.WhyChooseUsContainer id="why-choose-us">
      <Styled.StatisticHeaderSection>
        <Styled.Header>
          <Styled.Title>WHY CHOOSE US?</Styled.Title>
          <Styled.Description>
            That’s easy. Just hear{" "}
            <span>what our customers have to say about us.</span>
          </Styled.Description>
        </Styled.Header>
        <Styled.StatisticButton>
          <Link href="#contact-us">
            <a>
              <Button
                child={`book an appointment`}
                size={width && width > 768 ? ButtonSize.XXXL : ButtonSize.XXL}
              />
            </a>
          </Link>
        </Styled.StatisticButton>
      </Styled.StatisticHeaderSection>
      <Styled.Icons ref={ref}>
        {IconList.map((item, index) => {
          return (
            <Card
              key={index}
              image={item.image}
              dimensions={false}
              title={item.title}
              description={item.description}
              visible={visible}
            >
              <CountToUp visible={visible} quantity={item.quantity}>
                {item.action}
              </CountToUp>
            </Card>
          );
        })}
      </Styled.Icons>
    </Styled.WhyChooseUsContainer>
  );
};

export default StatisticsSection;
