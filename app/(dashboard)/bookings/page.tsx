'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Loader2, Eye, CheckCircle, XCircle, Clock, User, ClipboardList, Calendar, CreditCard, FileText, Star, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { booking_status } from 'generated/prisma';
import { format } from 'date-fns';

interface Booking {
  id: number;
  start_date: string;
  end_date: string;
  room_id: number;
  status: booking_status;
  is_paid: boolean;
  user_id: number | null;
  booking_number: string;
  total_price: number;
  payment_method: string | null;
  check_in_time: string | null;
  check_out_time: string | null;
  number_of_guests: number;
  notes: string | null;
  special_requests: string | null;
  cancellation_reason: string | null;
  cancelled_at: string | null;
  created_at: string;
  updated_at: string;
  homestayRoom: {
    id: number;
    title: string;
    room_number: string | null;
    currency: string;
    homestay: {
      id: number;
      title: string;
      location: string;
    };
  };
  landing_page_user: {
    id: number;
    name: string;
    email: string;
    phone_number: string;
  } | null;
  payments: {
    id: number;
    amount: number;
    currency: string;
    payment_method: string;
    payment_status: string;
    transaction_id: string | null;
    payment_date: string;
  }[];
}

export default function BookingsPage() {
  const router = useRouter();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<booking_status | 'all'>('all');
  const [paymentFilter, setPaymentFilter] = useState<'all' | 'paid' | 'unpaid'>('all');
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch('/api/bookings');
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      console.error('Error loading bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (bookingId: number, newStatus: booking_status) => {
    try {
      const response = await fetch(`/api/bookings/${bookingId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: newStatus })
      });

      if (!response.ok) {
        throw new Error('Error updating booking status');
      }

      fetchBookings();
    } catch (error) {
      console.error('Error updating booking status:', error);
    }
  };

  const getStatusColor = (status: booking_status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: booking_status) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-4 w-4" />;
      case 'confirmed':
        return <CheckCircle className="h-4 w-4" />;
      case 'cancelled':
        return <XCircle className="h-4 w-4" />;
      case 'completed':
        return <CheckCircle className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = 
      booking.booking_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.homestayRoom.homestay.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.homestayRoom.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.landing_page_user?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.landing_page_user?.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'all' || booking.status === statusFilter;
    const matchesPayment = paymentFilter === 'all' || 
      (paymentFilter === 'paid' && booking.is_paid) || 
      (paymentFilter === 'unpaid' && !booking.is_paid);

    return matchesSearch && matchesStatus && matchesPayment;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredBookings.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentBookings = filteredBookings.slice(startIndex, endIndex);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, statusFilter, paymentFilter]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Bookings</h1>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search bookings..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={statusFilter} onValueChange={(value: booking_status | 'all') => setStatusFilter(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
              <Select value={paymentFilter} onValueChange={(value: 'all' | 'paid' | 'unpaid') => setPaymentFilter(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by payment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Payments</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
                  <SelectItem value="unpaid">Unpaid</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Booking #</TableHead>
                  <TableHead>Guest</TableHead>
                  <TableHead>Homestay</TableHead>
                  <TableHead>Room</TableHead>
                  <TableHead>Check-in</TableHead>
                  <TableHead>Check-out</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Payment</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentBookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell className="font-medium">{booking.booking_number}</TableCell>
                    <TableCell>
                      {booking.landing_page_user ? (
                        <div>
                          <div>{booking.landing_page_user.name}</div>
                          <div className="text-sm text-gray-500">{booking.landing_page_user.email}</div>
                        </div>
                      ) : (
                        'N/A'
                      )}
                    </TableCell>
                    <TableCell>{booking.homestayRoom.homestay.title}</TableCell>
                    <TableCell>
                      {booking.homestayRoom.title}
                      {booking.homestayRoom.room_number && ` (${booking.homestayRoom.room_number})`}
                    </TableCell>
                    <TableCell>{format(new Date(booking.start_date), 'MMM d, yyyy')}</TableCell>
                    <TableCell>{format(new Date(booking.end_date), 'MMM d, yyyy')}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(booking.status)}>
                        {getStatusIcon(booking.status)}
                        <span className="ml-1">{booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}</span>
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={booking.is_paid ? "default" : "destructive"}>
                        {booking.is_paid ? 'Paid' : 'Unpaid'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {booking.total_price} {booking.homestayRoom.currency}
                    </TableCell>
                    <TableCell>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" onClick={() => setSelectedBooking(booking)}>
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-bold">Booking Details</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                              <div className="bg-gray-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-lg mb-3 flex items-center">
                                  <User className="h-5 w-5 mr-2" />
                                  Guest Information
                                </h4>
                                <div className="space-y-2">
                                  <div className="flex items-center">
                                    <span className="font-medium w-24">Name:</span>
                                    <span>{booking.landing_page_user?.name || 'N/A'}</span>
                                  </div>
                                  <div className="flex items-center">
                                    <span className="font-medium w-24">Email:</span>
                                    <span>{booking.landing_page_user?.email || 'N/A'}</span>
                                  </div>
                                  <div className="flex items-center">
                                    <span className="font-medium w-24">Phone:</span>
                                    <span>{booking.landing_page_user?.phone_number || 'N/A'}</span>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-gray-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-lg mb-3 flex items-center">
                                  <ClipboardList className="h-5 w-5 mr-2" />
                                  Booking Information
                                </h4>
                                <div className="space-y-2">
                                  <div className="flex items-center">
                                    <span className="font-medium w-24">Number:</span>
                                    <span>{booking.booking_number}</span>
                                  </div>
                                  <div className="flex items-center">
                                    <span className="font-medium w-24">Status:</span>
                                    <Badge className={getStatusColor(booking.status)}>
                                      {getStatusIcon(booking.status)}
                                      <span className="ml-1">{booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}</span>
                                    </Badge>
                                  </div>
                                  <div className="flex items-center">
                                    <span className="font-medium w-24">Guests:</span>
                                    <span>{booking.number_of_guests}</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg">
                              <h4 className="font-semibold text-lg mb-3 flex items-center">
                                <Calendar className="h-5 w-5 mr-2" />
                                Dates
                              </h4>
                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <div className="flex items-center">
                                    <span className="font-medium w-32">Check-in:</span>
                                    <span>{format(new Date(booking.start_date), 'MMM d, yyyy')}</span>
                                  </div>
                                  {booking.check_in_time && (
                                    <div className="flex items-center">
                                      <span className="font-medium w-32">Check-in Time:</span>
                                      <span>{format(new Date(booking.check_in_time), 'h:mm a')}</span>
                                    </div>
                                  )}
                                </div>
                                <div className="space-y-2">
                                  <div className="flex items-center">
                                    <span className="font-medium w-32">Check-out:</span>
                                    <span>{format(new Date(booking.end_date), 'MMM d, yyyy')}</span>
                                  </div>
                                  {booking.check_out_time && (
                                    <div className="flex items-center">
                                      <span className="font-medium w-32">Check-out Time:</span>
                                      <span>{format(new Date(booking.check_out_time), 'h:mm a')}</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg">
                              <h4 className="font-semibold text-lg mb-3 flex items-center">
                                <CreditCard className="h-5 w-5 mr-2" />
                                Payment Information
                              </h4>
                              <div className="space-y-4">
                                <div className="flex items-center justify-between p-3 bg-white rounded-md">
                                  <div>
                                    <p className="font-medium">Total Price</p>
                                    <p className="text-2xl font-bold text-primary">
                                      {booking.total_price} {booking.homestayRoom.currency}
                                    </p>
                                  </div>
                                  <Badge variant={booking.is_paid ? "default" : "destructive"}>
                                    {booking.is_paid ? 'Paid' : 'Unpaid'}
                                  </Badge>
                                </div>
                                
                                {booking.payments.length > 0 && (
                                  <div>
                                    <h5 className="font-medium mb-2">Payment History</h5>
                                    <div className="space-y-2">
                                      {booking.payments.map((payment) => (
                                        <div key={payment.id} className="bg-white p-3 rounded-md">
                                          <div className="flex justify-between items-center">
                                            <div>
                                              <p className="font-medium">{payment.amount} {payment.currency}</p>
                                              <p className="text-sm text-gray-500">{payment.payment_method}</p>
                                            </div>
                                            <div className="text-right">
                                              <p className={`text-sm ${payment.payment_status === 'completed' ? 'text-green-600' : 'text-yellow-600'}`}>
                                                {payment.payment_status}
                                              </p>
                                              <p className="text-xs text-gray-500">
                                                {format(new Date(payment.payment_date), 'MMM d, yyyy h:mm a')}
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>

                            {booking.notes && (
                              <div className="bg-gray-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-lg mb-3 flex items-center">
                                  <FileText className="h-5 w-5 mr-2" />
                                  Notes
                                </h4>
                                <p className="text-gray-700">{booking.notes}</p>
                              </div>
                            )}

                            {booking.special_requests && (
                              <div className="bg-gray-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-lg mb-3 flex items-center">
                                  <Star className="h-5 w-5 mr-2" />
                                  Special Requests
                                </h4>
                                <p className="text-gray-700">{booking.special_requests}</p>
                              </div>
                            )}

                            {booking.cancellation_reason && (
                              <div className="bg-gray-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-lg mb-3 flex items-center">
                                  <XCircle className="h-5 w-5 mr-2" />
                                  Cancellation Details
                                </h4>
                                <div className="space-y-2">
                                  <p className="text-gray-700">{booking.cancellation_reason}</p>
                                  <p className="text-sm text-gray-500">
                                    Cancelled at: {format(new Date(booking.cancelled_at!), 'MMM d, yyyy h:mm a')}
                                  </p>
                                </div>
                              </div>
                            )}

                            <div className="flex justify-end space-x-2 pt-4">
                              {booking.status === 'pending' && (
                                <>
                                  <Button
                                    variant="outline"
                                    onClick={() => handleStatusChange(booking.id, 'cancelled')}
                                    className="text-red-600 hover:text-red-700"
                                  >
                                    Cancel
                                  </Button>
                                  <Button
                                    onClick={() => handleStatusChange(booking.id, 'confirmed')}
                                    className="bg-green-600 hover:bg-green-700"
                                  >
                                    Confirm
                                  </Button>
                                </>
                              )}
                              {booking.status === 'confirmed' && (
                                <Button
                                  onClick={() => handleStatusChange(booking.id, 'completed')}
                                  className="bg-blue-600 hover:bg-blue-700"
                                >
                                  Mark as Completed
                                </Button>
                              )}
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {/* Pagination Controls */}
            <div className="flex items-center justify-between px-4 py-3 border-t">
              <div className="flex items-center gap-2">
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">{startIndex + 1}</span> to{' '}
                  <span className="font-medium">
                    {Math.min(endIndex, filteredBookings.length)}
                  </span>{' '}
                  of <span className="font-medium">{filteredBookings.length}</span> results
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>
                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      className="w-8 h-8"
                    >
                      {page}
                    </Button>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 