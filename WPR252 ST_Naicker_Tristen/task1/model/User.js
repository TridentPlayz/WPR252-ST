let express = require("express");
const { get } = require("http");
const { schema } = require("../_router/Routes");
let User = express.Router();

let router = require("../_router/Routes");

User.post("/add", async (req, res) => {
  let Staff = new router({
    title: req.body.title,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    position: req.body.position,
    company: req.body.company,
  });

  try {
    let saveUser = await Staff.save();
    res.json(saveUser);
  } catch (error) {
    res.json({ message: error.message });
  }
});

UserUser.get("/view", async (req, res) => {
  try {
    let view = await router.find();
    res.json(view);
  } catch (error) {
    res.json({ message: error.message });
  }
});
User.get("/view/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    let findUser = await router.findById({
      _id: req.params.id,
    });
    res.json(findUser);
  } catch (error) {
    res.json({ message: error.message });
  }
});

User.patch("/update/:id", async (req, res) => {
  try {
    await router.updateOne(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          position: req.body.position,
          company: req.body.company,
        },
      }
    );
    res.json({ message: "updated" });
  } catch (error) {
    res.json({ message: error.message });
  }
});

User.delete("/delete/:id", async (req, res) => {
  try {
    await router.deleteOne({ _id: req.params.id });
    res.json({ message: "deleted" });
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = User;
