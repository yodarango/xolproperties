const express = require('express');
const app = express();
const Datastore = require('nedb');
let port = 3000;

app.listen(process.env.PORT || port, () => console.log(`listenign in port ${port}`));

app.use(express.static('public'));
app.use(express.json());

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



