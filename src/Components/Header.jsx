export default function Header() {
    const test = localStorage.getItem("check")
    const deconnexion = () => {
        localStorage.removeItem("check")
        localStorage.removeItem("user_id")
        window.location.reload()
    }
    return (
        <header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <div className="full">
                            <a className="logo" href="/">
                                <img src="images/logo.png" alt="#" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="full">
                            <div className="right_header_info">
                                <ul>
                                    <li className="dinone">
                                        <img
                                            style={{ marginRight: 15, marginLeft: 15 }}
                                            src="images/phone_icon.png"
                                            alt="#"
                                        />
                                        <a href="tel: 629256106">(+224) 629-25-61-06</a>
                                    </li>
                                    <li className="dinone">
                                        <img
                                            style={{ marginRight: 15 }}
                                            src="images/mail_icon.png"
                                            alt="#"
                                        />
                                        <a href="mailto: soleiltech2021@gmail.com">soleiltech2021@gmail.com</a>
                                    </li>
                                    <li className="dinone">
                                        <img
                                            style={{
                                                marginRight: 15,
                                                height: 21,
                                                position: "relative",
                                                top: "-2px"
                                            }}
                                            src="images/location_icon.png"
                                            alt="#"
                                        />
                                        <a href="#">Kipé</a>
                                    </li>
                                    <li className="button_user">
                                        {!test && (<>
                                            <a className="button active" href="/login">
                                            Login
                                        </a>
                                        <a className="button" href="register">
                                            Créer
                                        </a>
                                            </>)}
                                        {test && (<button className="button" onClick={deconnexion}>
                                                Deconnexion
                                            </button>)}
                                    </li>
                                    <li>
                                        <img
                                            style={{ marginRight: 15 }}
                                            src="images/search_icon.png"
                                            alt="#"
                                        />
                                    </li>
                                    <li>
                                        <button type="button" id="sidebarCollapse">
                                            <img src="images/menu_icon.png" alt="#" />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
