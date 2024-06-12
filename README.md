# Description
This is a simple full stack web application for employee management using Spring Boot and ReactJS (with Typescript). It does not include complex logic (such as check email format validation, handling null data, etc.).

Inspired by Daily Code Buffer Daily Code Buffer: [Daily Code Buffer YouTube Channel](https://www.youtube.com/@DailyCodeBuffer)

# Requirement
* MySQL
* Node.js
* An IDE to run Spring Boot

# How to install
## MySQL
Run **employee_system.sql** file in your MySQL instance to create the **employee_system** database with the **employees table**.

## NodeJS
Inside the **employee-system-ui** folder, open your terminal and run `npm install` to install all dependencies for ReactJS UI.

## Spring Boot
To use the command line, navigate to the **employee-system-api**, run `gradle --refresh-dependencies clean build` to install all dependencies for the Spring Boot API
Alternatively, you can open **employee-system-api** as a project in IDE (such as Intellij, Eclipse, etc.) and build dependencies there.

# How to start
- Make sure MySQL is running.
- Launch the **EmployeeSystemApiApplication** from the Spring Boot API project, you should run it in IDE, it will available at localhost:8080.
- Inside **employee-system-ui** folder, open your terminal, run `npm start` to start the UI at localhost:3000. So you should be able to interact with API from there.

# Preview
![image](https://github.com/nhoclahola/SpringBoot_ReactJS-EmployeeManagement/assets/125201610/81c8a63e-3200-4be2-af8d-c569e22ebd71)
![image](https://github.com/nhoclahola/SpringBoot_ReactJS-EmployeeManagement/assets/125201610/6fdbfbc5-7be2-4b83-9eb9-b8f1ea4aea3b)
![image](https://github.com/nhoclahola/SpringBoot_ReactJS-EmployeeManagement/assets/125201610/d59233fc-9939-4c8d-ba3e-acb403a2a657)






