const path = require('path');
const expenseController = require('../controllers/expense');

const express = require('express');

const router = express.Router();


router.get('/expense/getExpenses',expenseController.getExpenses);

router.post('/expense/addExpense',expenseController.addExpenses);

router.delete('/expense/deleteExpense/:userId',expenseController.deleteExpenses);


module.exports = router;