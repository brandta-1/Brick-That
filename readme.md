# Brick That

## Description
Brick That is a Lego mosaic generator built with Node and Express, and templated with Handlebars. The app can create user accounts and store their generated artwork on a server-side library using the Sequelize ORM for MySQL.
## Installation
A few environment variables are needed in a `.env` file:
* `DB_NAME = lego_db`: the Sequelize instance will use this database when manipulating the `User` and `Lego` models
* `DB_USER`: name of the MySQL user, which is `root` by default
* `DB_PASS`: the password for your MySQL server
```
npm i
npm run start:dev
```
The server is now running locally at http://localhost:3001

## Deployment
The site is deployed on Heroku: https://brick-that.herokuapp.com/

## Preview
![image](https://github.com/brandta-1/Brick-That/assets/116298512/40faa466-8275-4a77-b16e-7bacad8c777a)


