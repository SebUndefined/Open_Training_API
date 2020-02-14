import { databaseLoader } from './databaseLoader';

export default class Loader {
    static async loadAll(){
        try {
            await databaseLoader();
        } catch (error) {
            console.log(error);
        }
    }
}