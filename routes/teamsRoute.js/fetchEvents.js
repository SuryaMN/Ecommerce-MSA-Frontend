const router = require("express").Router();

const Event = require("../models/events.model")
const Team = require("../models/teams.model")


router.get("/",(req,res)=>{
    Event.find()
    .then(events => res.json(events))
    .catch(err => res.status(400).json("Error: "+err))
})

router.post('/:id/create',(req,res)=>{

    
    const newTeam = new Team({
        students:req.body.students_arr,
        event:req.params.id
    })

    if(!req.body.students_arr){
        return res.status(200).json({msg:"Enter all fields"})
    }
    
    //Checking if no 1 is already registered
    var pass=1;
    //var fail=0;
    

    const checkRegister = async ()=>{
        for(let i=0;i<req.body.students_arr.length;i++){

            let msg;
            await Student.findOne({srn : (req.body.students_arr)[i] })
            .then(result=>{
                if(result.r_id){
                    //console.log("inside if");
                    msg = "Student already registered!"
                    pass=0
                }
            })
            .catch(err => {
                pass=0;
                msg = "SRN entered doesn't exist!"
            });
            
            //console.log("After catch");
           
            
            if(!pass) return res.status(200).json({msg});
    
        }

        //console.log("after for----------------");

        

        if(pass){
                //console.log("Registering---------");
                newReg.save((err,newReg)=>{
                if(err) throw err;
                else{

                    for(let i=0;i<newReg.people;i++){

                        Student.findOne({srn : (newReg.students)[i] })
                        .then(result=>{
                            result.r_id = newReg.id;
                            result.save()
                            .then(console.log(result))
                            .catch(err=>res.json("Error: "+err))
                        })
                        .catch(err => res.status(400).json("Error: "+err));
                
                    }

                    return res.status(200).json({
                        msg:"Registered!"
                    })

                
                }
            })
        }
    }

    checkRegister();

})



module.exports=router;

