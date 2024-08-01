/* eslint-disable react/prop-types */

function FeatureBox({icon, title, desc}) {
    console.log(icon);
    return (
        <div className="text-white text-center ele-center flex-col">
            <img src={`/src/assets/images/${icon}`}
                alt="icon-image"
                className=""
            />
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    )
}

export default FeatureBox