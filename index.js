// const express = require("express");

// const app = express();

// app.get("/", (req, res) => {
//   res.send("Express server is running");
// });

// app.listen(3000, () => {
//   console.log("Server started on port 3000");
// });     


// const users = [
//   { id: 1, name: "Arjun", role: "student" },
//   { id: 2, name: "Priyesha", role: "mentor" }
// ];

// console.log("Hello");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Express server is running");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
//=============



app.get("/users", (req, res) => {
  res.status(200).json(users);
});


app.get("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});