🩺 Doctor Appointment – Full Stack Appointment Website

👨‍💻 Actively Seeking Better Opportunities
🌟 Open to vacancies, jobs, or contract roles

📌 About the Project

The DoctorOnCall System facilitates patients in scheduling appointments with preferred doctors or emergency appointments via an online platform.

Tech Stack: React, Node.js, Prisma

Key Features: Dynamic homepage, dashboards for patients and doctors, appointment scheduling, email notifications, filtering doctors, secure authentication

Code Quality: Industry-standard practices, TypeScript in backend, modular & reusable design, code splitting

✨ Features
🔹 Core Features

Dynamic Homepage: Gathers essential information in one place

Easy Appointment Setup: Schedule appointments with selectable dates & time ranges

Appointment Management: Flexible time and date range selections

Doctor Selection: Patients can choose preferred doctors

🔹 Dashboards

Doctor Dashboard:

View patients

Provide online treatment

Manage prescriptions & appointments

Patient Dashboard:

Track treatment progress

View medications & prescriptions

Manage appointments

🔹 Advanced Functionalities

Email Notifications: Automated alerts for appointments & invoicing

Appointment Tracking: Unique tracking ID for each appointment

Prescription & Invoice Generation: Customized to each patient

Authentication: Secure sign-in, sign-up, password recovery, email verification (for doctors)

Doctor Filtering: Advanced filters by specialization

Blogging & Services: Expandable features

Ongoing Development: Enhancements with evolving admin system

Prerequisites
Before getting started with the DoctorOnCall System, ensure that you have the following prerequisites installed and set up:

Install Node.js (globally)
npm install npm@latest -g
Prisma CLI: If you're planning to work on the backend part, you'll need to have Prisma CLI installed globally. You can install it using npm:
 npm install -g prisma
TypeScript (optional): TypeScript is used in the backend, ensure that you have TypeScript installed globally. You can install it using npm:
 npm install -g typescript
Installation
To begin using the DoctorOnCall System, follow these simple steps:

The front-end and Backend code are in the same directory, with the Backend API located at the ./api directory
# Setup Documentation

## Clone The Project
git clone https://github.com/RupeshAmbavane/CarePoint.git

### Install Frontend
cd CarePoint
- npm install
- npm start

### Install Backend
cd api
- npm install

### Setup Database
1. Rename .env.example to .env (remove .example).
2. Create a PostgreSQL Database (Railway if you don't have one installed locally):
   - Create an account at https://railway.app/.
   - Navigate to the New Section > Database > Add PostgreSQL.
   - Select your created database and go to the Variables tab.
   - Copy DATABASE_PUBLIC_URL.
   - Paste the database URL into the .env file.

### Install Prisma
- npm install -g prisma
- npx prisma generate
- npx prisma migrate dev

### Setup Google App Password (For Email Notification)
1. Go to Google Account settings at https://myaccount.google.com/security?hl=en.
2. Navigate to Security > 2-Step Verification.
3. Scroll to the bottom of the page and find App passwords.
4. Select your project name and copy the generated password.
5. Paste the app password into .env as EMAIL_PASS.

### Setup Cloudinary to Upload Image
1. Create a Cloudinary Account at https://cloudinary.com/.
2. Login to your Cloudinary Account and copy all the credentials (e.g., Cloud name, API key, API secret).
3. Paste those credentials into the .env file.

### Start Backend
npm run dev

Happy coding! 🚀
Note: Please note that these are general instructions for setting up an Express API, and the specific implementation details may vary depending on your project's requirements. Before starting, make sure to read the project's documentation or readme file to obtain any specific instructions or requirements.

This system offers a comprehensive and dynamic platform for managing doctor appointments, treatments, and patient interactions while maintaining high standards of code quality and user experience.

What Technology Are Using In This Project
Frontend Technology Stack:

React: A JavaScript library for building user interfaces, offering a component-based architecture for creating interactive UIs.
Redux Toolkit: A state management library for React applications, providing predictable state management with a single source of truth.
Ant Design: A UI library for React applications, offering a set of customizable and pre-designed components.
React Hook Form: A library for managing form state and validation in React applications, providing a simple and intuitive API.
Axios: A promise-based HTTP client for making HTTP requests, used for interacting with backend APIs.
Back-End:

Express.js: A web application framework for Node.js, used for building robust APIs and web applications
TypeScript: A superset of JavaScript that adds static typing, enhancing code quality and maintainability.
Prisma: A modern database toolkit for Node.js and TypeScript, used for database access and management.
Project Screenshot
DoctorOnCall OverView

Thank you for considering this project. If you have any questions, please do not hesitate to contact me.
