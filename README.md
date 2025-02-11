# Logical Force of Ukraine – Course Work 2022

This repository contains the course project **"Logical Force of Ukraine"**, developed as part of the **Web Design and Web Programming** course at Taras Shevchenko National University of Kyiv. The project focuses on the **team-based development of a web application** that facilitates the calculation of fuel consumption for military unit convoys.

## Project Overview

### **Purpose and Objectives**
The primary goal of this project is to develop a **web application** that assists in **fuel consumption calculations** for a convoy of military vehicles based on:
- The **distance between two points** on a map.
- The **fuel consumption rate** of each selected vehicle.
- The **total number of vehicles** in the convoy.

The web application provides:
- **Interactive map-based route planning** using **Google Maps API**.
- **Calculation of fuel requirements** for selected vehicles.
- **User-friendly interface** with **drag-and-drop** technology for vehicle selection.
- **Adaptive design** for accessibility on different devices.
- **Deployment with Docker** for scalability and ease of access.

### **Technologies Used**
The project is built using modern web development technologies:
- **Frontend:** Angular (TypeScript, SCSS, HTML5)
- **Backend & API:** Spring Boot (Java, PostgreSQL)
- **Mapping & Route Calculation:** Google Maps Directions API, Maps JavaScript API
- **Containerization & Deployment:** Docker, DockerHub
- **UI Enhancements:** Angular Drag and Drop module

---

## Features

1. **Dynamic Route Calculation**
   - Users can **select start and destination points** on an interactive map.
   - The application **calculates the shortest route** and updates the distance in real time.
   - Uses **live traffic data** to optimize the path.

2. **Vehicle Management System**
   - A database of **military vehicles** with technical specifications (fuel consumption, tank capacity, speed, etc.).
   - Users can **browse and select** vehicles for convoy formation.
   - Provides **detailed vehicle profiles** with images and performance statistics.

3. **Fuel Consumption Estimation**
   - Computes the **required amount of fuel** for the convoy based on:
     - **Distance traveled**
     - **Fuel efficiency of each vehicle**
     - **Number of vehicles in the convoy**
   - Estimates **fuel costs** based on current pricing.

4. **User-Friendly UI with Drag-and-Drop**
   - Users can **drag vehicles into the convoy list** for quick selection.
   - Implements **intuitive interaction** to manage vehicle selections.

5. **Adaptive and Responsive Design**
   - Designed for **desktop, tablet, and mobile** screens.
   - Ensures a **seamless user experience** across all devices.

6. **Deployment & Hosting**
   - The project is containerized using **Docker**.
   - The final web application is deployed on **DockerHub** for easy access.

---

# How to Run "Logical Force of Ukraine" Web Application

This guide provides step-by-step instructions on how to set up and run the **"Logical Force of Ukraine"** web application, both locally and using Docker.

## Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v16 or later) – [Download](https://nodejs.org/)
- **npm** (installed with Node.js)
- **Angular CLI** (v13 or later) – Install with:
  ```bash
  npm install -g @angular/cli
  ```
- **Docker** (if using containerized deployment) – [Download](https://www.docker.com/)

---

## 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/Vetal0205/CourseWork2022.git
cd CourseWork2022
```

---

## 2. Running the Backend (Spring Boot)

The backend for this project is built with Spring Boot and is available in a separate repository:

👉 [CourseWork 2022 Backend Repository](https://github.com/Vetal0205/CourseWork2022.Backend)

Follow the setup instructions in the backend repository before proceeding with the frontend.

---

## 3. Running the Frontend (Angular)

1. **Navigate to the project root directory:**
   ```bash
   cd CourseWork2022
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Google Maps API keys:**
   - Open the file `src/environments/environment.ts`
   - Replace the placeholders with your actual API keys:

     ```typescript
     export const environment = {
       production: false,
       GOOGLE_MAPS_API_KEY_FOR_DISTANCE_MATRIX: 'YOUR_DISTANCE_MATRIX_API_KEY',
       GOOGLE_MAPS_API_KEY_FOR_JS_INIT: 'YOUR_JS_API_KEY',
       API_BASE_URL: 'http://localhost:8080/back-end/api'
     };
     ```

4. **Start the Angular development server:**
   ```bash
   ng serve
   ```
   The application will be accessible at `http://localhost:4200`.

---

## 4. Running with Docker

You can also run the application using Docker containers.

1. **Build the Angular application:**
   ```bash
   ng build --prod
   ```

2. **Build the Docker image:**
   ```bash
   docker build -t logical-force-app .
   ```

3. **Run the container:**
   ```bash
   docker run -p 4200:80 logical-force-app
   ```
   The application will be accessible at `http://localhost:4200`.

---

## Conclusion
This frontend application is designed to work with the **CourseWork 2022 Backend**, providing a complete web-based solution for military convoy fuel estimation. Ensure that the backend is running before using the frontend.
