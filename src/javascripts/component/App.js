import React from "react";

import Header from "./Header";
import Tasklist from "./Tasklist";
import Form from "./Form";
import Info from "./Info";
import Comment from "./Comment";

class App extends React.Component {
  render() {
    return (
      <div className="o-flex">
        <div className="o-flex--section">
          <section className="o-card">
            <header className="o-card__header">
              <Header />
            </header>
            <div className="o-card__body">
              <Tasklist />
            </div>
          </section>
        </div>

        <div className="o-flex--section">
          <section className="o-card">
            <div className="o-card__body">
              <Form />
              <Info />
            </div>
            <footer className="o-card__footer">
              <Comment />
            </footer>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
