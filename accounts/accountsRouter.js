const router = require("express").Router();
const knex = require("../data/dbConfig");

router.get("/", (req, res) => {
  knex("accounts")
    .then(accounts => res.status(200).json(accounts))
    .catch(err => res.status(500).json({ error: "500 error" }));
});

router.get("/:id", (req, res) => {
  knex("accounts")
    .where({ id: req.params.id })
    .first()
    .then(account => res.status(200).json(account))
    .catch(err => res.status(200).json({ error: "500 error" }));
});

router.post("/", (req, res) => {
  knex
    .insert(req.body, "id")
    .into("accounts")
    .then(ids => res.status(200).json({ message: "Account added" }))
    .catch(err => res.status(200).json({ error: "500 error" }));
});

router.put("/:id", (req, res) => {
  knex("accounts")
    .where({ id: req.params.id })
    .update(req.body)
    .then(count => res.status(200).json({ message: "Account updated" }))
    .catch(err => res.status(200).json({ error: "500 error" }));
});

router.delete("/:id", (req, res) => {
  knex("accounts")
    .where({ id: req.params.id })
    .del()
    .then(count => res.status(200).json({ message: "Account deleted" }))
    .catch(err => res.status(200).json({ error: "500 error" }));
});

module.exports = router;
