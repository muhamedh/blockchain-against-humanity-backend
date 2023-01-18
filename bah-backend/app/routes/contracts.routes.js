module.exports = app => {
    const contracts = require("../controllers/contracts.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Contract
    router.post("/", contracts.create);
  
    // Retrieve all Contracts
    router.get("/", contracts.findAll);
    
    // Get contracts by address
    router.get("/scoped", contracts.getByAddress);

  
    app.use("/api/contracts", router);
  };
  