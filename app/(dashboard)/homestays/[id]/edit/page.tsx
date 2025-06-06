'use client';

import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, Upload, Plus, Trash2, Pencil } from 'lucide-react';
import { homestay, homestayImages, homestayRoom, room_features } from 'generated/prisma';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Checkbox } from '@/components/ui/checkbox';

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

export default function EditHomestayPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);
  const [homestay, setHomestay] = useState<Homestay | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [uploadingImages, setUploadingImages] = useState(false);
  const [roomFeatures, setRoomFeatures] = useState<RoomFeature[]>([]);
  const [selectedTab, setSelectedTab] = useState('general');
  const [openRoomDialog, setOpenRoomDialog] = useState(false);
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
      setUsers(data);
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
      
      router.push('/homestays');
      router.refresh();
    } catch (error) {
      console.error('Error:', error);
      setError(error instanceof Error ? error.message : 'Error updating homestay');
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploadingImages(true);
    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const formData = new FormData();
        formData.append('file', file);

        // Here you should implement the logic to upload the image to your storage service
        // For example, using Cloudinary, AWS S3, etc.
        // const uploadResponse = await fetch('your-upload-endpoint', {
        //   method: 'POST',
        //   body: formData
        // });
        // const { url } = await uploadResponse.json();

        // For now, we'll use a placeholder URL
        const url = 'https://via.placeholder.com/300';

        // Save the image in the database
        await fetch(`/api/homestay/${id}/images`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            img_url: url,
            is_primary: !homestay?.homestayImages?.length,
            order: homestay?.homestayImages?.length || 0
          })
        });
      }

      // Reload images
      fetchHomestay();
    } catch (error) {
      console.error('Error uploading images:', error);
      setError('Error uploading images');
    } finally {
      setUploadingImages(false);
    }
  };

  const handleDeleteImage = async (imageId: number) => {
    try {
      await fetch(`/api/homestay/${id}/images?imageId=${imageId}`, {
        method: 'DELETE'
      });
      fetchHomestay();
    } catch (error) {
      console.error('Error deleting image:', error);
      setError('Error deleting image');
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
      setOpenRoomDialog(false);
      
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
    } catch (error) {
      console.error('Error updating room:', error);
      setError('Error updating room');
    }
  };

  const handleDeleteRoom = async (roomId: number) => {
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

  if (!homestay) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Edit Homestay</h1>
        
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="images">Images</TabsTrigger>
            <TabsTrigger value="rooms">Rooms</TabsTrigger>
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
              
              <div className="flex justify-end space-x-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push('/homestays')}
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
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="images">Upload Images</Label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="file"
                        id="images"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => document.getElementById('images')?.click()}
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
                  </div>

                  {homestay?.homestayImages?.length ? (
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
                <Dialog open={openRoomDialog} onOpenChange={setOpenRoomDialog}>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Add Room
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Room</DialogTitle>
                    </DialogHeader>
                    <form
                      onSubmit={async (e) => {
                        e.preventDefault();
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
                          features: roomFeatures
                            .filter(f => f.selected)
                            .map(f => f.id)
                        };
                        await handleCreateRoom(roomData);
                        (e.target as HTMLFormElement).reset();
                      }}
                      className="space-y-4"
                    >
                      <div className="space-y-2">
                        <Label htmlFor="title">Title *</Label>
                        <Input id="title" name="title" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <textarea
                          id="description"
                          name="description"
                          className="w-full min-h-[100px] rounded-md border border-input bg-background p-2"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="room_number">Room Number</Label>
                        <Input id="room_number" name="room_number" />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="number_people">Number of People *</Label>
                          <Input
                            id="number_people"
                            name="number_people"
                            type="number"
                            min="1"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="max_occupancy">Max Occupancy *</Label>
                          <Input
                            id="max_occupancy"
                            name="max_occupancy"
                            type="number"
                            min="1"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="price">Price *</Label>
                          <Input
                            id="price"
                            name="price"
                            type="number"
                            min="0"
                            step="0.01"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="currency">Currency</Label>
                          <select
                            id="currency"
                            name="currency"
                            className="w-full rounded-md border border-input bg-background p-2"
                            defaultValue="IDR"
                          >
                            <option value="IDR">IDR</option>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="size">Size</Label>
                        <Input id="size" name="size" placeholder="e.g., 30m²" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Features</Label>
                        <div className="grid grid-cols-2 gap-2">
                          {roomFeatures.map((feature) => (
                            <div key={feature.id} className="flex items-center space-x-2">
                              <Checkbox
                                id={`feature-${feature.id}`}
                                checked={feature.selected}
                                onCheckedChange={(checked: boolean) => {
                                  setRoomFeatures(features =>
                                    features.map(f =>
                                      f.id === feature.id
                                        ? { ...f, selected: checked }
                                        : f
                                    )
                                  );
                                }}
                              />
                              <Label htmlFor={`feature-${feature.id}`}>
                                {feature.title}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button type="submit">Add Room</Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                {homestay?.homestayRoom?.length ? (
                  <div className="space-y-4">
                    {homestay.homestayRoom.map((room) => (
                      <Card key={room.id}>
                        <CardContent className="pt-6">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold">{room.title}</h3>
                              <p className="text-sm text-gray-500">{room.description}</p>
                            </div>
                            <div className="flex space-x-2">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button variant="outline" size="sm">
                                    <Pencil className="h-4 w-4" />
                                  </Button>
                                </DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>Edit Room</DialogTitle>
                                  </DialogHeader>
                                  <form
                                    onSubmit={async (e) => {
                                      e.preventDefault();
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
                                        features: roomFeatures
                                          .filter(f => f.selected)
                                          .map(f => f.id)
                                      };
                                      await handleUpdateRoom(room.id, roomData);
                                    }}
                                    className="space-y-4"
                                  >
                                    <div className="space-y-2">
                                      <Label htmlFor="title">Title *</Label>
                                      <Input
                                        id="title"
                                        name="title"
                                        defaultValue={room.title}
                                        required
                                      />
                                    </div>
                                    
                                    <div className="space-y-2">
                                      <Label htmlFor="description">Description</Label>
                                      <textarea
                                        id="description"
                                        name="description"
                                        defaultValue={room.description || ''}
                                        className="w-full min-h-[100px] rounded-md border border-input bg-background p-2"
                                      />
                                    </div>
                                    
                                    <div className="space-y-2">
                                      <Label htmlFor="room_number">Room Number</Label>
                                      <Input
                                        id="room_number"
                                        name="room_number"
                                        defaultValue={room.room_number || ''}
                                      />
                                    </div>
                                    
                                    <div className="grid grid-cols-2 gap-4">
                                      <div className="space-y-2">
                                        <Label htmlFor="number_people">Number of People *</Label>
                                        <Input
                                          id="number_people"
                                          name="number_people"
                                          type="number"
                                          min="1"
                                          defaultValue={room.number_people}
                                          required
                                        />
                                      </div>
                                      
                                      <div className="space-y-2">
                                        <Label htmlFor="max_occupancy">Max Occupancy *</Label>
                                        <Input
                                          id="max_occupancy"
                                          name="max_occupancy"
                                          type="number"
                                          min="1"
                                          defaultValue={room.max_occupancy}
                                          required
                                        />
                                      </div>
                                    </div>
                                    
                                    <div className="grid grid-cols-2 gap-4">
                                      <div className="space-y-2">
                                        <Label htmlFor="price">Price *</Label>
                                        <Input
                                          id="price"
                                          name="price"
                                          type="number"
                                          min="0"
                                          step="0.01"
                                          defaultValue={room.price.toString()}
                                          required
                                        />
                                      </div>
                                      
                                      <div className="space-y-2">
                                        <Label htmlFor="currency">Currency</Label>
                                        <select
                                          id="currency"
                                          name="currency"
                                          className="w-full rounded-md border border-input bg-background p-2"
                                          defaultValue={room.currency}
                                        >
                                          <option value="IDR">IDR</option>
                                          <option value="USD">USD</option>
                                          <option value="EUR">EUR</option>
                                        </select>
                                      </div>
                                    </div>
                                    
                                    <div className="space-y-2">
                                      <Label htmlFor="size">Size</Label>
                                      <Input
                                        id="size"
                                        name="size"
                                        defaultValue={room.size || ''}
                                        placeholder="e.g., 30m²"
                                      />
                                    </div>
                                    
                                    <div className="space-y-2">
                                      <Label>Features</Label>
                                      <div className="grid grid-cols-2 gap-2">
                                        {roomFeatures.map((feature) => (
                                          <div key={feature.id} className="flex items-center space-x-2">
                                            <Checkbox
                                              id={`feature-${feature.id}`}
                                              checked={room.relation_feature_room.some(
                                                rf => rf.room_features.id === feature.id
                                              )}
                                              onCheckedChange={(checked: boolean) => {
                                                setRoomFeatures(features =>
                                                  features.map(f =>
                                                    f.id === feature.id
                                                      ? { ...f, selected: checked }
                                                      : f
                                                  )
                                                );
                                              }}
                                            />
                                            <Label htmlFor={`feature-${feature.id}`}>
                                              {feature.title}
                                            </Label>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                    
                                    <div className="flex justify-end">
                                      <Button type="submit">Update Room</Button>
                                    </div>
                                  </form>
                                </DialogContent>
                              </Dialog>
                              <Button
                                variant="destructive"
                                size="sm"
                                onClick={() => handleDeleteRoom(room.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          
                          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-medium">Room Number:</span>{' '}
                              {room.room_number || 'N/A'}
                            </div>
                            <div>
                              <span className="font-medium">Size:</span>{' '}
                              {room.size || 'N/A'}
                            </div>
                            <div>
                              <span className="font-medium">Capacity:</span>{' '}
                              {room.number_people} people
                            </div>
                            <div>
                              <span className="font-medium">Max Occupancy:</span>{' '}
                              {room.max_occupancy} people
                            </div>
                            <div>
                              <span className="font-medium">Price:</span>{' '}
                              {room.currency} {room.price.toString()}
                            </div>
                            <div>
                              <span className="font-medium">Status:</span>{' '}
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                room.status === 'available'
                                  ? 'bg-green-100 text-green-800'
                                  : room.status === 'occupied'
                                  ? 'bg-red-100 text-red-800'
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {room.status.charAt(0).toUpperCase() + room.status.slice(1)}
                              </span>
                            </div>
                          </div>
                          
                          <div className="mt-4">
                            <h4 className="font-medium mb-2">Features:</h4>
                            <div className="flex flex-wrap gap-2">
                              {room.relation_feature_room?.map((rf) => (
                                <span
                                  key={rf.room_features.id}
                                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                                >
                                  {rf.room_features.title}
                                </span>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    No rooms available. Add some rooms to get started.
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 