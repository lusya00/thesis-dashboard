import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { HomestaysTable } from './homestays-table';

export default async function HomestaysPage(
  props: {
    searchParams: Promise<{ q: string; offset: string }>;
  }
) {
  const newOffset = 0;

  return (
    <Tabs defaultValue="all">
      <TabsContent value="all">
        <HomestaysTable
          offset={newOffset ?? 0}
        />
      </TabsContent>
    </Tabs>
  );
} 