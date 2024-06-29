"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Minus, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";

type Props = {};

export default function EditAttributesProductForm({}: Props) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h4 className="text-sm">Select Group</h4>
        <div className="max-w-[450px] flex gap-3">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Group" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="volvo">Volvo</SelectItem>
              <SelectItem value="toyata">Toyata</SelectItem>
            </SelectContent>
          </Select>

          <Button variant={"secondary"} size={"sm"}>
            <Plus />
            Add
          </Button>
        </div>
      </div>
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="dimensions">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <Button className="w-7 h-7" size={"icon"} variant={"destructive"}>
                <Minus />
              </Button>
              <p className="text-sm font-bold">Dimensions</p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-2 flex flex-col gap-3">
            <Table className="rounded-md border max-w-96">
              <TableHeader>
                <TableRow>
                  <TableHead>Attribute Name</TableHead>
                  <TableHead>Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { attribute_name: "Length", value: "" },
                  { attribute_name: "Width", value: "" },
                  { attribute_name: "Height", value: "" },
                ].map((e) => (
                  <TableRow key={e.attribute_name}>
                    <TableCell className="font-medium">
                      {e.attribute_name}
                    </TableCell>
                    <TableCell className="font-medium">
                      <Input placeholder="222" value={e.value} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
