// import "./hamburger.css"
import { Button, styled } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const HamburgerLines = styled("div")({
  width: "15px",
  height: "2px",
  background: "white",
});

const Heading = styled("h1")({
  paddingLeft: "15px",
  color: "green",
});

const SubHeading = styled("h3")({
  paddingLeft: "15px",
  marginTop: "-24px",
});

const HamburgerMenu = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginLeft: "4rem",
  "&>*": {
    marginBottom: "2px",
  },
});

const List = styled("li")({
  display: "flex",
  flexDirection: "column",
  "&>*": {
    marginTop: "1px",
    listStyle: "none",
    width: "8rem",
    padding: "15px",
    textDecoration: "none",
    ":hover": {
      cursor: "pointer",
      color: "green",
    },
  },
});

export default function Hamburger({ list }) {
  const [state, setState] = useState(false);
  function toggleDrawer(item) {
    setState(item);
  }

  return (
    <>
      <Button onClick={() => toggleDrawer(true)}>
        <HamburgerMenu>
          <HamburgerLines></HamburgerLines>
          <HamburgerLines></HamburgerLines>
          <HamburgerLines></HamburgerLines>
        </HamburgerMenu>
      </Button>
      <Drawer open={state} onClose={() => toggleDrawer(false)}>
        <Heading>Soft</Heading>
        <SubHeading> Solution</SubHeading>

        <List>
          {list.map((item) => (
            <Link to={item.to} key={item}>
              {item.name}
            </Link>
          ))}
        </List>
      </Drawer>
    </>
  );
}

Hamburger.propTypes = {
  list: PropTypes.array,
};
