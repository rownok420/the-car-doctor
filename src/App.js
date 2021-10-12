import "./App.css";
import Home from "./Pages/Home/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Header from "./Pages/Share/Header/Header";
import NotFound from "./Pages/NotFound/NotFound";
import AllServices from "./Pages/AllServices/AllServices";
import Login from "./Pages/Login/Login/Login";

function App() {
    return (
        <div className='app'>
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route exact path='/home'>
                        <Home />
                    </Route>
                    <Route exact path='/services'>
                        <AllServices />
                    </Route>
                    <Route exact path='/login'>
                        <Login />
                    </Route>
                    <Route exact path='*'>
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;




// http://preview.themeforest.net/item/autoservice-car-repair-and-car-service/full_screen_preview/21138492

// http://preview.themeforest.net/item/autoresq-auto-repair-wordpress-theme/full_screen_preview/22307663
