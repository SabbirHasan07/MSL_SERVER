const { Router } = require("express");
const BSL = require('./BSL');
 const routers = Router();
 routers.get("/", BSL.getDonations);
 routers.post("/",BSL.addDonation);
 routers.get("/:id", BSL.getDonationBYID);

 module.exports = routers;