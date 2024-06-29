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
      {/* Admin Sidebar */}
      <AdminSidebar />

      {/* Admin Content */}
      <main className="container overflow-x-scroll py-10 w-full">{children}</main>
    </>
  );
}
