import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Shortinputs from './Components/Input/Shortinputs';
import RegError from './Components/RegError/RegError';
import Success from './Components/SuccesMessage/Success';
import Dbtable from './Components/dbTable/Dbtable';
import AptConfirmation from './Components/AptConfirmation/AptConfirmation';
import ConfirmNotFound from './Components/ConfirmNotFound/ConfirmNotFound';
import ConfirmSuccess from './Components/ConfirmSuccess/ConfirmSuccess';
import DbSave from './Components/DbSave/DbSave';
function App() {
  return (
    <div>
    <Header/>
    <Main/>
    {/* <Shortinputs/> */}
    {/* <RegError/> */}
    {/* <Success/> */}
    {/* <Dbtable/> */}
    {/* <AptConfirmation/> */}
    {/* <ConfirmNotFound/> */}
    {/* <ConfirmSuccess/> */}
    {/* <DbSave/> */}
    </div>
  );
}

export default App;
