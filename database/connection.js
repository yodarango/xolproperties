const mongoose        = require('mongoose')

const dbConnect = async ()=>{

    try {
        const conn = await mongoose.connect(process.env.MONGO_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log(`successfully connected to: ${conn.connection.host}`)
    } catch (error) {
        console.error(error)
    }

}

dbConnect();