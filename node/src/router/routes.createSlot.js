'use strict';

const express = require('express');
const slotControllor = require('../controller/createSlot');
const slot = express.Router();

slot
  .post('/',slotControllor.createSlot)
  .get('/getAll',slotControllor.getAllSlotList)
  .get('/getSlot/:selectedDate/:option',slotControllor.getSlot)
  .get('/checkAvailable/:start_section/:end_section',slotControllor.checkAvailablity)
  .delete('/removeSlot/:id',slotControllor.deleteSlot)
module.exports = slot;