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
                      <li><Link to="https://twitter.com/Digi_Coalface">Twitter</Link></li>
              			  <li><Link to="https://www.facebook.com/thedigitalcoalface/">Facebook</Link></li>
              		    <li><Link to="https://vimeo.com/user79970144">Vimeo</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </footer>
    );
  }
}
