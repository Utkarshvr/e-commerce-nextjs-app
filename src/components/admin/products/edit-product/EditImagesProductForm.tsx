import { Button } from "@/components/ui/button";
import { Download, MinusCircle, PlusCircle, Upload } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

export default function EditImagesProductForm({}: Props) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h4 className="text-sm">Select Group</h4>
        <div className="max-w-[450px] flex items-center gap-3">
          <Button variant={"secondary"} size={"lg"}>
            <Upload className="mr-2" />
            Select Image/Video
          </Button>
          <Button variant={"secondary"} size={"sm"}>
            <Upload size={18} className="mr-2" />
            Sort Order
          </Button>
          <Button variant={"secondary"} size={"sm"}>
            <PlusCircle size={18} className="mr-2" />
            Upload
          </Button>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex flex-col">
          <div className="flex items-center justify-center rounded-tl-md rounded-tr-md p-0.5 dark:bg-slate-900 bg-slate-200 ">
            <Image
              alt="CLOTH"
              quality={100}
              src={"/cloth.png"}
              width={100}
              height={70}
            />
          </div>
          <div className="flex gap-4 rounded-bl-md rounded-br-md p-0.5 dark:bg-slate-800 bg-slate-300  justify-between items-center">
            <p className="text-sm">Sort Order: 1</p>
            <div className="flex gap-1 ">
              <Download color="#1089ff" size={18} />
              <MinusCircle color="#ff4f30" size={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
