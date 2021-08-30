const express=require('express')
const { addcontact, getallcontact, deletecontact, updatecontact, getcontact } = require('../controller/contact')
const router=express.Router()
const contact=require('../Model/contact')

router.get('/contact',(req,res)=>{
   
    res.send('hello')
})

router.post('/',addcontact )

router.get('/',getallcontact)
router.delete('/:ID',deletecontact)
 router.put('/:ID',updatecontact)

 router.get('/:ID',getcontact)








module.exports=router;