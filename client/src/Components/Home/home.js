import React from 'react'
import {useDispatch} from 'react-redux'
import './home.css'
import {Link} from 'react-router-dom'
import {getContacts, togglefalse} from '../../Redux/action/contactactions'
// import { getContacts, toggleFalse } from '../../redux/actions/contactActions'




const Home = () => {

    const dispatch = useDispatch()

    return (
        <div>
        
           
                <Link to='/'>
                <button className="app-btn"
                onClick={()=>dispatch(getContacts())}>Contact List</button>
                </Link>
           

            
           
               <Link to='/addContact'>
                <button className="app-btn" onClick={()=>dispatch(togglefalse())}>Add Contact</button>
                </Link>
               
           
        </div >
    )
}

export default Home