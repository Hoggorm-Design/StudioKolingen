import useContact from "../../hooks/useContactUs.ts";
import React from "react";

const ContactUs: React.FC = () => {
    const { contact, loading } = useContact();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!contact) {
        return <div>No contact information available.</div>;
    }

    return (
        <section>
            <h2>{contact.header}</h2>
            <p>Email: {contact.mail}</p>
            <p>Phone number: {contact.phonenumber}</p>
            <p>Address: {contact.address}</p>
        </section>
    );
};

export default ContactUs;