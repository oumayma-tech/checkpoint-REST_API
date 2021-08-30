import React,{useEffect, useState}  from 'react'

import { Form } from 'react-bootstrap'
import './addcontact.css'
import {useDispatch, useSelector} from 'react-redux'
import addBtn from '../../../Assets/add.png'
import editBtn from '../../../Assets/edit.png'
import { addContact, editContact } from '../../../Redux/action/contactactions'



const AddEditContact = ({history}) => {
   
   const [contact,setContact]=useState({name:"",email:"",age:0})


   const edit=useSelector(state=>state.contactReducer.edit)
   const editcontact=useSelector(state=>state.contactReducer.contact)

 const dispatch=useDispatch()

const handleChange=(e)=>{
    setContact({...contact,[e.target.name]:e.target.value})
}
useEffect(()=>{
    edit ? setContact(editcontact):setContact({name:"",email:"",age:0})
}
,[edit,editcontact])
 

    return (
        <Form className="my-form">
           
            <Form.Group className="my-little-form">
                <Form.Control type="text"
                    placeholder="Enter contact name ..."
                    name="name"
                    defaultValue={contact.name}
                    onChange={handleChange}
                />
                <Form.Text className="text-muted">Name is required !!</Form.Text>
            </Form.Group>

            <Form.Group >
                <Form.Control type="text"
                    placeholder="Enter contact email ..."
                    name="email"
                    defaultValue={contact.email}
                    onChange={handleChange}
                />
                <Form.Text className="text-muted">Email is required !!</Form.Text>
            </Form.Group>

           
            <Form.Group >
                <Form.Control type="number"
                    placeholder="Enter contact age ..."
                    name="age"
                    defaultValue={contact.age}
                    onChange={handleChange}
                />
            </Form.Group>

            
          
             {
                 edit ? <img src={editBtn} alt="edit" className="edit-btn" 
                 onClick={()=>{dispatch(editContact(editcontact._id,contact));history.push('/') }}/> :
                 <img src={addBtn} alt="add" className="add-btn" 
                 onClick={()=>{dispatch(addContact(contact));history.push('/')}}
                 /> 
             }
          

                 
        </Form>
    )
}

export default AddEditContact