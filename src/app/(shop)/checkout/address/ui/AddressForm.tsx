"use client";
import FormField from "@/components/Form/FormField";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ZodType, z } from "zod";
import { Address, Country } from "@/interfaces";
import { useAddressStore } from "@/store";
import { deleteUserAddress, setUserAddress } from "@/actions";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface FormInputs {
  firstName: string;
  lastName: string;
  address: string;
  address2?: string;
  postalCode: string;
  city: string;
  country: string;
  phone: string;
  rememberAddress: boolean;
}

const AddressSchema: ZodType<FormInputs> = z.object({
  firstName: z.string().min(2, { message: "First name is required" }),
  lastName: z.string().min(2, { message: "Last name is required" }),
  address: z
    .string()
    .min(3, { message: "Address must be at least 3 characters" }),
  address2: z.string().optional(),
  postalCode: z.string().min(3, { message: "Postal code is required" }),
  city: z.string().min(3, { message: "City is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  phone: z.string().min(3, { message: "Phone number is not valid" }),
  rememberAddress: z.boolean(),
});

interface AddressFormProps {
  countries: Country[];
  userStoreAddress?: Partial<Address>;
}

export const AddressForm = ({
  countries,
  userStoreAddress = {},
}: AddressFormProps) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isValid, errors },
  } = useForm<FormInputs>({
    defaultValues: {
      ...(userStoreAddress as any),
      rememberAddress: false,
    },
    resolver: zodResolver(AddressSchema),
  });

  const router = useRouter();
  const { data: session } = useSession({
    required: true,
  });
  const address = useAddressStore((state) => state.address);
  const setAddress = useAddressStore((state) => state.setAddress);

  useEffect(() => {
    if (address.firstName) {
      reset(address);
    }
  }, [address]);

  const onSubmit = async (data: FormInputs) => {
    setAddress(data);
    const { rememberAddress, ...restAddress } = data;
    if (data.rememberAddress) {
      await setUserAddress(restAddress, session!.user.id!);
    } else {
      await deleteUserAddress(session!.user.id!);
    }
    router.push("/checkout");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 gap-2 sm:gap-5 sm:grid-cols-2"
    >
      <div className="flex flex-col mb-2">
        <FormField
          name="firstName"
          register={register}
          autoFocus
          error={errors.firstName}
          type="text"
          label="Firstname"
          className="p-2 border rounded-md bg-gray-200"
          required
        />
      </div>

      <div className="flex flex-col mb-2">
        <FormField
          name="lastName"
          register={register}
          error={errors.lastName}
          type="text"
          label="Lastname"
          className="p-2 border rounded-md bg-gray-200"
          required
        />
      </div>

      <div className="flex flex-col mb-2">
        <FormField
          name="address"
          register={register}
          error={errors.address}
          type="text"
          label="Address"
          className="p-2 border rounded-md bg-gray-200"
          required
        />
      </div>

      <div className="flex flex-col mb-2">
        <FormField
          name="address2"
          register={register}
          type="text"
          label="Address 2 (optional)"
          className="p-2 border rounded-md bg-gray-200"
          error={errors.address2}
        />
      </div>

      <div className="flex flex-col mb-2">
        <FormField
          name="postalCode"
          register={register}
          error={errors.postalCode}
          type="text"
          label="Postal Code"
          className="p-2 border rounded-md bg-gray-200"
          required
        />
      </div>

      <div className="flex flex-col mb-2">
        <FormField
          name="city"
          register={register}
          error={errors.city}
          type="text"
          label="City"
          className="p-2 border rounded-md bg-gray-200"
          required
        />
      </div>

      <div className="flex flex-col mb-2">
        <FormField
          name="country"
          register={register}
          error={errors.country}
          type="select"
          label="Country"
          options={countries}
          className="p-2 border rounded-md bg-gray-200"
          required
        />
      </div>

      <div className="flex flex-col mb-2">
        <FormField
          name="phone"
          register={register}
          error={errors.phone}
          type="text"
          label="Phone"
          className="p-2 border rounded-md bg-gray-200"
          required
        />
      </div>

      <div className="inline-flex items-center">
        <label
          className="relative flex cursor-pointer items-center rounded-full p-3"
          htmlFor="rememberAddress"
        >
          <input
            type="checkbox"
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-gray-600 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-rose-gray-500 before:opacity-0 before:transition-opacity checked:border-rose-500 checked:bg-rose-500 checked:before:bg-rose-500 hover:before:opacity-10"
            id="rememberAddress"
            {...register("rememberAddress")}
          />
          <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </label>
        <span>Remember address?</span>
      </div>

      <div className="flex flex-col mb-2 sm:mt-10">
        <button
          type="submit"
          className={clsx({
            "btn-primary": isValid,
            "btn-disable": !isValid,
          })}
        >
          Continue
        </button>
      </div>
    </form>
  );
};
