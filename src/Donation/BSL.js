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
const addDonation = (req,res)=>{
 const {campaign,name,phone,email,amount,count,tip} = req.body;
 pool.query(quires.checkPhoneExit,[phone],(error,results)=>{
    if(results.rows.length){
        res.send("Phone Number Already Exists");
    }
    pool.query(
        quires.addDonation,
        [campaign,name,phone,email,amount,count,tip],
        (error, results) =>{
            if(error) throw error;
            res.status(201).send("Donation Done Successfully");
        }
     )
 });

}

const  deleteDonation = (req,res) =>{
    const id = parseInt(req.params.id);
    pool.query(quires?.getDonationBYID,[id], (error,results)=>{
        const noDonationfaund = !results.rows.length;
       if(noDonationfaund){
          res.send("Donation not EXISTS!");
       }
       pool.query(quires.deleteDonation,[id],(error,results)=>{
        if(error) throw error;
        res.status(200).send(`Remove Donation with this id ${id} Successfully`)
       })
    });
}

module.exports = {
    getDonations,
    getDonationBYID,
    addDonation,
    deleteDonation,

}