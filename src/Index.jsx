import { useState , useEffect } from 'react'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Loader from './Components/Loader'
import Footer from './Components/Footer'
import { getDocs , collection } from 'firebase/firestore';
import { db  } from './firebase.config';

export default function Index() {
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
            <Loader />
            {/* end loader */}
            <div className="wrapper">
                <Sidebar />
                <div id="content">
                    {/* header */}
                    <Header />
                    {/* end header */}
                    {/* start slider section */}
                    <div className="slider_section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="full">
                                        <div
                                            id="main_slider"
                                            className="carousel vert slide"
                                            data-ride="carousel"
                                            data-interval={5000}>
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <div className="row">
                                                        <div className="col-md-5">
                                                            <div className="slider_cont">
                                                                <h3>
                                                                    Découvrez les recettes
                                                                    <br />
                                                                    prés de chez vous
                                                                </h3>
                                                                <p>
                                                                Un festival de saveurs dans chaque bouchée, 
                                                                ces recettes sont une véritable symphonie pour les papilles 
                                                                </p>
                                                                
                                                            </div>
                                                        </div>
                                                        <div className="col-md-7">
                                                            <div className="slider_image full text_align_center">
                                                                <img
                                                                    style={{width : "calc(100% - 150px)", height : "calc(100% - 150px)", display : 'block', position : "absolute", top : "50%", left : "50%", transform : "translate(-50%,-50%)"}}
                                                                    className="img-responsive"
                                                                    src="images/fouti.jpg"
                                                                    alt="#"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <div className="row">
                                                        <div className="col-md-5">
                                                            <div className="slider_cont">
                                                                <h3>
                                                                    Découvrez les recettes
                                                                    <br />
                                                                    prés de chez vous
                                                                </h3>
                                                                <p>
                                                                    
                                                                </p>
                                                                <a className="main_bt_border" href="#">
                                                                    Voir plus
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-7 full text_align_center">
                                                            <div className="slider_image">
                                                                <img
                                                                    style={{width : "calc(100% - 150px)", height : "calc(100% - 150px)", display : 'block'}}
                                                                    className="img-responsive"
                                                                    src="images/burger_slide.png"
                                                                    alt="#"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <a
                                                className="carousel-control-prev"
                                                href="#main_slider"
                                                role="button"
                                                data-slide="prev"
                                            >
                                                <i className="fa fa-angle-up" />
                                            </a>
                                            <a
                                                className="carousel-control-next"
                                                href="#main_slider"
                                                role="button"
                                                data-slide="next"
                                            >
                                                <i className="fa fa-angle-down" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end slider section */}
                    {/* section */}
                    <section className="resip_section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="ourheading">
                                        <h2>Nos Recettes</h2>
                                    </div>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="owl-carousel owl-theme">
                                            <div className="col-md-12">
                                            <div className="owl-carousel owl-theme">
                                                <div className="item">
                                                    <div className="product_blog_img">
                                                        <img src="images/rs1.png" alt="#" />
                                                    </div>
                                                    <div className="product_blog_cont">
                                                        <h3>Homemade</h3>
                                                        <h4>
                                                            <span className="theme_color">voir plus</span>
                                                        </h4>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="product_blog_img">
                                                        <img src="images/rs2.png" alt="#" />
                                                    </div>
                                                    <div className="product_blog_cont">
                                                        <h3>Spaguetti</h3>
                                                        <h4>
                                                            <span className="theme_color">voir plus</span>
                                                        </h4>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="product_blog_img">
                                                        <img src="images/rs3.png" alt="#" />
                                                    </div>
                                                    <div className="product_blog_cont">
                                                        <h3>Omelletes</h3>
                                                        <h4>
                                                            <span className="theme_color">voir plus</span>
                                                        </h4>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="product_blog_img">
                                                        <img src="images/rs4.png" alt="#" />
                                                    </div>
                                                    <div className="product_blog_cont">
                                                        <h3>Sushi Dizzy</h3>
                                                        <h4>
                                                            <span className="theme_color">voir plus</span>
                                                        </h4>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="product_blog_img">
                                                        <img src="images/rs5.png" alt="#" />
                                                    </div>
                                                    <div className="product_blog_cont">
                                                        <h3>The Coffee Break</h3>
                                                        <h4>
                                                            <span className="theme_color">voir plus</span>
                                                        </h4>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="product_blog_img">
                                                        <img src="images/rs1.png" alt="#" />
                                                    </div>
                                                    <div className="product_blog_cont">
                                                        <h3>Homemade</h3>
                                                        <h4>
                                                            <span className="theme_color">voir plus</span>
                                                        </h4>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="product_blog_img">
                                                        <img src="images/rs2.png" alt="#" />
                                                    </div>
                                                    <div className="product_blog_cont">
                                                        <h3>Noodles</h3>
                                                        <h4>
                                                            <span className="theme_color">voir plus</span>
                                                        </h4>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="product_blog_img">
                                                        <img src="images/rs3.png" alt="#" />
                                                    </div>
                                                    <div className="product_blog_cont">
                                                        <h3>Egg</h3>
                                                        <h4>
                                                            <span className="theme_color">voir plus</span>
                                                        </h4>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="product_blog_img">
                                                        <img src="images/rs4.png" alt="#" />
                                                    </div>
                                                    <div className="product_blog_cont">
                                                        <h3>Sushi Dizzy</h3>
                                                        <h4>
                                                            <span className="theme_color">voir plus</span>
                                                        </h4>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="product_blog_img">
                                                        <img src="images/rs5.png" alt="#" />
                                                    </div>
                                                    <div className="product_blog_cont">
                                                        <h3>The Coffee Break</h3>
                                                        <h4>
                                                            <span className="theme_color">voir plus</span>
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="bg_bg">
                        {/* about */}
                        <div className="about">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="title">
                                            <i>
                                                <img src="images/title.png" alt="#" />
                                            </i>
                                            <h2>A propos de notre alimentation &amp; de nos restaurants partenaires</h2>
                                            <span>
                                                It is a long established fact that a reader will be
                                                distracted by the readable content of a
                                                <br /> page when looking at its layout. The point of using
                                                Lorem
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                        <div className="about_box">
                                            <h3>Meilleure nourriture</h3>
                                            <p>
                                            Chaque bouchée est une explosion de saveurs, 
                                            un voyage sensoriel exquis où chaque ingrédient est méticuleusement sélectionné. 
                                            Chaque plat est une histoire racontée à travers les arômes et les textures, 
                                            une célébration de la gastronomie. Chaque repas devient une expérience inoubliable,
                                             mêlant passion et savoir-faire pour créer des moments uniques autour de la table.
                                              Je suis émerveillé par la créativité et l'attention aux détails qui transforment chaque assiette en une œuvre d'art. 
                                              En somme, merci pour cette expérience gustative exceptionnelle et cette ode à la délectation.
                                            </p>
                                            <a href="#">
                                                Lire plus{" "}
                                                <i className="fa fa-long-arrow-right" aria-hidden="true" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-5 col-md-10 col-sm-12 about_img_boxpdnt">
                                        <div className="about_img">
                                            <figure>
                                                <img src="images/about-img.jpg" alt="#/" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end about */}
                        {/* blog */}
                        <div className="blog">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="title">
                                            <i>
                                                <img src="images/title.png" alt="#" />
                                            </i>
                                            <h2>Notre Blog</h2>
                                            <span>
                                                when looking at its layout. The point ofpoint of using Lorem
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                {data.map((dat) => (
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mar_bottom">
                                      <div className="blog_box">
                                        <div className="blog_img_box">
                                          <figure>
                                            <img src={dat.imageUrl} alt="#" />
                                            <span>02 FEB 2019</span>
                                          </figure>
                                        </div>
                                        <h3>{dat.title}</h3>
                                        <p>
                                           {dat.description} <br />
                                          
                                        </p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                            </div>
                        </div>
                        {/* end blog */}
                        {/* Our Client */}
                        <div className="Client">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="title">
                                            <i>
                                                <img src="images/title.png" alt="#" />
                                            </i>
                                            <h2>Nos Clients</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 offset-md-3">
                                        <div className="Client_box">
                                            <img src="images/client.jpg" alt="#" />
                                            <h3>Roock Due</h3>
                                            <p>
                                                Chaque plat était un enchantement pour les papilles ! Les saveurs exquises et les présentations soignées ont fait de chaque repas un pur délice. Bravo au chef et à son équipe pour cette expérience gastronomique mémorable, où passion et attention aux détails étaient palpables dans chaque assiette.
                                            </p>
                                            <i>
                                                <img src="images/client_icon.png" alt="#" />
                                            </i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end Our Client */}
                    </div>
                    {/* footer */}
                    <Footer />
                    {/* end footer */}
                </div>
            </div>
            <div className="overlay" />
        </>
    )
}
