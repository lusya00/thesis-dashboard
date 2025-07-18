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
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, Loader2, Pencil, Search, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState, useMemo } from 'react';
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
  productsPerPage = 10
}: {
  productsPerPage?: number;
}) {
  let router = useRouter();
  const [activities, setActivities] = useState<Activity[]>([]);
  const [filteredActivities, setFilteredActivities] = useState<Activity[]>([]);
  const [totalActivities, setTotalActivities] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  
  // Filtros
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
  const [managerFilter, setManagerFilter] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);

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
      setActivities(data);
      setTotalActivities(data.length);
    } catch (error) {
      console.error('Error loading activities:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Obtener managers únicos para el filtro
  const uniqueManagers = useMemo(() => {
    const managers = activities
      .map(a => a.admin_users)
      .filter(manager => manager)
      .filter((manager, index, self) => 
        index === self.findIndex(m => m?.id === manager?.id)
      );
    return managers;
  }, [activities]);

  // Obtener categorías únicas para el filtro
  const uniqueCategories = useMemo(() => {
    const categories = activities
      .map(a => a.category)
      .filter((category, index, self) => index === self.indexOf(category));
    return categories;
  }, [activities]);

  // Filtrar activities
  const filteredData = useMemo(() => {
    let filtered = activities;

    // Filtro por búsqueda de título
    if (searchTerm) {
      filtered = filtered.filter(activity =>
        activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        activity.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        activity.homestay?.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtro por estado
    if (statusFilter !== 'all') {
      filtered = filtered.filter(activity => activity.status === statusFilter);
    }

    // Filtro por categoría
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(activity => activity.category === categoryFilter);
    }

    // Filtro por dificultad
    if (difficultyFilter !== 'all') {
      filtered = filtered.filter(activity => activity.difficulty_level === difficultyFilter);
    }

    // Filtro por manager
    if (managerFilter !== 'all') {
      filtered = filtered.filter(activity => 
        activity.admin_users?.id.toString() === managerFilter
      );
    }

    return filtered;
  }, [activities, searchTerm, statusFilter, categoryFilter, difficultyFilter, managerFilter]);

  // Paginación
  const totalPages = Math.ceil(filteredData.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const paginatedActivities = filteredData.slice(startIndex, endIndex);

  // Actualizar página cuando cambian los filtros
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, statusFilter, categoryFilter, difficultyFilter, managerFilter]);

  function prevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  const clearFilters = () => {
    setSearchTerm('');
    setStatusFilter('all');
    setCategoryFilter('all');
    setDifficultyFilter('all');
    setManagerFilter('all');
    setCurrentPage(1);
  };

  const hasActiveFilters = searchTerm || statusFilter !== 'all' || categoryFilter !== 'all' || 
                          difficultyFilter !== 'all' || managerFilter !== 'all';

  const getTotalBookings = (bookings: Activity['activity_bookings']) => {
    return bookings?.reduce((total, booking) => total + booking.participant_count, 0) || 0;
  };

  useEffect(() => {
    fetchActivities();
  }, []);

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
      
      {/* Filtros */}
      <div className="px-6 pb-4 space-y-4">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Búsqueda */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search by title, location or homestay..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          {/* Filtro por estado */}
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full lg:w-[150px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="suspended">Suspended</SelectItem>
            </SelectContent>
          </Select>
          
          {/* Filtro por categoría */}
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full lg:w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {uniqueCategories.map((category) => (
                <SelectItem key={category} value={category}>
                  {getCategory(category)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          {/* Filtro por dificultad */}
          <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
            <SelectTrigger className="w-full lg:w-[150px]">
              <SelectValue placeholder="Difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="easy">Easy</SelectItem>
              <SelectItem value="moderate">Moderate</SelectItem>
              <SelectItem value="challenging">Challenging</SelectItem>
              <SelectItem value="expert">Expert</SelectItem>
            </SelectContent>
          </Select>
          
          {/* Filtro por manager */}
          <Select value={managerFilter} onValueChange={setManagerFilter}>
            <SelectTrigger className="w-full lg:w-[180px]">
              <SelectValue placeholder="Manager" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Managers</SelectItem>
              {uniqueManagers.map((manager) => (
                <SelectItem key={manager?.id} value={manager?.id?.toString() || ''}>
                  {manager?.name || 'Unassigned'}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        {/* Mostrar filtros activos */}
        {hasActiveFilters && (
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Filter className="h-4 w-4" />
              <span>Active filters:</span>
              {searchTerm && (
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  Search: "{searchTerm}"
                </span>
              )}
              {statusFilter !== 'all' && (
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                  Status: {getStatus(statusFilter)}
                </span>
              )}
              {categoryFilter !== 'all' && (
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">
                  Category: {getCategory(categoryFilter)}
                </span>
              )}
              {difficultyFilter !== 'all' && (
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">
                  Difficulty: {getDifficultyLevel(difficultyFilter)}
                </span>
              )}
              {managerFilter !== 'all' && (
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded">
                  Manager: {uniqueManagers.find(m => m?.id?.toString() === managerFilter)?.name || 'Unassigned'}
                </span>
              )}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-4 w-4 mr-1" />
              Clear filters
            </Button>
          </div>
        )}
      </div>
      
      <CardContent>
        {isLoading ? (
          <div className="flex justify-center items-center h-40">
            <Loader2 className="h-4 w-4 animate-spin mr-2" />
            <p>Loading...</p>
          </div>
        ) : (
          <>
            {filteredData.length === 0 ? (
              <div className="text-center py-12">
                <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {hasActiveFilters ? 'No activities found' : 'No activities available'}
                </h3>
                <p className="text-gray-500 mb-4">
                  {hasActiveFilters 
                    ? 'Try adjusting your search criteria or filters.'
                    : 'Start by creating your first activity.'
                  }
                </p>
                {hasActiveFilters && (
                  <Button onClick={clearFilters} variant="outline">
                    Clear all filters
                  </Button>
                )}
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
                  {paginatedActivities.map((activity) => {
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
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getColorStatus(activity.status)} text-white`}>
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
          </>
        )}
      </CardContent>
      
      {/* Paginación */}
      {filteredData.length > 0 && (
        <CardFooter>
          <div className="flex items-center w-full justify-between">
            <div className="text-xs text-muted-foreground">
              Showing{' '}
              <strong>
                {startIndex + 1}-{Math.min(endIndex, filteredData.length)}
              </strong>{' '}
              of <strong>{filteredData.length}</strong> activities
              {hasActiveFilters && (
                <span className="ml-2 text-gray-500">
                  (filtered from {totalActivities} total)
                </span>
              )}
            </div>
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={prevPage}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              <div className="flex items-center space-x-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  const pageNum = i + 1;
                  return (
                    <Button
                      key={pageNum}
                      variant={currentPage === pageNum ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setCurrentPage(pageNum)}
                      className="w-8 h-8 p-0"
                    >
                      {pageNum}
                    </Button>
                  );
                })}
                {totalPages > 5 && (
                  <span className="px-2 text-sm text-gray-500">...</span>
                )}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={nextPage}
                disabled={currentPage === totalPages}
              >
                Next
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardFooter>
      )}
    </Card>
  );
} 