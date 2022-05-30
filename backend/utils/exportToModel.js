require('dotenv').config();
const Users = require('../models/user');
const rating = require('../models/ratingTB');
const cwr = require('./createWebResponse');
const fs = require("fs");

const getDocuments = async function (db, callback) {
  const Data = await rating.find();
  callback(Data);
};


const makeRatingTB = async function() {
  await getDocuments("AIR", function (docs) {
    try {
      fs.writeFileSync('./data/ratingTB.json', JSON.stringify(docs));
      console.log('Done writing to file.');
    } catch (err) {
      console.log('Error writing to file', err)
    }
  })
}


const getRCRate = async (req, res) => {
  const data = fs.readFileSync('./data/result.json');
  const docs = JSON.parse(data);

}