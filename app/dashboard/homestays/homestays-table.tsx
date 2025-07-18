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
import { ChevronLeft, ChevronRight, Loader2, Pencil, Bed, Search, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState, useMemo } from 'react';
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

export function HomestaysTable({
  offset = 0,
  productsPerPage = 10
}: {
  offset?: number;
  productsPerPage?: number;
}) {
  let router = useRouter();
  const [homestays, setHomestays] = useState<Homestay[]>([]);
  const [filteredHomestays, setFilteredHomestays] = useState<Homestay[]>([]);
  const [totalHomestays, setTotalHomestays] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  
  // Filtros
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [ownerFilter, setOwnerFilter] = useState<string>('all');
  const [userRole, setUserRole] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);

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

  const fetchHomestays = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/homestay');
      const data = await response.json();
      setHomestays(data);
      setTotalHomestays(data.length);
    } catch (error) {
      console.error('Error loading homestays:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Obtener propietarios únicos para el filtro
  const uniqueOwners = useMemo(() => {
    const owners = homestays.map(h => ({
      id: h.admin_users?.id,
      name: h.admin_users?.name,
      email: h.admin_users?.email
    })).filter((owner, index, self) => 
      index === self.findIndex(o => o.id === owner.id)
    );
    return owners;
  }, [homestays]);

  // Filtrar homestays
  const filteredData = useMemo(() => {
    let filtered = homestays;

    // Filtro por búsqueda de título
    if (searchTerm) {
      filtered = filtered.filter(homestay =>
        homestay.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        homestay.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtro por estado
    if (statusFilter !== 'all') {
      filtered = filtered.filter(homestay => homestay.status === statusFilter);
    }

    // Filtro por propietario
    if (ownerFilter !== 'all') {
      filtered = filtered.filter(homestay => 
        homestay.admin_users?.id.toString() === ownerFilter
      );
    }

    return filtered;
  }, [homestays, searchTerm, statusFilter, ownerFilter]);

  // Paginación
  const totalPages = Math.ceil(filteredData.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const paginatedHomestays = filteredData.slice(startIndex, endIndex);

  // Actualizar página cuando cambian los filtros
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, statusFilter, ownerFilter]);

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
    setOwnerFilter('all');
    setCurrentPage(1);
  };

  const hasActiveFilters = searchTerm || statusFilter !== 'all' || ownerFilter !== 'all';

  useEffect(() => {
    fetchHomestays();
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
        {userRole !== 'homestay_owner' && (
          <CreateHomestayModal onSuccess={fetchHomestays} />
        )}
        {userRole === 'homestay_owner' && (
          <CreateHomestayModal onSuccess={fetchHomestays} />
        )}
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
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          {/* Filtro por estado */}
          <Select value={statusFilter} onValueChange={setStatusFilter}>
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
          
          {/* Filtro por propietario */}
          <Select value={ownerFilter} onValueChange={setOwnerFilter}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Filter by owner" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Owners</SelectItem>
              {uniqueOwners.map((owner) => (
                <SelectItem key={owner.id} value={owner.id?.toString() || ''}>
                  {owner.name}
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
              {ownerFilter !== 'all' && (
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">
                  Owner: {uniqueOwners.find(o => o.id?.toString() === ownerFilter)?.name}
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
                  {paginatedHomestays.map((homestay) => (
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
                            onClick={() => router.push(`/homestays/${homestay.id}/edit`)}
                            title="Edit homestay"
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => router.push(`/homestays/${homestay.id}/edit?tab=rooms`)}
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
      {filteredData.length > 0 && (
        <CardFooter>
          <div className="flex items-center w-full justify-between">
            <div className="text-xs text-muted-foreground">
              Showing{' '}
              <strong>
                {startIndex + 1}-{Math.min(endIndex, filteredData.length)}
              </strong>{' '}
              of <strong>{filteredData.length}</strong> homestays
              {hasActiveFilters && (
                <span className="ml-2 text-gray-500">
                  (filtered from {totalHomestays} total)
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