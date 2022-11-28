import React, { useMemo } from "react";
import Image from "next/image";
import Button from "../Button/Button";
import { ButtonSize } from "../../constants/sizes";
import * as Styled from "./AreaService.styles";
import { phone } from "../../constants/staticInfo";
import { useWindowSize } from "../../utilities/hooks";

const AreaService = () => {
  const { width } = useWindowSize();
  return (
    <Styled.Container id="areas-serviced">
      <Styled.Title>Areas serviced</Styled.Title>
      <Styled.Description>
        We are servicing Los Angeles and Surrounding Areas.
      </Styled.Description>
      <Styled.ContactLink href={`tel: ${phone}`}>
        <Button
          size={width && width > 768 ? ButtonSize.MD : ButtonSize.XS}
          child={`call`}
        />
      </Styled.ContactLink>
      <Styled.ImageWrapper>
        <Image
          src={`/areaService/areaServiceImage.png`}
          width="765px"
          height="250px"
          alt="Los Angeles"
        />
      </Styled.ImageWrapper>
    </Styled.Container>
  );
};

export default AreaService;
