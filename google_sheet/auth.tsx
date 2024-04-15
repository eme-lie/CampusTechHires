import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import creds from "./serviceAccountKey.json";

const SCOPES = [
  "https://www.googleapis.com/auth/spreadsheets",
  "https://www.googleapis.com/auth/drive.file",
];

const serviceAccountAuth = new JWT({
  email: creds.client_email,
  key: creds.private_key,
  scopes: SCOPES,
});
const doc = new GoogleSpreadsheet("campustechhires1", serviceAccountAuth);

await doc.loadInfo(); // loads document properties and worksheets
console.log(doc.title);
