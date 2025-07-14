'use client';

import {
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  Table,
  TableCell
} from '@/components/ui/table';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, Loader2, Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { activities } from 'generated/prisma';
import { CreateActivityModal } from '../create-activity-modal';
import { EditActivityModal } from '../edit-activity-modal';
import Image from 'next/image';

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
  activity_bookings?: Array<{
    id: number;
    status: string;
    participant_count: number;
  }>;
}

export function ActivitiesTable({
  offset = 0,
  productsPerPage = 5,
  status
}: {
  offset?: number;
  productsPerPage?: number;
  status?: string;
}) {
  let router = useRouter();
  const [activities, setActivities] = useState<Activity[]>([]);
  const [totalActivities, setTotalActivities] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  const getStatus = (status: string) => {
    if (status === 'active') return 'Active';
    if (status === 'inactive') return 'Inactive';
    if (status === 'draft') return 'Draft';
    if (status === 'suspended') return 'Suspended';
    return 'Unknown';
  }

  const getColorStatus = (status: string) => {
    if (status === 'active') return 'bg-green-500';
    if (status === 'inactive') return 'bg-red-500';
    if (status === 'draft') return 'bg-yellow-500';
    if (status === 'suspended') return 'bg-gray-500';
    return 'bg-gray-500';
  }

  const getCategory = (category: string) => {
    const categories: { [key: string]: string } = {
      'cultural': 'Cultural',
      'adventure': 'Adventure',
      'nature': 'Nature',
      'food_tour': 'Food Tour',
      'water_sports': 'Water Sports',
      'mountain_hiking': 'Mountain Hiking',
      'city_tour': 'City Tour',
      'religious': 'Religious',
      'art_craft': 'Art & Craft',
      'traditional_dance': 'Traditional Dance',
      'cooking_class': 'Cooking Class',
      'photography': 'Photography',
      'wellness': 'Wellness',
      'transportation': 'Transportation',
      'shopping': 'Shopping',
      'nightlife': 'Nightlife',
      'educational': 'Educational',
      'family_friendly': 'Family Friendly',
      'romantic': 'Romantic',
      'extreme_sports': 'Extreme Sports'
    };
    return categories[category] || category;
  }

  const getDifficultyLevel = (difficulty: string) => {
    const levels: { [key: string]: string } = {
      'easy': 'Easy',
      'moderate': 'Moderate',
      'challenging': 'Challenging',
      'expert': 'Expert'
    };
    return levels[difficulty] || difficulty;
  }

  const fetchActivities = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/activities');
      const data = await response.json();
      
      // Filtrar por estado si se especifica
      let filteredData = data;
      if (status) {
        filteredData = data.filter((activity: Activity) => activity.status === status);
      }
      
      setActivities(filteredData);
      setTotalActivities(filteredData.length);
    } catch (error) {
      console.error('Error loading activities:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getTotalBookings = (bookings: Activity['activity_bookings']) => {
    return bookings?.reduce((total, booking) => total + booking.participant_count, 0) || 0;
  };

  function prevPage() {
    router.back();
  }

  function nextPage() {
    router.push(`/?offset=${offset}`, { scroll: false });
  }

  useEffect(() => {
    fetchActivities();
  }, [status]);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Activities</CardTitle>
          <CardDescription>
            Manage your activities and view their information.
          </CardDescription>
        </div>
        <CreateActivityModal onSuccess={fetchActivities} />
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex justify-center items-center h-40">
            <Loader2 className="h-4 w-4 animate-spin mr-2" />
            <p>Loading...</p>
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Image</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Homestay</TableHead>
                <TableHead>Manager</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="hidden md:table-cell">Difficulty</TableHead>
                <TableHead className="hidden md:table-cell">Bookings</TableHead>
                <TableHead className="hidden md:table-cell">Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {activities.map((activity) => {
                const primaryImage = activity.activity_images?.find(img => img.is_primary) || activity.activity_images?.[0];
                const totalBookings = getTotalBookings(activity.activity_bookings);
                return (
                  <TableRow key={activity.id}>
                    <TableCell>{activity.id}</TableCell>
                    <TableCell>
                      {primaryImage ? (
                        <Image
                          src={primaryImage.img_url}
                          width={100}
                          height={100}
                          alt="Activity image"
                          className="w-12 h-12 object-cover rounded-lg border"
                        />
                      ) : (
                        <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                          <span className="text-gray-400 text-xs">No image</span>
                        </div>
                      )}
                    </TableCell>
                    <TableCell className="font-medium">{activity.title}</TableCell>
                    <TableCell>{getCategory(activity.category)}</TableCell>
                    <TableCell>IDR {String(activity.price)}</TableCell>
                    <TableCell>{activity.location}</TableCell>
                    <TableCell>{activity.homestay?.title || 'Not assigned'}</TableCell>
                    <TableCell>{activity.admin_users?.name || 'Not assigned'}</TableCell>
                    <TableCell>
                      <span className={`p-1 rounded-md text-white ${getColorStatus(activity.status)}`}>
                        {getStatus(activity.status)}
                      </span>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{getDifficultyLevel(activity.difficulty_level)}</TableCell>
                    <TableCell className="hidden md:table-cell">{totalBookings}</TableCell>
                    <TableCell className="hidden md:table-cell">{new Date(activity.created_at).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <EditActivityModal activity={activity} onSuccess={fetchActivities} />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </CardContent>
      <CardFooter>
        <form className="flex items-center w-full justify-between">
          <div className="text-xs text-muted-foreground">
            Showing{' '}
            <strong>
              {activities.length > 0 ? 1 : 0}-{Math.min(activities.length, totalActivities)}
            </strong>{' '}
            of <strong>{totalActivities}</strong> activities
          </div>
          <div className="flex">
            <Button
              formAction={prevPage}
              variant="ghost"
              size="sm"
              type="submit"
              disabled={offset === productsPerPage}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            <Button
              formAction={nextPage}
              variant="ghost"
              size="sm"
              type="submit"
              disabled={offset + productsPerPage > totalActivities}
            >
              Next
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
      </CardFooter>
    </Card>
  );
} 