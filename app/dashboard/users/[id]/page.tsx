'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { admin_users, user_role, homestay } from 'generated/prisma';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  User,
  Mail,
  Calendar,
  Building2,
  Clock,
  ArrowLeft,
  Edit,
  Shield,
  Activity,
  Loader2,
} from 'lucide-react';
import { format } from 'date-fns';

interface UserWithHomestays extends admin_users {
  homestay?: homestay[];
}

export default function UserDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const [user, setUser] = useState<UserWithHomestays | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/users/${id}`);
        if (!response.ok) {
          throw new Error('Error loading user data');
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        setError('Could not load user information');
        console.error('Error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  const getRoleBadge = (role: user_role) => {
    switch (role) {
      case 'super_admin':
        return <Badge className="bg-red-500">Super Admin</Badge>;
      case 'homestay_owner':
        return <Badge className="bg-blue-500">Homestays Owner</Badge>;
      case 'activity_manager':
        return <Badge className="bg-green-500">Activity Manager</Badge>;
      default:
        return <Badge className="bg-gray-500">Unknown</Badge>;
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-red-500 mb-4">{error || 'User not found'}</div>
        <Button onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button onClick={() => router.push(`/users/edit/${user.id}`)}>
          <Edit className="mr-2 h-4 w-4" />
          Edit User
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">{user.name}</CardTitle>
              <CardDescription>User Details</CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              {getRoleBadge(user.role)}
              <Badge variant={user.is_active ? "default" : "destructive"}>
                {user.is_active ? 'Active' : 'Inactive'}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Personal Information
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="font-medium w-24">Username:</span>
                    <span>{user.username}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium w-24">Name:</span>
                    <span>{user.name}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium w-24">Email:</span>
                    <span className="flex items-center">
                      <Mail className="h-4 w-4 mr-1" />
                      {user.email}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Role Information
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="font-medium w-24">Role:</span>
                    <span>{getRoleBadge(user.role)}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium w-24">Status:</span>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      user.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {user.is_active ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Registration Information
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="font-medium w-32">Created:</span>
                    <span>{format(new Date(user.created_at), 'dd/MM/yyyy HH:mm')}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium w-32">Updated:</span>
                    <span>{format(new Date(user.updated_at), 'dd/MM/yyyy HH:mm')}</span>
                  </div>
                  {user.last_login && (
                    <div className="flex items-center">
                      <span className="font-medium w-32">Last Login:</span>
                      <span>{format(new Date(user.last_login), 'dd/MM/yyyy HH:mm')}</span>
                    </div>
                  )}
                </div>
              </div>

              {user.role === 'homestay_owner' && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 flex items-center">
                    <Building2 className="h-5 w-5 mr-2" />
                    Homestays
                  </h3>
                  <div className="space-y-2">
                    {user.homestay && user.homestay.length > 0 ? (
                      user.homestay.map((homestay) => (
                        <div key={homestay.id} className="p-2 bg-white rounded-md">
                          <div className="font-medium">{homestay.title}</div>
                          <div className="text-sm text-gray-500">{homestay.location}</div>
                        </div>
                      ))
                    ) : (
                      <div className="text-gray-500">No homestays registered</div>
                    )}
                  </div>
                </div>
              )}

              {user.role === 'activity_manager' && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 flex items-center">
                    <Activity className="h-5 w-5 mr-2" />
                    Activities
                  </h3>
                  <div className="text-gray-500">No activities registered</div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 