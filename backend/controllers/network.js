require('dotenv').config();
const Users = require('../models/user');
const rating = require('../models/ratingTB');
const cwr = require('../utils/createWebResponse');
const fs = require("fs");

const getDocuments = async function (db, callback) {
  const Data = await rating.find();
  callback(Data);
};


const makeRatingTB = async (req, res) => {
  try {
    getDocuments("AIR", function (docs) {
      try {
        fs.writeFileSync('./data/ratingTB.json', JSON.stringify(docs));
        console.log('Done writing to file.');
      } catch (err) {
        console.log('Error writing to file', err)
      }
    }).then();
    return cwr.createWebResp(res, header, 200, 'getDocuments success!');

  } catch (e) {
    return cwr.errorWebResp(res, header, 500,
      'getUserInfo error', e.message || e);
  }
}

module.exports = {
  makeRatingTB
}