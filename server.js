const app = require("./app");
const mongoose = require("mongoose");

const { DB_HOST, PORT = 3000 } = process.env;
mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

  // const DB_HOST = "mongodb+srv://Oleh-Syvoenko:oJZRkSUoXjBdqXoY@cluster0.jyyzqvy.mongodb.net/db-contacts?retryWrites=true&w=majority";
  // oJZRkSUoXjBdqXoY