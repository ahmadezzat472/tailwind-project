function GetStarted() {
    return (
        <section className="ele-section">
            <div className="container">
                <div className="bg-[#1c2230]
                    text-white text-center 
                    ele-center flex-col mx-auto
                    w-[865px] max-w-full min-h-[235px] p-[30px]"
                >
                    <h3 className="text-[25px] md:text-[35px] font-semibold">
                        Get early access today
                    </h3>
                    <p className="w-[620px] max-w-full my-[30px]">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
                        tempore? Vero adipisci eveniet voluptatibus cupiditate!
                    </p>
                    <form className="w-full flex flex-col md:flex-row justify-between items-center gap-[30px] md:px-[60px]">
                        <input 
                            type="text" 
                            placeholder="eamil@example.com"
                            className="md:flex-1 w-full h-[50px] rounded-[30px] pl-[30px] outline-none border-none text-sm text-black font-medium"
                        />
                        <button 
                            type="submit" 
                            className="md:w-[200px] w-full h-[50px] bg-[#42b0d1] hover:bg-[#8cdae4] duration-200 rounded-[25px]">
                            Get Started For Free
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default GetStarted