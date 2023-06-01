import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

const MainQuestionPage = React.lazy(() => import("questions/question1")); // Lazy-load

function App() {
  return (
    <div className="App__container">
      <Router>
        <Switch>
          <>
            <nav className="Nav__container">
              <Link to="/">Home</Link>
              <Link to="/questions/1">Proceed to the question</Link>
            </nav>
          </>
          <Route exact path="/">
            <div>
              <h1>Connected Freight FE Take-home Assignment</h1>
              <hr />
              <p>
                Hello there 👋! Thank you for taking this interview 🙏 and
                congratulations on making it this far 🎉.
              </p>
              <hr />
              <p>
                The test is as follows. You have a list of currency exchange
                rates from the European Central Bank. Create a currency
                converter that converts an amount to another currency using the
                list of exchange rates.
              </p>
              <p>
                First task: Create a form with an input field, display field and
                a button. The input field is for the input amount to be
                converted. The display field is to show the converted amount.
                The button is to convert the input amount and show the converted
                amount.
              </p>
              <p>
                Second task: Add a selection field to select the currency where
                the amount should be converted to.
              </p>
              <p>
                Third task (optional: impressed us 👩‍💻🧑‍💻): Well done! Now it's
                time to write your favorite unit testing well, so we're
                confident that your code will work well in production.
              </p>
              <p>
                Final task: Create a readme that documents your thought process
                and decision-making about why you choose a particular method,
                architecture, library, or concept to solve this kind of problem.
              </p>
              <p>
                Please make sure to give clear instruction as how to run your
                programme. (e.g. node versions, npm versions etc)
              </p>
              <p>
                You have 5 days to complete this task, best of luck! If you have
                any questions you can contact{" "}
                <a href="mailto:nico@connectedfreight.com">
                  nico@connectedfreight.com
                </a>
              </p>
              <p>Key things we are focusing on are:</p>
              <ul>
                <li>
                  <input type="checkbox" checked disabled />
                  <span>Follow best practices.</span>
                </li>
                <li>
                  <input type="checkbox" checked disabled />
                  <span>Code readability.</span>
                </li>
                <li>
                  <input type="checkbox" checked disabled />
                  <span>Code structure.</span>
                </li>
                <li>
                  <input type="checkbox" checked disabled />
                  <span>
                    Naming of parameters, functions, types, classes, and fields.
                  </span>
                </li>
                <li>
                  <input type="checkbox" checked disabled />
                  <span>Appropriate use of comments.</span>
                </li>
              </ul>
            </div>
          </Route>
          <Route path="/questions/1">
            <Suspense fallback={<p>loading...</p>}>
              <MainQuestionPage />
            </Suspense>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
