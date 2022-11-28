import { prop, ifProp } from "styled-tools";
import "react-phone-input-2/lib/style.css";
import styled from "styled-components";
import { breakPoint } from "../../utilities/mediaHelpers";

interface IInputWrraper {
  err: string | undefined | boolean;
}

interface IMessageType {
  hasError: boolean;
}

export const InputListWrrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 30px;
`;
export const Form = styled.form`
  max-width: 570px;
  ${breakPoint.down("sm")} {
    max-width: 327px;
    margin: 0 auto;
  }
`;

export const InputWrapper = styled.div<IInputWrraper>`
  max-width: 270px;
  height: 65px;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  .MuiFormLabel-root {
    color: ${prop("theme.color.grayColor")};
  }
  input {
    &:-webkit-autofill {
      -webkit-text-fill-color: ${prop("theme.color.grayColor")} !important;
      -webkit-box-shadow: 0 0 0 50px ${prop("theme.color.codGray")} inset;
      border-bottom: 0.5px solid ${prop("theme.color.grayColor")};
    }
    border: none;
    border-bottom: 0.5px solid
      ${ifProp({ err: true }, prop("theme.color.burgundyColor"), prop("gray"))};
    color: ${ifProp(
      { err: true },
      prop("theme.color.burgundyColorText"),
      prop("theme.color.grayColor"),
    )};
  }
  .MuiOutlinedInput-notchedOutline {
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
  }
  .MuiFormControl-root {
    width: 100%;
  }
  ${breakPoint.down("sm")} {
    margin-bottom: 4px;
    input {
      height: 15px;
    }
  }
`;

export const ErrorMessage = styled.p`
  margin: 5px 5px 5px 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 11px;
  color: ${prop("theme.color.burgundyColorText")};
  ${breakPoint.down("sm")} {
    font-size: 10px;
  }
`;
export const PhoneInputWrraper = styled.div`
  input {
    padding-top: 4px;
  }
`;

export const SelectWrrapper = styled.div<IInputWrraper>`
  padding-top: 15px;
  .MuiInputBase-root {
    margin: 0;
  }
  input,
  label {
    padding: 4px 0 5px;
    width: 100%;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    border: none;
    color: ${prop("theme.color.grayColor")};
  }
  label {
    top: -15px;
  }
  .MuiFormControl-root {
    width: 100%;
  }
  .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: gray;
  }
  .MuiSelect-select {
    color: ${prop("theme.color.grayColor")};
    border-bottom: 0.5px solid
      ${ifProp(
        { err: true },
        prop("theme.color.burgundyColorText"),
        prop("gray"),
      )};
  }
`;
export const TextAreaWrrapper = styled.div`
  max-width: 570px;
  margin-top: 16px;
  textarea,
  label {
    width: 100%;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    border: none;
    color: ${prop("theme.color.grayColor")};
  }
  .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: gray;
  }
  textarea {
    border-bottom: 1px solid ${prop("theme.color.grayColor")};
  }
  .MuiInputBase-root {
    height: 66px;
  }
  .MuiFormControl-root {
    width: 100%;
  }
`;

export const ContactUsMessage = styled(ErrorMessage)<IMessageType>`
  height: 20px;
  color: ${ifProp(
    { hasError: true },
    prop("theme.color.burgundyColorText"),
    prop("theme.color.successMessageColor"),
  )} !important;
  margin: 10px 5px 10px 0 !important;
`;
