import React, { Component } from "react";
import background from "../images/contact.jpg";
import BasicExample from "../components/ContactForm";

 
class ContactPage extends Component {
    render() {
        const myStyle = {
            backgroundImage: `url(${background})`,
            height: "100vh",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        };
        return (
            <div style={myStyle}>
               
                <BasicExample/>
            </div>
        );
    }
}

export default ContactPage;