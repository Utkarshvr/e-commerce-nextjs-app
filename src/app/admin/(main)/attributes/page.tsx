import AttributeCard from "@/components/admin/attributes/card/AttributeCard";

export default function page() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-2">Attributes</h1>
      <div className="flex flex-wrap gap-3">
        {[1, 2, 3, 4, 5].map((e) => (
          <div key={e}>
            <AttributeCard />
          </div>
        ))}
      </div>
    </div>
  );
}
