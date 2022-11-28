import React, { useState, useMemo } from "react";
import { useForm, Controller } from "react-hook-form";
import "react-phone-input-2/lib/style.css";
import {
  Select,
  InputLabel,
  MenuItem,
  TextField,
  FormControl,
} from "@mui/material";
import Input from "react-phone-number-input/input";
import {
  DefaultInputComponentProps,
  isValidPhoneNumber,
} from "react-phone-number-input";

import { CardList } from "../../sections/ServiceingItemsSection/ServiceingItemsSection";
import { validationRules } from "../../constants/validation";
import { postContactData } from "../../sevice/HttpRequests";
import { useWindowSize } from "../../utilities/hooks";
import { ButtonSize } from "../../constants/sizes";
import CustomPhoneNumber from "./PhoneNumber";
import * as Styled from "./Form.styles";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";

export interface IFormInputs {
  phone: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  message: string;
  textArea: string;
  service: string;
}

type InputComponent<InputComponentProps> = (
  props: InputComponentProps,
) => JSX.Element | React.ComponentClass<InputComponentProps, any>;

const Form = () => {
  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const [contactUsMessage, setContactUsMesage] = useState<string>("");
  const [hasError, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);

  const { width } = useWindowSize();

  const onSubmit = async (data: IFormInputs) => {
    try {
      setIsLoading(true);

      const contactUsDataMessage = await postContactData(data);
      setContactUsMesage(contactUsDataMessage?.message);

      setError(false);
      setIsLoading(false);
      reset();
    } catch (e) {
      setContactUsMesage(
        "Something went wrong when sending message. Please try again later.",
      );
      setError(true);
      setIsLoading(false);
    }
    setTimeout(() => {
      setContactUsMesage("");
      setError(false);
    }, 5000);
  };

  const handlePhoneNumberValidation = (value: string) => {
    return isValidPhoneNumber(value);
  };

  return (
    <>
      <Styled.Form onSubmit={handleSubmit(onSubmit)}>
        <Styled.InputListWrrapper>
          <Styled.InputWrapper err={!!errors.firstName?.message}>
            <TextField
              sx={{
                ".MuiFormLabel-root": {
                  color: "gray",
                },
              }}
              label="First Name"
              variant="standard"
              placeholder="First Name"
              id="firstName"
              type="text"
              {...register("firstName", {
                required: validationRules.firstName.requiredMessage,
                minLength: validationRules.firstName.minLength,
                pattern: validationRules.firstName.pattern,
              })}
            />
            <Styled.ErrorMessage>
              {errors.firstName?.message}
            </Styled.ErrorMessage>
          </Styled.InputWrapper>
          <Styled.InputWrapper err={!!errors.lastName?.message}>
            <TextField
              sx={{
                ".MuiFormLabel-root": {
                  color: "gray",
                },
              }}
              label="Last name"
              variant="standard"
              placeholder="Last name"
              id="lastName"
              type="text"
              {...register("lastName", {
                required: validationRules.lastName.requiredMessage,
                minLength: validationRules.lastName.minLength,
                pattern: validationRules.lastName.pattern,
              })}
            />
            <Styled.ErrorMessage>
              {errors.lastName?.message}
            </Styled.ErrorMessage>
          </Styled.InputWrapper>
          <Styled.InputWrapper err={!!errors.phone?.message}>
            <Styled.PhoneInputWrraper>
              <Controller
                name="phone"
                control={control}
                rules={{
                  required: validationRules.phone.requiredMessage,
                  validate: (value) => handlePhoneNumberValidation(value),
                }}
                render={({ field: { onChange }, field: { value } }) => (
                  <Input
                    placeholder="Phone Number"
                    onChange={onChange}
                    value={value}
                    inputComponent={
                      CustomPhoneNumber as InputComponent<DefaultInputComponentProps>
                    }
                  />
                )}
              />
              {errors.phone ? (
                <Styled.ErrorMessage>
                  {errors.phone?.message ||
                    validationRules.phone.invalidPhoneNumber}
                </Styled.ErrorMessage>
              ) : null}
            </Styled.PhoneInputWrraper>
          </Styled.InputWrapper>
          <Styled.InputWrapper err={!!errors.email?.message}>
            <TextField
              sx={{
                ".MuiFormLabel-root": {
                  color: "gray",
                },
              }}
              label="Email"
              variant="standard"
              placeholder="Email"
              id="email"
              type="email"
              {...register("email", {
                required: validationRules.email.requiredMessage,
                pattern: validationRules.email.pattern,
              })}
            />
            <Styled.ErrorMessage>{errors.email?.message}</Styled.ErrorMessage>
          </Styled.InputWrapper>
          <Styled.SelectWrrapper err={!!errors.service?.message}>
            <Controller
              name="service"
              control={control}
              rules={{ required: validationRules.service.requiredMessage }}
              render={({ field: { onChange }, field: { value = "" } }) => (
                <FormControl variant="standard">
                  <InputLabel id="demo-simple-select-standard-label">
                    Service
                  </InputLabel>
                  <Select
                    sx={{
                      ".MuiSvgIcon-root": {
                        color: "gray",
                      },
                    }}
                    value={value}
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    onChange={onChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {CardList.map((serviceItem, i) => (
                      <MenuItem value={serviceItem.title} key={i}>
                        {serviceItem.title}
                      </MenuItem>
                    ))}
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
            <Styled.ErrorMessage>{errors.service?.message}</Styled.ErrorMessage>
          </Styled.SelectWrrapper>
        </Styled.InputListWrrapper>
        <Styled.TextAreaWrrapper>
          <TextField
            id="message"
            label="Message"
            multiline
            rows={3}
            variant="standard"
            {...register("message")}
          />
        </Styled.TextAreaWrrapper>

        <Styled.ContactUsMessage hasError={hasError}>
          {isLoading && <Loader />}
          {contactUsMessage}
        </Styled.ContactUsMessage>
        <Button
          disabled={isLoading}
          size={width && width > 768 ? ButtonSize.MD : ButtonSize.SM}
          child={`send`}
        />
      </Styled.Form>
    </>
  );
};
export default Form;
