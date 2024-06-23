import CategoriesTable from "@/components/admin/categories/CategoriesTable/CategoriesTable";

async function getData(): Promise<any[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "443ed52f",
      amount: 134,
      status: "success",
      email: "utkarshv@gmail.com",
    },
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-2">Categories</h1>
      <CategoriesTable />
    </div>
  );
}
