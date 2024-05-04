function Header(){
    return(
        <div className="Header-part">
            <div>
            <img src="    data:image/jpeg;base64,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" alt="Header Image" />

            </div>
            <nav>
                <ul style={{color:"red"}}>
                    <li><a href="">Home</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Blog</a></li>
                </ul>
            </nav>
        </div>
    )
}
export default Header;