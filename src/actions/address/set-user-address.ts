"use server";

import { Address } from "@/interfaces";
import prisma from "@/lib/prisma";

export const setUserAddress = async (address: Address, userId: string) => {
  try {
    const newAddress = await createOrReplaceAddress(address, userId);
    return {
      ok: true,
      address: newAddress,
    };
  } catch (error) {
    console.error(error);
    return {
      ok: false,
      message: "Error setting address",
    };
  }
};
const createOrReplaceAddress = async (address: Address, userId: string) => {
  try {
    const storedAddress = await prisma.address.findUnique({
      where: {
        userId,
      },
    });

    const addressToSave = {
      firstName: address.firstName,
      lastName: address.lastName,
      address: address.address,
      address2: address.address2,
      postalCode: address.postalCode,
      city: address.city,
      phone: address.phone,
      countryId: address.country,
      userId,
    };

    if (!storedAddress) {
      const newAddress = await prisma.address.create({
        data: addressToSave,
      });
      return newAddress;
    }
    const updatedAddress = await prisma.address.update({
      where: {
        userId,
      },
      data: addressToSave,
    });
    return updatedAddress;
  } catch (error) {
    console.error(error);
    throw new Error("Error creating or replacing address");
  }
};
