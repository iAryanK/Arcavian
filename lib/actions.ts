"use server";

import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendMail(body: any) {
  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "aryankinmail@gmail.com",
      subject: "Note from arcavian.iaryan.tech",
      text: "Hello",
      react: EmailTemplate({
        username: body.data.name,
        useremail: body.data.email,
        userphone: body.data.phone,
        usermessage: body.data.message,
      }),
    });

    if (error) {
      return { error, status: 500 };
    }

    return data;
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
