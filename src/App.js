// import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';
import userForm from './components/userForm';

function App() {
  return (
    <>

    {/* we cann add components like that and also title and aboutText are the props*/}
    <Navbar title= "TextUtils" /> 
    {/* <Navbar />  */}
    <TextForm heading="Enter the Text to Change: " />
    <userForm />
    </>
  );
}

export default App;
