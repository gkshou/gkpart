import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import Home from "./pages/Home/index";
import CreateNFT from "./pages/CreateNFT/index";
import Item from "./pages/Item/index";
import EditNFT from "./pages/EditNFT/index";
import Transfer from "./pages/Transfer/index";
import MyNFTs from "./pages/My NFTs/index";
import Login from "./pages/Login/index";
import Signup from "./pages/Signup/index";
import Classify from "./pages/classify/index";
import Mainpage from "./pages/Mainpage/index";
import Product from "./pages/Product/index";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/create-nft" component={CreateNFT} />
          <Route path="/nft/:nftId" component={Item} />
          <Route path="/edit-nft" component={EditNFT} />
          <Route path="/my-nft" component={MyNFTs} />
          <Route path="/transfer/:nftId" component={Transfer} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/classify" component={Classify} />
          <Route path="/mainpage" component={Mainpage} />
          <Route path="/product" component={Product} />
          <Route>404 Not Found!</Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
