/* eslint-disable no-unused-vars */
import { useState } from "react";
import FeatureBox from "./FeatureBox";

function Feature() {
    const [items, setItems] = useState([
        {
            icon: "icon-access-anywhere.svg",
            title: "Acces your files,anywhere",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
        },
        {
            icon: "icon-security.svg",
            title: "Security you can trust",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
        },
        {
            icon: "icon-collaboration.svg",
            title: "Real-time collaboration",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
        },
        {
            icon: "icon-any-file.svg",
            title: "Store any type of file",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
        },
    ]);

    return (
        <section className="ele-section">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px] w-[850px] mx-auto max-w-full">
                    {items.map( (ele) => (
                        <FeatureBox 
                            key={ele.title}
                            icon={ele.icon}
                            title={ele.title}
                            desc={ele.desc}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Feature