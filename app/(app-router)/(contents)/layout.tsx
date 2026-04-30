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
      <div className="w-full px-4 md:px-8 pb-12 z-10 relative flex-1">
        <main className="w-full max-w-5xl mx-auto rounded-3xl backdrop-blur-xl bg-slate-900/50 border border-white/10 p-6 md:p-10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}
