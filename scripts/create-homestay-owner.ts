import { PrismaClient } from '../generated/prisma';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function createHomestayOwner() {
  try {
    console.log('Creating homestay owner user...');

    // Check if homestay owner already exists
    const existingOwner = await prisma.admin_users.findUnique({
      where: { email: 'owner@untungjawa.com' }
    });

    if (existingOwner) {
      console.log('Homestay owner already exists!');
      console.log('Email: owner@untungjawa.com');
      console.log('Password: owner123');
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash('owner123', 10);

    // Create homestay owner
    const owner = await prisma.admin_users.create({
      data: {
        username: 'homestayowner',
        name: 'Homestay Owner',
        email: 'owner@untungjawa.com',
        password: hashedPassword,
        role: 'homestay_owner',
        is_active: true,
        auth_method: 'email'
      }
    });

    console.log('✅ Homestay owner created successfully!');
    console.log('📧 Email: owner@untungjawa.com');
    console.log('🔑 Password: owner123');
    console.log('🆔 User ID:', owner.id);
    console.log('👤 Role: homestay_owner');

    // Create a sample homestay for the owner
    const homestay = await prisma.homestay.create({
      data: {
        title: 'Sample Homestay',
        description: 'A beautiful sample homestay for testing',
        user_id: owner.id,
        status: 'active',
        has_rooms: true,
        location: 'Bali, Indonesia',
        address: '123 Sample Street, Bali',
        base_price: 100000,
        max_guests: 4,
        contact_number: '+6281234567890'
      }
    });

    console.log('🏠 Sample homestay created with ID:', homestay.id);

  } catch (error) {
    console.error('❌ Error creating homestay owner:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the script
createHomestayOwner(); 