const express          = require('express');
const session          = require('express-session')
const passport         = require('passport');
const LocalStrategy    = require('passport-local').Strategy;
const MongoStore       = require('connect-mongo')
const bcrtypt          = require('bcrypt')
const router           = express.Router();

//router.use             (express.static('public'));
router.use             (express.json());
router.use             (express.urlencoded({extended: false}));
router.use             ('view-engine', 'ejs')

const {User}           = require('../database/models');
const {Place}          = require('../database/models');

const Datastore = require('nedb');
const database = new Datastore('database.db');
database.loadDatabase();


router.get('/api', (req, res) =>
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

router.post('/new-property', async (req, resp) => {
    const place = new Place({
        ...req.body,
        date: Date.now()
    })
    res.send('Success')
try {
    const data = await place.save()
    console.log(data)
} catch (error) {
    console.log(error)
}
})


router.post('/delete', (req, resp) => 
{
const xx = req.body.id;
console.log(xx);
database.remove({_id: xx}, {}, );
})

router.post('/login', (req, res)=>
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

module.exports = router;