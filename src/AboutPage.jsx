
import { useEffect } from 'react';
import About from './Components/About/About';

const AboutPage = () => {

    useEffect(() => {
        document.title = "About | Md Rakibul Islam"
    }, [])

    return (
        <div className='py-16'>
            <About></About>
        </div>
    );
};

export default AboutPage;