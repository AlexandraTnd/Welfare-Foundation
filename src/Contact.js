import ContactDetails from './ContactDetails';
import Form from './Form'

function Contact() {
    return (
        <div className="text-bg-info p-3" id="contact">
            <footer className="py-5">
                <div className="row">
                    <div className="col-12 col-md-8">
                        <ContactDetails />
                    </div>

                    <div className="col-12 col-md-4">
                        <Form />
                    </div>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-center py-2 mt-3 border-top text-bg-primary">
                    <p>&copy; 2023 AUTISTIC CHILDREN'S WELFARE FOUNDATION, BANGLADESH. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Contact;