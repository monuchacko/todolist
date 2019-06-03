import { MongoClient } from 'mongodb';

// Connect to backend (Note: the urls will go to env variables and not harcoded here. This is only for test.)
const url = process.env.MONGODB_URI || `mongodb://localhost:27017/todolist`;
let db:any = null;

export async function connectDB() {
    if (db) return db;
    console.log(`Connecting to ${url}`)
    let client = await MongoClient.connect(url, { useNewUrlParser: true });
    db = client.db();
    console.log("Connected to db", db);
    return db;
}

connectDB();