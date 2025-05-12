import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://rickrayol:heartVol3@cluster0.qxwfxrq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("SpotifyProjeto");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
