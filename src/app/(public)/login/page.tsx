import { FormLogin } from "@/components/form-login"
import Section from "@/components/Section"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login | Template",
};

export default function Login({searchParams}: {searchParams: {callback?:string | null}}) {
  return (
    <Section className="flex items-center justify-center p-4 pt-16">
      <FormLogin callback={searchParams?.callback} />
    </Section>
  )
}
