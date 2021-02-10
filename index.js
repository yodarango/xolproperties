const path = require('path')

const express = require('express');
const app = express();
const Datastore = require('nedb');
let port = 3000;

app.listen(process.env.PORT || port, () => console.log(`listenign in port ${port}`));

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const database = new Datastore('database.db');
database.loadDatabase();


app.get('/api', (req, res) =>
{
    database.find({}, (err, data) =>
    {
        if(err) {
            response.end();
            return;
        }
        res.json(data)
    });
});

app.post('/api', (req, resp) => 
{
    console.log('i got a new request')
    const data = req.body;
    const timestamp = Date.now();
    database.insert(data);
    resp.json({
        status: 'success',
        timestamp: timestamp
    });
})


app.post('/delete', (req, resp) => 
{
const xx = req.body.id;
console.log(xx);
database.remove({_id: xx}, {}, );
})

app.post('/login', (req, res)=>
{
    const userPassword = 'JU1120XOL'
    const userUsername = 'xolproperties'
    if(req.body.username === userUsername && req.body.password === userPassword)
    {
        res.redirect('/account.html')
    }
    else
    {
        res.redirect('/fail-login.html')
    }
    console.log(req.body)
})

// app.get('/account', function(req, res) ///// 2.0
// {
//     res.sendFile(path.join(__dirname + '/public/account.html'));
// });

// app.get('/filter/:location', (req, res)=>
// {
//     database.find({location: req.params.location}, (err, data) =>
//     {
//         if(err) {
//             response.end();
//             return;
//         }
//         res.json(data)
//     });
// })
