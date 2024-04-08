"use server";
import prisma from "@/lib/prisma";

export const deleteUserAddress = async (userId: string) => {
  try {
    await prisma.address.delete({
      where: {
        userId,
      },
    });
    return {
      ok: true,
      message: "Address deleted",
    };
  } catch (error) {
    console.error(error);
    return {
      ok: false,
      message: "Error deleting address",
    };
  }
};
