import express from "express";
import cors from "cors";
import { db } from "./connect.js";

const app = express();
const PORT = 3018;

// Middleware, colocar sempre antes da requisição e escuta, senão não vai funcionar.
app.use(cors());

app.get("/", (request, response) => {
  response.send("Olá, mundo! Salva, nóis");
});

app.get("/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {});
