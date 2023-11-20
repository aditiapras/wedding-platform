import * as React from "react";
import { Html } from "@react-email/html";
import { Button } from "@react-email/button";
import { Tailwind } from "@react-email/tailwind";
import { Text } from "@react-email/text";
import { Container } from "@react-email/container";
import { Heading } from "@react-email/heading";
import { Hr } from "@react-email/hr";
import { Flower } from "lucide-react";

export default function EmailTemplate({ firstname, token }) {
  return (
    <Html>
      <Tailwind>
        <Container className="px-5 flex flex-col gap-3">
          <Heading>Account Verification</Heading>
        </Container>
        <Container className="p-5 flex flex-col gap-5 border rounded-md border-zinc-400 shadow-sm">
          <Text>
            Hello <strong>{firstname}</strong>,
          </Text>
          <Text>
            Welcome to lettre.id. Thank you for signing up at lettre.id, one
            more step before you can start using your account.
          </Text>
          <Text className="text-zinc-400 text-sm">
            Click the button below to verify your account.
          </Text>

          <Container className="flex w-full items-center justify-center mx-auto">
            <Button
              href={`http://dashboard.localhost:3000/account-verification?token=${token}`}
              className="px-4 py-2 rounded-md text-sm font-medium bg-zinc-950 text-white"
            >
              Verify account
            </Button>
          </Container>
          {/* <Hr className="border-zinc-400 text-zinc-400 mt-10" /> */}
        </Container>
        <Container className="p-5 flex flex-col gap-5">
          <Text className="text-xs text-zinc-400">
            Copyright &copy; 2023, <a href="">Lettre.id</a>
          </Text>
        </Container>
      </Tailwind>
    </Html>
  );
}
