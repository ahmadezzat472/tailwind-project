import StayProductiveImg from "/src/assets/images/illustration-stay-productive.png";
import ArrowImg from "/src/assets/images/icon-arrow.svg";

function StayProductive() {
    return (
        <section className="ele-section">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px] place-items-center">
                    <div>
                        <img src={StayProductiveImg} alt="stay-img" className="" />
                    </div>
                    <div className="text-white">
                        <h3 className="text-[35px] font-medium leading-[50px]">
                            Stay productive,
                            <br />
                            wherever you are
                        </h3>
                        <div className="my-[15px] font-normal text-sm text-white tracking-[0.6px]">
                            <p className="mb-[15px]">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                                excepturi incidunt quo deserunt quidem accusamus iure ab earum
                                reprehenderit debitis!
                            </p>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                                excepturi incidunt quo deserunt quidem accusamus iure ab earum
                                reprehenderit debitis!
                            </p>
                        </div>
                        <a href="/" className="flex gap-[15px] items-center text-primary hover:text-[#42b0d1] border-b-2 border-primary hover:border-[#42b0d1] w-fit pb-2 duration-200">
                            See how Fylo works
                            <img
                                src={ArrowImg}
                                alt="arrow-img"
                                className="w-[20px] h-[20px] animate-[moveRight_1s_ease-in-out_infinite]"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default StayProductive