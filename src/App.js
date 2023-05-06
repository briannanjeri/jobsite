import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Sidebar from './Sidebar';
import SearchInputs from './SearchInputs';
import Container from './Container';
import Testimonial from './Testimonial';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Sidebar/>
      <SearchInputs/>
      <div className='heading'>
    </div>
      <Container/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;
