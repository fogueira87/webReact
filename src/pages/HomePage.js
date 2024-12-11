
import CarouselPage from "../components/Carrusel"
import Card from "../components/HomeCards/Cards"
//import Rules from "../components/Rules"
import HomeText from "../components/Texts/Hometext"


const HomePage = () =>{

    return(
        <>
                <CarouselPage/>
                <div className="p-4">
                <Card/>
                </div>
                
                <div className="container p-2">
                <HomeText/>
                </div>
                
        
        </>
    )

}

export default HomePage