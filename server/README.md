# 1Fi EMI Product Platform

A full-stack web application that displays products with multiple EMI plans backed by mutual funds. Users can browse products, view detailed information, and select from various EMI payment plans.

## 🚀 Live Demo

- **Frontend:** [Deployed on Vercel/Render]
- **Backend API:** [Deployed on Render/Railway]

## 📹 Demo Video

[Link to Demo Video - Google Drive/YouTube]

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 18 with TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Redux Toolkit + RTK Query
- **Routing:** React Router v6
- **UI Components:** Custom components with Shadcn UI
- **Icons:** Lucide React, React Icons
- **Notifications:** Sonner

### Backend
- **Runtime:** Node.js (v20.17.0)
- **Framework:** Express.js with TypeScript
- **Database:** MongoDB (Mongoose ODM)
- **Authentication:** JWT + bcrypt
- **Caching:** Redis
- **Email:** Nodemailer
- **File Upload:** Cloudinary + Multer
- **Validation:** Custom validators with Zod

## 📋 Features

### Core Features
- ✅ Dynamic product pages with unique URLs (slug-based routing)
- ✅ Product details: name, variant, MRP, price, and images
- ✅ Multiple EMI plans per product with:
  - Monthly payment amount
  - Tenure (3, 6, 9, 12 months)
  - Interest rates (0%, 10.5%, 12%)
  - Cashback offers
- ✅ Selectable EMI plans with "Proceed" action
- ✅ Responsive design for all devices

### Additional Features
- 🔐 User authentication (Register/Login/Logout)
- 👤 User profile management
- 🔑 Admin authentication and dashboard
- 📧 Contact form with email notifications
- 📄 About and FAQ pages
- 🔍 Product search and filtering
- 💳 Google OAuth integration

## 📂 Project Structure

```
pranav-aggarwal-task-gugao/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── redux/         # Redux store and APIs
│   │   ├── models/        # TypeScript interfaces
│   │   └── App.tsx        # Main app component
│   └── package.json
│
├── server/                # Backend Node.js application
│   ├── controllers/       # Request handlers
│   ├── models/           # Mongoose schemas
│   ├── routes/           # API routes
│   ├── utils/            # Helper functions
│   ├── templates/        # Email templates
│   ├── seed.ts           # Database seed script
│   ├── createAdmin.ts    # Admin creation script
│   ├── createUser.ts     # User creation script
│   └── index.ts          # Server entry point
│
└── README.md             # This file
```

## 🗄️ Database Schema

### Product Schema
```javascript
{
  name: String,           // Product name (e.g., "iPhone 15 Pro")
  slug: String,           // URL-friendly identifier (e.g., "iphone-15-pro")
  variant: String,        // Product variant (e.g., "256GB - Deep Purple")
  mrp: Number,           // Maximum Retail Price
  price: Number,         // Selling price
  image: String,         // Product image URL
  createdAt: Date,
  updatedAt: Date
}
```

### EMI Plan Schema
```javascript
{
  productId: ObjectId,      // Reference to Product
  monthlyPayment: Number,   // Monthly payment amount
  tenure: Number,           // Duration in months
  interestRate: Number,     // Interest rate percentage
  cashback: String,         // Cashback offer (optional)
  createdAt: Date,
  updatedAt: Date
}
```

