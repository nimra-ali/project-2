// import logo from './logo.svg';
import './App.css';
import Navigation from './Component/Navigation';
import Contactpage from './Component/Contactpage'
import ContactForm from './Component/Contactform';

function App() {
  return (
    <div className="App">
     <Navigation/>
     <Contactpage/>
     <ContactForm/>
    </div>
  );
}

export default App;
