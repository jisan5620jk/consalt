/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import Logo from "/images/logo.png";
import "./navbar.css";
import { useEffect, useRef } from "react";

const Navbar = () => {

const menuBarRef = useRef(null);
const offcanvasRef = useRef(null);
const bodyOverlayRef = useRef(null);
const closeBtnRef = useRef(null);

useEffect(() => {
  const menuBar = menuBarRef.current;
  const offcanvas = offcanvasRef.current;
  const bodyOverlay = bodyOverlayRef.current;
  const closeBtn = closeBtnRef.current;

  const addClasses = () => {
    offcanvas.classList.add("opened");
    bodyOverlay.classList.add("apply");
  };

  const removeClasses = () => {
    offcanvas.classList.remove("opened");
    bodyOverlay.classList.remove("apply");
  };

  if (menuBar && offcanvas && bodyOverlay && closeBtn) {
    menuBar.addEventListener("click", addClasses);
    closeBtn.addEventListener("click", removeClasses);
    bodyOverlay.addEventListener("click", removeClasses);
  }

  return () => {
    if (menuBar && offcanvas && bodyOverlay && closeBtn) {
      menuBar.removeEventListener("click", addClasses);
      closeBtn.removeEventListener("click", removeClasses);
      bodyOverlay.removeEventListener("click", removeClasses);
    }
  };
}, []);
  
  // Create the header icon element
  const headerIcon = document.createElement("span");
  headerIcon.className = "header-icon";
  headerIcon.innerHTML = `  
    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">  
        <path d="M6.04088 0L0.535156 4.125V11H4.26484V8.59381C4.26484 7.64165 5.05698 6.87506 6.04088 6.87506C7.02477 6.87506 7.81692 7.64165 7.81692 8.59381V11H11.5466V4.125L6.04088 0Z" fill="#FFB302"/>  
    </svg>`;

  // Insert the header icon before the specified element
  const menuIcon = document.querySelector(".menu-icon nav ul .menu-icon-2");
  if (menuIcon) {
    menuIcon.parentNode.insertBefore(headerIcon, menuIcon);
  }

  // Check if both the main menu content and mobile menu exist
  const mainMenuContent = document.querySelector(".main-menu-content");
  const mainMenuMobile = document.querySelector(".main-menu-mobile");

  if (mainMenuContent && mainMenuMobile) {
    const navContent = mainMenuContent.outerHTML;
    mainMenuMobile.innerHTML = navContent;

    const arrowElements = mainMenuMobile.querySelectorAll(".has-dropdown > a");

    arrowElements.forEach((self) => {
      const arrowBtn = document.createElement("button");
      arrowBtn.classList.add("dropdown-toggle-btn");

      // Using an icon like Font Awesome
      arrowBtn.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="11"><path d="M0 0h12l-6 11z" fill="#000" /></svg>'; // Placeholder for `<FaChevronRight />`

      self.appendChild(arrowBtn);

      // Event listener for the button click
      arrowBtn.addEventListener("click", (e) => {
        e.preventDefault();
        arrowBtn.classList.toggle("dropdown-opened");
        const parentLi = self.parentNode;
        parentLi.classList.toggle("expanded");

        // Close other dropdowns
        const siblings = Array.from(parentLi.parentNode.children).filter(
          (child) => child !== parentLi
        );
        siblings.forEach((sibling) => {
          sibling.classList.remove("dropdown-opened");
        });

        // Toggle the submenu
        const submenu = parentLi.querySelector(".submenu");
        if (submenu) {
          submenu.style.display =
            submenu.style.display === "block" ? "none" : "block";
        }
      });
    });
  }
  return (
    <>
      
      <div className="offcanvas-area">
        <div ref={offcanvasRef} className="offcanvas">
          <div className="offcanvas_close-btn">
            <button ref={closeBtnRef} className="close-btn">
              <i className="fal fa-times"></i>
            </button>
          </div>
          <div className="offcanvas_logo">
            <Link to={"/"}>
              <button>
                <img src={Logo} draggable="false" />
              </button>
            </Link>
          </div>
          <div className="offcanvas_title">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              incidunt eaque ab cumque, porro maxime autem sed.
            </p>
          </div>
          <div className="main-menu-mobile lg:none"></div>
          <div className="offcanvas_contact-info">
            <div className="offcanvas_contact-title">
              <h5>Contact us</h5>
            </div>
            <ul>
              <li>
                <i className="fa-light fa-location-dot"></i>
                <Link to={"/"}>
                  <button>Melbone st, Australia, Ny 12099</button>
                </Link>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <Link to={"/"}>
                  <button> needhelp@company.com </button>
                </Link>
              </li>
              <li>
                <i className="fal fa-phone-alt"></i>
                <Link to={"/"}>
                  <button>+48 555 223 224</button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="offcanvas_input">
            <div className="offcanvas_input-title">
              <h4>Get UPdate</h4>
            </div>
            <form
              action="https://formspree.io/f/xayrekgy"
              method="POST"
              className="ajax-form"
            >
              <div className="p-relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter E-Mail"
                  required
                />
                <button type="submit">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
            <div className="status"></div>
          </div>
          <div className="offcanvas_social">
            <div className="social-icon">
              <Link to={"/"}>
                <button>
                  <i className="fab fa-twitter"></i>
                </button>
              </Link>
              <Link to={"/"}>
                <button>
                  <i className="fab fa-instagram"></i>
                </button>
              </Link>
              <Link to={"/"}>
                <button>
                  <i className="fab fa-facebook-f"></i>
                </button>
              </Link>
              <Link to={"/"}>
                <button>
                  <i className="fab fa-pinterest-p"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div ref={bodyOverlayRef} className="body-overlay"></div>
      <div id="header-sticky" className="header-area">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-2">
            <div className="header-logo">
              <Link to={"/"}>
                <button>
                  <img src={Logo} draggable="false" />
                </button>
              </Link>
            </div>
          </div>
          <div className="col-span-7 hidden lg:block">
            <div className="header-main-menu text-end text-xxl-center">
              <nav className="main-menu-content">
                <ul>
                  <li className="has-dropdown">
                    <Link to={"/"}>
                      <button>
                        Home
                        <span>
                          <i className="fa-light fa-sort-down"></i>
                        </span>
                      </button>
                    </Link>
                    <div className="submenu has-homemenu mega-menu">
                      <div className="row row-cols-1 row-cols-md-1 row-cols-xl-2 row-cols-xxl-2">
                        <div className="col homemenu">
                          <div className="homemenu-thumb">
                            <Link to={"/"}>
                              <button>
                                <img
                                  src="assets/images/main-thumb/menu/homepage1.jpg"
                                  alt="thumb"
                                />
                                <h6>Live Demo</h6>
                              </button>
                            </Link>
                          </div>
                        </div>
                        <div className="col homemenu">
                          <div className="homemenu-thumb">
                            <Link to={"/"}>
                              <button>
                                <img
                                  src="assets/images/main-thumb/menu/homepage2.jpg"
                                  alt="thumb"
                                />
                                <h6>Live Demo</h6>
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="has-dropdown">
                    <Link to={"/"}>
                      <button>
                        Pages
                        <span>
                          <i className="fa-light fa-sort-down"></i>
                        </span>
                      </button>
                    </Link>
                    <ul className="submenu">
                      <li>
                        <Link to={"/"}>
                          <button>about us</button>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"}>
                          <button>team</button>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"}>
                          <button>testimonial</button>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"}>
                          <button>cart</button>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"}>
                          <button>checkout</button>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"}>
                          <button>faq</button>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-dropdown">
                    <Link to={"/"}>
                      <button>
                        Service
                        <span>
                          <i className="fa-light fa-sort-down"></i>
                        </span>
                      </button>
                    </Link>
                    <ul className="submenu">
                      <li>
                        <Link to={"/"}>
                          <button>service</button>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"}>
                          <button>service details</button>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-dropdown">
                    <Link to={"/"}>
                      <button>
                        Project
                        <span>
                          <i className="fa-light fa-sort-down"></i>
                        </span>
                      </button>
                    </Link>
                    <ul className="submenu">
                      <li>
                        <Link to={"/"}>
                          <button>project</button>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"}>
                          <button>project details</button>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-dropdown">
                    <Link to={"/"}>
                      <button>
                        Shop
                        <span>
                          <i className="fa-light fa-sort-down"></i>
                        </span>
                      </button>
                    </Link>
                    <ul className="submenu">
                      <li>
                        <Link to={"/"}>
                          <button>shop</button>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"}>
                          <button>shop details</button>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"}>
                          <button>cart</button>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"}>
                          <button>checkout</button>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-dropdown">
                    <Link to={"/"}>
                      <button>
                        Blog
                        <span>
                          <i className="fa-light fa-sort-down"></i>
                        </span>
                      </button>
                    </Link>
                    <ul className="submenu">
                      <li>
                        <Link to={"/"}>
                          <button>blog grid</button>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"}>
                          <button>blog right sidebar</button>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"}>
                          <button>blog left sidebar</button>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"}>
                          <button>blog details</button>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <button>Contact</button>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-span-3">
            <div className="header-right-box">
              <div className="header-right-action flex items-center justify-end">
                <div className="header-right-icon-action hidden lg:block">
                  <div className="header-right-icon">
                    <div className="header-src-btn">
                      <button className="search-box-btn search-box-outer">
                        <i className="fa-regular fa-magnifying-glass"></i>
                      </button>
                    </div>
                    <div className="menu-btn build-home-btn">
                      <Link to={"/"}>
                        <button>
                          get a quote<span></span>
                          <i className="fa-regular fa-arrow-right-long"></i>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="header-bar lg:none">
                  <button ref={menuBarRef} className="menu-bar">
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
