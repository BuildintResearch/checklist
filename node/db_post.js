var mysql = require('mysql2');
var express = require('express')
const cors = require("cors")
const corsOptions = {
    origin:"*",
    credential:true,
    optionSuccessStatus:200,
}
var app = express()
var bodyParser = require('body-parser');
const { query } = require('express');
app.use(cors(corsOptions))
// app.use(bodyParser.urlencoded({
//     extended:true
// }));
app.use(bodyParser.json({limit:'500mb'})); 
var con = mysql.createPool({
    connectionLimit:100,
    host:'13.126.200.203',
    port:'3306',
    user:'buildint_master',
    password:'', 
    database: 'buildint_master',
    waitForConnections:true
  });

app.post('/form', function(req,res){
    var body = req.body 
    console.log('Body: ',req.body);
    // res.sendStatus(200);
    let table_name = `${body["table"]}`
    let columns =  Object.keys(req.body)
    obj = req.body
    let values = [] 
    for (var key in obj) {
        values.push("'"+obj[key]+"'")
    }
    values.shift()
    columns.shift()
    console.log(values)
    let query = `INSERT INTO ${table_name} (${columns}) VALUES (${values})`
    console.log(query)
    con.query(query,function(error,rows,fields){
        if(error) console.log(error);
        else{
            console.log(rows);
            res.send(rows);
        }
    })
})

// route to return all rows of column
app.get('/getlist/:table/:column', function(req,res){
    var table = req.params.table
    var column = req.params.column
    data = []
    console.log(column, table)
    let query = `SELECT ${column} FROM ${table}`
    con.query(query,function(error,rows,fields){
        if(error) console.log(error);
        else{
            for(var i=0;i<rows.length;i++){
                for (var key in rows[i]) {
                    // values.push("'"+obj[key]+"'")
                    console.log(rows[i][key])
                    data.push(rows[i][key])
                }
            }
            console.log(rows)
            res.send(data);
        }
    })
})

app.get('/getrow/:table/:where/:search', function(req,res){
    var table = req.params.table
    var where = req.params.where
    var search = req.params.search
    let query = `SELECT * FROM ${table} WHERE ${where} = '${search}'`
    console.log(query)
    con.query(query,function(error,rows,fields){
        if(error) console.log(error);
        else{
            console.log(rows[0])
            res.send(rows[0]);
            console.log(rows[0]['sign_imgs'])
            console.log(Buffer.from(rows[0]['sign_imgs']).toString('utf-8'))
        }
    })   
})

//images
app.get('/getimg/:table/:where/:search', function(req,res){
    var table = req.params.table
    var where = req.params.where
    var search = req.params.search
    let query = `SELECT * FROM ${table} WHERE ${where} = '${search}'`
    console.log(query)
    con.query(query,function(error,rows,fields){
        if(error) console.log(error);
        else{
            console.log(rows[0])
            res.send(Buffer.from(rows[0]['sign_imgs']).toString('utf-8'));
            console.log(rows[0]['sign_imgs'])
            console.log(Buffer.from(rows[0]['sign_imgs']).toString('utf-8'))
        }
    })   
})

app.get('/getimgl/:table/:where/:search', function(req,res){
    var table = req.params.table
    var where = req.params.where
    var search = req.params.search
    let query = `SELECT * FROM ${table} WHERE ${where} = '${search}'`
    img_list = []
    console.log(query)
    con.query(query,function(error,rows,fields){
        if(error) console.log(error);
        else{
            res.send(Buffer.from(rows[0]['site_img']).toString('utf-8'));
            // console.log(Buffer.from(rows[0]['site_img']).toString('utf-8'))
            console.log(rows[0]['site_img'])
        }
    })   
})

app.listen(3000)