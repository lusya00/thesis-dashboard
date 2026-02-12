'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import PromotionForm from './promotionform';
import { PromotionsTable } from './promotiontable';
import { createPromotion } from './promotionaction';

export default function PromotionPage() {
  const [openModal, setOpenModal] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleCreate = async (data: any) => {
    try {
      await createPromotion(data);
      setOpenModal(false);
      setRefreshKey((prev) => prev + 1);
    } catch (error) {
      console.error('Failed to create promotion:', error);
    }
  };

  return (
    <div className="p-4 md:p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Promotions</h2>
          <p className="text-muted-foreground">
            Manage your promotions and their details.
          </p>
        </div>

        <Button
          className="bg-blue-400 hover:bg-blue-500"
          onClick={() => setOpenModal(true)}
        >
          <Plus className="mr-2 h-4 w-4" /> Add Promotion
        </Button>
      </div>

      <Card className="p-4">
        <PromotionsTable promotionsPerPage={10} refreshKey={refreshKey} />
      </Card>

      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Add Promotion</DialogTitle>
          </DialogHeader>
          <PromotionForm onSubmit={handleCreate} onCancel={() => setOpenModal(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
