const express = require("express")
const DonationRoutes = require("../src/Donation/routers")
const app = express();
const port = 3000;

app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Hello, MSL server")
})
app.use("/api/v1/donation",DonationRoutes);
app.listen(port,()=> console.log(`app listenting ${port}`));
//hello