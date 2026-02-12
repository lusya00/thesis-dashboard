'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

interface PromotionFormProps {
  initialData?: any;
  onSubmit: (data: any) => void;
  onCancel?: () => void;
  loading?: boolean;
}

export default function PromotionForm({
  initialData,
  onSubmit,
  onCancel,
  loading,
}: PromotionFormProps) {
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    description: initialData?.description || '',
    image_url: initialData?.image_url || '',
    startDate: initialData?.startDate || '',
    endDate: initialData?.endDate || '',
    status: initialData?.status || 'active',
  });

  const [preview, setPreview] = useState<string | null>(formData.image_url || null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setPreview(previewURL);
      setFormData({ ...formData, image_url: previewURL });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <Label>Title</Label>
        <Input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Promotion title"
          required
        />
      </div>

      <div>
        <Label>Description</Label>
        <Input
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Short description"
        />
      </div>

      <div>
        <Label>Upload Banner</Label>
        <Input type="file" accept="image/*" onChange={handleImageUpload} />
        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="w-full h-32 object-cover mt-2 rounded-md border"
          />
        )}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label>Start Date</Label>
          <Input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label>End Date</Label>
          <Input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex justify-end gap-2 pt-2">
        {onCancel && (
          <Button variant="outline" type="button" onClick={onCancel}>
            Cancel
          </Button>
        )}
        <Button type="submit" disabled={loading}>
          {loading ? 'Saving...' : 'Save'}
        </Button>
      </div>
    </form>
  );
}
