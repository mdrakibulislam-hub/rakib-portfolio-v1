
import { useEffect } from 'react';
import ContactSection from './Components/ContactSection/ContactSection';

const ContactPage = () => {

    useEffect(() => {
        document.title = "Contact | Md Rakibul Islam"
    }, [])

    return (
        <div>
            <ContactSection></ContactSection>
        </div>
    );
};

export default ContactPage;