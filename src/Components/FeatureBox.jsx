/* eslint-disable react/prop-types */
import imageIcon from "/src/assets/images"

function FeatureBox({icon, title, desc}) {
    console.log(icon);
    return (
        <div className="text-white text-center ele-center flex-col">
            <img src={`${imageIcon}/${icon}`}
                alt="icon-image"
                className=""
            />
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    )
}

export default FeatureBox