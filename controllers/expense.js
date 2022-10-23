const Expense = require('../models/expense');

exports.getExpenses = async (req,res,next)=>{
   try
   {
        const data = await Expense.findAll();
        res.status(201).json(data);
   }
   catch(error){
    console.log(error);
    res.status(500).json({error:error});
   }

};


exports.addExpenses = async (req,res,next)=>{
    try{
        const eamout = req.body.eamout;
        const edescription = req.body.edescription;
        const category = req.body.category;

        const data = await Expense.create({
            eamout: eamout,
            edescription: edescription,
            category: category,
        })
        res.status(201).json({newExpenseDetail: data});
    }
    catch(error){
        console.log(error);
        res.status(500).json({error:error});
      }

};

exports.deleteExpenses = async (req,res,next)=>{
    try{
        let userId = req.params.userId;
        if(!userId)
        {
            res.status(400).json({error:'id missing'});
        }
        await Expense.destroy({where:{id:userId}});
        res.sendStatus(200);

    }
    catch(error){
        console.log(error);
        res.status(500).json('error occured');
      };

};