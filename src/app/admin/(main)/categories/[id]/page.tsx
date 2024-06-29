import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import EditAttributeCategoryForm from "@/components/admin/categories/edit-category/EditAttributeCategoryForm";
import EditFiltersCategoryForm from "@/components/admin/categories/edit-category/EditFiltersCategoryForm";
import EditGeneralCategoryForm from "@/components/admin/categories/edit-category/EditGeneralCategoryForm";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="mx-auto">
      <h1 className="text-3xl font-bold mb-4">Edit Category</h1>

      <Tabs defaultValue="general">
        <TabsList className="mb-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="attribute-groups">Attribute Groups</TabsTrigger>
          <TabsTrigger value="filters">Filters</TabsTrigger>
        </TabsList>
        <TabsContent value="general">
          <EditGeneralCategoryForm />
        </TabsContent>
        <TabsContent value="attribute-groups">
          <EditAttributeCategoryForm />
        </TabsContent>
        <TabsContent value="filters">
          <EditFiltersCategoryForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}
