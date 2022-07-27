const express = require('express')
const cors = require('cors')
const app = express();
app.use(cors())

const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'database-1.ct6qiw02vb89.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'pleasework',
    database: 'data',
    port: '3306'
})
connection.connect((err) => {
    if (err) {
        console.log(err.message)
    } console.log('connected')
})
app.get('/products', (req, res) => {
    const query = 'SELECT * FROM ecom'
    connection.query(query, (err, result) => {
        if (err) {
            throw err
        } else {
            res.send(result)
        }
    })
})


app.listen(5000, (error) => {
    if (error) {
        throw error
    } else { console.log('connected to server') }
})

