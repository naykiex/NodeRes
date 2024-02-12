const express = require('express')
const Sequelize = require('sequelize')
const app = express()

app.use(express.json())

const dbUrl = 'postgres://webadmin:MAIgsf81141@node57201-punnatheenoderest.proen.app.ruk-com.cloud:11698/Books'

const sequelize = new Sequelize(dbUrl)