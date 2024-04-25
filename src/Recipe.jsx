import Loader from './Components/Loader'
import Sidebar from './Components/Sidebar'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { getDocs , collection } from 'firebase/firestore';
import { useState , useEffect } from 'react'
import { db  } from './firebase.config';
const Recipe = () => {
  const dbRef = collection( db, "recettes" )
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch()
    }, []);
    const fetch = async ()=>{
        const snapshot = await getDocs(dbRef)
        const fetchData = snapshot.docs.map( (doc) => ({id : doc.id, ...doc.data()}) )
        // console.log( fetchData )
        console.log(fetchData);
        setData( fetchData )
    
      }
  return (
    <>
      {/* loader  */}
      <Loader />
      {/* end loader */}
      <div className="wrapper">
        <Sidebar />
        <div id="content">
          {/* header */}
          <Header />
          {/* end header */}
          <div className="yellow_bg">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="title">
                    <h2>Our Recipes</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* section */}
          <section className="resip_section">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="owl-carousel owl-theme">
                  {data.map((value) => {

                    <div className="item">
                      <div className="product_blog_img">
                        <img src={value.imageUrl} alt="#" />
                      </div>
                      <div className="product_blog_cont">
                        <h3>{value.title}</h3>
                        <h4>
                          <span className="theme_color">voir plus</span>
                        </h4>
                      </div>
                    </div>
                  })}
                    
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* footer */}
          <Footer />
          {/* end footer */}
        </div>
      </div>
      <div className="overlay" />
    </>

  )
}

export default Recipe