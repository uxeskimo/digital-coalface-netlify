<Toggle>
                {({ on, toggle }) => (
                  <div className="toggle-wrap">
                    <Link onClick={toggle} className="mobile-menu-toggle">
                       <img src={menu} alt="Menu" />
                    </Link>
                    {on && <nav className="mobile-nav">
                      <ul>
                        <li><Link to="/episodes">Episodes</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/talk">Talk on the digital coalface</Link></li>
                      </ul>
                     </nav>}
                  </div>
                )}
             </Toggle>
