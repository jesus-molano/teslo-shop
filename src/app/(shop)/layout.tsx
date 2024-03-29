import { Footer, Sidebar, TopMenu } from "@/components";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-dvh flex flex-col">
      <TopMenu />
      <Sidebar />
      <div className="flex flex-col flex-1 h-full px-0 sm:px-10">
        {children}
      </div>
      <Footer />
    </main>
  );
}
