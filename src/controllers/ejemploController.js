import { response } from "../helpers/Response.js";

let data = [{
    _id:"1" ,
    name:"Juan",
    lastname:"Mesa",
    age:17
},
{
    _id:"2" ,
    name:"johana",
    lastname:"restrepo",
    age:16

},

{ 
    _id:"3" ,
    name:"jaime",
    lastname:"castrillon",
    age:40
}

];

const userCtrl={}




userCtrl.getData=(req,res)=>{

    try{

        response(res, 200, true, data,
            "Lista de usuarios");

    //     res.status(200).json({
    //     ok:true,
    //     data: data,
    //     message:"Lista de usuarios "
    // })


    } catch (error){
         
        // res.status(500).json({
        //     ok:false,
        //     data:"",
        //     message: error.message, 
        // })

        response(res, 500, false, "", error.message);





    }

    
}

userCtrl.getDataByid = (req,res)=>{
    try {
        const { id } = req.params;

    
        const user=data.find((item)=> item._id===id);

        if(!user){
          return  response(res,404,false, "","user no encontrado");
        }
        response(res,200,true, user,"test")

    } catch (error) {
        response(res, 500, false, "", error.message);
    }
}


userCtrl.saveData=(req,res)=>{
    try {
      const { _id,name, lastname, age } = req.body;

   
      data.push({_id, name, lastname, age: parseInt(age) })

    
      response(
        res,
        201,
        true,
        {
          name,
          lastname,
          age,
        },
        "registro guardado"
      );

      // res.status(201).json({
      //     ok:true,
      //     data:{
      //     name,
      //     lastname,
      //     age
      //     },
      //     message:"registro guardado",
      // })
    } catch (error) {


    //   res.status(500).json({
    //     ok: false,
    //     data: "",
    //     message: error.message,
    //   });

response(res, 500, false, "", error.message);
    }
};

userCtrl.actualizar= (req,res)=>{

    try {

        

        const {id} = req.params
        const {_id,name,lastname,age} = req.body

  

        const newData = data.map((user) => user._id === id?{_id,name,lastname,age:parseInt(age)}:user);

        data = newData

        response(res, 200, true, "" , "User Actualizado correctamente");
    } catch (error) {
        response(res, 500, false, "", error.message);
    }


}


userCtrl.eliminar= (req,res)=>{

    try {
        const {id} = req.params


        const newData = data.filter((user)=>user._id!==id)
        data= newData;

        response(res, 200, true, id, "Usuario eliminado correctamente " );
    } catch (error) {
        response(res, 500, false, "", error.message);
    }


};

export default userCtrl