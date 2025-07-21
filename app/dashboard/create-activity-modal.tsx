'use client';

import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlusCircle, Loader2, Settings, Calendar, DollarSign, Image as ImageIcon } from 'lucide-react';

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
  const [selectedTab, setSelectedTab] = useState('general');
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
    { value: 'cultural', label: 'Cultural', icon: '🏛️' },
    { value: 'adventure', label: 'Adventure', icon: '🏔️' },
    { value: 'nature', label: 'Nature', icon: '🌿' },
    { value: 'food_tour', label: 'Food Tour', icon: '🍽️' },
    { value: 'water_sports', label: 'Water Sports', icon: '🏄‍♂️' },
    { value: 'mountain_hiking', label: 'Mountain Hiking', icon: '⛰️' },
    { value: 'city_tour', label: 'City Tour', icon: '🏙️' },
    { value: 'religious', label: 'Religious', icon: '🙏' },
    { value: 'art_craft', label: 'Art & Craft', icon: '🎨' },
    { value: 'traditional_dance', label: 'Traditional Dance', icon: '💃' },
    { value: 'cooking_class', label: 'Cooking Class', icon: '👨‍🍳' },
    { value: 'photography', label: 'Photography', icon: '📸' },
    { value: 'wellness', label: 'Wellness', icon: '🧘‍♀️' },
    { value: 'transportation', label: 'Transportation', icon: '🚗' },
    { value: 'shopping', label: 'Shopping', icon: '🛍️' },
    { value: 'nightlife', label: 'Nightlife', icon: '🌙' },
    { value: 'educational', label: 'Educational', icon: '📚' },
    { value: 'family_friendly', label: 'Family Friendly', icon: '👨‍👩‍👧‍👦' },
    { value: 'romantic', label: 'Romantic', icon: '💕' },
    { value: 'extreme_sports', label: 'Extreme Sports', icon: '🏂' }
  ];

  const difficultyLevels = [
    { value: 'easy', label: 'Easy', color: 'bg-green-100 text-green-800' },
    { value: 'moderate', label: 'Moderate', color: 'bg-yellow-100 text-yellow-800' },
    { value: 'challenging', label: 'Challenging', color: 'bg-orange-100 text-orange-800' },
    { value: 'expert', label: 'Expert', color: 'bg-red-100 text-red-800' }
  ];

  const statusOptions = [
    { value: 'active', label: 'Active', color: 'bg-green-500' },
    { value: 'inactive', label: 'Inactive', color: 'bg-red-500' },
    { value: 'draft', label: 'Draft', color: 'bg-yellow-500' },
    { value: 'suspended', label: 'Suspended', color: 'bg-gray-500' }
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
      setHomestays(data.homestays || []);
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-1">
          <PlusCircle className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only">Add Activity</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-[95vw] max-h-[95vh] overflow-y-auto sm:w-[90vw] md:w-[85vw] lg:w-[80vw] xl:w-[75vw]">
        <DialogHeader className="pb-4 sm:pb-6">
          <DialogTitle>Create New Activity</DialogTitle>
          <DialogDescription>
            Fill in the details to create a new activity
          </DialogDescription>
        </DialogHeader>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 gap-1">
            <TabsTrigger value="general" className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm">
              <Settings className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>General</span>
            </TabsTrigger>
            <TabsTrigger value="details" className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm">
              <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>Details</span>
            </TabsTrigger>
            <TabsTrigger value="pricing" className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm">
              <DollarSign className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>Pricing</span>
            </TabsTrigger>
            <TabsTrigger value="images" className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm">
              <ImageIcon className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>Images</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-4 sm:space-y-6">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {/* Basic Information */}
                <Card>
                  <CardHeader className="pb-3 sm:pb-6">
                    <CardTitle className="text-base sm:text-lg">Basic Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4">
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
                      <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value as any})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map(cat => (
                            <SelectItem key={cat.value} value={cat.value}>
                              <div className="flex items-center space-x-2">
                                <span>{cat.icon}</span>
                                <span>{cat.label}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="status">Status</Label>
                      <Select value={formData.status} onValueChange={(value) => setFormData({...formData, status: value as any})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          {statusOptions.map(option => (
                            <SelectItem key={option.value} value={option.value}>
                              <div className="flex items-center space-x-2">
                                <div className={`w-2 h-2 rounded-full ${option.color}`}></div>
                                <span>{option.label}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="difficulty_level">Difficulty Level</Label>
                      <Select value={formData.difficulty_level} onValueChange={(value) => setFormData({...formData, difficulty_level: value as any})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select difficulty" />
                        </SelectTrigger>
                        <SelectContent>
                          {difficultyLevels.map(level => (
                            <SelectItem key={level.value} value={level.value}>
                              <div className="flex items-center space-x-2">
                                <Badge variant="outline" className={level.color}>
                                  {level.label}
                                </Badge>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                {/* Location & Contact */}
                <Card>
                  <CardHeader className="pb-3 sm:pb-6">
                    <CardTitle className="text-base sm:text-lg">Location & Contact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4">
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
                  </CardContent>
                </Card>
              </div>

              {/* Assignments */}
              <Card className="mt-4 sm:mt-6">
                <CardHeader className="pb-3 sm:pb-6">
                  <CardTitle className="text-base sm:text-lg">Assignments</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="homestay_id">Associated Homestay</Label>
                      <Select value={formData.homestay_id} onValueChange={(value) => setFormData({...formData, homestay_id: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a homestay" />
                        </SelectTrigger>
                        <SelectContent>
                          {homestays.map(homestay => (
                            <SelectItem key={homestay.id} value={homestay.id.toString()}>
                              {homestay.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="manager_id">Manager</Label>
                      <Select value={formData.manager_id} onValueChange={(value) => setFormData({...formData, manager_id: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a manager" />
                        </SelectTrigger>
                        <SelectContent>
                          {users.map(user => (
                            <SelectItem key={user.id} value={user.id.toString()}>
                              {user.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-end space-x-2 mt-6">
                <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
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
              </div>
            </form>
          </TabsContent>

          <TabsContent value="details" className="space-y-4 sm:space-y-6">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {/* Descriptions */}
                <Card>
                  <CardHeader className="pb-3 sm:pb-6">
                    <CardTitle className="text-base sm:text-lg">Descriptions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="short_description">Short Description</Label>
                      <textarea
                        id="short_description"
                        name="short_description"
                        rows={3}
                        placeholder="Brief description of the activity"
                        value={formData.short_description}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md resize-none"
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
                        className="w-full p-2 border border-gray-300 rounded-md resize-none"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Requirements & Policies */}
                <Card>
                  <CardHeader className="pb-3 sm:pb-6">
                    <CardTitle className="text-base sm:text-lg">Requirements & Policies</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4">
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
                      <Label htmlFor="requirements">Requirements</Label>
                      <textarea
                        id="requirements"
                        name="requirements"
                        rows={3}
                        placeholder="Requirements to participate"
                        value={formData.requirements}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md resize-none"
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
                        className="w-full p-2 border border-gray-300 rounded-md resize-none"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-end space-x-2 mt-6">
                <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
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
              </div>
            </form>
          </TabsContent>

          <TabsContent value="pricing" className="space-y-4 sm:space-y-6">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {/* Pricing */}
                <Card>
                  <CardHeader className="pb-3 sm:pb-6">
                    <CardTitle className="text-base sm:text-lg">Pricing</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4">
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
                  </CardContent>
                </Card>

                {/* Participants */}
                <Card>
                  <CardHeader className="pb-3 sm:pb-6">
                    <CardTitle className="text-base sm:text-lg">Participants</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4">
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
                  </CardContent>
                </Card>
              </div>

              {/* Includes & Excludes */}
              <Card className="mt-4 sm:mt-6">
                <CardHeader className="pb-3 sm:pb-6">
                  <CardTitle className="text-base sm:text-lg">What's Included</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="includes">Includes</Label>
                      <textarea
                        id="includes"
                        name="includes"
                        rows={3}
                        placeholder="What the activity includes"
                        value={formData.includes}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md resize-none"
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
                        className="w-full p-2 border border-gray-300 rounded-md resize-none"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Featured Activity */}
              <Card className="mt-4 sm:mt-6">
                <CardHeader className="pb-3 sm:pb-6">
                  <CardTitle className="text-base sm:text-lg">Settings</CardTitle>
                </CardHeader>
                <CardContent>
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
                </CardContent>
              </Card>

              <div className="flex justify-end space-x-2 mt-6">
                <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
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
              </div>
            </form>
          </TabsContent>

          <TabsContent value="images" className="space-y-4 sm:space-y-6">
            <Card>
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="text-base sm:text-lg">Images</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No images yet</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Images can be added after creating the activity.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end space-x-2">
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setSelectedTab('general')}>
                Continue to General Info
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
} 