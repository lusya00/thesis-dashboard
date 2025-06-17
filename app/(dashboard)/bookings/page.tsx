'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Eye, CheckCircle, XCircle, Clock, User, ClipboardList, Calendar, CreditCard, FileText, Star } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { booking_status } from 'generated/prisma';

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
  const [selectedTab, setSelectedTab] = useState('all');

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
    if (selectedTab === 'all') return true;
    return booking.status === selectedTab;
  });

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

        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="confirmed">Confirmed</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>

          <TabsContent value={selectedTab}>
            <div className="grid gap-4">
              {filteredBookings.map((booking) => (
                <Card key={booking.id}>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">Booking #{booking.booking_number}</h3>
                        <p className="text-sm text-gray-500">
                          {booking.homestayRoom.homestay.title} - {booking.homestayRoom.title}
                          {booking.homestayRoom.room_number && ` (${booking.homestayRoom.room_number})`}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                          {getStatusIcon(booking.status)}
                          <span className="ml-1">{booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}</span>
                        </span>
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
                                    <p className="flex items-center">
                                      <span className="font-medium w-24">Name:</span>
                                      <span>{booking.landing_page_user?.name || 'N/A'}</span>
                                    </p>
                                    <p className="flex items-center">
                                      <span className="font-medium w-24">Email:</span>
                                      <span>{booking.landing_page_user?.email || 'N/A'}</span>
                                    </p>
                                    <p className="flex items-center">
                                      <span className="font-medium w-24">Phone:</span>
                                      <span>{booking.landing_page_user?.phone_number || 'N/A'}</span>
                                    </p>
                                  </div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                                    <ClipboardList className="h-5 w-5 mr-2" />
                                    Booking Information
                                  </h4>
                                  <div className="space-y-2">
                                    <p className="flex items-center">
                                      <span className="font-medium w-24">Number:</span>
                                      <span>{booking.booking_number}</span>
                                    </p>
                                    <p className="flex items-center">
                                      <span className="font-medium w-24">Status:</span>
                                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                                        {getStatusIcon(booking.status)}
                                        <span className="ml-1">{booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}</span>
                                      </span>
                                    </p>
                                    <p className="flex items-center">
                                      <span className="font-medium w-24">Guests:</span>
                                      <span>{booking.number_of_guests}</span>
                                    </p>
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
                                    <p className="flex items-center">
                                      <span className="font-medium w-32">Check-in:</span>
                                      <span>{new Date(booking.start_date).toLocaleDateString()}</span>
                                    </p>
                                    {booking.check_in_time && (
                                      <p className="flex items-center">
                                        <span className="font-medium w-32">Check-in Time:</span>
                                        <span>{new Date(booking.check_in_time).toLocaleTimeString()}</span>
                                      </p>
                                    )}
                                  </div>
                                  <div className="space-y-2">
                                    <p className="flex items-center">
                                      <span className="font-medium w-32">Check-out:</span>
                                      <span>{new Date(booking.end_date).toLocaleDateString()}</span>
                                    </p>
                                    {booking.check_out_time && (
                                      <p className="flex items-center">
                                        <span className="font-medium w-32">Check-out Time:</span>
                                        <span>{new Date(booking.check_out_time).toLocaleTimeString()}</span>
                                      </p>
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
                                    <div className={`px-3 py-1 rounded-full ${booking.is_paid ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                      {booking.is_paid ? 'Paid' : 'Unpaid'}
                                    </div>
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
                                                  {new Date(payment.payment_date).toLocaleString()}
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
                                      Cancelled at: {new Date(booking.cancelled_at!).toLocaleString()}
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
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium">Location:</span>{' '}
                        {booking.homestayRoom.homestay.location}
                      </div>
                      <div>
                        <span className="font-medium">Total Price:</span>{' '}
                        {booking.total_price} {booking.homestayRoom.currency}
                      </div>
                      <div>
                        <span className="font-medium">Guests:</span>{' '}
                        {booking.number_of_guests}
                      </div>
                      <div>
                        <span className="font-medium">Payment Status:</span>{' '}
                        <span className={booking.is_paid ? 'text-green-600' : 'text-red-600'}>
                          {booking.is_paid ? 'Paid' : 'Unpaid'}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 