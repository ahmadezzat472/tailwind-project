import Feature from "../Components/Feature"
import GetStarted from "../Components/GetStarted"
import Landing from "../Components/Landing"
import StayProductive from "../Components/StayProductive"
import Testimonials from "../Components/Testimonials"

function Home() {
    return (
        <>
            <Landing />
            <Feature />
            <StayProductive />
            <Testimonials />
            <GetStarted />
        </>
    )
}

export default Home