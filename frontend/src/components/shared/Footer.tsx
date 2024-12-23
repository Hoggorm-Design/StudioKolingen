import useFooter from "../../hooks/useFooter.ts";
import React from "react";

const Footer: React.FC = () => {
    const { footer, loading } = useFooter();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!footer) {
        return <div>No footer content available.</div>;
    }

    return (
        <footer>
            <section>
                <img src={footer.image.asset.url} alt={footer.alt} />
                <h4>{footer.header}</h4>
                <p>{footer.address}</p>
                <h4>Contact:</h4>
                <p>{footer.contact1} - {footer.phonenumber1}</p>
                <p>{footer.contact2} - {footer.phonenumber2}</p>
            </section>
        </footer>
    );
};

export default Footer;
