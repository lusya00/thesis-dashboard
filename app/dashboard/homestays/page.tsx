import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { HomestaysTable } from './homestays-table';

export default async function HomestaysPage() {
  return (
    <Tabs defaultValue="all">
      <TabsContent value="all">
        <HomestaysTable />
      </TabsContent>
    </Tabs>
  );
} 