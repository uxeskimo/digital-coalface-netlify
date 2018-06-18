import React, { Component } from "react";
import Link from "gatsby-link";

export default class Footer extends Component {
  render() {
    return (
      <footer>
         <Link to="/" className="btn">
              Talk on digital coalface
         </Link> 

        <h2>Social</h2>

        <nav>
        	<ul>
        		<li><Link to="/">Twitter</Link></li>
			   	  <li><Link to="/">Facebook</Link></li>
		        <li><Link to="/">Medium</Link></li>
		        <li><Link to="/">Youtube</Link></li>
        	</ul>
        </nav>
   
      </footer>
    );
  }
}




