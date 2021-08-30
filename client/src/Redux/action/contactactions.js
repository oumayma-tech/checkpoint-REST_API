import axios from 'axios'
import {GET_CONTACTS, TOGGLE_TRUE,TOGGLE_FALSE,GET_CONTACT} from '../constants/contacttype'


export const getContacts=()=>async(dispatch)=>{
    try {
        const res=await axios.get('/api/contacts')
        dispatch({type:GET_CONTACTS,payload:res.data.contacts})
    }
     catch (error) {
        console.log(error)
    }
}

export const addContact=(newcontact)=>async(dispatch)=>{
    try {
        await axios.post('/api/contacts',newcontact)
        dispatch(getContacts())
    } catch (error) {
        console.log(error)
    }
}
export const getContact=(id)=>async(dispatch)=>{
    try {
      const res=  await axios.get(`/api/contacts/${id}`)
      dispatch({type:GET_CONTACT,payload:res.data.contactf})
      console.log(res.data.contactf)
    } catch (error) {
        console.log(error)
    }
}
export const deleteContact=(id)=>async(dispatch)=>{
    try {
        
  await axios.delete(`/api/contacts/${id}`)
  dispatch(getContacts())
    } catch (error) {
        console.log(error)
    }
}
export  const editContact=(id,newContact)=>async(dispatch)=>{
    try {
        await axios.put(`/api/contacts/${id}`,newContact)
        dispatch(getContacts())
    } catch (error) {
        console.log(error)
    }
}
 export const toggletrue=()=>{
     return{
         type:TOGGLE_TRUE
     }
 }
 export const togglefalse=()=>{
    return{
        type:TOGGLE_FALSE
    }
}