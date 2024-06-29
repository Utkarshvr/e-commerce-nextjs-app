import FormItemWrapper from "@/components/common/FormItemWrapper";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

export default function page() {
  return (
    <div className="h-full mx-auto">
      <h1 className="text-3xl font-bold mb-2">Edit Attribute</h1>
      <div className="flex h-full items-center justify-center">
        <Card className="min-w-[400px]">
          <CardHeader>Edit Attribute</CardHeader>

          <CardContent className="flex flex-col gap-4">
            <FormItemWrapper label="Group Name">
              <Input placeholder="Dimensions" />
            </FormItemWrapper>
            <FormItemWrapper label="Dimensions">
              <Input placeholder="Length" />
              <Input placeholder="Width" />
              <Button className="m-auto" size={"icon"}>
                <Plus />
              </Button>
            </FormItemWrapper>
          </CardContent>

          <CardFooter className="flex justify-end">
            <Button>Update</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
