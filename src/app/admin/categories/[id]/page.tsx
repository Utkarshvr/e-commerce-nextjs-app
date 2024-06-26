import EditGeneralCategoryForm from "@/components/admin/categories/edit-category/EditGeneralCategoryForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-2">Edit Category</h1>

      <Tabs defaultValue="general">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="attribute-groups">Attribute Groups</TabsTrigger>
          <TabsTrigger value="filters">Filters</TabsTrigger>
        </TabsList>
        <TabsContent value="general">
          <EditGeneralCategoryForm />
        </TabsContent>
        <TabsContent value="attribute-groups">
          Change your password here.
        </TabsContent>
        <TabsContent value="filters">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}
