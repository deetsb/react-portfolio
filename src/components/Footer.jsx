import { gitHub } from '@fortawesome/free-brands-svg-icons';
import { linkedIn } from '@fortawesome/free-brands-svg-icons';
import './footer.css'

function Footer () {
    const links = [
        {
            icon: gitHub,
            url: 'https://github.com/deetsb',
            alt: 'GitHub',
        },
        {
            icon: linkedIn,
            url: 'https://www.linkedin.com/in/aditya-bhonsle-93900a91?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
            alt: 'LinkedIn',
        },
    ];

    return (
        <footer className="footer">
            {links.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                    <i className={`fa-brands fa-${link.icon}`} aria-label={link.alt}></i>
                </a>
            ))}
        </footer>
    );
}

export default Footer;