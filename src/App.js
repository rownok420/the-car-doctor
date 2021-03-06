import "./App.css";
import Home from "./Pages/Home/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Pages/Share/Header/Header";
import NotFound from "./Pages/NotFound/NotFound";
import AllServices from "./Pages/AllServices/AllServices";
import Login from "./Pages/Login/Login/Login";
import AuthProvider from "./Context/AuthProvider";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Pages/Share/Footer/Footer";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Booking from "./Pages/Booking/Booking";

function App() {
    return (
        <div className="app">
            <AuthProvider>
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/home">
                            <Home />
                        </Route>
                        <PrivateRoute exact path="/services">
                            <AllServices />
                        </PrivateRoute>
                        <Route exact path="/about">
                            <About />
                        </Route>
                        <Route exact path="/contact">
                            <Contact />
                        </Route>
                        <PrivateRoute exact path="/booking">
                            <Booking />
                        </PrivateRoute>
                        <Route exact path="/login">
                            <Login />
                        </Route>
                        <Route exact path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                    <Footer />
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;

// http://preview.themeforest.net/item/autoservice-car-repair-and-car-service/full_screen_preview/21138492

// http://preview.themeforest.net/item/autoresq-auto-repair-wordpress-theme/full_screen_preview/22307663

//https://www.devsnews.com/template/gerez/gerez/index.html
