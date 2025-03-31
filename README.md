# 📝 Modern Todo Application

A feature-rich, responsive Todo application built with React, Redux, and Tailwind CSS.

## ✨ Features

- 🔐 **User Authentication**
  - Secure login/logout functionality
  - Protected routes for authenticated users
  - User-specific task management

- 📋 **Task Management**
  - ➕ Add new tasks with custom text
  - 🎯 Set task priorities (High, Medium, Low)
  - 🗑️ Delete tasks
  - 📊 Update task priorities on the fly
  - 🎨 Color-coded priority indicators

- 💾 **Data Persistence**
  - Tasks automatically saved to local storage
  - Maintains state across browser sessions
  - Secure user authentication state

- 📱 **Responsive Design**
  - Mobile-first approach
  - Seamless experience across all devices
  - Clean and intuitive interface

## 🛠️ Technology Stack

- ⚛️ **React** - UI Framework
- 🔄 **Redux Toolkit** - State Management
- 🎨 **Tailwind CSS** - Styling
- 📦 **Vite** - Build Tool

## 🚀 Getting Started

1. **Clone the repository**
```bash
git clone <repository-url>
cd todo-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

## 📱 Usage Guide

1. **Login**
   - Enter any username and password to access the application
   - Authentication is simulated for demonstration purposes

2. **Managing Tasks**
   - Type your task in the input field
   - Select priority level (High, Medium, Low)
   - Click "Add Task" or press Enter to create the task
   - Use the priority dropdown to update task priority
   - Click the delete button to remove tasks

3. **Logout**
   - Click the logout button in the top right corner
   - All tasks remain saved in local storage

## 🎨 Color Coding

- 🔴 **High Priority** - Red background
- 🟡 **Medium Priority** - Yellow background
- 🟢 **Low Priority** - Green background

## 💻 Development

The application uses:
- Modern React practices with functional components
- Redux Toolkit for efficient state management
- Tailwind CSS for responsive design
- Local Storage API for data persistence

## 🔒 Security Features

- Protected routes for authenticated users
- Secure task management
- Session persistence
- Safe logout functionality

## 🌟 Best Practices

- Mobile-first responsive design
- Clean and maintainable code structure
- Efficient state management
- Persistent data storage
- User-friendly interface
