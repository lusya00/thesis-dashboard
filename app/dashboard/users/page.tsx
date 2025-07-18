'use client';	

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  PlusCircle, 
  Search, 
  Edit, 
  Trash2, 
  Eye,
  ChevronDown,
  Check,
  X,
  MoreHorizontal,
  Lock,
  ChevronLeft,
  ChevronRight,
  Filter,
  RefreshCw
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState, useCallback } from 'react';
import { admin_users, user_role } from 'generated/prisma';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  pages: number;
}

export default function UsersPage() {
    const router = useRouter();
    const [users, setUsers] = useState<admin_users[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRole, setSelectedRole] = useState<string>('all');
    const [pagination, setPagination] = useState<PaginationInfo>({
        page: 1,
        limit: 10,
        total: 0,
        pages: 0
    });
    const [actionInProgress, setActionInProgress] = useState<number | null>(null);
    const [changePasswordModal, setChangePasswordModal] = useState<{ open: boolean; userId: number | null; userName: string }>({
        open: false,
        userId: null,
        userName: ''
    });
    const [passwordData, setPasswordData] = useState({
        newPassword: '',
        confirmPassword: ''
    });
    const [passwordLoading, setPasswordLoading] = useState(false);

    // Function to fetch users with pagination and filters
    const fetchUsers = useCallback(async (page = 1, search = '', role = '', limit?: number) => {
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
            
            if (role && role !== 'all') {
                params.append('role', role);
            }

            const response = await fetch(`/api/users?${params.toString()}`);
            
            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }
            
            const data = await response.json();
            setUsers(data.users);
            setPagination(data.pagination);
        } catch (error) {
            console.error('Error loading users:', error);
            toast.error('Error loading users');
        } finally {
            setIsLoading(false);
        }
    }, []);

    // Load users when component mounts
    useEffect(() => {
        fetchUsers(1, searchTerm, selectedRole);
    }, []);

    // Function to handle search with debounce
    const handleSearch = useCallback(async (search: string) => {
        setSearchTerm(search);
        await fetchUsers(1, search, selectedRole);
    }, [fetchUsers, selectedRole]);

    // Function to handle role filter
    const handleRoleFilter = useCallback(async (role: string) => {
        setSelectedRole(role);
        await fetchUsers(1, searchTerm, role);
    }, [fetchUsers, searchTerm]);

    // Function to change page
    const handlePageChange = useCallback(async (page: number) => {
        await fetchUsers(page, searchTerm, selectedRole);
    }, [fetchUsers, searchTerm, selectedRole]);

    // Function to change limit per page
    const handleLimitChange = useCallback(async (limit: number) => {
        await fetchUsers(1, searchTerm, selectedRole, limit);
    }, [fetchUsers, searchTerm, selectedRole]);

    // Function to reload current data
    const reloadData = useCallback(async () => {
        await fetchUsers(pagination.page, searchTerm, selectedRole);
    }, [fetchUsers, pagination.page, searchTerm, selectedRole]);

    const handleDelete = async (id: number) => {
        if (!confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
            return;
        }

        try {
            setActionInProgress(id);
            
            const response = await fetch(`/api/users?id=${id}`, { 
                method: 'DELETE' 
            });

            if (!response.ok) {
                throw new Error('Failed to delete user');
            }
            
            toast.success('User deleted successfully');
            // Reload current page
            await reloadData();
        } catch (error) {
            console.error('Error deleting user:', error);
            toast.error('Error deleting user');
        } finally {
            setActionInProgress(null);
        }
    };

    const toggleUserStatus = async (user: admin_users) => {
        try {
            setActionInProgress(user.id);
            
            const response = await fetch(`/api/users?id=${user.id}`, { 
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ is_active: !user.is_active })
            });

            if (!response.ok) {
                throw new Error('Failed to update user status');
            }
            
            toast.success(`User ${user.is_active ? 'deactivated' : 'activated'} successfully`);
            // Reload current page
            await reloadData();
        } catch (error) {
            console.error('Error updating user status:', error);
            toast.error('Error updating user status');
        } finally {
            setActionInProgress(null);
        }
    };

    const handleChangePassword = async () => {
        if (!changePasswordModal.userId) return;
        
        if (passwordData.newPassword !== passwordData.confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        if (passwordData.newPassword.length < 6) {
            toast.error('Password must be at least 6 characters long');
            return;
        }

        try {
            setPasswordLoading(true);
            
            const response = await fetch(`/api/users/${changePasswordModal.userId}/password`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    password: passwordData.newPassword
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to change password');
            }

            toast.success('Password changed successfully');
            setChangePasswordModal({ open: false, userId: null, userName: '' });
            setPasswordData({ newPassword: '', confirmPassword: '' });
        } catch (error) {
            console.error('Error changing password:', error);
            toast.error('Error changing password');
        } finally {
            setPasswordLoading(false);
        }
    };

    const openChangePasswordModal = (user: admin_users) => {
        setChangePasswordModal({
            open: true,
            userId: user.id,
            userName: user.name
        });
    };

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

    return (
        <>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle>Users</CardTitle>
                        <CardDescription>Manage all system users</CardDescription>
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
                        <Link href="/dashboard/users/create">
                            <Button>
                                <PlusCircle className="mr-2 h-4 w-4" />
                                Create User
                            </Button>
                        </Link>
                    </div>
                </CardHeader>
                <CardContent>
                    {/* Filters and search */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                        <div className="relative flex-1 max-w-sm">
                            <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search users..."
                                value={searchTerm}
                                onChange={(e) => handleSearch(e.target.value)}
                                className="pl-8"
                            />
                        </div>
                        <div className="flex gap-2">
                            <Select value={selectedRole} onValueChange={handleRoleFilter}>
                                <SelectTrigger className="w-[180px]">
                                    <Filter className="mr-2 h-4 w-4" />
                                    <SelectValue placeholder="Filter by role" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All roles</SelectItem>
                                    <SelectItem value="super_admin">Super Admin</SelectItem>
                                    <SelectItem value="homestay_owner">Homestay Owner</SelectItem>
                                    <SelectItem value="activity_manager">Activity Manager</SelectItem>
                                </SelectContent>
                            </Select>
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
                    </div>

                    {/* Results information */}
                    <div className="flex justify-between items-center mb-4 text-sm text-muted-foreground">
                        <span>
                            Showing {((pagination.page - 1) * pagination.limit) + 1} - {Math.min(pagination.page * pagination.limit, pagination.total)} of {pagination.total} users
                        </span>
                        {searchTerm && (
                            <span>Results for: "{searchTerm}"</span>
                        )}
                    </div>

                    {isLoading ? (
                        <div className="py-8 text-center">
                            <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-solid border-current border-r-transparent" />
                            <p className="mt-2 text-sm text-muted-foreground">Loading users...</p>
                        </div>
                    ) : users.length === 0 ? (
                        <div className="py-8 text-center">
                            <p className="text-sm text-muted-foreground">
                                {searchTerm || selectedRole !== 'all' ? 'No users found with the applied filters' : 'No users registered'}
                            </p>
                        </div>
                    ) : (
                        <>
                            <div className="rounded-md border">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Username</TableHead>
                                            <TableHead>Name</TableHead>
                                            <TableHead>Email</TableHead>
                                            <TableHead>Role</TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead className="text-right">Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {users.map((user) => (
                                            <TableRow key={user.id}>
                                                <TableCell className="font-medium">{user.username}</TableCell>
                                                <TableCell>{user.name}</TableCell>
                                                <TableCell>{user.email}</TableCell>
                                                <TableCell>{getRoleBadge(user.role)}</TableCell>
                                                <TableCell>
                                                    <div 
                                                        className={`flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                                            user.is_active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                                        }`}
                                                    >
                                                        <span className={`mr-1 h-1.5 w-1.5 rounded-full ${
                                                            user.is_active ? 'bg-green-600' : 'bg-red-600'
                                                        }`} />
                                                        {user.is_active ? 'Active' : 'Inactive'}
                                                    </div>
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button variant="ghost" size="icon" disabled={actionInProgress === user.id}>
                                                                {actionInProgress === user.id ? (
                                                                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent" />
                                                                ) : (
                                                                    <MoreHorizontal className="h-4 w-4" />
                                                                )}
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align="end">
                                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                            <DropdownMenuItem onClick={() => router.push(`/dashboard/users/${user.id}`)}>
                                                                <Eye className="mr-2 h-4 w-4" />
                                                                View details
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem onClick={() => router.push(`/dashboard/users/edit/${user.id}`)}>
                                                                <Edit className="mr-2 h-4 w-4" />
                                                                Edit
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem onClick={() => openChangePasswordModal(user)}>
                                                                <Lock className="mr-2 h-4 w-4" />
                                                                Change password
                                                            </DropdownMenuItem>
                                                            <DropdownMenuSeparator />
                                                            <DropdownMenuItem onClick={() => toggleUserStatus(user)}>
                                                                {user.is_active ? (
                                                                    <>
                                                                        <X className="mr-2 h-4 w-4" />
                                                                        Deactivate
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <Check className="mr-2 h-4 w-4" />
                                                                        Activate
                                                                    </>
                                                                )}
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem 
                                                                className="text-red-600 focus:text-red-600" 
                                                                onClick={() => handleDelete(user.id)}
                                                            >
                                                                <Trash2 className="mr-2 h-4 w-4" />
                                                                Delete
                                                            </DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>

                            {/* Pagination */}
                            {pagination.pages > 1 && (
                                <div className="flex items-center justify-between mt-6">
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
                            )}
                        </>
                    )}
                </CardContent>
            </Card>

            {/* Change Password Modal */}
            <Dialog open={changePasswordModal.open} onOpenChange={(open) => setChangePasswordModal(prev => ({ ...prev, open }))}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Change Password</DialogTitle>
                        <DialogDescription>
                            Change password for user: <strong>{changePasswordModal.userName}</strong>
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="newPassword">New Password</Label>
                            <Input
                                id="newPassword"
                                type="password"
                                placeholder="Enter new password"
                                value={passwordData.newPassword}
                                onChange={(e) => setPasswordData(prev => ({ ...prev, newPassword: e.target.value }))}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword">Confirm Password</Label>
                            <Input
                                id="confirmPassword"
                                type="password"
                                placeholder="Confirm new password"
                                value={passwordData.confirmPassword}
                                onChange={(e) => setPasswordData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                            />
                        </div>
                    </div>
                    <div className="flex justify-end space-x-2">
                        <Button
                            variant="outline"
                            onClick={() => {
                                setChangePasswordModal({ open: false, userId: null, userName: '' });
                                setPasswordData({ newPassword: '', confirmPassword: '' });
                            }}
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={handleChangePassword}
                            disabled={passwordLoading || !passwordData.newPassword || !passwordData.confirmPassword}
                        >
                            {passwordLoading ? (
                                <>
                                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent" />
                                    Changing...
                                </>
                            ) : (
                                'Change Password'
                            )}
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
} 