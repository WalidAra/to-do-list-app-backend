const express = require("express");
const router = express.Router();
const Methods = require("../models/method");
const array = require("../tasks");

router.get("/api/tasks", (req, res) => {
  res.json(array);
});

router.post("/api/delete", (req,res) => {
  const id = req.body.id;
  const _tasks = Methods.DeleteTask(array,id);
  res.json(_tasks);
});

router.post("/api/add", (req, res) => {
  const content = req.body.newTask; 
  const _tasks = Methods.AddNewTask(array, content);
  res.json(_tasks);
});

module.exports = router;
