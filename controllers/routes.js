const express          = require('express');
const session          = require('express-session')
const passport         = require('passport');
const LocalStrategy    = require('passport-local').Strategy;
const MongoStore       = require('connect-mongo')
const bcrtypt          = require('bcrypt')
const router           = express.Router();
const methodOverride   = require('method-override')

router.use             (express.static('public'));
router.use             (express.json());
router.use             (express.urlencoded({extended: false}));
router.use             (methodOverride('_method'))

const {User}           = require('../database/models');
const {Place}          = require('../database/models');

router.use             (session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false, 
    store: MongoStore.create({mongoUrl: process.env.MONGO_DB}),
    ttl: 60 * 60 *24
}));

router.use             (passport.initialize());
router.use             (passport.session());

passport.serializeUser((user, done)=>{
    done(null, user.id)
})
passport.deserializeUser((id, done)=>{
    User.findById(id, (err, user)=>{
        done(err, user)
    })
});

passport.use(new LocalStrategy((username, password, done)=>{

     User.findOne({username: username.toLocaleLowerCase()}, (err, user)=>{
        if(!user) { return done (null, false) }

        if(user.password != password) { return (null, false)}
        return done(null, user)
     })
}))

const loggedIn = (req, res, next)=>{
if(req.isAuthenticated()) return next()
res.redirect('/login')
}

const loggedout = (req, res, next)=>{
    if(!req.isAuthenticated()) return next ()
    res.redirect('/account')
}

router.get('/login', loggedout, (req,res)=>{
    res.render('login')
})

router.post('/login', passport.authenticate('local', {
        successRedirect: '/account',
        failureRedirect: '/login'
    })
    );

router.get('/logout', (req, res)=>{
    req.logOut();
    res.redirect('/')
})
router.get('/account', loggedIn, async (req,res)=>{
    try {
        const property = await Place.find({});
        res.render('account', {property})
    } catch (error) {
        
    }

})

router.post('/new-property', loggedIn, async (req, res) => {
    const place = new Place({
        ...req.body,
        date: Date.now()
    })
try {
    const data = await place.save()
    res.redirect('/account')
} catch (error) {
    console.log(error)
}
})


router.delete('/delete-tour/:id', loggedIn, async (req, res) => {
try {
    const removed = await Place.findByIdAndDelete({_id: req.params.id})
    res.redirect('/account')
} catch (error) {
    console.log(error)
};
})

router.patch('/update-password', loggedIn, async (req, res)=>{

    try {
        const user = await User.findOneAndUpdate({...req.body});
        res.redirect('/account')
        console.log(user)
    } catch (error) {
        console.log(error)
    }
})

// router.get('/setup', async (req, res)=>{
// try {
//     const user = new User({
//         username: 'xolproperties',
//         password: '123'
//     })
//     await user.save()
//     res.send(user)
// } catch (error) {
//     console.lopg(error)
// }
// })

router.get('', async (req, res)=>{

    try {
        const property = await Place.find({});
        res.render('index', {property});
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;