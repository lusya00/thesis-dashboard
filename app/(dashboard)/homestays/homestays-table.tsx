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
import { ChevronLeft, ChevronRight, Loader2, Pencil, Bed } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { homestay } from 'generated/prisma';
import { CreateHomestayModal } from '../create-homestay-modal';

interface Homestay extends homestay {
  admin_users: {
    id: number;
    name: string;
    email: string;
  }
}

export function HomestaysTable({
  offset = 0,
  productsPerPage = 5
}: {
  offset?: number;
  productsPerPage?: number;
}) {
  let router = useRouter();
  const [homestays, setHomestays] = useState<Homestay[]>([]);
  const [totalHomestays, setTotalHomestays] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

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

  function prevPage() {
    router.back();
  }

  function nextPage() {
    router.push(`/?offset=${offset}`, { scroll: false });
  }

  useEffect(() => {
    fetchHomestays();
  }, []);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Homestays</CardTitle>
          <CardDescription>
            Manage your homestays and view their information.
          </CardDescription>
        </div>
        <CreateHomestayModal onSuccess={fetchHomestays} />
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
                  <TableCell>{homestay.title}</TableCell>
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
      </CardContent>
      <CardFooter>
        <form className="flex items-center w-full justify-between">
          <div className="text-xs text-muted-foreground">
            Showing{' '}
            <strong>
              {homestays.length > 0 ? 1 : 0}-{Math.min(homestays.length, totalHomestays)}
            </strong>{' '}
            of <strong>{totalHomestays}</strong> homestays
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
              disabled={offset + productsPerPage > totalHomestays}
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