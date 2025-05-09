import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.css';

function Footer () {
    const links = [
        {
            icon: faGithub,
            url: 'https://github.com/deetsb',
            alt: 'GitHub',
        },
        {
            icon: faLinkedin,
            url: 'https://www.linkedin.com/in/aditya-bhonsle-93900a91',
            alt: 'LinkedIn',
        },
    ];

    return (
        <footer className="footer">
            {links.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={link.icon} aria-label={link.alt} />
                </a>
            ))}
        </footer>
    );
}

export default Footer;