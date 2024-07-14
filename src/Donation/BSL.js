const pool = require('../../Service/DonationDB')
const quires = require('../Donation/quiresALL')
const getDonations = (req,res) =>{
    pool.query(quires?.getDonations, (error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
}
const getDonationBYID = (req,res) =>{
    const id = parseInt(req.params.id);
    pool.query(quires?.getDonationBYID,[id], (error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
}
const addDonation=(req,res)=>{
    const {campaign,name,phone,email,amount,count,tip} = req.body;
    pool.query(quires.checkPhoneNumber,[phone],(error,results)=>{
        if(results.rows.length){
            res.send("Phone number already exit!");
        }
    })
}
module.exports = {
    getDonations,
    getDonationBYID,
    addDonation,
}