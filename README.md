# 🚀 Task Manager App

A modern, real-time **Task Management App** built with **React**, **Firebase**, and **Tailwind CSS**.  
Easily add, edit, and manage your daily tasks with a clean and responsive interface.

![React](https://img.shields.io/badge/React-18.x-blue)
![Firebase](https://img.shields.io/badge/Firebase-Latest-orange)
![Tailwind](https://img.shields.io/badge/Tailwind-3.x-38bdf8)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF)

---

## 🌐 Live Demo
👉 [**View App**](#) — *https://task-manager-git-master-vijaypal-singh-rathores-projects.vercel.app/allTodo*

---

## ✨ Features
- 🔐 Secure Firebase Authentication  
- 🧾 Add, edit, delete, and mark tasks as complete  
- ⚡ Real-time data sync with Firestore  
- 📱 Fully responsive on all devices  
- ☁️ User-specific data storage  
- 💾 Persistent cloud data  

---

## 🛠️ Tech Stack
- **Frontend:** React, Vite, Tailwind CSS  
- **Backend:** Firebase (Auth, Firestore, Hosting)  
- **Language:** JavaScript (ES6+)  

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
git clone https://github.com/your-username/task-manager-app.git
cd task-manager-app
2️⃣ Install Dependencies
npm install
# or
yarn install
3️⃣ Firebase Setup
Go to Firebase Console

Create a new project

Enable Email/Password Authentication

Create a Firestore Database

### Firebase Configuration

1. **Copy your Firebase config**  
   Go to **Firebase Console → Project Settings → Web App** and copy the configuration details.

2. **Create a `.env` file**  
   In the **root of your project**, create a file named `.env`.

3. **Add the following variables** to `.env` (replace the values with your Firebase config):

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

⚠️ Note: Don’t commit your .env file to GitHub.
```
4️⃣ Run the App
```
npm install
npm run dev
```
