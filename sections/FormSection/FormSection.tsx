import React from "react";
import Image from "next/image";
import * as Styled from "./FormSection.styles";
import Form from "../../components/Form/Form";
import formImage from "../../public/form/formImage.jpg";

const FormSection = () => {
  return (
    <Styled.Container>
      <Styled.FormImageWrraper>
        <Styled.ImageWrrapper>
          <Image
            src={formImage}
            layout="fill"
            objectFit="cover"
            alt="repairman"
            placeholder="blur"
          />
        </Styled.ImageWrrapper>
      </Styled.FormImageWrraper>
      <Styled.FormContainer id="contact-us">
        <Styled.Title>
          Contact <span>us</span>
        </Styled.Title>
        <Styled.Description>
          Please submit this form and we'll contact you as soon as possible.
        </Styled.Description>
        <Form />
      </Styled.FormContainer>
    </Styled.Container>
  );
};

export default FormSection;
