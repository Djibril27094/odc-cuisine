
export default function Sidebar() {
    const test = localStorage.getItem("check")
    return (
        <div className="sidebar">
            {/* Sidebar  */}
            <nav id="sidebar">
                <div id="dismiss">
                    <i className="fa fa-arrow-left" />
                </div>
                <ul style={{color : "black"}} className="list-unstyled components">
                    <li>
                        {!test && (<a href="/login">Partagez</a>)}
                        {test && (<a href="/blog">Dashboard</a>)}
                    </li>
                    <li className="active">
                        <a href="/">Acceuil</a>
                    </li>
                    <li>
                        <a href="/about">Apropos</a>
                    </li>
                    <li>
                        <a href="/recipe">Recettes</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
