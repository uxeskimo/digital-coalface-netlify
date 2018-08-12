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
                      <li><a href="https://twitter.com/Digi_Coalface">Twitter</a></li>
              			  <li><a href="https://www.facebook.com/thedigitalcoalface/">Facebook</a></li>
              		    <li><a href="https://vimeo.com/user79970144">Vimeo</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </footer>
    );
  }
}
