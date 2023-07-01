import './App.css';
import Navbar from './Navbar'; 
import TextForm from './TextForm';
function App() {
  return(
  <>
      <Navbar  aboutus="About"/>
      <div className="container my-3">
      <TextForm Heading = "Enter the text to analyze below"/>
      </div>
  </>
  );
      
 
}

export default App;
