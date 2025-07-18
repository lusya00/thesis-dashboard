import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/db';
import { hashPassword } from '@/lib/password';

export async function POST(request: NextRequest) {
  try {
    // Verificar autenticación
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    // Verificar que sea super_admin
    if (session.user.role !== 'super_admin') {
      return NextResponse.json({ message: 'Forbidden: Only super admins can create users' }, { status: 403 });
    }

    const body = await request.json();
    const { username, name, email, password, role, is_active } = body;

    // Validaciones
    if (!username || !name || !email || !password || !role) {
      return NextResponse.json({ 
        message: 'Missing required fields: username, name, email, password, role' 
      }, { status: 400 });
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ message: 'Invalid email format' }, { status: 400 });
    }

    // Validar contraseña
    if (password.length < 6) {
      return NextResponse.json({ message: 'Password must be at least 6 characters long' }, { status: 400 });
    }

    // Validar rol
    const validRoles = ['homestay_owner', 'activity_manager', 'super_admin'];
    if (!validRoles.includes(role)) {
      return NextResponse.json({ message: 'Invalid role' }, { status: 400 });
    }

    // Verificar si el usuario ya existe
    const existingUser = await prisma.admin_users.findFirst({
      where: {
        OR: [
          { email },
          { username }
        ]
      }
    });

    if (existingUser) {
      return NextResponse.json({ 
        message: existingUser.email === email ? 'Email already exists' : 'Username already exists' 
      }, { status: 409 });
    }

    // Hash de la contraseña
    const hashedPassword = await hashPassword(password);

    // Crear el usuario
    const newUser = await prisma.admin_users.create({
      data: {
        username,
        name,
        email,
        password: hashedPassword,
        role,
        is_active: is_active ?? true,
        auth_method: 'email'
      }
    });

    // Retornar respuesta sin la contraseña
    const { password: _, ...userWithoutPassword } = newUser;

    return NextResponse.json({
      message: 'User created successfully',
      user: userWithoutPassword
    }, { status: 201 });

  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ 
      message: 'Internal server error' 
    }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    // Verificar autenticación
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    // Verificar que sea super_admin
    if (session.user.role !== 'super_admin') {
      return NextResponse.json({ message: 'Forbidden: Only super admins can view users' }, { status: 403 });
    }

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const search = searchParams.get('search') || '';
    const role = searchParams.get('role') || '';

    const skip = (page - 1) * limit;

    // Construir filtros
    const where: any = {};
    
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
        { username: { contains: search, mode: 'insensitive' } }
      ];
    }

    if (role) {
      where.role = role;
    }

    // Obtener usuarios
    const [users, total] = await Promise.all([
      prisma.admin_users.findMany({
        where,
        select: {
          id: true,
          username: true,
          name: true,
          email: true,
          role: true,
          is_active: true,
          last_login: true,
          created_at: true,
          updated_at: true,
          auth_method: true
        },
        skip,
        take: limit,
        orderBy: { created_at: 'desc' }
      }),
      prisma.admin_users.count({ where })
    ]);

    return NextResponse.json({
      users,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });

  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ 
      message: 'Internal server error' 
    }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('id');
    
    if (!userId || isNaN(parseInt(userId))) {
        return NextResponse.json(
            { error: 'Valid user ID is required' },
            { status: 400 }
        );
    }

    const body = await request.json();
    
    // Block update if trying to change to a role that is not allowed
    if (body.role && !['homestay_owner', 'activity_manager'].includes(body.role)) {
        return NextResponse.json(
            { error: 'Role can only be set to homestay_owner or activity_manager' },
            { status: 400 }
        );
    }

    const updatedUser = await prisma.admin_users.update({
        where: {
            id: parseInt(userId),
            is_active: true 
        },
        data: {
            username: body.username,
            email: body.email,
            name: body.name,
            role: body.role 
        }
    });

    return NextResponse.json(updatedUser);
}

export async function DELETE(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('id');
    
    if (!userId || isNaN(parseInt(userId))) {
        return NextResponse.json(
            { error: 'Valid user ID is required' },
            { status: 400 }
        );
    }

    try {
        const deletedUser = await prisma.admin_users.delete({
            where: { id: parseInt(userId) }
        });

        return NextResponse.json({ 
            success: true,
            message: 'User permanently deleted',
            data: deletedUser 
        });

    } catch (error) {
        console.error('DELETE Error:', error);
        
        if (error instanceof Error && 'code' in error && error.code === 'P2025') {
            return NextResponse.json(
                { error: 'User not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
