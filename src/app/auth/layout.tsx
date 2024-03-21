export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex justify-center min-h-dvh ">
      <div className="w-full max-w-[350px] px-10">{children}</div>
    </main>
  );
}
