import { createConnection } from "typeorm";

export const databaseLoader = async () => {
    try {
        await createConnection();
    } catch (error) {
        console.log(error)
    }
}