### User Schema
```javascript
{
  firstName: String,
  lastName: String,
  email: String,           // Unique
  phone: Number,           // Unique
  password: String,        // Hashed
  profile: String,         // Profile image URL (optional)
  role: String,           // "user"
  status: String,         // "active" | "inactive"
  sessionToken: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Admin Schema
```javascript
{
  firstName: String,
  lastName: String,
  email: String,           // Unique
  phone: Number,           // Unique
  password: String,        // Hashed
  profile: String,         // Profile image URL (optional)
  role: String,           // "admin"
  status: String,         // "active" | "inactive"
  sessionToken: String,
  createdAt: Date,
  updatedAt: Date
}
```

## 🔌 API Endpoints

### Product APIs

#### Get All Products
```http
GET /api/v1/product/get-all-product
```

**Response:**
```json
{
  "message": "Products fetched successfully",
  "result": [
    {
      "_id": "6917e9d0187ab7a04297c0d7",
      "name": "iPhone 15 Pro",
      "slug": "iphone-15-pro",
      "variant": "256GB - Deep Purple",
      "mrp": 129900,
      "price": 119900,
      "image": "https://images.unsplash.com/photo-1678652197950-91e3f0a65d0b?w=800&q=80",
      "createdAt": "2024-11-14T10:30:00.000Z",
      "updatedAt": "2024-11-14T10:30:00.000Z"
    }
  ]
}
```

#### Get Product by Slug
```http
GET /api/v1/product/slug/:slug
```

**Example:** `/api/v1/product/slug/iphone-15-pro`

**Response:**
```json
{
  "message": "Product found",
  "product": {
    "_id": "6917e9d0187ab7a04297c0d7",
    "name": "iPhone 15 Pro",
    "slug": "iphone-15-pro",
    "variant": "256GB - Deep Purple",
    "mrp": 129900,
    "price": 119900,
    "image": "https://images.unsplash.com/photo-1678652197950-91e3f0a65d0b?w=800&q=80"
  },
  "emiPlans": [
    {
      "_id": "6917e9d1187ab7a04297c0d8",
      "productId": "6917e9d0187ab7a04297c0d7",
      "monthlyPayment": 39967,
      "tenure": 3,
      "interestRate": 0,
      "cashback": "Get ₹1000 cashback"
    },
    {
      "_id": "6917e9d1187ab7a04297c0d9",
      "productId": "6917e9d0187ab7a04297c0d7",
      "monthlyPayment": 19983,
      "tenure": 6,
      "interestRate": 0,
      "cashback": "Get ₹2000 cashback"
    }
  ]
}
```

### EMI Plan APIs

#### Get EMI Plans by Product ID
```http
GET /api/v1/emi/product/:productId
```

**Response:**
```json
{
  "message": "EMI plans fetched successfully",
  "result": [
    {
      "_id": "6917e9d1187ab7a04297c0d8",
      "productId": "6917e9d0187ab7a04297c0d7",
      "monthlyPayment": 39967,
      "tenure": 3,
      "interestRate": 0,
      "cashback": "Get ₹1000 cashback",
      "createdAt": "2024-11-14T10:30:00.000Z"
    }
  ]
}
```

### User Authentication APIs

#### Register User
```http
POST /api/v1/user/register
```

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "9123456789",
  "password": "password123",
  "confirmPassword": "password123"
}
```

