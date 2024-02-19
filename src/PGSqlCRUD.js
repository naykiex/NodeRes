const express = require('express')
const Sequelize = require('sequelize')
const app = express()

app.use(express.json())

const dbUrl = 'postgres://webadmin:'

const sequelize = new Sequelize(dbUrl)