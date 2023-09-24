import { styled } from "@mui/material";
import { highBrown, lowBrown } from "../../../theme/colors.js";
import useMediaQuery from "../../../responsive/responsive.js";
import { desktop } from "../../../responsive/screens.js";
import Hamburger from "./Hamburger/Hamburger.jsx";
import Logo from "../Logo/Logo.jsx";
import {Link} from "react-router-dom"
const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  width: "100vw",
  height: "5rem",
  color: "white",
  backgroundImage: `linear-gradient(to bottom,${highBrown},${lowBrown})`,
});

const List = styled("ul")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  listStyle: "none",

  "&>*": {
    paddingRight: "2rem",
    textDecoration:"none",
    color:"white",
    fontSize:"20px"
  },
});



export default function Navbar() {
  const list = [
    {
    name:"Home",
    to:"/home"
    }, 
    {
      name:"Services",
      to:"/services"
    }, 
    {
      name:"Projects",
      to:"/projects"
    },
    {
      name:"About Us",
      to:"/about"
    },
    {
      name:"Contact Us",
      to:"/contact"
    },   
  ]
  
 

  const isDesktop = useMediaQuery(desktop);

  return (
    <Wrapper>
        <Logo/>
     
      {isDesktop ? (
        <>
          <List>
            {list.map((tab) => (
              <Link to={tab.to} key={tab}>{tab.name}</Link>
            ))}
          </List>
        </>
      ) : (
        <Hamburger list={list} />
      )}
    </Wrapper>
  );
}
