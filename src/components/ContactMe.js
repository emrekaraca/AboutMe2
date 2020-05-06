import React, {useState} from "react"

const ContactMe = () => {
    const [message, setMessage] = useState("");
    const handleMessageChange = (event) => {
        setMessage(event.target.value)
    }

    return(
        <div className="contactMe">
            <div className="container">
                <h1 className="title left">Contact Me</h1>
                <h2 className="subTitle left">I'll look forward to hearing from you!</h2>
                {/* <p className="text left"></p> */}
                <div className="messageBoxWrapper">
                
                 <textarea
                    className="messageBox"
                    placeholder="Leave me a message"
                    onChange={handleMessageChange}/>
                
                </div>
                <button
                    className="basicButton right-end"
                    style={{ cursor: "pointer" }}
                    >
                    Send
                </button>
             </div>
        </div>
    )


}

export default ContactMe