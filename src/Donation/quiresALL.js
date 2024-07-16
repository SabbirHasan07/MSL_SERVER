
const getDonations = "SELECT * FROM donations" ;
const getDonationBYID = "SELECT * FROM donations WHERE id = $1";
const checkPhoneExit = "SELECT s FROM donations s WHERE s.phone = $1";
const addDonation = "INSERT INTO donations (campaign,name,phone,email,amount,count,tip) VALUES ($1,$2,$3,$4,$5,$6,$7)";
const deleteDonation = "DELETE FROM donations WHERE id=$1";

module.exports = {
    getDonations,
    getDonationBYID,
    checkPhoneExit,
    addDonation,
    deleteDonation
};