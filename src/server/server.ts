import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDB } from './connect-db';

export interface ITask {
    id: number,
    name: string,
    description: string,
}

export class ServerFile {
    public app: express.Application;

    public constructor() {
        this.app = express();
        this.app.use(
            cors(),
            bodyParser.urlencoded({ extended: true }),
            bodyParser.json()
        )
    }

    public listen(): void {
        this.app.listen(process.env.PORT, () => {
            console.log(`App listening on the port ${process.env.PORT}`);
        });

        this.app.post('task/new', async (req, res) => {
            let task = req.body.task;
            await this.addNewTask(task);
            res.send(200).send();
        });

        this.app.post('task/update', async (req, res) => {
            let task = req.body.task;
            await this.updateTask(task);
            res.send(200).send();
        });
    }

    public async addNewTask(task: ITask): Promise<void> {
        let db = await connectDB();
        let collection = db.collection(`task`);
        await collection.insertOne(task);
    }

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
