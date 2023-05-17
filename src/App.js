// import logo from './logo.svg';
import React from 'react';
import './App.css';
import FilterSection from './components/FilterSection';
import TableContact from './components/TableContact';
import Title from './components/Title';
import apiAxios from './axios/apiAxios';
import { useDispatch, useSelector } from 'react-redux';
import { actionsContacts } from './store/contact-slice';
import { actionsFilter } from './store/filter-slice';
import { getContacts } from './firebase';

function App() {

  // const [textFilter, settextFilter] = React.useState('')
  const [favContact, setfavContact] = React.useState(false)

  // Dispatch variable
  const dispatch = useDispatch();

  // Get state since contactsSlice with useSelector
  let contacts = useSelector(state => state.contacts.contacts)

  // Get state filter of text
  let textFilter = useSelector(state => state.filters.textFilter)

  // Function change value of filter text
  const settextFilter = valueSearch => {
    dispatch(actionsFilter.settextFilter(valueSearch))
  }
  // console.log('Contacts slice', contacts)


  const handleAdd = async dataContact =>{

    // Add a id for this new value with Date().getTime()
    let dataToSend = {id:new Date().getTime(),...dataContact};

    // Send the new state of contacts in Firebase realtime database
    await apiAxios.put(process.env.REACT_APP_BASE_URL,[...contacts, dataToSend])
      .then(data => console.log('data'))
      .catch(err => console.error(err))

    
    // Updating of contacts state thanks to dispatch and actionsContacts
    dispatch(actionsContacts.setContacts([...contacts , dataToSend]))

  }

  // funtion async who get the lists of contacts from firebase
  
  // UseEffect Appel
  React.useEffect(() =>{
    const getContactsFromFirebase = async () =>{
      const data = await getContacts()

      if(data){
        dispatch(actionsContacts.setContacts(data))
      }else{
        dispatch(actionsContacts.setContacts([]))
      }
    }

    getContactsFromFirebase()
  }, [dispatch])


  return (
    <div className="App">
    {/* <div>test</div> */}
      <div className="border border-2 p-4 bg-slate-500 text-white w-4/12">
        <Title handleAdd={handleAdd} />
        <div className="filter mt-4">
          <FilterSection textFilter={textFilter} settextFilter={settextFilter} favContact={favContact} setfavContact={setfavContact} />
        </div>
        <div className="rowContacts">
          <TableContact  textFilter={textFilter} favContact={favContact} contacts={contacts}/>
        </div>
      </div>
    </div>
  );
}

export default App;
