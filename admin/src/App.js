import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/login";
import {useSelector} from "react-redux";
import redirect from "react-router-dom/es/Redirect";
import Redirect from "react-router-dom/es/Redirect";

function App() {
    const admin = useSelector((state) => state.user.currentUser ? state.user.currentUser.isAdmin : null);
  return (
      <Router>
        <Switch>
          <Route path="/login">
              {admin ? (<Redirect to={"/"}></Redirect>) : <Login/>}
          </Route>
          {admin ? (
              <>
                <Topbar />
                <div className="container">
                  <Sidebar />
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="/users">
                    <UserList />
                  </Route>
                  <Route path="/user/:userId">
                    <User />
                  </Route>
                  <Route path="/newUser">
                    <NewUser />
                  </Route>
                  <Route path="/products">
                    <ProductList />
                  </Route>
                  <Route path="/product/:productId">
                    <Product />
                  </Route>
                  <Route path="/newproduct">
                    <NewProduct />
                  </Route>
                </div>
              </>
          ) : <Redirect to={"/login"}></Redirect>}
        </Switch>
      </Router>
  );
}

export default App;
