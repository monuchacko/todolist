import { ServerFile, ITask } from './server';

describe('MongoDB data interaction test', () => {

    it("Saves data to mongodb does not crash", () => {

        // Make sure it doesn't crash
        process.env.PORT = "5000";
        let srvr = new ServerFile();

        /**
         * This object is used to test db operations
         */
        let task: ITask = {
            id: 125,
            name: "Task 1",
            description: "Description for Task 1"
        };

        // Insert to db
        srvr.addNewTask(task);

        // Update the task item
        task.name = "Task 1 Updated";

        // Save it to db
        srvr.updateTask(task);
        // srvr.listen();

    });
});
