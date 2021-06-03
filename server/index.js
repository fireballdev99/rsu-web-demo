const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "dbpersonal"
})

app.get('/students', (req, res) => {
    db.query("SELECT * FROM students", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});

app.get('/teachers', (req, res) => {
    db.query("SELECT * FROM teachers", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});
app.post('/create', (req, res) => {
    const stuid = req.body.stuid;
    const username = req.body.username;
    const idcard = req.body.idcard;
    const title = req.body.title;
    const name = req.body.name;
    const faculty = req.body.faculty;
    const subject = req.body.subject;
    const degree = req.body.degree;
    const tel = req.body.tel;
    const email = req.body.email;
    const tid = req.body.tid;

    db.query("INSERT INTO students (stuid,username,idcard,title,name,faculty,subject,degree,tel,email,tid) VALUES(?,?,?,?,?,?,?,?,?,?,?)", [stuid, username, idcard, title, name, faculty, subject, degree, tel, email, tid],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("Values inserted");
            }
        }
    );
});

app.listen('3001', () => {
    console.log('Server is running on port 3001')
})