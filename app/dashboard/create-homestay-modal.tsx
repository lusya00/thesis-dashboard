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
import { PlusCircle, Loader2, Search, X, Settings, MapPin, DollarSign, Image as ImageIcon, Users } from 'lucide-react';
import { ImageUpload, ImageFile } from '@/components/ui/image-upload';

// Interfaces
interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  role: string;
}

interface CreateHomestayModalProps {
  onSuccess?: () => void;
}

export function CreateHomestayModal({ onSuccess }: CreateHomestayModalProps) {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<ImageFile[]>([]);
  const [selectedTab, setSelectedTab] = useState('general');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    user_id: '',
    location: '',
    address: '',
    base_price: '',
    max_guests: '',
    contact_number: '',
    has_rooms: false,
    status: 'active'
  });
  const [error, setError] = useState('');

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.user-search-container')) {
        setShowUserDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Load users when modal opens
    if (open) {
      fetchUsers();
    }
  }, [open]);

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data.users || []);
      setFilteredUsers(data.users || []);
    } catch (error) {
      console.error('Error loading users:', error);
      setError('Error loading users');
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
        user_id: parseInt(formData.user_id),
        base_price: formData.base_price ? parseFloat(formData.base_price) : null,
        max_guests: formData.max_guests ? parseInt(formData.max_guests) : null
      };

      const response = await fetch('/api/homestay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error creating homestay');
      }

      const createdHomestay = await response.json();

      // Subir imágenes si las hay
      if (images.length > 0) {
        const imageUploadPromises = images.map(async (image, index) => {
          const formData = new FormData();
          formData.append('file', image.file);
          formData.append('homestayId', createdHomestay.id.toString());
          formData.append('isPrimary', index === 0 ? 'true' : 'false');

          const uploadResponse = await fetch('/api/homestay/images', {
            method: 'POST',
            body: formData
          });

          if (!uploadResponse.ok) {
            throw new Error('Error al subir imagen');
          }
        });

        await Promise.all(imageUploadPromises);
      }

      // Reset form and close modal
      setFormData({
        title: '',
        description: '',
        user_id: '',
        location: '',
        address: '',
        base_price: '',
        max_guests: '',
        contact_number: '',
        has_rooms: false,
        status: 'active'
      });
      setImages([]);
      setSelectedTab('general');
      
      setOpen(false);
      
      // Notify success if callback provided
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error('Error:', error);
      setError(error instanceof Error ? error.message : 'Error creating homestay');
    } finally {
      setLoading(false);
    }
  };

  const statusOptions = [
    { value: 'active', label: 'Active', color: 'bg-green-500' },
    { value: 'inactive', label: 'Inactive', color: 'bg-red-500' },
    { value: 'suspended', label: 'Suspended', color: 'bg-gray-500' }
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Homestay
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <span>Create New Homestay</span>
            <Badge variant="outline" className="ml-2">
              New
            </Badge>
          </DialogTitle>
          <DialogDescription>
            Complete the form to create a new homestay with all necessary information.
          </DialogDescription>
        </DialogHeader>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="general" className="flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span className="hidden sm:inline">General</span>
            </TabsTrigger>
            <TabsTrigger value="location" className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span className="hidden sm:inline">Location</span>
            </TabsTrigger>
            <TabsTrigger value="pricing" className="flex items-center space-x-2">
              <DollarSign className="h-4 w-4" />
              <span className="hidden sm:inline">Pricing</span>
            </TabsTrigger>
            <TabsTrigger value="images" className="flex items-center space-x-2">
              <ImageIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Images</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-6">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Basic Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Basic Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Title *</Label>
                      <Input
                        id="title"
                        name="title"
                        placeholder="Enter homestay name"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                      />
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
                      <Label htmlFor="description">Description</Label>
                      <textarea
                        id="description"
                        name="description"
                        placeholder="Describe your homestay..."
                        value={formData.description}
                        onChange={handleInputChange}
                        className="w-full min-h-[120px] rounded-md border border-input bg-background p-3 resize-none"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Owner Assignment */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Owner Assignment</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="user_id">Owner *</Label>
                      <div className="relative user-search-container">
                        <Input
                          id="user_search"
                          placeholder="Search owner by name or email..."
                          className="w-full"
                          onFocus={() => setShowUserDropdown(true)}
                          onChange={(e) => {
                            const searchTerm = e.target.value.toLowerCase();
                            if (searchTerm.trim() === '') {
                              setFilteredUsers(users);
                            } else {
                              const filtered = users.filter((user: User) => 
                                user.name.toLowerCase().includes(searchTerm) ||
                                user.email.toLowerCase().includes(searchTerm)
                              );
                              setFilteredUsers(filtered);
                            }
                          }}
                        />
                        {showUserDropdown && filteredUsers.length > 0 && (
                          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
                            {filteredUsers.map((user: User) => (
                              <div
                                key={user.id}
                                className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${
                                  formData.user_id === user.id.toString() ? 'bg-blue-50' : ''
                                }`}
                                onClick={() => {
                                  setFormData({...formData, user_id: user.id.toString()});
                                  setShowUserDropdown(false);
                                }}
                              >
                                <div className="font-medium">{user.name}</div>
                                <div className="text-sm text-gray-500">{user.email}</div>
                              </div>
                            ))}
                          </div>
                        )}
                        {formData.user_id && (
                          <div className="mt-2 p-2 bg-gray-50 rounded border">
                            <div className="flex items-center justify-between">
                              <div className="text-sm">
                                <span className="font-medium">Selected:</span>
                                <div className="text-gray-600">
                                  {users.find((u: User) => u.id.toString() === formData.user_id)?.name} 
                                  ({users.find((u: User) => u.id.toString() === formData.user_id)?.email})
                                </div>
                              </div>
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => setFormData({...formData, user_id: ''})}
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
                      <Label htmlFor="contact_number">Contact Number</Label>
                      <Input
                        id="contact_number"
                        name="contact_number"
                        placeholder="+62 812 3456 7890"
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
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <Label htmlFor="has_rooms">Has individual rooms</Label>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </form>
          </TabsContent>

          <TabsContent value="location" className="space-y-6">
            <form onSubmit={handleSubmit}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Location Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="location">Location *</Label>
                    <Input
                      id="location"
                      name="location"
                      placeholder="e.g., Ubud, Bali"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address *</Label>
                    <textarea
                      id="address"
                      name="address"
                      placeholder="Complete address of the homestay"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full min-h-[100px] rounded-md border border-input bg-background p-3 resize-none"
                      required
                    />
                  </div>
                </CardContent>
              </Card>
            </form>
          </TabsContent>

          <TabsContent value="pricing" className="space-y-6">
            <form onSubmit={handleSubmit}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Pricing & Capacity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="base_price">Base Price (IDR)</Label>
                      <Input
                        id="base_price"
                        name="base_price"
                        type="number"
                        placeholder="500000"
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
                        placeholder="10"
                        value={formData.max_guests}
                        onChange={handleInputChange}
                        min="1"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </form>
          </TabsContent>

          <TabsContent value="images" className="space-y-6">
            <form onSubmit={handleSubmit}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Homestay Images</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-sm text-gray-600">
                      Upload images to showcase your homestay. The first image will be set as the primary image.
                    </div>
                    <ImageUpload
                      onImagesChange={setImages}
                      maxImages={5}
                      disabled={loading}
                    />
                    {images.length > 0 && (
                      <div className="text-sm text-gray-500">
                        {images.length} image(s) selected
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </form>
          </TabsContent>
        </Tabs>

        {/* Footer Actions */}
        <div className="flex justify-end space-x-2 pt-6 border-t">
          <Button
            type="button"
            variant="outline"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating...
              </>
            ) : (
              <>
                <PlusCircle className="mr-2 h-4 w-4" />
                Create Homestay
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
} 