/**
 * This is not in use. Used for reference
 */

// import express from 'express';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// // import path from 'path';
// import { connectDB } from './connect-db';

// const app = express();
// const port = 8888; // default port to listen

// // // Configure Express to use EJS
// // app.set( "views", path.join( __dirname, "views" ) );
// // app.set( "view engine", "ejs" );

// app.use(
//     cors(),
//     bodyParser.urlencoded({extended:true}),
//     bodyParser.json()
// )

// export const addNewtask = async (task: any) => {
//     let db = await connectDB();
//     let collection = db.collection(`task`);
//     await collection.insertOne(task);
// }

// app.post('task/new', async(req, res)=>{
//     let task = req.body.task;
//     await addNewtask(task);
//     res.send(200).send();
// });

// // // define a route handler for the default home page
// // app.get( "/", ( req, res ) => {
// //     // render the index template
// //     res.render( "index" );
// // } );

// // // start the express server
// // app.listen( port, () => {
// //     // tslint:disable-next-line:no-console
// //     console.log( `server started at http://localhost:${ port }` );
// // } );
