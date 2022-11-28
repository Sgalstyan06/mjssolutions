import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IIconCards } from "../../sections/ServiceingItemsSection/ServiceingItemsSection";
import * as Styled from "./Card.styles";

const Card: React.FC<IIconCards> = ({
  image,
  title,
  description,
  dimensions,
  visible,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (visible) {
      setIsVisible(true);
    }
  }, [visible]);
  return (
    <Styled.Card dimensions={dimensions}>
      {isVisible &&
        (dimensions ? (
          <Styled.ImageWrrapper dimensions={dimensions}>
            <Image
              src={image}
              width={150}
              height={150}
              alt={title}
              quality={100}
            />
          </Styled.ImageWrrapper>
        ) : (
          <Styled.ImageWrrapper dimensions={dimensions}>
            <Image
              src={image}
              width={100}
              height={100}
              alt={title}
              quality={100}
            />
          </Styled.ImageWrrapper>
        ))}

      <Styled.Children dimensions={dimensions}>{children}</Styled.Children>

      {title && isVisible && <Styled.Title>{title}</Styled.Title>}
      {description && isVisible && (
        <Styled.Description>{description}</Styled.Description>
      )}
    </Styled.Card>
  );
};
export default Card;
