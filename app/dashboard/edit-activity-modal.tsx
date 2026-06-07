'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ImageUpload } from '@/components/ui/image-upload';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { activities } from 'generated/prisma';
import { Calendar, DollarSign, Image as ImageIcon, Loader2, Pencil, Settings, Trash2, X } from 'lucide-react';
import { useEffect, useState } from 'react';

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

interface Activity extends activities {
  admin_users?: {
    id: number;
    name: string;
    email: string;
  };
  homestay?: {
    id: number;
    title: string;
    location: string;
  };
  activity_images?: Array<{
    id: number;
    img_url: string;
    is_primary: boolean;
    order: number;
  }>;
}

interface EditActivityModalProps {
  activity: Activity;
  onSuccess?: () => void;
}

export function EditActivityModal({ activity, onSuccess }: EditActivityModalProps) {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [homestays, setHomestays] = useState<Homestay[]>([]);
  const [filteredHomestays, setFilteredHomestays] = useState<Homestay[]>([]);
  const [showHomestayDropdown, setShowHomestayDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState('general');
  const [formData, setFormData] = useState({
    title: activity.title || '',
    description: activity.description || '',
    short_description: activity.short_description || '',
    category: activity.category || '',
    price: String(activity.price) || '',
    duration_minutes: String(activity.duration_minutes) || '',
    max_participants: String(activity.max_participants) || '',
    min_participants: String(activity.min_participants) || '',
    location: activity.location || '',
    address: activity.address || '',
    contact_phone: activity.contact_phone || '',
    contact_email: activity.contact_email || '',
    status: activity.status || 'active',
    is_featured: activity.is_featured || false,
    difficulty_level: activity.difficulty_level || 'easy',
    age_restriction: activity.age_restriction || '',
    includes: activity.includes || '',
    excludes: activity.excludes || '',
    requirements: activity.requirements || '',
    cancellation_policy: activity.cancellation_policy || '',
    meeting_point: activity.meeting_point || '',
    homestay_id: String(activity.homestay_id) || '',
    manager_id: String(activity.manager_id) || ''
  });
  const [error, setError] = useState('');
  const [activityImages, setActivityImages] = useState<Array<{ id: number; img_url: string; is_primary: boolean; order: number }>>([]);
  const [existingImages, setExistingImages] = useState<Array<{ id: number; img_url: string; is_primary: boolean; order: number }>>([]);
  const [uploadingImages, setUploadingImages] = useState(false);

  const categories = [
    { value: 'cultural', label: 'Cultural', icon: '🏛️' },
    { value: 'adventure', label: 'Adventure', icon: '🏔️' },
    { value: 'nature', label: 'Nature', icon: '🌿' },
    { value: 'food_tour', label: 'Food Tour', icon: '🍜' },
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
    { value: 'extreme_sports', label: 'Extreme Sports', icon: '🪂' }
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
    { value: 'suspended', label: 'Suspended', color: 'bg-gray-500' },
    { value: 'draft', label: 'Draft', color: 'bg-yellow-500' }
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.user-search-container')) {
        setShowUserDropdown(false);
      }
      if (!target.closest('.homestay-search-container')) {
        setShowHomestayDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (open) {
      fetchUsers();
      fetchHomestays();
      fetchExistingImages();
    }
  }, [open]);

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      // Extraer el array users del objeto de respuesta
      const usersArray = data.users || [];
      setUsers(usersArray);
      setFilteredUsers(usersArray);
    } catch (error) {
      console.error('Error loading users:', error);
      // En caso de error, establecer arrays vacíos
      setUsers([]);
      setFilteredUsers([]);
    }
  };

  const fetchHomestays = async () => {
    try {
      const response = await fetch('/api/homestay');
      const data = await response.json();
      console.log("data", data);
      // Extraer el array homestays del objeto de respuesta
      const homestaysArray = data.homestays || [];
      setHomestays(homestaysArray);
      setFilteredHomestays(homestaysArray);
    } catch (error) {
      console.error('Error loading homestays:', error);
      // En caso de error, establecer arrays vacíos
      setHomestays([]);
      setFilteredHomestays([]);
    }
  };

  const fetchExistingImages = async () => {
    try {
      const response = await fetch(`/api/activities/images?activityId=${activity.id}`);
      if (!response.ok) {
        console.error('Response not ok:', response.status, response.statusText);
        setExistingImages([]);
        return;
      }
      const data = await response.json();
      const imagesArray = data.images || [];
      setExistingImages(imagesArray);
    } catch (error) {
      console.error('Error loading existing images:', error);
      setExistingImages([]);
    }
  };

  const deleteExistingImage = async (imageId: number) => {
    try {
      const response = await fetch(`/api/activities/images/${imageId}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        setExistingImages(prev => prev.filter(img => img.id !== imageId));
      }
    } catch (error) {
      console.error('Error deleting image:', error);
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

      const response = await fetch(`/api/activities/${activity.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error updating activity');
      }



      setOpen(false);
      onSuccess?.();
    } catch (error) {
      console.error('Error:', error);
      setError(error instanceof Error ? error.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this activity?')) {
      return;
    }

    setDeleteLoading(true);
    setError('');

    try {
      const response = await fetch(`/api/activities/${activity.id}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error deleting activity');
      }

      setOpen(false);
      onSuccess?.();
    } catch (error) {
      console.error('Error:', error);
      setError(error instanceof Error ? error.message : 'Unknown error');
    } finally {
      setDeleteLoading(false);
    }
  };

  const getCategoryIcon = (categoryValue: string) => {
    const category = categories.find(cat => cat.value === categoryValue);
    return category?.icon || '🎯';
  };

  const getDifficultyColor = (difficulty: string) => {
    const level = difficultyLevels.find(level => level.value === difficulty);
    return level?.color || 'bg-gray-100 text-gray-800';
  };

  const getStatusColor = (status: string) => {
    const statusOption = statusOptions.find(option => option.value === status);
    return statusOption?.color || 'bg-gray-500';
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm">
          <Pencil className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-[95vw] max-h-[95vh] overflow-y-auto sm:w-[90vw] md:w-[85vw] lg:w-[80vw] xl:w-[75vw]">
        <DialogHeader className="pb-4 sm:pb-6">
          <DialogTitle className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
            <span>Edit Activity</span>
            <Badge variant="outline" className="ml-0 sm:ml-2">
              ID: {activity.id}
            </Badge>
          </DialogTitle>
          <DialogDescription>
            Update the activity details and settings
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
                      <Label htmlFor="manager_id">Manager</Label>
                      <div className="relative user-search-container">
                        <Input
                          id="manager_search"
                          placeholder="Search manager by name or email..."
                          className="w-full"
                          onFocus={() => setShowUserDropdown(true)}
                          onChange={(e) => {
                            const searchTerm = e.target.value.toLowerCase();
                            if (searchTerm.trim() === '') {
                              setFilteredUsers(Array.isArray(users) ? users : []);
                            } else {
                              const filtered = Array.isArray(users) ? users.filter((user: User) => 
                                user.name.toLowerCase().includes(searchTerm) ||
                                user.email.toLowerCase().includes(searchTerm)
                              ) : [];
                              setFilteredUsers(filtered);
                            }
                          }}
                        />
                        {showUserDropdown && filteredUsers.length > 0 && (
                          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-40 sm:max-h-60 overflow-y-auto">
                            {filteredUsers.map((user: User) => (
                              <div
                                key={user.id}
                                className={`px-2 sm:px-3 py-2 cursor-pointer hover:bg-gray-100 ${
                                  formData.manager_id === user.id.toString() ? 'bg-blue-50' : ''
                                }`}
                                onClick={() => {
                                  setFormData({...formData, manager_id: user.id.toString()});
                                  setShowUserDropdown(false);
                                }}
                              >
                                <div className="font-medium text-sm">{user.name}</div>
                                <div className="text-xs text-gray-500">{user.email}</div>
                              </div>
                            ))}
                          </div>
                        )}
                        {formData.manager_id && (
                          <div className="mt-2 p-2 sm:p-3 bg-gray-50 rounded border">
                            <div className="flex items-center justify-between">
                              <div className="text-xs sm:text-sm">
                                <span className="font-medium">Selected:</span>
                                <div className="text-gray-600">
                                  {Array.isArray(users) && users.find((u: User) => u.id.toString() === formData.manager_id)?.name} 
                                  ({Array.isArray(users) && users.find((u: User) => u.id.toString() === formData.manager_id)?.email})
                                </div>
                              </div>
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => setFormData({...formData, manager_id: ''})}
                                className="h-6 w-6 p-0"
                              >
                                <X className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="homestay_id">Associated Homestay</Label>
                      <div className="relative homestay-search-container">
                        <Input
                          id="homestay_search"
                          placeholder="Search homestay by title..."
                          className="w-full"
                          onFocus={() => setShowHomestayDropdown(true)}
                          onChange={(e) => {
                            const searchTerm = e.target.value.toLowerCase();
                            if (searchTerm.trim() === '') {
                              setFilteredHomestays(Array.isArray(homestays) ? homestays : []);
                            } else {
                              const filtered = Array.isArray(homestays) ? homestays.filter((homestay: Homestay) => 
                                homestay.title.toLowerCase().includes(searchTerm) ||
                                homestay.location.toLowerCase().includes(searchTerm)
                              ) : [];
                              setFilteredHomestays(filtered);
                            }
                          }}
                        />
                        {showHomestayDropdown && filteredHomestays.length > 0 && (
                          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-40 sm:max-h-60 overflow-y-auto">
                            {filteredHomestays.map((homestay: Homestay) => (
                              <div
                                key={homestay.id}
                                className={`px-2 sm:px-3 py-2 cursor-pointer hover:bg-gray-100 ${
                                  formData.homestay_id === homestay.id.toString() ? 'bg-blue-50' : ''
                                }`}
                                onClick={() => {
                                  setFormData({...formData, homestay_id: homestay.id.toString()});
                                  setShowHomestayDropdown(false);
                                }}
                              >
                                <div className="font-medium text-sm">{homestay.title}</div>
                                <div className="text-xs text-gray-500">{homestay.location}</div>
                              </div>
                            ))}
                          </div>
                        )}
                        {formData.homestay_id && (
                          <div className="mt-2 p-2 sm:p-3 bg-gray-50 rounded border">
                            <div className="flex items-center justify-between">
                              <div className="text-xs sm:text-sm">
                                <span className="font-medium">Selected:</span>
                                <div className="text-gray-600">
                                  {Array.isArray(homestays) && homestays.find((h: Homestay) => h.id.toString() === formData.homestay_id)?.title} 
                                  ({Array.isArray(homestays) && homestays.find((h: Homestay) => h.id.toString() === formData.homestay_id)?.location})
                                </div>
                              </div>
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => setFormData({...formData, homestay_id: ''})}
                                className="h-6 w-6 p-0"
                              >
                                <X className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Featured Activity */}
              <Card className="mt-4 sm:mt-6">
                <CardContent className="pt-4 sm:pt-6">
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
                        className="w-full min-h-[80px] rounded-md border border-input bg-background p-3 resize-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Full Description</Label>
                      <textarea
                        id="description"
                        name="description"
                        rows={6}
                        placeholder="Detailed description of the activity"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="w-full min-h-[120px] rounded-md border border-input bg-background p-3 resize-none"
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
                        className="w-full min-h-[80px] rounded-md border border-input bg-background p-3 resize-none"
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
                        className="w-full min-h-[80px] rounded-md border border-input bg-background p-3 resize-none"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* What's Included/Excluded */}
              <Card className="mt-4 sm:mt-6">
                <CardHeader className="pb-3 sm:pb-6">
                  <CardTitle className="text-base sm:text-lg">What's Included & Excluded</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="includes">What's Included</Label>
                      <textarea
                        id="includes"
                        name="includes"
                        rows={4}
                        placeholder="What the activity includes"
                        value={formData.includes}
                        onChange={handleInputChange}
                        className="w-full min-h-[100px] rounded-md border border-input bg-background p-3 resize-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="excludes">What's Excluded</Label>
                      <textarea
                        id="excludes"
                        name="excludes"
                        rows={4}
                        placeholder="What the activity excludes"
                        value={formData.excludes}
                        onChange={handleInputChange}
                        className="w-full min-h-[100px] rounded-md border border-input bg-background p-3 resize-none"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </form>
          </TabsContent>

          <TabsContent value="pricing" className="space-y-4 sm:space-y-6">
            <form onSubmit={handleSubmit}>
              <Card>
                <CardHeader className="pb-3 sm:pb-6">
                  <CardTitle className="text-base sm:text-lg">Pricing & Capacity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                </CardContent>
              </Card>
            </form>
          </TabsContent>

          <TabsContent value="images" className="space-y-4 sm:space-y-6">
            <Card>
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="text-base sm:text-lg">Activity Images</CardTitle>
                <p className="text-sm text-gray-600">
                  Manage images for this activity. Upload new images or manage existing ones.
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Existing Images */}
                  {existingImages.length > 0 && (
                    <div>
                      <Label className="text-sm font-medium">Existing Images</Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                        {existingImages.map((image) => (
                          <div key={image.id} className="relative group">
                            <img
                              src={image.img_url}
                              alt="Activity"
                              className="w-full h-32 object-cover rounded-lg border"
                            />
                            <button
                              type="button"
                              onClick={() => deleteExistingImage(image.id)}
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                              disabled={loading}
                            >
                              <X className="h-4 w-4" />
                            </button>
                            {image.is_primary && (
                              <div className="absolute bottom-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                                Primary
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Upload New Images */}
                  <div>
                    <Label className="text-sm font-medium">Upload New Images</Label>
                    <ImageUpload
                      onImagesChange={(images) => setActivityImages(images as any)}
                      maxImages={10}
                      disabled={loading}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-4 sm:pt-6 border-t gap-3 sm:gap-0">
          <Button
            type="button"
            variant="destructive"
            onClick={handleDelete}
            disabled={deleteLoading}
            className="w-full sm:w-auto"
          >
            {deleteLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Deleting...
              </>
            ) : (
              <>
                <Trash2 className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Delete Activity</span>
                <span className="sm:hidden">Delete</span>
              </>
            )}
          </Button>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="w-full sm:w-auto"
            >
              Cancel
            </Button>
            <Button 
              onClick={handleSubmit}
              disabled={loading}
              className="w-full sm:w-auto"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                'Save Changes'
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 