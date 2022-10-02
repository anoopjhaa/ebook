import 'bootstrap/dist/css/bootstrap.min.css'
import MainNavBar from './components/Navbar'
import CollegePage from './views/CollegePage'
import LandingPage from './views/LandingPage'
import collegeData from "./data/CollegeData.json"
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MainNavBar />
      <Switch>
        <Route path='/' exact> 
          <LandingPage collegeData={collegeData}/>
        </Route>
        <Route path='/college/:id'>
          <CollegePage collegeData={collegeData}/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
