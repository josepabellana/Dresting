'use strict';

const db = require('../models');
const { Dress} = db;
async function addDress(req,res) {
  try {
    const info = req.body;
    const newDress = await Dress.create({
      ...info
    });
    res.status(201).json({ "statusCode": 200, "message": `Dress created${newDress}` }); // TODO: login by default or redirect to login page on client?
  } catch (error) {
    console.log(error);
    res.status(500).json({ "statusCode": 200, "message": error });
  }
};

exports.dressController = {addDress}