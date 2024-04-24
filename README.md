## 🍽 HungerEats

**HungerEats** is a dynamic web platform designed to revolutionize the food delivery experience. Powered by the MERN (MongoDB, Express.js, React.js, Node.js) stack, as well as Auth0, Stripe, Cloudinary, and Render, HungerEats offers a seamless and intuitive interface for users to discover, order, and enjoy their favorite meals from a variety of local restaurants.

### 🚀 Features

- **Seamless Ordering**: Users can easily discover, order, and enjoy their favorite meals from local restaurants.
- **Real-time Updates**: Stay updated with real-time notifications on order status and delivery.
- **Secure Payment Processing**: Secure payment processing powered by Stripe ensures peace of mind for both customers and restaurant partners.
- **Search, Filters, and Pagination**: Intuitive features allow users to find exactly what they're craving.
- **Convenient User Experience**: Whether craving a quick snack or planning a gourmet feast, HungerEats promises convenience and satisfaction with every click.

### 🛠️ Tech Stack

- **MongoDB**: A NoSQL database for storing food, user, and order data.
- **Express.js**: A Node.js web application framework for building robust APIs.
- **React.js**: A JavaScript library for building user interfaces.
- **Node.js**: A JavaScript runtime for server-side development.
- **Auth0**: Provides authentication and authorization services for secure user access.
- **Stripe**: Offers secure payment processing services for online transactions.
- **Cloudinary**: A cloud-based image and video management platform for storing and managing media assets.
- **Render**: A cloud platform for hosting and managing web applications.

### 📋 Quick Start

1. **Clone the Repository**

   ```bash
   git clone https://github.com/gurkirats22/hungereats.git
   git clone https://github.com/gurkirats22/hungereats-backend.git
   cd hungereats
   ```

2. **Installation**

   ```bash
   npm install
   cd ../hungerats-backend
   npm install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the hungerats directory and add your configuration:

   ```env
   VITE_API_BASE_URL=http://localhost:7000
   VITE_AUTH0_DOMAIN=
   VITE_AUTH0_CLIENT_ID=
   VITE_AUTH0_CALLBACK_URL=http://localhost:5173/
   VITE_AUTH0_AUDIENCE=hungereats-api
   ```
  Fill the empty values with your actual Auth0 credentials. You can obtain these credentials by signing up on the [Auth0 website](https://auth0.com/).

  Create another `.env` file in the hungerats-backend directory and add your configuration:

   ```env
   MONGODB_CONNECTION_STRING=mongodb+srv://admin:Kirats22@hungereats.tfw5jdu.mongodb.net/?retryWrites=true&w=majority&appName=hungereats

   # Auth0
   AUTH0_AUDIENCE=hungereats-api
   AUTH0_ISSUER_BASE_URL=
    
   # Cloudinary
   CLOUDINARY_CLOUD_NAME=
   CLOUDINARY_API_KEY=
   CLOUDINARY_API_SECRET=
    
   # Stripe
   FRONTEND_URL=http://localhost:5173
   STRIPE_API_KEY=
   STRIPE_WEBHOOK_SECRET=
   ```
  Fill the empty values with your actual Auth0, Cloudinary and Stripe credentials. You can obtain these credentials by signing up on the [Auth0 website](https://auth0.com/), [Cloudinary website](https://cloudinary.com/) and [Stripe website](https://stripe.com/).
  
4. **Running the Project**

   Run the following command in both the hungereats and hungerats-backend directories:

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser to view HungerEats.

### 🌐 Live Demo

[Live Demo](https://hungereats.onrender.com/)
