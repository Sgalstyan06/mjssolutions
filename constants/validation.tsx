export const validationRules = {
  firstName: {
    requiredMessage: "First name is required.",
    minLength: {
      value: 2,
      message: "Please enter at least 2 characters.",
    },
    pattern: {
      value: /^[a-zA-Z- ]+$/,
      message: "First name should contain only letters and hyphen.",
    },
  },
  lastName: {
    requiredMessage: "Last name is required.",
    minLength: {
      value: 2,
      message: "Please enter at least 2 characters.",
    },
    pattern: {
      value: /^[a-zA-Z- ]+$/,
      message: "Last name should contain only letters and hyphen.",
    },
  },
  email: {
    requiredMessage: "Email is required.",
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "Please specify a valid email address.",
    },
  },
  phone: {
    requiredMessage: "Phone is required",
    invalidPhoneNumber: "Please specify valid phone number",
  },
  service: {
    requiredMessage: "Service is required",
  },
};
