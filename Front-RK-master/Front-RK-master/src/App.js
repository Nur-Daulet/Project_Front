import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Porsche from './components/Audi';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Audi from './components/Porsche'
import {BrowserRouter, Routes, Route} from "react-router-dom"; 

function App() {
  return (
    <BrowserRouter>
        <div className='App'>
            <Header />
                <div>  
                    <Routes>
                        <Route path="" element= {<Main/>}/>
                        <Route path="/Porsche" element= {<Porsche/>}/>
                        <Route path="/SignUp" element= {<SignUp/>}/>
                        <Route path="/SignIn" element= {<SignIn/>}/>
                        <Route path="/Audi" element= {<Audi/>}/>
                    </Routes>
                </div>
            <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
