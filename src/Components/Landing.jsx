
function Landing() {
    return (
        <section className="bg-[#1c2230] pt-[200px]">
            <div className="container">
                <div className="ele-center flex-col">
                    <div className="w-[750px] max-w-full">
                        <img 
                            src="src\assets\images\landing-img.png"
                            className="w-full"
                        />
                    </div>
                    <div className="text-white text-center">
                        <h1 className="text-[30px] md:text-[40px] font-bold my-[15px]">
                            All your files in one secure location,
                            <br />
                            accessible anywhere.
                        </h1>
                        <p className="text-lg max-w-full md:w-[600px] md:mx-auto my-[30px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
                            iste deserunt totam itaque nisi veniam voluptas vel, eos aliquam
                            nulla impedit commodi.
                        </p>
                    </div>
                    <a href="/" className="btn w-[280px] py-[15px] rounded-[30px] text-center text-white font-bold">get started</a>
                </div>

        
                
            </div>
            <div className="w-full h-[200px]">
                <img 
                    src="/src/assets/images/bg-curvy-desktop.svg" 
                    alt="" 
                    className="w-full h-full"
                />
            </div>
        </section>
    )
}

export default Landing