// import "./hamburger.css"
import { Button, styled } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Logo from "../../Logo/Logo";

const HamburgerLines = styled("div")({
  width: "30px",
  height: "4px",
  background: "white",
});



const HamburgerMenu = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginLeft: "4rem",
  "&>*": {
    marginBottom: "4px",
  },
});

const List = styled("li")({
  display: "flex",
  flexDirection: "column",
  "&>*": {
    marginTop: "1px",
    listStyle: "none",
    width: "8rem",
    padding: "10px 0 10px 25px",
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
        {/* <Heading>Soft</Heading>
        <SubHeading> Solution</SubHeading> */}

        <Logo/>
        <List>
          {list.map((item) => (
            <Link to={item.to} key={item} onClick={() => toggleDrawer(false)}>
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
