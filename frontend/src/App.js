//Import counter class component from src..component
//import CounterClass from './components/counterClass';
//import CounterFunction from './components/counterFunction';
import './App.css';

//Rusiru's video implement parts
import Header from './components/header';
import cusPack from './components/CustomerPack'
import AddPackage from './components/addPackage';
import sith from './components/edit';
import AllPacks from './components/AllPacks'
import EditPack from './components/PackUpdate'
import manager from './components/PackManager'
import AddPackage2 from './components/addFeedback'
import cusP from './components/AllFeedBacks'
import CusFeedBacks from './components/CustomerFeedbacks'  
import EditFeedback from './components/CustomerUpdateFB'
import newPack from './components/NewPackage'
import test from './components/test';
import CusPackage from './components/customizePackage';
import S_AllCusPacz from './components/ViewCustZePackages';
import EditCusPackz from './components/updateCuZPacks';
import AllPacks2 from './components/report';
import packRepo from  './components/packReports';
import findMyPack from  './components/findMyPack';

//import { Router } from 'react-router-dom';
import {BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  return (
    
  <Router>
    <div class="1">
    
    <Route path="/search" exact component={cusPack}></Route>
    <Route path="/front" exact component={sith}></Route>
    <Route path="/fb" exact component={AddPackage2}></Route>
    <Route path="/cfb" exact component={CusFeedBacks}></Route>
    <Route path="/fbupd/:id" exact component={EditFeedback}></Route>
    <Route path="/test" exact component={test}></Route>
    <Route path="/cuz" exact component={CusPackage}></Route>
    <Route path="/cuzAll" exact component={S_AllCusPacz}></Route>
    <Route path="/cuzup/:id" exact component={EditCusPackz}></Route>
    <Route path="/report1/" exact component={AllPacks2}></Route>
    <Route path="/report/" exact component={packRepo}></Route>
  </div>
  <div class="2">
   
    <Route path="/man" exact component={manager}></Route>
    <Route path="/newpack" exact component={newPack}></Route>
    <Route path="/add/package" exact  component={AddPackage} ></Route>
    <Route path="/all" exact component={AllPacks}></Route>
    <Route path="/update/:id" exact component={EditPack}></Route>
    <Route path="/all2" exact component={cusP}></Route>
    <Route path="/findP" exact component={findMyPack}></Route>
    
  
    

  </div> 
</Router> 

);
} 

export default App;


