import Loader from './Components/Loader'
import Sidebar from './Components/Sidebar'
import Header from './Components/Header'

const Contact = () => {
  return (
    <div className='Contact_page'>
  {/* loader  */}
  <Loader />
    {/* end loader */}
  <div className="wrapper">
    <Sidebar />
    <div id="content">
      {/* header */}
      <Header />
      {/* end header */}
      {/* footer */}
      <fooetr>
        <div className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className=" col-md-12">
                <h2>
                  Request A<strong className="white"> Call Back</strong>
                </h2>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <form className="main_form">
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <input
                        className="form-control"
                        placeholder="Name"
                        type="text"
                        name="Name"
                      />
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <input
                        className="form-control"
                        placeholder="Email"
                        type="text"
                        name="Email"
                      />
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <input
                        className="form-control"
                        placeholder="Phone"
                        type="text"
                        name="Phone"
                      />
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <textarea
                        className="textarea"
                        placeholder="Message"
                        type="text"
                        name="Message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <button className="send">Send</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="img-box">
                  <figure>
                    <img src="images/img.jpg" alt="img" />
                  </figure>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="footer_logo">
                  <a href="index.html">
                    <img src="images/logo1.jpg" alt="logo" />
                  </a>
                </div>
              </div>
              <div className="col-md-12">
                <ul className="lik">
                  <li>
                    {" "}
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    {" "}
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    {" "}
                    <a href="recipe.html">Recipe</a>
                  </li>
                  <li>
                    {" "}
                    <a href="blog.html">blog</a>
                  </li>
                  <li className="active">
                    {" "}
                    <a href="contact.html">Contact us</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-12">
                <div className="new">
                  <h3>Newsletter</h3>
                  <form className="newtetter">
                    <input
                      className="tetter"
                      placeholder="Your email"
                      type="text"
                      name="Your email"
                    />
                    <button className="submit">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="container">
              <p>
                © 2019 All Rights Reserved. Design by
                <a href="https://html.design/"> Free Html Templates</a>
              </p>
            </div>
          </div>
        </div>
      </fooetr>
      {/* end footer */}
    </div>
  </div>
  <div className="overlay" />
</div>

  )
}

export default Contact