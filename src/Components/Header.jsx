import { useEffect, useRef, useState } from "react";

function Header() {
    const [links, setLinks] = useState(["features", "team", "signin"]);
    const headerRef = useRef();

    useEffect( () => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) {
                headerRef.current.style.background = "#0c1524"
                headerRef.current.style.padding = "20px 0";
            } else {
                headerRef.current.style.background = "transparent";
                headerRef.current.style.padding = "50px 0";
            }
        })
    }, [])

    return (
        <header 
            ref={headerRef}
            className="fixed top-0 left-0 z-50 w-[100%] py-[50px] duration-200"
        >
            <div className="container flex flex-col sm:flex-row justify-between items-center gap-[30px] sm:gap-0">
                <a href="/">
                    <img src="src/assets/images/logo.svg" alt="" />
                </a>
                <ul className="flex gap-[35px]">
                    {links.map( (ele) => 
                        <li key={ele} className=""> 
                            <a href="/" className="text-white opacity-[0.6] hover:opacity-[1] hover:underline duration-200">{ele}</a>
                        </li>
                    )}
                </ul>
            </div>
        </header>
            
    )
}

export default Header;

