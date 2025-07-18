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
  Lock
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
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

export default function UsersPage() {
    const router = useRouter();
    const [users, setUsers] = useState<admin_users[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<admin_users[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
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

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setIsLoading(true);
                // En un entorno real, esta sería una llamada a la API
                // Para simular datos en desarrollo, creamos usuarios de prueba
                const response = await fetch('/api/users');
                
                const data = await response.json();
                console.log(data);
                setUsers(data.users);
                setFilteredUsers(data.users);
            } catch (error) {
                console.error('Error al cargar usuarios:', error);
                toast.error('Error loading users');
            } finally {
                setIsLoading(false);
            }
        };
        fetchUsers();
    }, []);

    useEffect(() => {
        if (searchTerm.trim() === '') {
            setFilteredUsers(users);
        } else {
            const filtered = users.filter(user => 
                user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.username.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredUsers(filtered);
        }
    }, [searchTerm, users]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleDelete = async (id: number) => {
        try {
            setActionInProgress(id);
            
            // Simulamos una llamada a API con un timeout
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // En un entorno real, sería algo como:
            // await fetch(`/api/users/${id}`, { method: 'DELETE' });
            
            // Actualizamos el estado local
            setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
            setFilteredUsers(prevUsers => prevUsers.filter(user => user.id !== id));
            
            toast.success('User deleted successfully');
        } catch (error) {
            console.error('Error al eliminar usuario:', error);
            toast.error('Error deleting user');
        } finally {
            setActionInProgress(null);
        }
    };

    const toggleUserStatus = async (user: admin_users) => {
        try {
            setActionInProgress(user.id);
            
            // Simulamos una llamada a API con un timeout
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // En un entorno real, sería algo como:
            // await fetch(`/api/users/${user.id}`, { 
            //   method: 'PATCH',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify({ is_active: !user.is_active })
            // });
            
            // Actualizamos el estado local
            const updatedUsers = users.map(u => {
                if (u.id === user.id) {
                    return { ...u, is_active: !u.is_active };
                }
                return u;
            });
            
            setUsers(updatedUsers);
            setFilteredUsers(
                filteredUsers.map(u => {
                    if (u.id === user.id) {
                        return { ...u, is_active: !u.is_active };
                    }
                    return u;
                })
            );
            
            toast.success(`User ${user.is_active ? 'deactivated' : 'activated'} successfully`);
        } catch (error) {
            console.error('Error al actualizar estado del usuario:', error);
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

    return (
        <>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle>Users</CardTitle>
                        <CardDescription>Manage all users.</CardDescription>
                    </div>
                    <Link href="/dashboard/users/create">
                        <Button>
                            <PlusCircle className="mr-2 h-4 w-4" />
                            Create User
                        </Button>
                    </Link>
                </CardHeader>
                <CardContent>
                    <div className="flex mb-4">
                        <div className="relative w-full max-w-sm">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search users..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                                className="pl-8 w-full"
                            />
                        </div>
                    </div>

                    {isLoading ? (
                        <div className="py-8 text-center">
                            <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-solid border-current border-r-transparent" />
                            <p className="mt-2 text-sm text-muted-foreground">Loading...</p>
                        </div>
                    ) : filteredUsers.length === 0 ? (
                        <div className="py-8 text-center">
                            <p className="text-sm text-muted-foreground">No users found</p>
                        </div>
                    ) : (
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
                                    {filteredUsers.map((user) => (
                                        <TableRow key={user.id}>
                                            <TableCell>{user.username}</TableCell>
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
                                                            Change Password
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