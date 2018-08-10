import React, { Component } from "react";
import Link from "gatsby-link";

export default class Footer extends Component {
  render() {
    return (
    <footer>

      <div className="wrap">
        <div className="bottom-content">

                <h3>Social</h3>

                <nav>
                    <ul>
                      <li><Link to="/">Twitter</Link></li>
              			  <li><Link to="/">Facebook</Link></li>
              		    <li><Link to="/">Vimeo</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </footer>
    );
  }
}
