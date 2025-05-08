'use client';

import { useState, useEffect } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Pencil, Loader2 } from 'lucide-react';
import { homestay } from 'generated/prisma';

// Interfaces
interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  role: string;
}

interface Homestay extends homestay {
  admin_users: {
    id: number;
    name: string;
    email: string;
  }
}

interface EditHomestayModalProps {
  homestay: Homestay;
  onSuccess?: () => void;
}

export function EditHomestayModal({ homestay, onSuccess }: EditHomestayModalProps) {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [formData, setFormData] = useState({
    title: homestay.title,
    description: homestay.description || '',
    user_id: homestay.user_id.toString(),
    location: homestay.location,
    address: homestay.address,
    base_price: homestay.base_price ? homestay.base_price.toString() : '',
    max_guests: homestay.max_guests ? homestay.max_guests.toString() : '',
    contact_number: homestay.contact_number || '',
    has_rooms: homestay.has_rooms,
    status: homestay.status
  });
  const [error, setError] = useState('');

  useEffect(() => {
    // Load users when modal opens
    if (open) {
      fetchUsers();
    }
  }, [open]);

  const fetchUsers = async () => {
    setLoadingUsers(true);
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error loading users:', error);
      setError('Error loading users');
    } finally {
      setLoadingUsers(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [name]: target.checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Validate required fields
      if (!formData.title || !formData.user_id || !formData.location || !formData.address) {
        setError('Please complete all required fields');
        setLoading(false);
        return;
      }

      const payload = {
        ...formData,
        id: homestay.id,
        user_id: parseInt(formData.user_id),
        base_price: formData.base_price ? parseFloat(formData.base_price) : null,
        max_guests: formData.max_guests ? parseInt(formData.max_guests) : null
      };

      const response = await fetch(`/api/homestay/${homestay.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error updating homestay');
      }
      
      setOpen(false);
      
      // Notify success if callback provided
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error('Error:', error);
      setError(error instanceof Error ? error.message : 'Error updating homestay');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm">
          <Pencil className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Edit Homestay</SheetTitle>
          <SheetDescription>
            Update the information for this homestay.
          </SheetDescription>
        </SheetHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="user_id">Owner *</Label>
            {loadingUsers ? (
              <div className="flex items-center space-x-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Loading owners...</span>
              </div>
            ) : (
              <select
                id="user_id"
                name="user_id"
                value={formData.user_id}
                onChange={handleInputChange}
                className="w-full rounded-md border border-input bg-background p-2"
                required
              >
                <option value="">Select owner</option>
                {users.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name} ({user.email})
                  </option>
                ))}
              </select>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full min-h-[100px] rounded-md border border-input bg-background p-2"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="w-full rounded-md border border-input bg-background p-2"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="suspended">Suspended</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="location">Location *</Label>
            <Input
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="address">Address *</Label>
            <Input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="base_price">Base Price</Label>
              <Input
                id="base_price"
                name="base_price"
                type="number"
                value={formData.base_price}
                onChange={handleInputChange}
                min="0"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="max_guests">Max Guests</Label>
              <Input
                id="max_guests"
                name="max_guests"
                type="number"
                value={formData.max_guests}
                onChange={handleInputChange}
                min="1"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="contact_number">Contact Number</Label>
            <Input
              id="contact_number"
              name="contact_number"
              value={formData.contact_number}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="has_rooms"
              name="has_rooms"
              checked={formData.has_rooms}
              onChange={(e) => setFormData({...formData, has_rooms: e.target.checked})}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <Label htmlFor="has_rooms">Has rooms</Label>
          </div>
          
          <SheetFooter className="pt-4">
            <SheetClose asChild>
              <Button type="button" variant="outline">Cancel</Button>
            </SheetClose>
            <Button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Updating...
                </>
              ) : 'Update Homestay'}
            </Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
} 