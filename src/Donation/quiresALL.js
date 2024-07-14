const getDonations = "SELECT * FROM donations" ;
const getDonationBYID = "SELECT * FROM donations WHERE id = $1";
const addDonation = "SELECT s FROM donations s WHERE s.phone = $1";
module.exports = {
    getDonations,
    getDonationBYID,
    addDonation
};