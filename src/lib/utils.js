import mongoose from "mongoose"


export const conectToDb = async() => {
 
    try {

        if(mongoose.connection.readyState ==1){
            console.log('☑ connected to db using existing connection ')
        }else{
            const db = await mongoose.connect(process.env.MONGO);
            console.log('🆕 new connection established')
        }
   
      } catch (error) {
      console.log(error);
      throw new Error(error)
      }
}