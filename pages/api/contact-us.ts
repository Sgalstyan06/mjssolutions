import { NextApiRequest, NextApiResponse } from "next";
import { isValidPhoneNumber } from "react-phone-number-input";

import { validationRules } from "../../constants/validation";

require("dotenv").config();
let nodemailer = require("nodemailer");

type Data = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method !== "POST") {
    return res.status(400).json({
      message: "Something went wrong when sending message!",
    });
  }

  try {
    const { firstName, lastName, phone, email, service, message } =
      req.body.contactData;

    if (!firstName || !lastName || !phone || !service) {
      return res.status(400).json({
        message: "Something went wrong when sending message!",
      });
    }

    if (!validationRules.email.pattern.value.test(email.trim())) {
      return res.status(422).json({
        message: validationRules.email.pattern.message,
      });
    }

    if (!validationRules.firstName.pattern.value.test(firstName.trim())) {
      return res.status(422).json({
        message: validationRules.firstName.pattern.message,
      });
    }

    if (!validationRules.lastName.pattern.value.test(lastName.trim())) {
      return res.status(422).json({
        message: validationRules.lastName.pattern.message,
      });
    }

    if (!isValidPhoneNumber(phone)) {
      return res.status(422).json({
        message: validationRules.phone.invalidPhoneNumber,
      });
    }

    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: "mjssolutionsla@gmail.com",
        pass: process.env.email_password,
      },
      secure: true,
    });

    const mailData = {
      from: "mjssolutionsla@gmail.com",
      to: "aram@mjssolutions.net",
      subject: `Message From ${firstName.trim()} ${lastName.trim() || ""}`,
      text: `Message: ${message.trim()}\n\nSent from: ${firstName.trim()} ${
        lastName.trim() || ""
      }\nService: ${service}\nEmail: ${email.trim()}\nPhone number: ${phone}`,
    };

    transporter.sendMail(mailData, function (err: Error) {
      if (err) {
        return res
          .status(500)
          .json({ message: "Something went wrong when sending message!" });
      } else {
        return res.status(200).json({ message: "Message sent successfully!" });
      }
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong when sending message!",
    });
  }
}
