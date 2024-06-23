import AdminSidebar from "@/components/admin/AdminSidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Panel",
  description: "Created by NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Admin Navbar */}
      {/* <AdminNavbar /> */}

      {/* Admin Sidebar */}
      <AdminSidebar />

      {/* Admin Content Layout */}
      {/* <AdminContentLayout>{children}</AdminContentLayout> */}
      <main className="p-2 w-full">{children}</main>
    </>
  );
}
