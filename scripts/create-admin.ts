import { PrismaClient } from '../generated/prisma';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function createSuperAdmin() {
  try {
    console.log('Creating super admin user...');

    // Check if admin already exists
    const existingAdmin = await prisma.admin_users.findUnique({
      where: { email: 'admin@untungjawa.com' }
    });

    if (existingAdmin) {
      console.log('Super admin already exists!');
      console.log('Email: admin@untungjawa.com');
      console.log('Password: admin123');
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash('admin123', 10);

    // Create super admin
    const admin = await prisma.admin_users.create({
      data: {
        username: 'superadmin',
        name: 'Super Administrator',
        email: 'admin@untungjawa.com',
        password: hashedPassword,
        role: 'super_admin',
        is_active: true,
        auth_method: 'email'
      }
    });

    console.log('✅ Super admin created successfully!');
    console.log('📧 Email: admin@untungjawa.com');
    console.log('🔑 Password: admin123');
    console.log('🆔 User ID:', admin.id);

  } catch (error) {
    console.error('❌ Error creating super admin:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the script
createSuperAdmin(); 