import './portfolioPage.css';

function PortfolioPage() {
    return (
        <div className="portfolio-page">
            <h2>My Projects</h2>
            <div className="projects">
                <div className="project">
                    <h3>Project 1</h3>
                    <p>Description of project 1.</p>
                </div>
                <div className="project">
                    <h3>Project 2</h3>
                    <p>Description of project 2.</p>
                </div>
                <div className="project">
                    <h3>Project 3</h3>
                    <p>Description of project 3.</p>
                </div>
            </div>
        </div>
    );
}
export default PortfolioPage;