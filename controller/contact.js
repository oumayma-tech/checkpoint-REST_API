 const contact=require('../Model/contact')
 
 exports.addcontact=async(req,res)=>{
    const {name,email,age}=req.body

    try {
        const Contact=await contact.findOne({email})
        if(Contact){
            return res.status(400).send("contact is already exist")
        }
        const newcontact=new contact({
            name,email,age
        })
        await newcontact.save()
        res.status(200).send({msg:"contact added",newcontact})
    } catch (error) {
        res.status(500).send({msg:"impossible to add contact",error})
    }
}

exports.getallcontact=async(req,res)=>{
    try {
        const contacts=await contact.find()
        res.status(200).send({msg:"all contact",contacts})
    } catch (error) {
        res.status(500).send({msg:"impossible to get contact",error})
        
    }
}

exports.deletecontact=async(req,res)=>{
    const {ID}=req.params
    try {
        await contact.findByIdAndDelete(ID)
        res.status(200).send({msg:"contact deleted"},contact)
    } catch (error) {
        res.status(500).send({msg:"impossible to delete contact",error})
    }
}

exports.updatecontact=async(req,res)=>{
    const {ID}=req.params
    try {
        await contact.findByIdAndUpdate(ID,{$set:{...req.body}})
        res.status(200).send("contact updated")

    } catch (error) {
       res.status(500).send({msg:"impossible to update contact",error})
    }
}

exports.getcontact=async(req,res)=>{
    const {ID }=req.params
    try {
         const contactf= await    contact.findById(ID)
        res.status(200).send({msg:"contact", contactf })
    } catch (error) {
       res.status(500).send({msg:"impossible to get contact",error})
    }
}