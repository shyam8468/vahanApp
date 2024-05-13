import express from "express"
import mysql from "mysql"
import cors from "cors"
const app = express()

const db = mysql.createConnection({
    host:"local",
    user:"root",
    password:"P@ssw0rd0997",
    database:"persons"
})

// if there is a authentication problem.
// ALTER USER 'root'@'localhost'

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.json("Hello this is the backend")
})

app.get("/persons",(req,res)=>{
    const q = "select * from persons"
    db.query(q,(err,data)=>{
        if(err){
            return res.json(err)
        }
        else{
            return res.json(data)
        }
    })
})

app.post("/persons",(req,res)=>{
    const q = "INSERT INTO persons (`first_name`,`last_name`,`city`,`state`,`mobile`,`email`,`bio`) VALUES(?)"
    //const values = ["Algorithm","This is algorithm books","algo.png"]
    const values = [
            req.body.first_name,
            req.body.last_name,
            req.body.city,
            req.body.state,
            req.body.mobile,
            req.body.email,
            req.body.bio
    ]

    db.query(q,[values],(err,data)=>{
    if(err) return res.json(err)
    //return res.json(data)
        return res.json("Book has been created successfully")
    })
})


// app.post("/books",(req,res)=>{
//     const q = "INSERT INTO books (`Title`,`Discription`,`Price`,`Cover`) VALUES(?)"
//     //const values = ["Algorithm","This is algorithm books","algo.png"]
//     const values = [
//             req.body.title,
//             req.body.discription,
//             req.body.price,
//             req.body.cover,
//     ]

//     db.query(q,[values],(err,data)=>{
//     if(err) return res.json(err)
//     //return res.json(data)
//         return res.json("Book has been created successfully")
//     })
// })

// app.put("/books/:id",(req,res) => {
//     const bookId = req.params.id

//     const q = "UPDATE books SET `Title` = ?, `Discription` = ?, `Price` = ?,`Cover` = ? WHERE id = ?";

//     const values = [
//             req.body.title,
//             req.body.discription,
//             req.body.price,
//             req.body.cover,
//     ]

//     db.query(q,[...values,bookId],(err,data)=>{
//         if(err) return res.json(err)
//         return res.json("Book has been updated")
//     });
// });

// app.delete("/books/:id",(req,res)=>{
//     const bookId = req.params.id;

//     const q =   "DELETE FROM books WHERE id = ?"
//     db.query(q,[bookId],(err,data)=>{
//         if(err) return res.json(err);
//         return res.json("Book has been deleted successfully")
//     })


// })

app.delete("/persons/:id",(req,res)=>{
    const personId = req.params.id;
    const q = "DELETE FROM persons WHERE id = ?"
    db.query(q,[personId],(err,data)=>{
        if(err) return res.json(err)
        return res.json("Person Infomation is deleted")
    })
})

app.put("/persons/:id",(req,res)=>{
    const personId = req.params.id;
    const q = "UPDATE persons SET `first_name` = ?, `last_name` = ?, `city`= ?, `state` = ?, `mobile` = ?,`email` = ?, `bio` = ? WHERE id=? "

    const values = [
            req.body.first_name,
            req.body.last_name,
            req.body.city,
            req.body.state,
            req.body.mobile,
            req.body.email,
            req.body.bio
    ]

    db.query(q,[...values,personId],(err,data)=>{
        if(err){
            return res.json(err)
        }
        else{
            return res.json("Person Information Upadted")
        }
    })

})


app.listen(8800, ()=>{
    console.log("connected to backend!1")
})