#### Login User
```http
POST /api/v1/user/sign-in
```

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "Logged in successfully",
  "result": {
    "_id": "6917ea2dc6421f79063a020d",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "role": "user",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

### Contact APIs

#### Submit Contact Form
```http
POST /api/v1/contact/create
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I have a question about EMI plans"
}
```

## 🚀 Setup and Installation

### Prerequisites
- Node.js (v20.17.0 or higher)
- npm (v11.1.0 or higher)
- MongoDB (local or Atlas)
- Redis (optional, for caching)

### Backend Setup

1. **Navigate to server directory:**
```bash
cd server
```

2. **Install dependencies:**
```bash
npm install
```

3. **Create `.env` file:**
```env
# Server Configuration
PORT=5001

# Database
MONGO_URL=mongodb://localhost:27017/1fi-emi-platform

# JWT
JWT_KEY=your_super_secret_jwt_key_here
JWT_EXPIRE=7d

# Frontend URL
FRONTEND_URL=http://localhost:5173

# Email Configuration (Gmail)
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password

# Redis (Optional)
REDIS_URL=redis://localhost:6379

# Google OAuth (Optional)
GOOGLE_CLIENT_ID=your-google-client-id

# Cloudinary (Optional, for image uploads)
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

4. **Seed the database:**
```bash
npm run seed
```

5. **Create admin user (optional):**
```bash
npm run create-admin
```

6. **Create test user (optional):**
```bash
npm run create-user
```

7. **Start the development server:**
```bash
npm run dev
```

Server will run on: `http://localhost:5001`

### Frontend Setup

1. **Navigate to client directory:**
```bash
cd client
```

2. **Install dependencies:**
```bash
npm install
```

3. **Create `.env` file:**
```env
VITE_BACKEND_URL=http://localhost:5001
```

4. **Start the development server:**
```bash
npm run dev
```

Frontend will run on: `http://localhost:5173`

## 📦 Seed Data

The application comes with pre-populated data:

### Products (6 variants across 3 products)
1. **iPhone 15 Pro**
   - 256GB - Deep Purple
   - 512GB - Titanium Black

2. **Samsung Galaxy S24 Ultra**
   - 256GB - Phantom Black
   - 512GB - Titanium Gray

3. **MacBook Pro M3**
   - 14-inch - 512GB - Space Gray
   - 16-inch - 1TB - Silver

### EMI Plans (4 plans per product)
- 3 months at 0% interest + ₹1000 cashback
- 6 months at 0% interest + ₹2000 cashback
- 9 months at 10.5% interest
- 12 months at 12% interest + ₹3000 cashback

### Default Credentials

**Admin:**
- Email: `admin@example.com`
- Password: `admin123`

**User:**
- Email: `user@example.com`
- Password: `user123`

## 🔧 Available Scripts

### Backend
```bash
npm run dev          # Start development server with nodemon
npm run seed         # Seed database with products and EMI plans
npm run create-admin # Create default admin user
npm run create-user  # Create default test user
```

### Frontend
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

## 🌐 Routes

### Frontend Routes

**Public Routes:**
- `/` - Home page
- `/login` - User login
- `/register` - User registration
- `/faq` - FAQ page

**Protected Routes (require login):**
- `/products` - Product listing page
- `/products/:slug` - Product detail page with EMI plans
- `/profile` - User profile
- `/about` - About page
- `/contact` - Contact page

**Admin Routes:**
- `/admin/login` - Admin login
- `/admin/dashboard` - Admin dashboard

## 📱 Product URLs

Each product has a unique URL based on its slug:

- `/products/iphone-15-pro` - iPhone 15 Pro (256GB)
- `/products/iphone-15-pro-max` - iPhone 15 Pro Max (512GB)
- `/products/samsung-galaxy-s24-ultra` - Samsung S24 Ultra (256GB)
- `/products/samsung-galaxy-s24-ultra-512gb` - Samsung S24 Ultra (512GB)
- `/products/macbook-pro-m3` - MacBook Pro M3 (14-inch)
- `/products/macbook-pro-m3-1tb` - MacBook Pro M3 (16-inch)

## 🎨 Key Features Implementation

### EMI Plan Display
The product detail page shows:
- Product image and details (name, variant, MRP, price)
- List of available EMI plans
- Each plan displays:
  - Monthly payment amount
  - Tenure in months
  - Interest rate percentage
  - Cashback offer (if applicable)
- Radio button selection for choosing a plan
- "Proceed with Plan" button

### Dynamic Data Loading
All data is fetched from the backend API:
- Products are loaded via `/api/v1/product/get-all-product`
- Individual product details via `/api/v1/product/slug/:slug`
- EMI plans are associated with products via `productId`

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Adapts to all screen sizes
- Touch-friendly EMI plan selection
- Optimized images and lazy loading

## 🔐 Security Features

- Password hashing with bcrypt
- JWT-based authentication
- Protected API routes
- Input validation and sanitization
- CORS configuration
- Rate limiting (optional)

## 🚀 Deployment

### Backend Deployment (Render/Railway)

1. Create a new web service
2. Connect your GitHub repository
3. Set environment variables
4. Deploy

### Frontend Deployment (Vercel)

1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Add environment variable: `VITE_BACKEND_URL`
5. Deploy

## 📄 License

This project is created as part of the 1Fi SDE1 Assignment.

## 👨‍💻 Author

[Your Name]

## 🙏 Acknowledgments

- 1Fi Team for the assignment
- React and Node.js communities
- All open-source contributors

---

**Note:** This is a demo application created for the 1Fi SDE1 Assignment. It showcases full-stack development skills including React, Node.js, Express, MongoDB, and modern web development practices.
