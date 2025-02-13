import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

interface Props {
  pages: string[];
  activePage: string;
}

const LandingNavbar = ({ pages, activePage }: Props) => {
  return (
    <Navbar bg="body-tertiary" expand="lg" className="sticky-top">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="https://cdn.discordapp.com/emojis/849414447604957234.webp?size=96"
            alt="Logo"
            width="30"
            className="d-inline-block align-text-top"
          />
          GiantEevee
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarLandingPage"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarLandingPage">
          <Nav className="me-auto mb-2 mb-lg-0">
            {pages.map((item) => (
              <Nav.Link
                className={item === activePage ? "active" : ""}
                key={item}
                aria-current={item === activePage && "page"}
                href={"/" + (item === pages[0] ? "" : item.toLowerCase())}
              >
                {item}
              </Nav.Link>
            ))}
          </Nav>
          <Nav>
            <Nav.Link href="https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=zoj2sxcil0yh5vtdn3tj246g1ke2jo&redirect_uri=http://localhost:3000/api/twitch/callback&scope=channel%3Amanage%3Apolls+channel%3Aread%3Apolls">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default LandingNavbar;
