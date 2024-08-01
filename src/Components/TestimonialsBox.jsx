/* eslint-disable react/prop-types */
import image from "/src/assets/images"

function TestimonialsBox(props) {
    return (
        <div className="bg-[#21293c] p-[25px] rounded-[15px] shadow-[8px_8px_1px_8px_#1c202c] text-white">
            <p className="text-sm font-normal tracking-[0.8px]">{props.desc}</p>
            <div className="flex items-center gap-5 mt-5">
                <img 
                    src={`${image}/${props.image}`} 
                    alt="" 
                    className="w-[50px] h-[50px] rounded-full object-contain"
                />
                <div>
                    <strong>{props.name}</strong>
                    <p className="font-normal text-sm">{props.position}</p>
                </div>
            </div>
            

        </div>
    )
}

export default TestimonialsBox