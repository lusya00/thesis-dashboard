import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ActivitiesTable } from './activities-table';

export default async function ActivitiesPage(
  props: {
    searchParams: Promise<{ q: string; offset: string }>;
  }
) {
  const searchParams = await props.searchParams;
  const newOffset = 0;

  return (
    <Tabs defaultValue="all">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="inactive">Inactive</TabsTrigger>
          <TabsTrigger value="draft" className="hidden sm:flex">
            Draft
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="all">
        <ActivitiesTable
          offset={newOffset ?? 0}
        />
      </TabsContent>
      <TabsContent value="active">
        <ActivitiesTable
          offset={newOffset ?? 0}
          status="active"
        />
      </TabsContent>
      <TabsContent value="inactive">
        <ActivitiesTable
          offset={newOffset ?? 0}
          status="inactive"
        />
      </TabsContent>
      <TabsContent value="draft">
        <ActivitiesTable
          offset={newOffset ?? 0}
          status="draft"
        />
      </TabsContent>
    </Tabs>
  );
} 