import { titleFont } from "@/config/fonts";
import { SignUpForm } from "./ui/SignUpForm";

export default function LoginPage() {
  return (
    <section className="flex flex-col min-h-screen pt-32 sm:pt-52">
      <h1 className={`${titleFont.className} text-4xl mb-5 text-center`}>
        Sign up
      </h1>

      <SignUpForm />
    </section>
  );
}
