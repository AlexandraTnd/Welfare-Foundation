import { useState } from "react";

function Form() {
    const [contactDetails, setContactDetails] = useState({
        "firstName": "",
        "lastName": "",
        "email": "",
        "subject": "",
        "message": ""
    });

    const [isActive, setIsActive] = useState(false);

    const handleChange = (event) => {
        setContactDetails({ ...contactDetails, [event.target.name]: event.target.value })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setIsActive(current => true);
        console.log(contactDetails);
    };


    return (
        <form onSubmit={handleSubmit}>
            <div className={isActive ? "d-none" : ""}>
            <div className="form-group">
                <label htmlFor="firstName">First name:</label>
                <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Enter first name"
                    name="firstName"
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="lastName" className="mt-2">Last name:</label>
                <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter last name"
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="email" className="mt-2">Email:</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter email"
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="subject" className="mt-2">Subject:</label>
                <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    placeholder="Enter subject"
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="message" className="mt-2">Message:</label>
                <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    placeholder="Enter message"
                    onChange={handleChange}
                    required
                >
                </textarea>
            </div>
            </div>
            <div className={isActive ? "text-success" : "d-none"}>
                <p>We appreciate you contacting us. One of our colleagues will get back in touch with you soon!</p>
                <p>Have a great day!</p>
            </div>
            <button className={isActive ? "d-none" : "btn btn-primary mt-2"}>Submit</button>
        </form>
    )
}

export default Form;