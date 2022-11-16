import react from 'react'

import HomeScreen from './screen/homescreen';
import { BrowserRouter, Route } from "react-router-dom";
import ConnectionForm from './component/connection';
import ConnectionSuccess from './component/connectsuc';
import SomethingWentWrong from './component/wrong';

function App()
{
  return(
    <div>
      
<BrowserRouter>
<Route path='/' exact component={HomeScreen} ><HomeScreen/></Route>
<Route path='/connect' exact component={ConnectionForm} ><ConnectionForm/></Route>   
<Route path='/connection_success' exact component={ConnectionSuccess} ><ConnectionSuccess/></Route> 
<Route path='/error' exact component={SomethingWentWrong} ><SomethingWentWrong/></Route> 
      </BrowserRouter>
    </div>
  )
}

export default App ;