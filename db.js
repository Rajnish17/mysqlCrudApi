const { Sequelize,DataTypes } = require('sequelize');

require('dotenv').config();
const sequelize = new Sequelize(process.env.DATABASE, process.env.Name, process.env.PASSWORD,{
  host: process.env.HOST,
  port:process.env.PORT,
  dialect:'mysql' 
});

async function connectdb(){
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
connectdb();
 
const User = sequelize.define('User', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING
    
  },
  password:{
    type: DataTypes.STRING
  }
}, {
  // Other model options go here
});

const insertintodb = async(data)=>{
// Create a new user
try {
  const jane = await User.create({ name:data.name, email: data.email ,password:data.password});
console.log("Jane's auto-generated ID:", jane.id);
return jane.id
} catch (error) {
  throw new Error(error)
};
};

const  selectAllData=async()=>{

  try {
          
const users = await User.findAll(


);
return users;
      
  } catch (error) {
      throw new Error(error);
  }


};
//update data
//update on the basis of id
const  updateData=async(data)=>{

  try {
    const users=await User.update({ name: data.name }, {
            where: {
              id: data.id
            }
          });
return users;
      
  } catch (error) {
      throw new Error(error);
  }


};
//Delete on the basis of id
const  deleteData=async(data)=>{

  try {
    const users= await User.destroy({
      where: {
        id:data.id
      }
    });
return users;
      
  } catch (error) {
      throw new Error(error);
  }


};


module.exports={
  insertintodb,
  selectAllData,
  updateData,
  deleteData
}