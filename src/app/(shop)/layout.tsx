import { Footer, MaxWidthWrapper, Sidebar, TopMenu } from "@/components";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen ">
      <TopMenu />
      <Sidebar />
      <MaxWidthWrapper className="  px-0 md:px-10">{children}</MaxWidthWrapper>

      <Footer />
    </main>
  );
}
