# Pedals | C2C Cycle Renting Platform

## Introduction
Pedals is a full-stack web application that facilitates a peer-to-peer cycle renting service. It enables users to rent out their cycles or lease cycles from others in a seamless, user-friendly environment. The platform focuses on security, efficiency, and ease of use, providing users with secure payment options and seamless user experiences.

## Tech Stack
- Frontend: React, Redux Toolkit, Tailwind CSS
- Backend: Node.js, Express.js, MongoDB
- Image Management: Cloudinary
- Payments: Razorpay
- Authentication: JSON Web Tokens (JWT)
- Other Tools: React Hook Form, Multer

## Features
- User Authentication: Secure login and signup using JWT with access and refresh tokens.
- Cycle Listings: Users can post and view available cycles for rent.
- Payments Integration: Seamless and secure payment system using Razorpay for processing transactions.
- Image Management: Cloudinary is used for storing and retrieving cycle images.
- Efficient Backend: MongoDB with aggregation pipelines ensures smooth data querying and filtering.
- RESTful API: All backend operations are managed via RESTful APIs, ensuring separation between frontend and backend.

## Installation and Setup
- Clone the repository:
```bash
git clone https://github.com/eclairjit/pedals.git
```

- Navigate to the project folder:
```bash
cd pedals
```

- Install dependencies for both frontend and backend:
```bash
cd client && npm install
cd ../server && npm install
```

- Set up environment variables:
  - Create a .env file in the root of the server directory.
  - Add the following:
  ```env
  MONGO_URI=<Your MongoDB URI>
  JWT_SECRET=<Your JWT secret>
  CLOUDINARY_API_KEY=<Your Cloudinary API key>
  CLOUDINARY_API_SECRET=<Your Cloudinary API secret>
  RAZORPAY_KEY_ID=<Your Razorpay key ID>
  RAZORPAY_KEY_SECRET=<Your Razorpay key secret>
  ```

- Run the application:
  - Backend: Start the Node.js server
  ```bash
  cd server && npm run dev
  ```
  - Frontend: Start the React client
  ```bash
  cd client && npm run dev
  ```

## Contributing
Feel free to submit pull requests or create issues for feature requests or bugs. Contributions are welcome!
