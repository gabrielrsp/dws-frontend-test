# 🚀 DWS Blog

A modern, high-performance blog application built with **React 19**, **Vite**, and **TypeScript**. This project showcases expertise in React development, state management, responsive UI, backend integration, and component styling, with a strong focus on maintainable code and robust automated testing.

## 🛠️ Technologies & Libraries

- **Core:** [React 19](https://react.dev/) & [Vite](https://vitejs.dev/)
- **Styling:** [Styled Components](https://styled-components.com/) (CSS-in-JS)
- **Routing:** [React Router Dom v7](https://reactrouter.com/)
- **API Client:** [Axios](https://axios-http.com/)
- **Notifications:** [React Toastify](https://fkhadra.github.io/react-toastify/)
- **Testing:** [Vitest](https://vitest.dev/) & [React Testing Library](https://testing-library.com/)

---

## 📂 Project Structure

The project follows a clear separation of concerns to ensure maintainability and scalability:

- **src/components:** Reusable UI components (Buttons, Cards, Spinners, PageHeader, etc.).  
- **src/layouts:** Page-level compositions (BlogPage, PostDetails) combining components into views.  
- **src/pages:** Top-level pages that wrap layouts for routing (PostPage, PostsList).  
- **src/contexts:** Global state management using Context API and useReducer.  
- **src/services:** API abstraction with Axios for backend integration.  
- **src/mocks:** Static data for consistent development and testing.  
- **src/types:** TypeScript interfaces and type definitions.  
- **src/styles:** Theme definitions and global styles (`default.ts` and `global.ts`) for consistent styling across the application.  
- **src/assets:** Static assets such as logos, SVGs, and PNG icons.  

---

## ⚙️ How to Run the Project

Follow these steps to set up and run the application locally:

### 1. Prerequisites
Ensure you have **Node.js** (version 18 or higher) installed on your machine.

### 2. Installation
Clone the repository and install the dependencies:
```bash
npm install
```

### 3. Execution
To start the development server on port 5173, run:
```bash
npm run dev
```
The application will be available at: http://localhost:5173

### 3. Tests
The project includes a comprehensive test suite covering UI components, global state logic (Context API), and asynchronous data fetching.
```bash
npm run test
```
The application will be available at: http://localhost:5173