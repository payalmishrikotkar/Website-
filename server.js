import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import rateLimit from 'express-rate-limit';
import appointmentRoutes from './routes/appointmentRoutes.js';
import contactRoutes from './routes/contactRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';

// Security: Rate limiting to prevent spam and abuse
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per window
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again in 15 minutes.'
  }
});

// Stricter rate limit for form submissions
const submissionLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 20, // limit each IP to 20 appointment/contact submissions per hour
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Submission limit reached for this hour. For immediate pediatric emergency care, please call hospital reception directly.'
  }
});

// Middleware
app.use(cors({
  origin: [CLIENT_URL, 'http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json({ limit: '10kb' })); // protect against large payloads
app.use('/api', apiLimiter);

// Database Connection with graceful fallback
const connectDB = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri || uri.trim() === '' || uri.includes('<username>')) {
    console.log('⚠️  MongoDB URI not configured in backend/.env. Running in Safe DEMO MODE (In-Memory).');
    return;
  }

  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000
    });
    console.log('✅ Connected to MongoDB Atlas successfully.');
  } catch (err) {
    console.warn('⚠️  Could not connect to MongoDB Atlas:', err.message);
    console.log('ℹ️  Operating in Safe DEMO MODE (submissions stored in memory).');
  }
};

connectDB();

// API Routes
app.use('/api/appointments', submissionLimiter, appointmentRoutes);
app.use('/api/contact', submissionLimiter, contactRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  const isConnected = mongoose.connection.readyState === 1;
  res.json({
    status: 'healthy',
    service: "Children's Hospital Web API",
    database: isConnected ? 'Connected (MongoDB Atlas)' : 'Demo Mode (In-Memory)',
    timestamp: new Date().toISOString()
  });
});

// Root friendly endpoint
app.get('/', (req, res) => {
  res.json({
    message: "Welcome to Children's Hospital REST API",
    docs: {
      health: '/api/health',
      appointments: 'POST /api/appointments',
      contact: 'POST /api/contact'
    }
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🏥 Children's Hospital Backend running on http://localhost:${PORT}`);
  console.log(`🌐 CORS enabled for: ${CLIENT_URL}`);
});
