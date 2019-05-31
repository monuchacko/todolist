import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDB } from './connect-db';

/**
 * ITask interface defining the data structure
 */
export interface ITask {
    id: number,
    name: string,
    description: string,
}

/**
 * This is the endpoint for backend API.
 */
export class ServerFile {
    public app: express.Application;

    /**
     * Constructor sets up express server and adds cores and other objects
     */
    public constructor() {
        this.app = express();
        this.app.use(
            cors(),
            bodyParser.urlencoded({ extended: true }),
            bodyParser.json()
        )
    }

    /**
     * Listen to the port and setup routes for new and update. The data is pushed to mongo db
     */
    public listen(): void {
        this.app.listen(process.env.PORT, () => {
            console.log(`App listening on the port ${process.env.PORT}`);
        });

        //Endpoint for adding new task
        this.app.post('task/new', async (req, res) => {
            let task = req.body.task;
            await this.addNewTask(task);
            res.send(200).send();
        });

        //Endpoint for updating new task
        this.app.post('task/update', async (req, res) => {
            let task = req.body.task;
            await this.updateTask(task);
            res.send(200).send();
        });
    }

    /**
     * Add new task method 
     * @param task ITask returns promise. Data is written to mongodb
     */
    public async addNewTask(task: ITask): Promise<void> {
        let db = await connectDB();
        let collection = db.collection(`task`);
        await collection.insertOne(task);
    }

    /**
     * Update existing task
     * @param task ITask returns promise
     */
    public async updateTask(task: ITask): Promise<void> {
        let { id, name, description } = task;
        let db = await connectDB();
        let collection = db.collection(`task`);

        if (name) {
            await collection.updateOne({ id }, { $set: { name } });
        }

        if (description) {
            await collection.updateOne({ id }, { $set: { description } });
        }
    }
}
