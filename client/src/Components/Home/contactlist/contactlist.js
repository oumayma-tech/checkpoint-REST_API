import './contactlist.css'
import {useSelector} from 'react-redux'
import ContactCard from '../contactcard/contactcard'


const Contactlist = ()=>{

    const contacts = useSelector(state => state.contactReducer.contacts)

    return(
 <div className="contacts-content">
     <div className="contacts-list">
    {
        contacts.map(contact=><ContactCard contact={contact} key={contact._id}/>)
    }
     </div>

 </div>

    )
}
export default Contactlist 