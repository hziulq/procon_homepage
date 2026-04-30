import Header from "@/app/components/ui/Header";
import Footer from "@/app/components/ui/Footer";
import NavigationBar from "@/app/components/ui/NavigationBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header title={process.env.TITLE || ""} />
      <NavigationBar />
      <main className="w-full md:max-w-7xl md:mx-auto rounded-xl bg-black/40 p-6 shadow-sm">
        {children}
      </main>
      <Footer />
    </>
  );
}
