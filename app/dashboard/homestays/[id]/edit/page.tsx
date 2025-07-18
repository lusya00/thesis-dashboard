'use client';

import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, Upload, Plus, Trash2, Pencil, X, Settings } from 'lucide-react';
import { homestay, homestayImages, homestayRoom, room_features } from 'generated/prisma';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { uploadHomestayImage, deleteHomestayImage, validateWebPFile } from '@/lib/supabase';
import { ImageUpload, ImageFile } from '@/components/ui/image-upload';

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
  homestayImages?: homestayImages[];
  homestayRoom?: (homestayRoom & {
    relation_feature_room: {
      room_features: room_features;
    }[];
  })[];
}

interface RoomFeature extends room_features {
  selected?: boolean;
}

interface RoomFormData {
  title: string;
  description: string;
  room_number: string;
  number_people: number;
  max_occupancy: number;
  price: number;
  currency: string;
  size: string;
  features: number[];
}

interface FeatureFormData {
  title: string;
  description: string;
  symbol: string;
  category: string;
}

// Component for room editing modal
function RoomEditModal({ 
  room, 
  roomFeatures, 
  onSave, 
  onClose, 
  isOpen,
  onAddFeature
}: { 
  room?: (homestayRoom & {
    relation_feature_room: {
      room_features: room_features;
    }[];
  }) | null;
  roomFeatures: RoomFeature[];
  onSave: (roomData: RoomFormData) => Promise<void>;
  onClose: () => void;
  isOpen: boolean;
  onAddFeature: () => void;
}) {
  const [selectedFeatures, setSelectedFeatures] = useState<number[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (room) {
      setSelectedFeatures(room.relation_feature_room.map(rf => rf.room_features.id));
    } else {
      setSelectedFeatures([]);
    }
  }, [room]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const roomData: RoomFormData = {
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        room_number: formData.get('room_number') as string,
        number_people: parseInt(formData.get('number_people') as string),
        max_occupancy: parseInt(formData.get('max_occupancy') as string),
        price: parseFloat(formData.get('price') as string),
        currency: formData.get('currency') as string,
        size: formData.get('size') as string,
        features: selectedFeatures
      };
      
      await onSave(roomData);
      onClose();
    } catch (error) {
      console.error('Error saving room:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFeature = (featureId: number) => {
    setSelectedFeatures(prev => 
      prev.includes(featureId) 
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  // Group features by category
  const groupedFeatures = roomFeatures.reduce((acc, feature) => {
    if (!acc[feature.category]) {
      acc[feature.category] = [];
    }
    acc[feature.category].push(feature);
    return acc;
  }, {} as Record<string, RoomFeature[]>);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            {room ? 'Edit Room' : 'Add New Room'}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                name="title"
                defaultValue={room?.title || ''}
                required
                placeholder="e.g., Deluxe Room"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="room_number">Room Number</Label>
              <Input
                id="room_number"
                name="room_number"
                defaultValue={room?.room_number || ''}
                placeholder="e.g., 101"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <textarea
              id="description"
              name="description"
              defaultValue={room?.description || ''}
              className="w-full min-h-[120px] rounded-md border border-input bg-background p-3 resize-none"
              placeholder="Describe the room features and amenities..."
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="number_people">Capacity *</Label>
              <Input
                id="number_people"
                name="number_people"
                type="number"
                min="1"
                defaultValue={room?.number_people || 1}
                required
                placeholder="1"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="max_occupancy">Max Occupancy *</Label>
              <Input
                id="max_occupancy"
                name="max_occupancy"
                type="number"
                min="1"
                defaultValue={room?.max_occupancy || 1}
                required
                placeholder="2"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="size">Size</Label>
              <Input
                id="size"
                name="size"
                defaultValue={room?.size || ''}
                placeholder="e.g., 30m²"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price">Price *</Label>
              <Input
                id="price"
                name="price"
                type="number"
                min="0"
                step="0.01"
                defaultValue={room?.price.toString() || ''}
                required
                placeholder="0.00"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="currency">Currency</Label>
              <select
                id="currency"
                name="currency"
                className="w-full rounded-md border border-input bg-background p-3"
                defaultValue={room?.currency || 'IDR'}
              >
                <option value="IDR">IDR (Indonesian Rupiah)</option>
                <option value="USD">USD (US Dollar)</option>
                <option value="EUR">EUR (Euro)</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label>Room Features</Label>
              {roomFeatures.length === 0 && (
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={onAddFeature}
                  className="text-xs"
                >
                  <Plus className="h-3 w-3 mr-1" />
                  Add Features
                </Button>
              )}
            </div>
            <div className="max-h-64 overflow-y-auto border rounded-md p-4">
              {roomFeatures.length > 0 ? (
                Object.entries(groupedFeatures).map(([category, features]) => (
                  <div key={category} className="mb-4">
                    <h4 className="font-medium text-sm text-gray-700 mb-2 capitalize">
                      {category.replace('_', ' ')}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {features.map((feature) => (
                        <div key={feature.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={`feature-${feature.id}`}
                            checked={selectedFeatures.includes(feature.id)}
                            onCheckedChange={() => toggleFeature(feature.id)}
                          />
                          <Label 
                            htmlFor={`feature-${feature.id}`}
                            className="text-sm cursor-pointer flex items-center space-x-2"
                          >
                            {feature.symbol && (
                              <span className="text-lg">{feature.symbol}</span>
                            )}
                            <span>{feature.title}</span>
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                    <Settings className="h-6 w-6 text-gray-400" />
                  </div>
                  <h4 className="text-sm font-medium text-gray-900 mb-1">No room features available</h4>
                  <p className="text-xs text-gray-500 mb-3">
                    Add room features to enhance your room descriptions
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={onAddFeature}
                  >
                    <Plus className="h-3 w-3 mr-1" />
                    Add First Feature
                  </Button>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex justify-end space-x-3 pt-4 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Saving...
                </>
              ) : room ? 'Update Room' : 'Add Room'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// Component for managing room features
function RoomFeaturesModal({ 
  roomFeatures, 
  onSave, 
  onClose, 
  isOpen 
}: { 
  roomFeatures: RoomFeature[];
  onSave: (featureData: FeatureFormData) => Promise<void>;
  onClose: () => void;
  isOpen: boolean;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const featureData: FeatureFormData = {
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        symbol: formData.get('symbol') as string,
        category: formData.get('category') as string
      };
      
      await onSave(featureData);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error saving feature:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const featureCategories = [
    'bedroom', 'bathroom', 'kitchen', 'entertainment', 'comfort', 
    'safety', 'accessibility', 'outdoor', 'service', 'storage', 
    'view', 'dining', 'business', 'wellness', 'transportation'
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Add New Room Feature</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              name="title"
              required
              placeholder="e.g., Air Conditioning"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <textarea
              id="description"
              name="description"
              className="w-full min-h-[80px] rounded-md border border-input bg-background p-2 resize-none"
              placeholder="Brief description of the feature..."
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="symbol">Symbol/Icon</Label>
            <Input
              id="symbol"
              name="symbol"
              placeholder="e.g., ❄️, 🛏️, 🚿"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="category">Category *</Label>
            <select
              id="category"
              name="category"
              className="w-full rounded-md border border-input bg-background p-2"
              required
            >
              <option value="">Select category</option>
              {featureCategories.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1).replace('_', ' ')}
                </option>
              ))}
            </select>
          </div>
          
          <div className="flex justify-end space-x-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Adding...
                </>
              ) : 'Add Feature'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default function EditHomestayPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);
  const [homestay, setHomestay] = useState<Homestay | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [uploadingImages, setUploadingImages] = useState(false);
  const [roomFeatures, setRoomFeatures] = useState<RoomFeature[]>([]);
  const [selectedTab, setSelectedTab] = useState('general');
  const [selectedImages, setSelectedImages] = useState<ImageFile[]>([]);
  const [imageUploadKey, setImageUploadKey] = useState(0);
  
  // Detect if should open directly in rooms tab
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const tabParam = urlParams.get('tab');
      if (tabParam === 'rooms') {
        setSelectedTab('rooms');
      }
    }
  }, []);
  
  const [roomModalOpen, setRoomModalOpen] = useState(false);
  const [featuresModalOpen, setFeaturesModalOpen] = useState(false);
  const [editingRoom, setEditingRoom] = useState<(homestayRoom & {
    relation_feature_room: {
      room_features: room_features;
    }[];
  }) | null>(null);
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

  useEffect(() => {
    fetchHomestay();
    fetchUsers();
    fetchRoomFeatures();
  }, [id]);

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

  const fetchHomestay = async () => {
    try {
      const response = await fetch(`/api/homestay/${id}`);
      const data = await response.json();
      console.log(data);
      setHomestay(data);
      setFormData({
        title: data.title,
        description: data.description || '',
        user_id: data.user_id.toString(),
        location: data.location,
        address: data.address,
        base_price: data.base_price ? data.base_price.toString() : '',
        max_guests: data.max_guests ? data.max_guests.toString() : '',
        contact_number: data.contact_number || '',
        has_rooms: data.has_rooms,
        status: data.status
      });
    } catch (error) {
      console.error('Error loading homestay:', error);
      setError('Error loading homestay');
    }
  };

  const fetchUsers = async () => {
    setLoadingUsers(true);
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data.users || []);
      setFilteredUsers(data.users || []);
    } catch (error) {
      console.error('Error loading users:', error);
      setError('Error loading users');
    } finally {
      setLoadingUsers(false);
    }
  };

  const fetchRoomFeatures = async () => {
    try {
      const response = await fetch('/api/room-features');
      const data = await response.json();
      setRoomFeatures(data);
    } catch (error) {
      console.error('Error loading room features:', error);
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
        id: parseInt(id),
        user_id: parseInt(formData.user_id),
        base_price: formData.base_price ? parseFloat(formData.base_price) : null,
        max_guests: formData.max_guests ? parseInt(formData.max_guests) : null
      };

      const response = await fetch(`/api/homestay/${id}`, {
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
      
      router.push('/dashboard/homestays');
      router.refresh();
    } catch (error) {
      console.error('Error:', error);
      setError(error instanceof Error ? error.message : 'Error updating homestay');
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async () => {
    if (selectedImages.length === 0) return;

    setUploadingImages(true);
    setError('');
    
    try {
      const imageUploadPromises = selectedImages.map(async (image, index) => {
        const formData = new FormData();
        formData.append('file', image.file);
        formData.append('homestayId', id);
        formData.append('isPrimary', index === 0 && !homestay?.homestayImages?.length ? 'true' : 'false');

        const uploadResponse = await fetch('/api/homestay/images', {
          method: 'POST',
          body: formData
        });

        if (!uploadResponse.ok) {
          const errorData = await uploadResponse.json();
          throw new Error(errorData.error || 'Error al subir imagen');
        }

        return uploadResponse.json();
      });

      await Promise.all(imageUploadPromises);
      
      // Reload images
      fetchHomestay();
      
      // Clear selected images
      setSelectedImages([]);
      
      // Incrementar la key para forzar el reinicio del componente ImageUpload
      setImageUploadKey(prev => prev + 1);
    } catch (error) {
      console.error('Error uploading images:', error);
      setError(error instanceof Error ? error.message : 'Error uploading images');
    } finally {
      setUploadingImages(false);
    }
  };

  const handleDeleteImage = async (imageId: number) => {
    try {
      const response = await fetch(`/api/homestay/${id}/images?imageId=${imageId}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error deleting image');
      }
      
      fetchHomestay();
    } catch (error) {
      console.error('Error deleting image:', error);
      setError(error instanceof Error ? error.message : 'Error deleting image');
    }
  };

  const handleCreateRoom = async (roomData: RoomFormData) => {
    try {
      const response = await fetch(`/api/homestay/${id}/rooms`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(roomData)
      });

      console.log(response);
      if (!response.ok) {
        throw new Error('Error creating room');
      }

      fetchHomestay();
      setRoomModalOpen(false);
      
    } catch (error) {
      console.error('Error creating room:', error);
      setError('Error creating room');
    }
  };

  const handleUpdateRoom = async (roomId: number, roomData: RoomFormData) => {
    try {
      const response = await fetch(`/api/homestay/${id}/rooms?roomId=${roomId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(roomData)
      });

      if (!response.ok) {
        throw new Error('Error updating room');
      }

      fetchHomestay();
      setEditingRoom(null);
    } catch (error) {
      console.error('Error updating room:', error);
      setError('Error updating room');
    }
  };

  const handleDeleteRoom = async (roomId: number) => {
    if (!confirm('Are you sure you want to delete this room?')) {
      return;
    }
    
    try {
      await fetch(`/api/homestay/${id}/rooms?roomId=${roomId}`, {
        method: 'DELETE'
      });
      fetchHomestay();
    } catch (error) {
      console.error('Error deleting room:', error);
      setError('Error deleting room');
    }
  };

  const handleCreateFeature = async (featureData: FeatureFormData) => {
    try {
      const response = await fetch('/api/room-features', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(featureData)
      });

      if (!response.ok) {
        throw new Error('Error creating feature');
      }

      fetchRoomFeatures();
      setFeaturesModalOpen(false);
      
    } catch (error) {
      console.error('Error creating feature:', error);
      setError('Error creating feature');
    }
  };

  const openEditRoomModal = (room: homestayRoom & {
    relation_feature_room: {
      room_features: room_features;
    }[];
  }) => {
    setEditingRoom(room);
    setRoomModalOpen(true);
  };

  const openCreateRoomModal = () => {
    setEditingRoom(null);
    setRoomModalOpen(true);
  };

  const closeRoomModal = () => {
    setRoomModalOpen(false);
    setEditingRoom(null);
  };

  const handleRoomSave = async (roomData: RoomFormData) => {
    if (editingRoom) {
      await handleUpdateRoom(editingRoom.id, roomData);
    } else {
      await handleCreateRoom(roomData);
    }
  };

  if (!homestay) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Edit Homestay</h1>
        
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="images">Images</TabsTrigger>
            <TabsTrigger value="rooms">Rooms</TabsTrigger>
            <TabsTrigger value="features">Room Features</TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  <div className="relative user-search-container">
                    <Input
                      id="user_search"
                      placeholder="Search by name or email..."
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
              
              <div className="flex justify-end space-x-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push('/dashboard/homestays')}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      Updating...
                    </>
                  ) : 'Update Homestay'}
                </Button>
              </div>
            </form>
          </TabsContent>

          <TabsContent value="images">
            <Card>
              <CardHeader>
                <CardTitle>Images</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Componente de carga de imágenes */}
                  <div className="space-y-4">
                    <div className="text-sm text-gray-600">
                      Upload images to showcase your homestay. The first image will be set as the primary image.
                    </div>
                    <ImageUpload
                      key={imageUploadKey}
                      onImagesChange={setSelectedImages}
                      maxImages={5}
                      disabled={uploadingImages}
                    />
                    {selectedImages.length > 0 && (
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                          {selectedImages.length} image(s) selected
                        </div>
                        <Button
                          onClick={handleImageUpload}
                          disabled={uploadingImages}
                        >
                          {uploadingImages ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin mr-2" />
                              Uploading...
                            </>
                          ) : (
                            <>
                              <Upload className="h-4 w-4 mr-2" />
                              Upload Images
                            </>
                          )}
                        </Button>
                      </div>
                    )}
                  </div>

                  {/* Imágenes existentes */}
                  {homestay?.homestayImages?.length ? (
                                          <div className="space-y-4">
                        <h3 className="text-lg font-medium">Existing Images</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {homestay.homestayImages.map((image) => (
                          <div key={image.id} className="relative group">
                            <img
                              src={image.img_url}
                              alt="Homestay"
                              className="w-full h-48 object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                              <Button
                                variant="destructive"
                                size="icon"
                                onClick={() => handleDeleteImage(image.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                            {image.is_primary && (
                              <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded text-xs">
                                Primary
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      No images available. Upload some images to get started.
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rooms">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Rooms</CardTitle>
                <div className="flex space-x-2">
                  {roomFeatures.length === 0 && (
                    <Button
                      variant="outline"
                      onClick={() => setFeaturesModalOpen(true)}
                      className="text-sm"
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      Add Features First
                    </Button>
                  )}
                  <Button onClick={openCreateRoomModal}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Room
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {roomFeatures.length === 0 && (
                  <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <Settings className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-blue-900 mb-1">
                          No room features available
                        </h4>
                        <p className="text-sm text-blue-700 mb-3">
                          Add room features first to enhance your room descriptions and make them more attractive to guests.
                        </p>
                        <Button
                          size="sm"
                          onClick={() => setFeaturesModalOpen(true)}
                        >
                          <Plus className="h-3 w-3 mr-1" />
                          Add Room Features
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
                
                {homestay?.homestayRoom?.length ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {homestay.homestayRoom.map((room) => (
                      <Card key={room.id} className="hover:shadow-md transition-shadow">
                        <CardHeader className="pb-3">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <CardTitle className="text-lg">{room.title}</CardTitle>
                              {room.room_number && (
                                <p className="text-sm text-muted-foreground">
                                  Room #{room.room_number}
                                </p>
                              )}
                            </div>
                            <div className="flex space-x-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => openEditRoomModal(room)}
                              >
                                <Pencil className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="destructive"
                                size="sm"
                                onClick={() => handleDeleteRoom(room.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          {room.description && (
                            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                              {room.description}
                            </p>
                          )}
                          
                          <div className="grid grid-cols-2 gap-3 mb-4">
                            <div className="text-sm">
                              <span className="font-medium">Capacity:</span>
                              <p className="text-muted-foreground">{room.number_people} people</p>
                            </div>
                            <div className="text-sm">
                              <span className="font-medium">Max Occupancy:</span>
                              <p className="text-muted-foreground">{room.max_occupancy} people</p>
                            </div>
                            <div className="text-sm">
                              <span className="font-medium">Price:</span>
                              <p className="text-muted-foreground">
                                {room.currency} {room.price.toLocaleString()}
                              </p>
                            </div>
                            <div className="text-sm">
                              <span className="font-medium">Size:</span>
                              <p className="text-muted-foreground">{room.size || 'N/A'}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <Badge 
                              variant={
                                room.status === 'available' ? 'default' :
                                room.status === 'occupied' ? 'destructive' : 'secondary'
                              }
                            >
                              {room.status === 'available' ? 'Available' :
                               room.status === 'occupied' ? 'Occupied' : 'Maintenance'}
                            </Badge>
                            
                            {room.relation_feature_room?.length > 0 && (
                              <div className="flex flex-wrap gap-1">
                                {room.relation_feature_room.slice(0, 3).map((rf) => (
                                  <Badge key={rf.room_features.id} variant="outline" className="text-xs">
                                    {rf.room_features.symbol && (
                                      <span className="mr-1">{rf.room_features.symbol}</span>
                                    )}
                                    {rf.room_features.title}
                                  </Badge>
                                ))}
                                {room.relation_feature_room.length > 3 && (
                                  <Badge variant="outline" className="text-xs">
                                    +{room.relation_feature_room.length - 3} more
                                  </Badge>
                                )}
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <Plus className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No rooms available</h3>
                    <p className="text-gray-500 mb-4">
                      Start by adding the first room to this homestay.
                    </p>
                    <Button onClick={openCreateRoomModal}>
                      <Plus className="h-4 w-4 mr-2" />
                      Add First Room
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="features">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Room Features</CardTitle>
                <Button onClick={() => setFeaturesModalOpen(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Feature
                </Button>
              </CardHeader>
              <CardContent>
                {roomFeatures.length > 0 ? (
                  <div className="space-y-6">
                    {Object.entries(
                      roomFeatures.reduce((acc, feature) => {
                        if (!acc[feature.category]) {
                          acc[feature.category] = [];
                        }
                        acc[feature.category].push(feature);
                        return acc;
                      }, {} as Record<string, RoomFeature[]>)
                    ).map(([category, features]) => (
                      <div key={category} className="space-y-3">
                        <h3 className="text-lg font-semibold capitalize">
                          {category.replace('_', ' ')}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                          {features.map((feature) => (
                            <Card key={feature.id} className="p-4">
                              <div className="flex items-center space-x-3">
                                {feature.symbol && (
                                  <span className="text-2xl">{feature.symbol}</span>
                                )}
                                <div className="flex-1">
                                  <h4 className="font-medium">{feature.title}</h4>
                                  {feature.description && (
                                    <p className="text-sm text-muted-foreground">
                                      {feature.description}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </Card>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <Settings className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No room features available</h3>
                    <p className="text-gray-500 mb-4">
                      Start by adding room features that can be assigned to rooms.
                    </p>
                    <Button onClick={() => setFeaturesModalOpen(true)}>
                      <Plus className="h-4 w-4 mr-2" />
                      Add First Feature
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Modal for creating/editing rooms */}
      <RoomEditModal
        room={editingRoom}
        roomFeatures={roomFeatures}
        onSave={handleRoomSave}
        onClose={closeRoomModal}
        isOpen={roomModalOpen}
        onAddFeature={() => setFeaturesModalOpen(true)}
      />

      {/* Modal for managing room features */}
      <RoomFeaturesModal
        roomFeatures={roomFeatures}
        onSave={handleCreateFeature}
        onClose={() => setFeaturesModalOpen(false)}
        isOpen={featuresModalOpen}
      />
    </div>
  );
} 