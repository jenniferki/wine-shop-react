import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import NavigationBar from "./components/menu/NavigationBar";
import Sidebar from "./components/menu/Sidebar";
import Home from "./components/home/Home";
import Signup from "./components/signup/Signup";
import Shopping from "./components/shopping/Shopping";
import Feedback from "./components/feedback/Feedback";
import PrivateRoute from "./components/PrivateRoute";
import { doSignup, doReset } from "./actions/auth";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";

import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: '#4a148c',
    },
    secondary: {
      main: '#e91e63',
    },
  },
});

function App({ auth, doSignup, doReset }) {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div>
          <NavigationBar auth={auth} />
          <Sidebar auth={auth} />
        </div>
        <main>
          <Switch>
            <Route exact path="/">
              <Home auth={auth} />
            </Route>
            <Route
              path="/signup"
              render={(props) => <Signup doSignup={doSignup} {...props} />}
            />
            <PrivateRoute path="/shopping" component={Shopping} auth={auth} />
            <PrivateRoute
              path="/feedback"
              component={Feedback}
              auth={auth}
              doReset={doReset}
            />
          </Switch>
        </main>
      </div>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { doSignup, doReset })(App);
