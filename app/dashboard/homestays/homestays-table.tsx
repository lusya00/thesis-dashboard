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
import { ChevronLeft, ChevronRight, Loader2, Pencil, Bed, Search, Filter, X, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState, useCallback } from 'react';
import { homestay } from 'generated/prisma';
import { CreateHomestayModal } from '../create-homestay-modal';
import { EditHomestayModal } from '../edit-homestay-modal';
import Image from 'next/image';

interface Homestay extends homestay {
  admin_users: {
    id: number;
    name: string;
    email: string;
  };
  homestayImages?: Array<{
    id: number;
    img_url: string;
    is_primary: boolean;
    order: number;
  }>;
}

interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  pages: number;
}

export function HomestaysTable() {
  let router = useRouter();
  const [homestays, setHomestays] = useState<Homestay[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Filtros
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [ownerFilter, setOwnerFilter] = useState<string>('all');
  const [userRole, setUserRole] = useState<string>('');
  const [pagination, setPagination] = useState<PaginationInfo>({
    page: 1,
    limit: 10,
    total: 0,
    pages: 0
  });

  const getStatus = (status: string) => {
    if (status === 'active') return 'Active';
    if (status === 'inactive') return 'Inactive';
    if (status === 'pending') return 'Pending';
    if (status === 'deleted') return 'Deleted';
    return 'Unknown';
  }

  const getColorStatus = (status: string) => {
    if (status === 'active') return 'bg-green-500';
    if (status === 'inactive') return 'bg-red-500';
    if (status === 'pending') return 'bg-yellow-500';
    if (status === 'deleted') return 'bg-gray-500';
    return 'bg-gray-500';
  }

  // Function to fetch homestays with pagination and filters
  const fetchHomestays = useCallback(async (page = 1, search = '', status = '', owner = '', limit?: number) => {
    try {
      setIsLoading(true);
      const currentLimit = limit || pagination.limit;
      const params = new URLSearchParams({
        page: page.toString(),
        limit: currentLimit.toString()
      });
      
      if (search.trim()) {
        params.append('search', search.trim());
      }
      
      if (status && status !== 'all') {
        params.append('status', status);
      }

      if (owner && owner !== 'all') {
        params.append('owner', owner);
      }

      const response = await fetch(`/api/homestay?${params.toString()}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch homestays');
      }
      
      const data = await response.json();
      setHomestays(data.homestays);
      setPagination(data.pagination);
    } catch (error) {
      console.error('Error loading homestays:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Load homestays when component mounts
  useEffect(() => {
    fetchHomestays(1, searchTerm, statusFilter, ownerFilter);
  }, []);

  // Function to handle search with debounce
  const handleSearch = useCallback(async (search: string) => {
    setSearchTerm(search);
    await fetchHomestays(1, search, statusFilter, ownerFilter);
  }, [fetchHomestays, statusFilter, ownerFilter]);

  // Function to handle status filter
  const handleStatusFilter = useCallback(async (status: string) => {
    setStatusFilter(status);
    await fetchHomestays(1, searchTerm, status, ownerFilter);
  }, [fetchHomestays, searchTerm, ownerFilter]);

  // Function to handle owner filter
  const handleOwnerFilter = useCallback(async (owner: string) => {
    setOwnerFilter(owner);
    await fetchHomestays(1, searchTerm, statusFilter, owner);
  }, [fetchHomestays, searchTerm, statusFilter]);

  // Function to change page
  const handlePageChange = useCallback(async (page: number) => {
    await fetchHomestays(page, searchTerm, statusFilter, ownerFilter);
  }, [fetchHomestays, searchTerm, statusFilter, ownerFilter]);

  // Function to change limit per page
  const handleLimitChange = useCallback(async (limit: number) => {
    await fetchHomestays(1, searchTerm, statusFilter, ownerFilter, limit);
  }, [fetchHomestays, searchTerm, statusFilter, ownerFilter]);

  // Function to reload current data
  const reloadData = useCallback(async () => {
    await fetchHomestays(pagination.page, searchTerm, statusFilter, ownerFilter);
  }, [fetchHomestays, pagination.page, searchTerm, statusFilter, ownerFilter]);

  const clearFilters = () => {
    setSearchTerm('');
    setStatusFilter('all');
    setOwnerFilter('all');
    fetchHomestays(1, '', 'all', 'all');
  };

  const hasActiveFilters = searchTerm || statusFilter !== 'all' || ownerFilter !== 'all';

  // Generate array of pages to display
  const getPageNumbers = () => {
    const pages = [];
    const currentPage = pagination.page;
    const totalPages = pagination.pages;
    
    // Show maximum 5 pages
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);
    
    if (endPage - startPage < 4) {
      if (startPage === 1) {
        endPage = Math.min(totalPages, startPage + 4);
      } else {
        startPage = Math.max(1, endPage - 4);
      }
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return pages;
  };

  useEffect(() => {
    // Get user role from session
    fetch('/api/auth/session')
      .then(res => res.json())
      .then(data => {
        if (data.user) {
          setUserRole(data.user.role);
        }
      })
      .catch(err => console.error('Error fetching user role:', err));
  }, []);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>
            {userRole === 'homestay_owner' ? 'My Homestays' : 'Homestays'}
          </CardTitle>
          <CardDescription>
            {userRole === 'homestay_owner' 
              ? 'Manage your homestays and view their information.'
              : 'Manage all homestays and view their information.'
            }
          </CardDescription>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => reloadData()}
            disabled={isLoading}
          >
            <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
          {userRole !== 'homestay_owner' && (
            <CreateHomestayModal onSuccess={reloadData} />
          )}
          {userRole === 'homestay_owner' && (
            <CreateHomestayModal onSuccess={reloadData} />
          )}
        </div>
      </CardHeader>
      
      {/* Filtros */}
      <div className="px-6 pb-4 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Búsqueda */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search by title or location..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          
          {/* Filtro por estado */}
          <Select value={statusFilter} onValueChange={handleStatusFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="deleted">Deleted</SelectItem>
            </SelectContent>
          </Select>
          
          {/* Filtro por propietario - solo para super_admin y activity_manager */}
          {userRole !== 'homestay_owner' && (
            <Select value={ownerFilter} onValueChange={handleOwnerFilter}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="Filter by owner" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Owners</SelectItem>
                {/* Los propietarios se cargarán dinámicamente si es necesario */}
              </SelectContent>
            </Select>
          )}

          {/* Selector de elementos por página */}
          <Select value={pagination.limit.toString()} onValueChange={(value) => handleLimitChange(parseInt(value))}>
            <SelectTrigger className="w-[120px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5 per page</SelectItem>
              <SelectItem value="10">10 per page</SelectItem>
              <SelectItem value="20">20 per page</SelectItem>
              <SelectItem value="50">50 per page</SelectItem>
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
              {ownerFilter !== 'all' && (
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">
                  Owner: {ownerFilter}
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

        {/* Results information */}
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <span>
            Showing {((pagination.page - 1) * pagination.limit) + 1} - {Math.min(pagination.page * pagination.limit, pagination.total)} of {pagination.total} homestays
          </span>
          {searchTerm && (
            <span>Results for: "{searchTerm}"</span>
          )}
        </div>
      </div>
      
      <CardContent>
        {isLoading ? (
          <div className="flex justify-center items-center h-40">
            <Loader2 className="h-4 w-4 animate-spin mr-2" />
            <p>Loading...</p>
          </div>
        ) : (
          <>
            {homestays.length === 0 ? (
              <div className="text-center py-12">
                <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {hasActiveFilters ? 'No homestays found' : 'No homestays available'}
                </h3>
                <p className="text-gray-500 mb-4">
                  {hasActiveFilters 
                    ? 'Try adjusting your search criteria or filters.'
                    : 'Start by creating your first homestay.'
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
                    <TableHead>Title</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Owner</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="hidden md:table-cell">Price</TableHead>
                    <TableHead className="hidden md:table-cell">Guests</TableHead>
                    <TableHead className="hidden md:table-cell">Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {homestays.map((homestay) => (
                    <TableRow key={homestay.id}>
                      <TableCell>{homestay.id}</TableCell>
                      <TableCell className="font-medium">{homestay.title}</TableCell>
                      <TableCell>{homestay.location}</TableCell>
                      <TableCell>{homestay.admin_users?.name}</TableCell>
                      <TableCell>{homestay.admin_users?.email}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getColorStatus(homestay.status)} text-white`}>
                          {getStatus(homestay.status)}
                        </span>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {homestay.base_price ? `IDR ${homestay.base_price}` : '-'}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {homestay.max_guests || '-'}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {new Date(homestay.created_at).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => router.push(`/dashboard/homestays/${homestay.id}/edit`)}
                            title="Edit homestay"
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => router.push(`/dashboard/homestays/${homestay.id}/edit?tab=rooms`)}
                            title="Manage rooms"
                          >
                            <Bed className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </>
        )}
      </CardContent>
      
      {/* Paginación */}
      {pagination.pages > 1 && (
        <CardFooter>
          <div className="flex items-center w-full justify-between">
            <div className="text-sm text-muted-foreground">
              Page {pagination.page} of {pagination.pages}
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(pagination.page - 1)}
                disabled={pagination.page <= 1}
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
              
              {getPageNumbers().map((pageNum) => (
                <Button
                  key={pageNum}
                  variant={pageNum === pagination.page ? "default" : "outline"}
                  size="sm"
                  onClick={() => handlePageChange(pageNum)}
                  className="w-8 h-8 p-0"
                >
                  {pageNum}
                </Button>
              ))}
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(pagination.page + 1)}
                disabled={pagination.page >= pagination.pages}
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardFooter>
      )}
    </Card>
  );
} 