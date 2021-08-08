const express = require('express');
const router = express.Router();
const admin = require('firebase-admin')

var serviceAccount = require("../../contact-57ee4-firebase-adminsdk-zfrrz-37c379d2f1.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL:'https://contact-57ee4-default-rtdb.firebaseio.com/'
})

const db = admin.database();

router.get('/', (req, res)=>{
    db.ref('contacts').once('value', snapshot =>{
        const data = snapshot.val();
        res.render('index.hbs' , {contacts: data})
    })
    
})

router.post('/new-contact', (req, res)=>{
   
    console.log(req.body);
    const newContact ={
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone
    };
    db.ref('contacts').push(newContact)
    
})

router.get('/delete-contact/:id', (req, res) => {
    db.ref('contacts/' + req.params.id).remove();
    res.redirect('/');
});


module.exports=router;