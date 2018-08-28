import React, { Component } from "react";
import Link from "gatsby-link";

export default class Footer extends Component {
  render() {
    return (
    <footer>

      <div className="wrap">
        <div className="bottom-content">

            <div className="row">

              <div className="column large-7">

              <div className="newsletter-wrap">

              <form name="newsletter-form" action="https://tinyletter.com/thedigitalcoalface" method="post">

                <input type="hidden" value="1" name="embed" />
                <label className="signup-label" for="email-address">Get the digital coalface newsletter</label>
                  <div className="sign-up">
                      <input className="email-input" type="email" name="email-address" placeholder="Email address" />
                      <button type="submit" className="btn signup-btn">Get <span>newsletter</span></button>
                  </div>

               </form>
               <p>I will share my learnings as a designer and my journey with the digital coalface.</p>
                </div>
             </div>
            </div>

                <h3>Social</h3>

                <nav>
                    <ul>
                      <li><a href="https://twitter.com/Digi_Coalface">Twitter</a></li>
              			  <li><a href="https://www.facebook.com/thedigitalcoalface/">Facebook</a></li>
              		    <li><a href="https://vimeo.com/user79970144">Vimeo</a></li>
                      <li><a href="https://www.instagram.com/thedigitalcoalface/">Instagram</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </footer>
    );
  }
}
