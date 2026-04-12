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
      {children}
      <Footer />
    </>
  );
}
