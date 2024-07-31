/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
    const [contact, setContact] = useState([
        { icon: "icon-phone.svg", text: "+20121212121" },
        { icon: "icon-email.svg", text: "example@fylo.com" },
    ]);
    const [links, setLinks] = useState([
        "About Us",
        "Contact Us",
        "Jobs",
        "Terms",
        "Press",
        "Privacy",
        "Blog",
    ]);
    const [socialIcons, setSocialIcons] = useState([
        "facebook",
        "twitter",
        "instagram",
    ]);

    return (
        <section className="bg-[#0c1524] py-[100px]">
            <div className="container">

                <div>
                    <a href="/">
                        <img 
                            src="/src/assets/images/logo.svg"
                            alt="logo-img"
                        />
                    </a>
                </div>

                <div className="text-white flex flex-col md:flex-row justify-between flex-wrap gap-[30px] mt-[30px] ">
                    <div className="flex items-start gap-5 w-[340px] max-w-full">
                        <img
                            src="/src/assets/images/icon-location.svg"
                            alt="location-img"
                            className="w-[18px] h-[18px] object-contain"
                        />
                        <p className="font-normal text-sm tracking-[0.8px] ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                            nisi dignissimos unde ipsam modi facilis nam magni, assumenda ad
                            fuga.
                        </p>
                    </div>

                    <div>
                        {contact.map( (ele) => (
                            <div 
                                key={ele.text} 
                                className="flex items-center gap-[15px] mb-[15px] last-of-type:mb-0"
                            >
                                <img
                                    src={`/src/assets/images/${ele.icon}`}
                                    alt="icon"
                                    className="w-[18px] h-[18px] object-contain"
                                />
                                <p>{ele.text}</p>
                            </div>
                        ))}
                    </div>
                    
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                        {links.map( (ele) => (
                            <li key={ele}>
                                <a href="/" >
                                    {ele}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <ul className="flex gap-5 w-full justify-center md:w-auto">
                        {socialIcons.map((item) => (
                            <li key={item}>
                                <a href="/" className="group">
                                    <div className="w-[40px] h-[40px] ele-center border border-white rounded-[50%]">
                                        {item === "facebook" ? (
                                        <FaFacebookF className="  group-hover:text-primary transition-all duration-200" />
                                        ) : item === "twitter" ? (
                                        <FaTwitter className="  group-hover:text-primary transition-all duration-200" />
                                        ) : (
                                        <FaInstagram className="  group-hover:text-primary transition-all duration-200" />
                                        )}
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>


                </div>
            </div>
        </section>
    )
}

export default Footer