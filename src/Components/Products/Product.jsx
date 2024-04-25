import Loader from '../Loader'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Field from './Field'

import iconTempsCuisson from "/images/koulibaly.jpg"
import iconTempsBouffe from "/images/koulibaly.jpg"
import iconDifficulte from "/images/koulibaly.jpg"
import iconCuisine from "/images/koulibaly.jpg"
import iconCalories from "/images/koulibaly.jpg"
import iconType from "/images/koulibaly.jpg"

export default function Product({ name, icon, servings, ingredients, instructions, prepTimeMinutes, cookTimeMinutes, difficulty, cuisine, calories, type }) {

    return (
        <div className='about_page'>
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
                                        <h2>{name}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* product */}
                    <div className="container">
                        <div style={{ display: 'grid', gridTemplateColumns : "1fr 1fr", gap : "15px", justifyItems : 'center'}}>
                            <div className="left">
                                <div>
                                    <img style={{width : "100%", maxHeight : "340px", objectFit : "cover"}} src={icon} alt="" />
                                    <div style={{ display: "flex", justifyContent: "space-between" }} className="info">
                                        <h4 style={{marginLeft : "10px"}}>Classic Margherita Pizza</h4>
                                        <h4 style={{display : 'flex', gap : "20px"}}>{servings}<i className="fa-solid fa-user" style={{ fontSize: "18px" }}></i></h4>
                                    </div>
                                </div>
                            </div>
                            <div style={{paddingLeft : "15px"}} className="right">
                                <div className="ingredients">
                                    <h1 style={{textAlign : 'center'}}>Ingredients</h1>
                                    {ingredients.map( (ingredient)=>(
                                        <li key={ingredient}>{ingredient}</li>
                                    ) ) }
                                </div>
                                <div className="instructions">
                                    <h1 style={{textAlign : 'center'}}>Instructions</h1>
                                    {instructions.map( (instruction)=>(
                                        <li key={instruction}>{instruction}</li>
                                    ) ) }
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns : "1fr 1fr", gap : "15px" }} className="info">
                            <div className="left">
                                <div style={{ display: 'grid', gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}>
                                    <Field name={"Temps de cuisson"} icon={iconTempsCuisson} value={45} ></Field>
                                    <Field name={"Temps de manger"} icon={iconTempsBouffe} value={45} ></Field>
                                    <Field name={"Difficulté"} icon={iconDifficulte} value={45} ></Field>
                                    <Field name={"Cuisine"} icon={iconCuisine} value={"Asian"} ></Field>
                                    <Field name={"Calories"} icon={iconCalories} value={250} ></Field>
                                    <Field name={"Type"} icon={iconType} value={"Dinner"} ></Field>
                                </div>
                            </div>
                            <div style={{display : 'flex', justifyContent : 'center', alignItems : 'center', gap : "30px"}} className="right">
                                <h1>Notation</h1>
                                <div className="rating">
                                    <i style={{cursor : "pointer", fontSize : "22px"}} className='fa-solid fa-star'></i>
                                    <i style={{cursor : "pointer", fontSize : "22px"}} className='fa-solid fa-star'></i>
                                    <i style={{cursor : "pointer", fontSize : "22px"}} className='fa-solid fa-star'></i>
                                    <i style={{cursor : "pointer", fontSize : "22px"}} className='fa-solid fa-star'></i>
                                    <i style={{cursor : "pointer", fontSize : "22px"}} className='fa-solid fa-star'></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end product */}
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
                                            <li className="active">
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
                                            <li>
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
