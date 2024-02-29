import "../partials/header";

export default function Header() {
  return (
    <header>
      <div className="text-container">
        <div className="header-headline">
          <h1 className="title">
            Let's start coding and make your idea a reality
          </h1>
          <p className="description">
            Group of developers ready to collaborate in your business idea.
          </p>
        </div>
        <div className="buttons">
          <a href="#" className="link">
            Contact Us
          </a>
          <a href="#" className="link-outline">
            Our Services
          </a>
        </div>
      </div>
    </header>
  );
}
