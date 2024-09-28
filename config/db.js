const {MongoClient}=require('mongodb');
require('dotenv').config()

const uri='mongodb+srv://khatrivansh43:tattiji43@cluster0.emb1y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const client=new MongoClient(uri,{useNewUrlParser:true,useUnifiedTopology:true})




const connectDB = async () => {
    try {
        await client.connect();
        console.log('MongoDB Connected');
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit process with failure
    }
};

const getDB = () => {
    return client.db(); // Return the database object
};

module.exports = { connectDB, getDB };
