import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env (for local development)
dotenv.config({ path: path.join(process.cwd(), '.env') });

// Determine client URL based on environment
const clientUrl =
  process.env.NODE_ENV === 'development'
    ? process.env.CLIENT_LOCAL_URL || 'http://localhost:3000'
    : process.env.CLIENT_URL || 'https://your-production-client.com';

export default {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT ? parseInt(process.env.PORT) : 5050,
  default_doctor_pass: process.env.DOCTOR_PASS || 'defaultDoctorPass123',
  clientUrl,
  jwt: {
    secret: process.env.JWT_SECRET || 'your_jwt_secret',
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '1d',
    refresh_secret: process.env.JWT_REFRESH_SECRET || 'your_jwt_refresh_secret',
  },
  cloudinary: {
    name: process.env.CLOUD_NAME || '',
    key: process.env.API_KEY || '',
    secret: process.env.API_SECRET || '',
  },
  emailPass: process.env.EMAIL_PASS || '',
  adminEmail: process.env.ADMIN_EMAIL || '',
  gmail_app_Email: process.env.GMAIL_APP_EMAIL || '',
  defaultAdminDoctor: process.env.DEFAULT_ADMIN_DOCTOR || 'adminDoctor',
  backendLiveUrl: process.env.BACKEND_LIVE_URL || 'https://your-backend.com',
  backendLocalUrl: process.env.BACKEND_LOCAL_URL || 'http://localhost:5050',
};
