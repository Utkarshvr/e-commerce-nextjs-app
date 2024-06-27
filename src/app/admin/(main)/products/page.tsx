import ProductsTable from "@/components/admin/products/table/ProductsTable";

async function getData(): Promise<any[]> {
  // Fetch data from your API here.
  return [
    {
      name: "T Shirt",
      img: "https://w7.pngwing.com/pngs/826/253/png-transparent-t-shirt-polo-shirt-clothing-sleeve-black-t-shirt-black-crew-neck-t-shirt-tshirt-fashion-cloth-thumbnail.png",
      status: "Available",
      mrp: 999,
      salesPrice: 699,
      stock: 12,
    },
  ];
}

export default async function Page() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-2">Products</h1>
      <ProductsTable data={data} />
    </div>
  );
}
