# Node.js Category & Product Management System

## Project Description

This project is a simple **Node.js CRUD application** built using **Express.js, MySQL, and EJS**.
The system allows users to manage **Categories** and **Products**, where each product belongs to a specific category.

The application supports full **Create, Read, Update, and Delete (CRUD)** operations and demonstrates how a **relational database** works using **foreign key relationships**.

It also implements **server-side pagination** for product listing, which ensures that only the required records are fetched from the database for better performance.

---

## Features

* Category Master CRUD operations
* Product Master CRUD operations
* Each product belongs to a category
* Displays ProductId, ProductName, CategoryId, and CategoryName
* Uses **SQL JOIN** to combine product and category data
* **Server-side pagination** for product listing
* Simple and clean UI using HTML and CSS
* Structured project architecture using Express routes

---

## Tech Stack

**Backend**

* Node.js
* Express.js

**Database**

* MySQL (Relational Database)

**View Engine**

* EJS

**Frontend**

* HTML
* CSS

---

## Database Structure

### Categories Table

| Column       | Type                              |
| ------------ | --------------------------------- |
| categoryId   | INT (Primary Key, Auto Increment) |
| categoryName | VARCHAR                           |

### Products Table

| Column      | Type                              |
| ----------- | --------------------------------- |
| productId   | INT (Primary Key, Auto Increment) |
| productName | VARCHAR                           |
| categoryId  | INT (Foreign Key)                 |

**Relationship**

One Category → Many Products

Foreign Key:

```
categoryId → categories(categoryId)
```

---

## Project Structure

```
NodeProject
│
├── config
│   └── db.js
│
├── routes
│   ├── categoryRoutes.js
│   └── productRoutes.js
│
├── views
│   ├── categories.ejs
│   ├── products.ejs
│   ├── editCategory.ejs
│   └── editProduct.ejs
│
├── app.js
├── package.json
└── README.md
```

---

## Installation & Setup

### 1. Clone the repository

```
git clone https://github.com/bipinyadav01/NodeProject-Test.git
```

### 2. Navigate to the project

```
cd NodeProject-Test
```

### 3. Install dependencies

```
npm install
```

### 4. Setup MySQL database

Create database:

```
CREATE DATABASE node_machine_test;
```

Create tables for categories and products.

### 5. Start the server

```
npm start
```

Server will run at:

```
http://localhost:3000
```

---

## Example Routes

```
/categories
/products
/products?page=1
/products?page=2
```

---

## Author

**Bipin Yadav**

---

## Purpose of the Project

This project was developed as part of a **Node.js Machine Test** to demonstrate understanding of:

* Backend development using Node.js
* Relational database design
* CRUD operations
* Server-side pagination
* MVC-like project structure

