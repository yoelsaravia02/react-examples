const NavBar = () => {
    return (
        <div>
            <ul className="bg-blue-400 hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">New</a>
                </li>
                <li>
                    <a href="#">Popular</a>
                </li>
                <li>
                    <a href="#">Trending</a>
                </li>
                <li>
                    <a href="#">Categories</a>
                </li>
            </ul>
        </div>
    )
}

export default NavBar
