import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";
import NavigationBar from "../../components/ui/NavigationBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header title={process.env.TITLE || ""} heroImage={""} />
      <NavigationBar />
      {children}
      <Footer />
    </>
  );
}
