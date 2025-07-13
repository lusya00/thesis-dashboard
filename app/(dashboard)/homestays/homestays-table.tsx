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
import { homestay } from 'generated/prisma';
import { CreateHomestayModal } from '../create-homestay-modal';
<<<<<<< HEAD
import { EditHomestayModal } from '../edit-homestay-modal';
import Image from 'next/image';

=======
>>>>>>> 3ce8fad9b489bb548cea1d9ceba3a791e9dfaae9

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
                <TableHead>Imagen</TableHead>
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
              {homestays.map((homestay) => {
                const primaryImage = homestay.homestayImages?.find(img => img.is_primary) || homestay.homestayImages?.[0];
                return (
                  <TableRow key={homestay.id}>
                    <TableCell>{homestay.id}</TableCell>
                    <TableCell>
                      {primaryImage ? (
                        <Image
                          src={primaryImage.img_url}
                          width={100}
                          height={100}
                          alt="Imagen del homestay"
                          className="w-12 h-12 object-cover rounded-lg border"
                        />
                      ) : (
                        <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                          <span className="text-gray-400 text-xs">Sin imagen</span>
                        </div>
                      )}
                    </TableCell>
                    <TableCell>{homestay.title}</TableCell>
                    <TableCell>{homestay.location}</TableCell>
                    <TableCell>{homestay.admin_users.name}</TableCell>
                    <TableCell>{homestay.admin_users.email}</TableCell>
                    <TableCell>
                      <span className={`p-1 rounded-md text-white ${getColorStatus(homestay.status)}`}>{getStatus(homestay.status)}</span>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">IDR {String(homestay.base_price)}</TableCell>
                    <TableCell className="hidden md:table-cell">{homestay.max_guests}</TableCell>
                    <TableCell className="hidden md:table-cell">{new Date(homestay.created_at).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <EditHomestayModal homestay={homestay} onSuccess={fetchHomestays} />
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