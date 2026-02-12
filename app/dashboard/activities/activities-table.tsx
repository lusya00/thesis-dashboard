'use client';

import { Button } from '@/components/ui/button';
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { activities } from 'generated/prisma';
import { ChevronLeft, ChevronRight, Filter, Grid3X3, List, Loader2, Search, X } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { CreateActivityModal } from '../create-activity-modal';
import { EditActivityModal } from '../edit-activity-modal';

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
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table');

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
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
        <div>
          <CardTitle className="text-xl sm:text-2xl">Activities</CardTitle>
          <CardDescription className="text-sm sm:text-base">
            Manage your activities and view their information.
          </CardDescription>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex border rounded-md">
            <Button
              variant={viewMode === 'table' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('table')}
              className="rounded-r-none"
            >
              <List className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'cards' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('cards')}
              className="rounded-l-none"
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
          </div>
          <CreateActivityModal onSuccess={fetchActivities} />
        </div>
      </CardHeader>
      
      {/* Filtros */}
      <div className="px-4 sm:px-6 pb-4 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
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
            <SelectTrigger className="w-full sm:w-[150px]">
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
            <SelectTrigger className="w-full sm:w-[180px]">
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
            <SelectTrigger className="w-full sm:w-[150px]">
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
            <SelectTrigger className="w-full sm:w-[180px]">
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
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-600">
              <Filter className="h-4 w-4" />
              <span>Active filters:</span>
              {searchTerm && (
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                  Search: "{searchTerm}"
                </span>
              )}
              {statusFilter !== 'all' && (
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                  Status: {getStatus(statusFilter)}
                </span>
              )}
              {categoryFilter !== 'all' && (
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                  Category: {getCategory(categoryFilter)}
                </span>
              )}
              {difficultyFilter !== 'all' && (
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">
                  Difficulty: {getDifficultyLevel(difficultyFilter)}
                </span>
              )}
              {managerFilter !== 'all' && (
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs">
                  Manager: {uniqueManagers.find(m => m?.id?.toString() === managerFilter)?.name || 'Unassigned'}
                </span>
              )}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="text-gray-500 hover:text-gray-700 w-full sm:w-auto"
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
              <>
                {viewMode === 'table' ? (
                  <div className="w-full overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-12">Image</TableHead>
                          <TableHead className="min-w-[200px]">Title & Info</TableHead>
                          <TableHead className="hidden md:table-cell w-24">Price</TableHead>
                          <TableHead className="hidden lg:table-cell w-28">Category</TableHead>
                          <TableHead className="hidden lg:table-cell w-32">Location</TableHead>
                          <TableHead className="w-20">Status</TableHead>
                          <TableHead className="hidden md:table-cell w-24">Difficulty</TableHead>
                          <TableHead className="hidden xl:table-cell w-32">Manager</TableHead>
                          <TableHead className="hidden xl:table-cell w-24">Bookings</TableHead>
                          <TableHead className="w-20">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {paginatedActivities.map((activity) => {
                          const primaryImage = activity.activity_images?.find(img => img.is_primary) || activity.activity_images?.[0];
                          const totalBookings = getTotalBookings(activity.activity_bookings);
                          return (
                            <TableRow key={activity.id}>
                              <TableCell className="w-12">
                                {primaryImage ? (
                                  <Image
                                    src={primaryImage.img_url}
                                    width={40}
                                    height={40}
                                    alt="Activity image"
                                    className="w-8 h-8 object-cover rounded border"
                                  />
                                ) : (
                                  <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                                    <span className="text-gray-400 text-xs">-</span>
                                  </div>
                                )}
                              </TableCell>
                              <TableCell className="min-w-[200px]">
                                <div className="space-y-1">
                                  <div className="font-medium text-sm truncate">{activity.title}</div>
                                  <div className="text-xs text-gray-500 space-y-0.5">
                                    <div className="flex items-center gap-2">
                                      <span>ID: {activity.id}</span>
                                      <span>•</span>
                                      <span>{getCategory(activity.category)}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <span>{activity.location}</span>
                                      {activity.homestay?.title && (
                                        <>
                                          <span>•</span>
                                          <span className="truncate">{activity.homestay.title}</span>
                                        </>
                                      )}
                                    </div>
                                    <div className="text-xs text-gray-400">
                                      {new Date(activity.created_at).toLocaleDateString()}
                                    </div>
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell className="hidden md:table-cell w-24">
                                <div className="text-sm font-medium">IDR {String(activity.price)}</div>
                              </TableCell>
                              <TableCell className="hidden lg:table-cell w-28">
                                <div className="text-sm">{getCategory(activity.category)}</div>
                              </TableCell>
                              <TableCell className="hidden lg:table-cell w-32">
                                <div className="text-sm truncate">{activity.location}</div>
                              </TableCell>
                              <TableCell className="w-20">
                                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getColorStatus(activity.status)} text-white`}>
                                  {getStatus(activity.status)}
                                </span>
                              </TableCell>
                              <TableCell className="hidden md:table-cell w-24">
                                <div className="text-sm">{getDifficultyLevel(activity.difficulty_level)}</div>
                              </TableCell>
                              <TableCell className="hidden xl:table-cell w-32">
                                <div className="text-sm truncate">{activity.admin_users?.name || 'Not assigned'}</div>
                              </TableCell>
                              <TableCell className="hidden xl:table-cell w-24">
                                <div className="text-sm font-medium">{totalBookings}</div>
                              </TableCell>
                              <TableCell className="w-20">
                                <EditActivityModal activity={activity} onSuccess={fetchActivities} />
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {paginatedActivities.map((activity) => {
                      const primaryImage = activity.activity_images?.find(img => img.is_primary) || activity.activity_images?.[0];
                      const totalBookings = getTotalBookings(activity.activity_bookings);
                      return (
                        <Card key={activity.id} className="overflow-hidden">
                          <div className="aspect-video relative bg-gray-100">
                            {primaryImage ? (
                              <Image
                                src={primaryImage.img_url}
                                fill
                                alt="Activity image"
                                className="object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <span className="text-gray-400 text-sm">No image</span>
                              </div>
                            )}
                            <div className="absolute top-2 right-2">
                              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getColorStatus(activity.status)} text-white`}>
                                {getStatus(activity.status)}
                              </span>
                            </div>
                          </div>
                          <CardContent className="p-4">
                            <div className="space-y-2">
                              <div>
                                <h3 className="font-semibold text-sm truncate">{activity.title}</h3>
                                <p className="text-xs text-gray-500">{getCategory(activity.category)}</p>
                              </div>
                              <div className="text-sm">
                                <p className="font-medium">IDR {String(activity.price)}</p>
                                <p className="text-xs text-gray-500">{activity.location}</p>
                              </div>
                              <div className="flex items-center justify-between text-xs text-gray-500">
                                <span>{activity.admin_users?.name || 'Not assigned'}</span>
                                <span>{totalBookings} bookings</span>
                              </div>
                              <div className="pt-2">
                                <EditActivityModal activity={activity} onSuccess={fetchActivities} />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                )}
              </>
            )}
          </>
        )}
      </CardContent>
      
      {/* Paginación */}
      {filteredData.length > 0 && (
        <CardFooter>
          <div className="flex flex-col sm:flex-row items-center w-full justify-between space-y-3 sm:space-y-0">
            <div className="text-xs text-muted-foreground text-center sm:text-left">
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
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={prevPage}
                disabled={currentPage === 1}
                className="h-8 px-2 sm:px-3"
              >
                <ChevronLeft className="h-4 w-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Previous</span>
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
                      className="w-7 h-8 sm:w-8 p-0 text-xs sm:text-sm"
                    >
                      {pageNum}
                    </Button>
                  );
                })}
                {totalPages > 5 && (
                  <span className="px-1 sm:px-2 text-xs sm:text-sm text-gray-500">...</span>
                )}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className="h-8 px-2 sm:px-3"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="h-4 w-4 ml-1 sm:ml-2" />
              </Button>
            </div>
          </div>
        </CardFooter>
      )}
    </Card>
  );
} 