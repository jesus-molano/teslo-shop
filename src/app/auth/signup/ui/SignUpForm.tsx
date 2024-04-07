"use client";
import Link from "next/link";
import React from "react";
import { Form, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodType, z } from "zod";
import FormField from "@/components/Form/FormField";

type FormInputs = {
  name: string;
  email: string;
  password: string;
};

const UserSchema: ZodType<FormInputs> = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(UserSchema),
  });

  const onSubmit = async (data: FormInputs) => {
    const { name, email, password } = data;
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <p className="flex h-8 items-center w-full justify-end "></p>
      <FormField
        type="text"
        name="name"
        register={register}
        error={errors.name}
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        label="Name"
      />

      <FormField
        type="email"
        name="email"
        register={register}
        error={errors.email}
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        label="Email"
      />

      <FormField
        type="password"
        name="password"
        register={register}
        error={errors.password}
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        label="Password"
      />

      <button className="btn-primary">Create account</button>

      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">or</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link href="/auth/login" className="btn-secondary text-center">
        Sign in with an existing account
      </Link>
    </form>
  );
};
