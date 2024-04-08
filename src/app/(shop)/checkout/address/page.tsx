import { Title } from "@/components";
import { AddressForm } from "./ui/AddressForm";
import { getCountries, getUserAddress } from "@/actions";
import { auth } from "@/auth.config";

export default async function CheckoutAddressPage() {
  const countries = await getCountries();
  const session = await auth();

  if (!session?.user) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <h3 className="text-xl font-bold">You need to be authenticated</h3>
      </div>
    );
  }

  const userAddress = (await getUserAddress(session.user.id)) ?? undefined;
  return (
    <div className="flex flex-col sm:justify-center sm:items-center mb-72 px-10 sm:px-0">
      <div className="w-full  xl:w-[1000px] flex flex-col justify-center text-left">
        <Title
          title="Address"
          subtitle="Delivery address"
          className="gap-4 my-7"
        />
        <AddressForm countries={countries} userStoreAddress={userAddress} />
      </div>
    </div>
  );
}
