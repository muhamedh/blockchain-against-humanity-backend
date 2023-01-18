const db = require("../models");
const Contract = db.contracts;

// Create and Save a new contract
exports.create = (req, res) => {
  // Validate request
  if (!req.body.contractAddress) {
    res.status(400).send({ message: "Address of contract can not be empty!" });
    return;
  }

  // Create a Tutorial
  const contract = new Contract({
    blockNumber: req.body.blockNumber,
    contractAddress: req.body.contractAddress,
    creatorAddress: req.body.creatorAddress
  });

  // Save Tutorial in the database
  contract
    .save(contract)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "An error occurred while creating the Contract."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {

  Contract.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "An error occurred while retrieving contracts."
      });
    });
};

exports.getByAddress = (req,res) => {
    if (!req.body.creatorAddress) {
        res.status(400).send({ message: "Address of creator can not be empty!" });
        return;
      }

    let creatorAddress = req.body.creatorAddress;
    Contract.find({ "creatorAddress" : creatorAddress })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "An error occurred while retrieving contracts."
      });
    });
}