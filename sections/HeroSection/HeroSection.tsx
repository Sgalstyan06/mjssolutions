import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import * as Styled from "./HeroSectoin.styles";
import Button from "../../components/Button/Button";
import { ButtonSize } from "../../constants/sizes";
import { useWindowSize } from "../../utilities/hooks";
import heroImage from "../../public/hero/hero_miele.jpg";

const HeroSection = () => {
  const { width } = useWindowSize();

  return (
    <Styled.HeroContainer id="hero">
      <Styled.HeroSectionsInfoContainer>
        <Styled.HeroSectionsInfo>
          <Styled.Title>
            ABOUT
            <span> US</span>
          </Styled.Title>
          <Styled.Description>
            MJS Solutions offers quality repair/service for residential Miele
            appliances. We are an authorized Miele Service Provider and take
            pride in our experience and skill to deliver great outcomes for our
            customers.
          </Styled.Description>
          <Styled.Description>
            We service a wide range of Miele products and provide maintenance
            services as well.
          </Styled.Description>
          <Link href="#contact-us" passHref>
            <a>
              <Button
                child={`book an appointment`}
                size={width && width > 768 ? ButtonSize.XXXL : ButtonSize.XXL}
              />
            </a>
          </Link>
        </Styled.HeroSectionsInfo>
      </Styled.HeroSectionsInfoContainer>
      <Styled.HeroImageWrrapper>
        <Styled.HeroImage>
          <Image
            src={heroImage}
            objectFit="cover"
            layout="fill"
            alt="kitchen"
            placeholder="blur"
          />
        </Styled.HeroImage>
      </Styled.HeroImageWrrapper>
    </Styled.HeroContainer>
  );
};

export default HeroSection;
