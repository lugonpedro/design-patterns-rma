import { DatabaseConnection } from "./DatabaseConnection";

const dbConn1 = DatabaseConnection.getInstance();
const dbConn2 = DatabaseConnection.getInstance();

console.log(dbConn1 === dbConn2);