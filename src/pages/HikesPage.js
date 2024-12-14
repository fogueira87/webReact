import SenCards from "../components/SendCards/SendCards"
import "../App.css"



function HikesPage(props){
    return(
        <div className="pt-5">
            <h1 className="text-hike">SENDERISMO</h1>
            
            <SenCards/>
        </div>
    )
}

export default HikesPage