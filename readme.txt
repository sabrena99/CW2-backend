# CW2 Project

## Overview
This repository contains the Back-End code for the app developed in Coursework 1. The Back-End is built using Node.js, Express.js, and MongoDB Atlas.


## MongoDB Collections
- **Lesson Collection:** Contains information about lessons (fields: topic, price, location, spaces).
- **Order Collection:** Stores information about orders (fields: name, phone number, lesson IDs, number of spaces).

## API Routes
- **GET /lessons:** Returns all lessons as JSON.
- **POST /orders:** Saves a new order to the "order" collection.
- **PUT /update-lesson/:lessonId:** Updates the number of available spaces in the "lesson" collection after an order is submitted.

## Middleware Functions
- **Logger Middleware:** Outputs all requests to the server console.
- **Static File Middleware:** Returns lesson images or an error message if the image file does not exist.

## Fetch Functions (Front-End)
- One fetch that retrieves all lessons with GET.
- One fetch that saves a new order with POST after it is submitted.
- One fetch that updates the available lesson space with PUT after an order is submitted.

## Search Functionality (Optional)
- Implemented full-text search feature on the Back-End.
- Users can search for lessons without specifying the attribute to search on.

## How to Run Locally
1. Clone the repository.
2. Install dependencies: `npm install`.
3. Start the server: `npm start`.


