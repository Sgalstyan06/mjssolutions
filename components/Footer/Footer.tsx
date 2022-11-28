import React, { useState } from "react";
import Image from "next/image";
import * as Styled from "./Footer.styles";
import { phone, email, currentYear } from "../../constants/staticInfo";

const icons = [
  {
    src: "/icons/paymentIcon.png",
    width: "30px",
    height: "20px",
    alt: "paymentIcon",
  },
  { src: "/icons/circles.png", width: "32px", height: "22px", alt: "circles" },
  { src: "/icons/viza.png", width: "42px", height: "12px", alt: "viza" },
  { src: "/icons/v_icon.png", width: "19px", height: "19px", alt: "v_icon" },
  {
    src: "/icons/payment-Icon-2.png",
    width: "19px",
    height: "19px",
    alt: "payment-Icon-2",
  },
  { src: "/icons/z_icon.png", width: "10px", height: "18px", alt: "z-icon" },
];

const Footer = () => {
  return (
    <Styled.Footer>
      <Styled.Container>
        <Styled.Logo>
          <Image
            src="/logo/logo.png"
            width="240px"
            height="70px"
            alt="MJS Solutions logo"
            quality={100}
          />
        </Styled.Logo>
        <Styled.ContactInfoWrapper>
          <Styled.ContactLink href={`tel: ${phone}`}>
            {phone}
          </Styled.ContactLink>
          <Styled.ContactLink href={`mailTO:${email}`}>
            {email}
          </Styled.ContactLink>
        </Styled.ContactInfoWrapper>
        <Styled.PaymentIconsWrrapper>
          {icons.map((icon, index) => {
            return (
              <Image
                key={index}
                src={icon.src}
                width={icon.width}
                height={icon.height}
                alt={icon.alt}
                quality={100}
              />
            );
          })}
        </Styled.PaymentIconsWrrapper>
      </Styled.Container>
      <Styled.Line />
      <Styled.CopyRight>
        &copy; {currentYear} MJS Solutions. All Rights Reserved
      </Styled.CopyRight>
    </Styled.Footer>
  );
};

export default Footer;
