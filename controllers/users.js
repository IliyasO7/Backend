const User = require('../models/user');

exports.getUsers = async (req,res,next)=>{
    console.log("Getting users");

    try{
      
     const data =  await User.findAll()
     res.status(201).json(data);
    }
    catch(error) {
      console.log(error);
      res.status(500).json({error:error});
    }
    
   
}

exports.postAddUser = async(req, res, next) => {
  console.log('adding a user');
  try{
    const name = req.body.name;
    const email = req.body.email;
    const phoneNo = req.body.phoneNo;

    if(!phoneNo){
      throw new Error('please enter phone number');
    }

    const data = await User.create({
      name: name,
      email: email,
      phoneNo: phoneNo,
    })
    res.status(201).json({newUserDetail: data});
  }
  catch(error){
    console.log(error);
    res.status(500).json({error:error});
  }
}


exports.deleteUser = async (req,res,next)=>{
  
  try{
    let userId = req.params.userId;
    if(!userId){
      res.status(400).json({error:'id missing'});
    }
    await User.destroy({where:{id:userId}});
    res.sendStatus(200);
    
  }
  catch(error){
    console.log(error);
    res.status(500).json('error occured');
  };



}
















    
  //left side  titlebelongs to db attribute and right side belongs to const
  

  /*
router.post('/user/add-user', async (req,res,next)=>{
    console.log('hi');
    const name = req.body.name;
    const email = req.body.email;
    const phoneNo = req.body.number;

    const data = await User.create( {name:name, email:email, phoneNo:phoneNo});
    res.status(201).json({newUserDetail: data});
});

router.get('/user/get-user', async (req,res,next)=>{
    console.log("hi");
    const users = await User.findAll();
    res.status(200).json({allUsers: users});
});
*/