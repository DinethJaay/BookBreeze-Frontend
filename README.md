# Library Management System - Frontend

## Overview
This repository contains the frontend for the Library Management System. It is a user-friendly web interface built with React and TypeScript to interact with the backend API for managing book records.

## Features
- **CRUD Operations:**
  - Create and update book records through a form.
  - View all books in a table with options to edit or delete.
- **Navigation:**
  - React Router for seamless page transitions.
- **State Management:**
  - Managed with React's `useState` and `useEffect` hooks.
- **Error Handling:**
  - Client-side validation for user inputs.
  - Error messages displayed for failed API calls.
- **Responsive Design:**
  - Styled components for a modern and mobile-friendly interface.

## Technologies Used
- **Language:** TypeScript
- **Framework:** React
- **Tools:** Web Strome

## Prerequisites
- Node.js (16.0 or later)
- npm or yarn

## Setup and Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd library-management-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file for API endpoint configuration:
   ```env
   REACT_APP_API_URL=http://localhost:<backend-port>/api
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Known Issues
- None reported.

## Contributing
Contributions are welcome! Please create a pull request with detailed information about your changes.

## License
This project is licensed under the MIT License.
