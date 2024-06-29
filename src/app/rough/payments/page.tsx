import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return new Array(50).fill(null).map(() => ({
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  }));
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="mx-auto">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
