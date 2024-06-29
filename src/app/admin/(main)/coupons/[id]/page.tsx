"use client";

import FormItemWrapper from "@/components/common/FormItemWrapper";
import { Input } from "@/components/ui/input";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="mx-auto">
      <h1 className="text-3xl font-bold mb-4">Edit Copupon</h1>
      <form
        action={undefined}
        className="flex gap-6"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <div className="flex-[0.5] flex flex-col gap-3">
          <FormItemWrapper label="Coupon Name">
            <Input placeholder="Coupon Name" />
          </FormItemWrapper>
          <FormItemWrapper label="Coupon Code">
            <Input placeholder="Coupon Code" />
          </FormItemWrapper>
          <FormItemWrapper label="Coupon Type">
            <Input placeholder="Coupon Type" />
          </FormItemWrapper>
          <FormItemWrapper label="Discount">
            <Input placeholder="Discount" />
          </FormItemWrapper>
          <FormItemWrapper label="Min Cart Value">
            <Input placeholder="Min Cart Value" />
          </FormItemWrapper>
          <FormItemWrapper label="Max Discount">
            <Input placeholder="Max Discount" />
          </FormItemWrapper>
        </div>
        <div className="flex-[0.5] flex flex-col gap-3">
          <FormItemWrapper label="Start Date">
            <Input placeholder="Start Date" />
          </FormItemWrapper>
          <FormItemWrapper label="End Date">
            <Input placeholder="End Date" />
          </FormItemWrapper>
          <FormItemWrapper label="Free Shipping">
            <Input placeholder="Free Shipping" />
          </FormItemWrapper>
          <FormItemWrapper label="Pre Cusomter Re-used">
            <Input placeholder="Pre Cusomter Re-used" />
          </FormItemWrapper>
          <FormItemWrapper label="Free Shipping">
            <Input placeholder="Free Shipping" />
          </FormItemWrapper>
          <FormItemWrapper label="Min Cart Value">
            <Input placeholder="Min Cart Value" />
          </FormItemWrapper>
          <FormItemWrapper label="Max Discount">
            <Input placeholder="Max Discount" />
          </FormItemWrapper>
        </div>
      </form>
    </div>
  );
}
