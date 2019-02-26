# huayu-reviews

This application will be a application to review universities related to the HUAYU enrichment scholarship, in order to better inform applicants of the program. 

It will use React, Node.js, MySQL, and a map, weather and currency exchange API.

#### See diagrams:
a. User flow diagram 
![User Flow Diagram](/readme/userflow.png)<br>
b. Database schema 
![Database Schema](/readme/database.png)<br>
c. API routes plan [here](https://docs.google.com/document/d/1plGu1vT-Kkuqh5ah00hocxkKw2FdfHx9A2RVc7BiUuc/edit)<br>
d. Full-stack architecture drawing 
![Full-stack architecture drawing](/readme/architecture.png)<br>

#### To begin this project: 
1. Clone repo <br>
2. Run yarn install in both api and client folders <br>
3. Run MySQL …. 
4. Create "huayu" database and tables based on the database schema diagram. <br>
5. Populate tables "schools" and "cities" by importing the .csv tables in Sequel Pro. <br>
    [Schools Table](https://docs.google.com/spreadsheets/d/1FI84o7h2kZho0xvpw5f4r3-8LSXVAJrsnGgk33tVW7U/edit?usp=sharing) , [Cities Table](https://docs.google.com/spreadsheets/d/1Nga06CnlZ1_4TxYAL_edX3c2_k4hzNk4tO1iJyFkNmk/edit?usp=sharing) <br>
6. Create ".env" folder with DB password <br>
    DB_PASS=[yourpassword] <br>
7. Run yarn start in parent folder <br>

#### Future features will include:
- Sort schools by location and population
- User login 
- Users can add photos, edit and delete their review
- Users can reply to others
- Search for school name
- Forum for discussion 
- Most recent reviews on homepage
- QUIZ! Which city is right for you?
- Blog posts

 _This is a student project that was created at [Codely](http://codely.tech), a full stack development bootcamp in Barcelona._
