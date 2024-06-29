"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Copy, Edit, Trash, MoreHorizontal } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Props = {};

export default function CouponCard({}: Props) {
  return (
    <Card className="min-w-[220px]">
      <CardHeader className="flex-row  gap-4 justify-between items-center">
        <CardTitle>Diwali Discount</CardTitle>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Edit size={18} className="mr-2" />
              <span>Edit</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Trash size={18} className="mr-2" />
              <span>Delete</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>

      <CardContent>
        <p className="mb-2 text-sm font-bold text-green-600">
          {"-"}
          {20}
          {"%"}
        </p>

        <div className="mb-2 flex items-center gap-4 dark:bg-slate-900 border bg-slate-200 dark:border-slate-800 border-slate-300 w-max rounded-md pl-2 pr-1 py-1">
          <p className="text-xs font-bold">diwali20</p>
          <Button
            onClick={() => navigator.clipboard.writeText("diwali20")}
            variant="secondary"
            className="w-6 h-6 p-1.5"
            size="icon"
          >
            <Copy size={16} />
          </Button>
        </div>

        <p className="text-sm">
          <span className="text-sm dark:text-neutral-400 text-neutral-500">Expires on: </span>
          25/10/24
        </p>
      </CardContent>
    </Card>
  );
}
