import EmailTemplate from "@/components/emails/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { email, name, token } = await req.json();
  try {
    const data = await resend.emails.send({
      from: "Lettre.id <admin@aditiapras.dev>",
      subject: "Account Verification",
      to: email,
      react: EmailTemplate({
        firstname: name,
        token: token,
      }),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
