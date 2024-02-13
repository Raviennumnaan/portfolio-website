"use server";

import React from "react";
import ContactFormEmail from "@/email/contact-form-email";
import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async function (formData: FormData) {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) return { error: "Invalid Message" };
  if (!validateString(message, 5000)) return { error: "Invalid Message" };

  const data = await resend.emails.send({
    from: "Contact Form <onboadring@resend.dev>",
    to: "raviennumnaan@gmail.com",
    subject: "Message from contact form",
    reply_to: senderEmail as string,
    react: React.createElement(ContactFormEmail, {
      message: message as string,
      senderEmail: senderEmail as string,
    }),
  });

  if (data.error) return { error: getErrorMessage(data.error) };
  return { data: data.data };
};
