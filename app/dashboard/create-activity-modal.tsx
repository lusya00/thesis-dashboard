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
import { PlusCircle, Loader2 } from 'lucide-react';

// Interfaces
interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  role: string;
}

interface Homestay {
  id: number;
  title: string;
  location: string;
}

interface CreateActivityModalProps {
  onSuccess?: () => void;
}

export function CreateActivityModal({ onSuccess }: CreateActivityModalProps) {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [homestays, setHomestays] = useState<Homestay[]>([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    short_description: '',
    category: '',
    price: '',
    duration_minutes: '',
    max_participants: '',
    min_participants: '',
    location: '',
    address: '',
    contact_phone: '',
    contact_email: '',
    status: 'active',
    is_featured: false,
    difficulty_level: 'easy',
    age_restriction: '',
    includes: '',
    excludes: '',
    requirements: '',
    cancellation_policy: '',
    meeting_point: '',
    homestay_id: '',
    manager_id: ''
  });
  const [error, setError] = useState('');

  const categories = [
    { value: 'cultural', label: 'Cultural' },
    { value: 'adventure', label: 'Adventure' },
    { value: 'nature', label: 'Nature' },
    { value: 'food_tour', label: 'Food Tour' },
    { value: 'water_sports', label: 'Water Sports' },
    { value: 'mountain_hiking', label: 'Mountain Hiking' },
    { value: 'city_tour', label: 'City Tour' },
    { value: 'religious', label: 'Religious' },
    { value: 'art_craft', label: 'Art & Craft' },
    { value: 'traditional_dance', label: 'Traditional Dance' },
    { value: 'cooking_class', label: 'Cooking Class' },
    { value: 'photography', label: 'Photography' },
    { value: 'wellness', label: 'Wellness' },
    { value: 'transportation', label: 'Transportation' },
    { value: 'shopping', label: 'Shopping' },
    { value: 'nightlife', label: 'Nightlife' },
    { value: 'educational', label: 'Educational' },
    { value: 'family_friendly', label: 'Family Friendly' },
    { value: 'romantic', label: 'Romantic' },
    { value: 'extreme_sports', label: 'Extreme Sports' }
  ];

  const difficultyLevels = [
    { value: 'easy', label: 'Easy' },
    { value: 'moderate', label: 'Moderate' },
    { value: 'challenging', label: 'Challenging' },
    { value: 'expert', label: 'Expert' }
  ];

  useEffect(() => {
    if (open) {
      fetchUsers();
      fetchHomestays();
    }
  }, [open]);

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data.users || []);
    } catch (error) {
      console.error('Error loading users:', error);
    }
  };

  const fetchHomestays = async () => {
    try {
      const response = await fetch('/api/homestay');
      const data = await response.json();
      setHomestays(data);
    } catch (error) {
      console.error('Error loading homestays:', error);
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
      // Validar campos requeridos
      if (!formData.title || !formData.category || !formData.price || !formData.max_participants || !formData.location) {
        setError('Please complete all required fields');
        setLoading(false);
        return;
      }

      const payload = {
        ...formData,
        price: parseFloat(formData.price),
        duration_minutes: formData.duration_minutes ? parseInt(formData.duration_minutes) : null,
        max_participants: parseInt(formData.max_participants),
        min_participants: formData.min_participants ? parseInt(formData.min_participants) : 1,
        homestay_id: formData.homestay_id ? parseInt(formData.homestay_id) : null,
        manager_id: formData.manager_id ? parseInt(formData.manager_id) : null
      };

      const response = await fetch('/api/activities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error creating activity');
      }

      // Resetear formulario y cerrar modal
      setFormData({
        title: '',
        description: '',
        short_description: '',
        category: '',
        price: '',
        duration_minutes: '',
        max_participants: '',
        min_participants: '',
        location: '',
        address: '',
        contact_phone: '',
        contact_email: '',
        status: 'active',
        is_featured: false,
        difficulty_level: 'easy',
        age_restriction: '',
        includes: '',
        excludes: '',
        requirements: '',
        cancellation_policy: '',
        meeting_point: '',
        homestay_id: '',
        manager_id: ''
      });
      setOpen(false);
      onSuccess?.();
    } catch (error) {
      console.error('Error:', error);
      setError(error instanceof Error ? error.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="gap-1">
          <PlusCircle className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only">Add Activity</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-[540px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Create New Activity</SheetTitle>
          <SheetDescription>
            Fill in the details to create a new activity
          </SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}
          
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                name="title"
                placeholder="Activity name"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="">Select a category</option>
                {categories.map(cat => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price">Price (IDR) *</Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  placeholder="150000"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration_minutes">Duration (minutes)</Label>
                <Input
                  id="duration_minutes"
                  name="duration_minutes"
                  type="number"
                  placeholder="120"
                  value={formData.duration_minutes}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="max_participants">Max Participants *</Label>
                <Input
                  id="max_participants"
                  name="max_participants"
                  type="number"
                  placeholder="10"
                  value={formData.max_participants}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="min_participants">Min Participants</Label>
                <Input
                  id="min_participants"
                  name="min_participants"
                  type="number"
                  placeholder="1"
                  value={formData.min_participants}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location *</Label>
              <Input
                id="location"
                name="location"
                placeholder="Ubud, Bali"
                value={formData.location}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                name="address"
                placeholder="Complete address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="difficulty_level">Difficulty Level</Label>
              <select
                id="difficulty_level"
                name="difficulty_level"
                value={formData.difficulty_level}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                {difficultyLevels.map(level => (
                  <option key={level.value} value={level.value}>{level.label}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="homestay_id">Associated Homestay</Label>
              <select
                id="homestay_id"
                name="homestay_id"
                value={formData.homestay_id}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select a homestay</option>
                {homestays.map(homestay => (
                  <option key={homestay.id} value={homestay.id}>{homestay.title}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="manager_id">Manager</Label>
              <select
                id="manager_id"
                name="manager_id"
                value={formData.manager_id}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select a manager</option>
                {users.map(user => (
                  <option key={user.id} value={user.id}>{user.name}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="short_description">Short Description</Label>
              <textarea
                id="short_description"
                name="short_description"
                rows={3}
                placeholder="Brief description of the activity"
                value={formData.short_description}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <textarea
                id="description"
                name="description"
                rows={4}
                placeholder="Detailed description of the activity"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact_phone">Contact Phone</Label>
              <Input
                id="contact_phone"
                name="contact_phone"
                placeholder="+62 812 3456 7890"
                value={formData.contact_phone}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact_email">Contact Email</Label>
              <Input
                id="contact_email"
                name="contact_email"
                type="email"
                placeholder="contact@activity.com"
                value={formData.contact_email}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="meeting_point">Meeting Point</Label>
              <Input
                id="meeting_point"
                name="meeting_point"
                placeholder="Meeting point with participants"
                value={formData.meeting_point}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="age_restriction">Age Restriction</Label>
              <Input
                id="age_restriction"
                name="age_restriction"
                placeholder="E.g: 18+ or 12-65 years"
                value={formData.age_restriction}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="includes">Includes</Label>
              <textarea
                id="includes"
                name="includes"
                rows={3}
                placeholder="What the activity includes"
                value={formData.includes}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="excludes">Excludes</Label>
              <textarea
                id="excludes"
                name="excludes"
                rows={3}
                placeholder="What the activity excludes"
                value={formData.excludes}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="requirements">Requirements</Label>
              <textarea
                id="requirements"
                name="requirements"
                rows={3}
                placeholder="Requirements to participate"
                value={formData.requirements}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cancellation_policy">Cancellation Policy</Label>
              <textarea
                id="cancellation_policy"
                name="cancellation_policy"
                rows={3}
                placeholder="Cancellation policy"
                value={formData.cancellation_policy}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                id="is_featured"
                name="is_featured"
                type="checkbox"
                checked={formData.is_featured}
                onChange={handleInputChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <Label htmlFor="is_featured">Featured Activity</Label>
            </div>
          </div>

          <SheetFooter>
            <SheetClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </SheetClose>
            <Button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating...
                </>
              ) : (
                'Create Activity'
              )}
            </Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
} 