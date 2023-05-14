// import logo from './logo.svg';
import './App.css';
import FilterSection from './components/FilterSection';
import TableContact from './components/TableContact';
import Title from './components/Title';

function App() {

  const data = [
    {
      name:'test',
      telephone:'0394049444'
    },
    {
      name:'test@test',
      telephone:'0394049444'
    },
    {
      name:'test1',
      telephone:'0594387489'
    },
    {
      name:'alberto',
      telephone:'1111111111'
    },
  ]

  // console.log(process.env.REACT_APP_API_KEY)
  return (
    <div className="App">
    {/* <div>test</div> */}
      <div className="border border-2 p-4 bg-slate-500 text-white w-4/12">
        <Title />
        <div className="filter mt-4">
          <FilterSection />
        </div>
        <div className="rowContacts">
          <TableContact contacts={data}/>
        </div>
      </div>
    </div>
  );
}

export default App;
