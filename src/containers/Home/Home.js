import React, { Component } from 'react';
// import { Link } from 'react-router';
// import { CounterButton } from 'components';
import config from '../../config';
import Helmet from 'react-helmet';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    const logoImage = require('./fluxtronics_logo.png');
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <div className={styles.masthead}>
          <div className="container">
            <div className={styles.logo}>
              <p>
                <img src={logoImage}/>
              </p>
            </div>
            <h1>{config.app.title}</h1>

            <h2>{config.app.description}</h2>

            <span>
              "Just remember - when you think all is lost, the future remains."
              <br>
              </br>
              <em>
                -- <a href="https://en.wikipedia.org/wiki/Robert_H._Goddard">Robert H. Goddard</a>
              </em>
            </span>
          </div>
        </div>

        <div className="container">
        </div>
      </div>
    );
  }
}
