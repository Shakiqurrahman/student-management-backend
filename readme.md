# Student Management 

### Overview

The Student Management System is a web-based platform designed to streamline the management of student records and personal details. The system is suitable for schools, colleges, and other educational institutions looking for efficient ways to handle student information.

---

### Features

1. Student Management ( create, update, delete student details. )
2. Teachers Management ( create and manage teachers details )
3. Data validation ( Robust schema validation with Zod and ensures type safety )
4. Code quality ( Enforced standards with ESLint and consistent code formatting with Prettier )

---

### Technology Used

-   TypeScript - For static typing and advanced developer tooling.
-   Node.js & Express.js - Backend server & routing.
-   MongoDB - NoSQL database for storing application data
-   Mongoose - ODM library for MongoDB.
-   Zod - Schema declaration and validation library.
-   ESLint - Ensures code quality to best practices.
-   Prettier - Maintains consistent code formatting.

---

### Scripts

-   npm run dev - Start the development server.
-   npm run build - Build the application.
-   npm run lint - Run ESLint to check for code issues.
-   npm run lint:fix - Fixed to some errors automatically.

### Environment Variable

-   PORT
-   MONGODB_URI

### Getting Started

#### Prerequisites

Ensure you have the following installed:

-   Node.js v20
-   npm

#### Installation

1. Clone the repository:

```js
git clone https://github.com/Shakiqurrahman/bi-cycle-store.git
cd repository-name
```

2. Install dependencies:

```js
npm install
```

3. Set up environment variables:

```js
PORT = 5000;
MONGODB_URI = your_mongodb_uri;
```

#### Usage

-   Run the development server:

```js
npm run dev
```

-   build for production:

```js
npm run build
```

-   check the EsLint error:

```js
npm run lint
```

-   fix the EsLint error:

```js
npm run lint:fix
```

### Thank You