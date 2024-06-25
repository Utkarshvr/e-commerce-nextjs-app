import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Edit, Trash } from "lucide-react";

type Props = {};

export default function AttributeCard({}: Props) {
  return (
    <Card className="min-w-[250px]">
      <CardHeader>
        <CardTitle>T-Shirt</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Size</p>
        <p>Colour</p>
        <p>Sleeve Type</p>
        <p>Collar Type</p>
        <p>Material</p>
      </CardContent>
      <CardFooter className="items-center justify-center">
        <div className="flex gap-1">
          <Button variant="ghost" size="icon">
            <Edit size={18} />
          </Button>
          <Button variant="ghost" size="icon">
            <Trash size={18} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
