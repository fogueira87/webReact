import React, { Component } from "react";
import background from "../images/contact.jpg";
import ContactForm from "../components/ContactForm2";

 
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
               
                <ContactForm/>
            </div>
        );
    }
}

export default ContactPage;