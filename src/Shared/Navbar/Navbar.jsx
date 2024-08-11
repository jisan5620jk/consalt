import { Link } from "react-router-dom";
import Logo from "/images/logo.png";
import $ from "jquery";
import "./navbar.css";
import { FaChevronRight } from "react-icons/fa";

const Navbar = () => {
  ("use strict");
  $(".menu-bar").on("click", function () {
    $(".offcanvas").addclassName("opened");
    $(".body-overlay").addclassName("apply");
  });
  $(".close-btn").on("click", function () {
    $(".offcanvas").removeclassName("opened");
    $(".body-overlay").removeclassName("apply");
  });
  $(".body-overlay").on("click", function () {
    $(".offcanvas").removeclassName("opened");
    $(".body-overlay").removeclassName("apply");
  });

  ///////////////////////////////////////////////////
  //  SubMenu Dropdown Toggle
  let header_icon = `<span className="header-icon">
		<svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="ht://www.w3.org/2000/svg">
		<path d="M6.04088 0L0.535156 4.125V11H4.26484V8.59381C4.26484 7.64165 5.05698 6.87506 6.04088 6.87506C7.02477 6.87506 7.81692 7.64165 7.81692 8.59381V11H11.5466V4.125L6.04088 0Z" fill="#FFB302"/></svg>                                
	</span>`;
  $(header_icon).insertBefore(".menu-icon nav ul .menu-icon-2");

  ////////////////////////////////////////////////////

  ////////////////////////////////////////////////////
  // menu content - start
  if ($(".main-menu-content").length && $(".main-menu-mobile").length) {
    let navContent = document.querySelector(".main-menu-content").outerHTML;
    let mobileNavContainer = document.querySelector(".main-menu-mobile");
    mobileNavContainer.innerHTML = navContent;

    let arrow = $(".main-menu-mobile .has-dropdown > a");

    arrow.each(function () {
      let self = $(this);
      let arrowBtn = document.createElement("BUTTON");
      arrowBtn.classList.toggle("dropdown-toggle-btn", true);
      arrowBtn.innerHTML = <FaChevronRight />;

      self.append(function () {
        return arrowBtn;
      });

      self.find("button").on("click", function (e) {
        e.preventDefault();
        let self = $(this);
        self.toggleclassName("dropdown-opened");
        self.parent().toggleclassName("expanded");
        self
          .parent()
          .parent()
          .addclassName("dropdown-opened")
          .siblings()
          .removeclassName("dropdown-opened");
        self.parent().parent().children(".submenu").slideToggle();
      });
    });
  }

  return (
    <>
      <div className="offcanvas-area">
        <div className="offcanvas">
          <div className="offcanvas_close-btn">
            <button className="close-btn">
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
          <div className="main-menu-mobile d-xl-none"></div>
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
      <div className="body-overlay"></div>
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
                  <button className="menu-bar">
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
