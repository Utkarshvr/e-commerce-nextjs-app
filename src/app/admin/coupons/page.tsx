import CouponCard from "@/components/admin/coupons/card/CouponCard";

export default function page() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-2">Coupons</h1>
      <div className="flex flex-wrap gap-3">
        {[1].map((e) => (
          <div key={e}>
            <CouponCard />
          </div>
        ))}
      </div>
    </div>
  );
}
