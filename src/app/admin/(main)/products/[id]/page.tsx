import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
type Props = {};

export default function page({}: Props) {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-2">Edit Product</h1>
      <Tabs defaultValue="general">
        <TabsList className="mb-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="attributes">Attributes</TabsTrigger>
          <TabsTrigger value="options">Options</TabsTrigger>
          <TabsTrigger value="discount">Discount</TabsTrigger>
          <TabsTrigger value="images">Images</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="general">
          <p>Content here</p>{" "}
        </TabsContent>
        <TabsContent value="attributes">
          <p>Content here</p>{" "}
        </TabsContent>
        <TabsContent value="options">
          <p>Content here</p>{" "}
        </TabsContent>
        <TabsContent value="discount">
          <p>Content here</p>{" "}
        </TabsContent>
        <TabsContent value="images">
          <p>Content here</p>{" "}
        </TabsContent>
        <TabsContent value="reviews">
          <p>Content here</p>{" "}
        </TabsContent>
      </Tabs>
    </div>
  );
}
