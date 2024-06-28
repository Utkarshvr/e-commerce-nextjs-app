import FormItemWrapper from "@/components/common/FormItemWrapper";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React from "react";

type Props = {};

export default function EditDiscountProductForm({}: Props) {
  return (
    <Card className="min-w-96">
      <CardHeader>Product Discount</CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <FormItemWrapper label="Offer Price">
            <Input placeholder="130" />
          </FormItemWrapper>
          <FormItemWrapper label="Offer Price">
            <Input placeholder="Select Date" type="date" />
          </FormItemWrapper>
          <FormItemWrapper label="Offer End Time">
            <Input placeholder="Select Date" type="date" />
          </FormItemWrapper>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="m-auto">Set Discount</Button>
      </CardFooter>
    </Card>
  );
}
