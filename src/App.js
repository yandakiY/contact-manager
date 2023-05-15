// import logo from './logo.svg';
import React from 'react';
import './App.css';
import FilterSection from './components/FilterSection';
import TableContact from './components/TableContact';
import Title from './components/Title';
import apiAxios from './axios/apiAxios';

function App() {

  const [textFilter, settextFilter] = React.useState('')
  const [favContact, setfavContact] = React.useState(false)

  const [data , setData] = React.useState([
    // {
    //   id:1,
    //   name:'test',
    //   telephone:'0394049444'
    // },
    // {
    //   id:2,
    //   name:'test@test',
    //   telephone:'0394049444'
    // },
    // {
    //   id:3,
    //   name:'test1',
    //   telephone:'0594387489'
    // },
    // {
    //   id:4,
    //   name:'alberto',
    //   telephone:'1111111111'
    // },
  ])

  const handleAdd = async dataContact =>{

    await apiAxios.put(process.env.REACT_APP_BASE_URL,[...data,{id:new Date().getTime(),...dataContact}]);
    console.log("Send "+ dataContact)

    setData([...data , dataContact])

  }

  // console.log(process.env.REACT_APP_API_KEY)

  // UseEffect Appel
  React.useEffect(() =>{

  }, [])
  return (
    <div className="App">
    {/* <div>test</div> */}
      <div className="border border-2 p-4 bg-slate-500 text-white w-4/12">
        <Title handleAdd={handleAdd} />
        <div className="filter mt-4">
          <FilterSection textFilter={textFilter} settextFilter={settextFilter} favContact={favContact} setfavContact={setfavContact} />
        </div>
        <div className="rowContacts">
          <TableContact  textFilter={textFilter} favContact={favContact} contacts={data}/>
        </div>
      </div>
    </div>
  );
}

export default App;
