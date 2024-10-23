import Menu from "@/app/(components)/Menu";
import Navbar from "@/app/(components)/Navbar";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      {/* LEFT - Sidebar */}
      <Menu />
      <main className="flex w-full flex-col bg-gray-50 dark:bg-dark-bg md:pl-64">
        {/* RIGHT */}
        <Navbar />
        {children}
      </main>
    </div>
  );
}