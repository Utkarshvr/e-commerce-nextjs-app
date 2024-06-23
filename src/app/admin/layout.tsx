import type { Metadata } from "next";
// import AdminNavbar from "@/components/admin/AdminNavbar/AdminNavbar";
// import AdminContentLayout from "@/components/admin/layouts/AdminContentLayout";

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

      {/* Admin Content Layout */}
      {/* <AdminContentLayout>{children}</AdminContentLayout> */}

      {children}
    </>
  );
}
