"use client";
import { authenticate } from "@/actions";
import Link from "next/link";
import React from "react";
import { useFormState } from "react-dom";

export const LoginForm = () => {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  return (
    <form action={dispatch} className="flex flex-col">
      <p className="flex h-8 ">
        {errorMessage && (
          <span className="text-red-500 text-sm">{errorMessage}</span>
        )}
      </p>
      <label htmlFor="email">Email</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="email"
        name="email"
      />

      <label htmlFor="password">Password</label>
      <input
        name="password"
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="password"
      />

      <button type="submit" className="btn-primary">
        Login
      </button>

      {/* divisor l ine */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">or</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link href="/auth/signup" className="btn-secondary text-center">
        Create a new account
      </Link>
    </form>
  );
};
