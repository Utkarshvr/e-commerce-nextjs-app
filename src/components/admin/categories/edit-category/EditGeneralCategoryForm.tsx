import { ReactNode } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

type Props = {};

function Wrapper({ children }: { children: ReactNode }) {
  return (
    <div className="grid w-full items-center gap-1.5">{children}</div>
  );
}

export default function EditGeneralCategoryForm({}: Props) {
  return (
    <div className="flex gap-[36px]">
      <div className="flex flex-[0.5] flex-col gap-3">
        <Wrapper>
          <Label>Category Name</Label>
          <Input  type="text" placeholder="T-Shirt" />
        </Wrapper>
        <Wrapper>
          <Label>Parent Category</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Parent Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="volvo">Volvo</SelectItem>
              <SelectItem value="toyata">Toyata</SelectItem>
            </SelectContent>
          </Select>
        </Wrapper>
        <Wrapper>
          <Label>Meta Tag Title</Label>
          <Input type="text" placeholder="T-Shirt" />
        </Wrapper>
        <Wrapper>
          <Label>Meta Tag Name</Label>
          <Input type="text" placeholder="T-Shirt" />
        </Wrapper>
      </div>
      <div className="flex flex-[0.5] flex-col gap-3">
        <Wrapper>
          <Label>Meta Tag Description</Label>
          <Textarea placeholder="Some description here." />
        </Wrapper>
        <Wrapper>
          <Label>Category description</Label>
          <Textarea placeholder="Some description here." />
        </Wrapper>
        <Wrapper>
          <Label>Category Image</Label>
          <Textarea placeholder="Some description here." />
        </Wrapper>
      </div>
    </div>
  );
}
