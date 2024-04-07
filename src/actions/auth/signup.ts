"use server";

import prisma from "@/lib/prisma";
import bcryptjs from "bcryptjs";

export const signup = async (name: string, email: string, password: string) => {
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email: email.toLowerCase(),
        password: bcryptjs.hashSync(password, 10),
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    return {
      ok: true,
      user,
      message: "User created successfully.",
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "Something went wrong creating the user.",
    };
  }
};
