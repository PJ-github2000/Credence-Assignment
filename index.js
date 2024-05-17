const express = require("express");
const sqlite3 = require("sqlite3");
const { open } = require("sqlite");
const path = require("path");
const dbPath = path.join(__dirname, "database.db");

const app = express();

app.use(express.json());

let db = null;

const initialization = async () => {
  try {
    db = await open({ filename: dbPath, driver: sqlite3.Database });

    await db.exec(`
        CREATE TABLE IF NOT EXISTS movies (
          id INTEGER PRIMARY KEY,
          name TEXT NOT NULL,
          image TEXT NOT NULL,
          summary TEXT NOT NULL

        )
      `);

    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  } catch (error) {
    console.log(`DB error: ${error}`);
    process.exit(1);
  }
};

initialization();

app.post("/create", async (request, response) => {
  try {
    const { name, image, summary } = request.body;
    const userCheck = await db.get(`SELECT * FROM movies WHERE name = ?`, [
      name,
    ]);
    if (!userCheck) {
      const insertData = await db.run(
        `INSERT INTO movies(name, image, summary) VALUES(?, ?, ?)`,
        [name, image, summary]
      );
      response.json({
        message: `Created new movie data with id ${insertData.lastID}`,
      });
    } else {
      response.status(400);
      response.json({ error: "movie already exists" });
    }
  } catch (error) {
    console.log(error);
    response.sendStatus(500);
  }
});
app.put("/update/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const { name, image, summary } = request.body;

    const updateData = `UPDATE movies SET name=?,image=?,summary=? WHERE id=?`;
    await db.run(updateData, [name, image, summary, id]);
    response.json({ message: "Data updated successfully" });
  } catch (error) {
    console.log(error);
    response.sendStatus(500);
  }
});

app.get("/get", async (request, response) => {
  try {
    const getData = `SELECT * FROM movie`;
    const data = await db.all(getData);
    response.json(data);
    console.log(data);
  } catch (error) {
    console.log(error);
    response.sendStatus(500);
  }
});

app.delete("/delete/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const deleteData = `DELETE FROM movies WHERE id = ?`;
    await db.run(deleteData, [id]);
    response.json({ message: "Data deleted successfully" });
  } catch (error) {
    console.log(error);
    response.sendStatus(500);
  }
});
