import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

interface Props {
  tabs: string[];
  activeTab: string;
  onTabClicked: (tabClicked: string) => void;
}

const TabBar = ({ tabs, activeTab, onTabClicked }: Props) => {
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
            {tabs.map((item) => (
              <Nav.Link
                className={item === activeTab ? "active" : ""}
                key={item}
                aria-current={item === activeTab && "page"}
                href={"#" + (item === tabs[0] ? "" : item.toLowerCase())}
                onClick={() => onTabClicked(item)}
              >
                {item}
              </Nav.Link>
            ))}
            <Nav.Link href="#new">+</Nav.Link>
          </Nav>
          <Navbar.Brand href="#logout">
            <img
              src="https://cdn.discordapp.com/emojis/849414447604957234.webp?size=96"
              alt="Logo"
              width="30"
              className="d-inline-block align-text-top"
            />
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TabBar;
