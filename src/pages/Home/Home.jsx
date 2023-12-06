import { styled } from "@mui/material";
import { lowBrown, fontYellow, darkBrown, highBrown } from "../../theme/colors";
import "../../App.css";
import ImageCarousel from "../../components/Carousel/Carousel";
import Benefits from "./Benefits/Benefits";
import Products from "./Products/Products";
import OurProjects from "./OurProjects/OurProjects";
import { Link } from "react-router-dom";

const Wrapper = styled("div")({
  height: "160rem",
  width: "100vw",
  background: lowBrown,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "2rem",

  "@media (max-width:1200px)": {
    height: "130rem",
  },

  "&>*": {
    marginBottom: "1rem",
  },
});

const Heading = styled("div")({
  display: "flex",
  width: "80%",
  color: fontYellow,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "25rem",
  fontFamily: "Frank Ruhl Libre",
  fontWeight: "300",
  fontSize: "2.5rem",
  marginBottom: "-4rem",

  top: "15rem",
  position: "absolute",
  "&>*": {
    marginTop: "-0.8rem",
  },

  "@media (max-width:1200px)": {
    top: "8rem",
    fontSize: "0.3rem",
    height: "9rem",
    "&>*": {
      marginTop: "0.5rem",
    },
  },
});

const Button = styled("button")({
  width: "12rem",
  height: "3rem",
  borderRadius: "1.5rem",
  background: fontYellow,
  fontWeight: "700",
  fontSize: "20px",
  borderColor: fontYellow,
  cursor: "pointer",

  ":hover": {
    background: "white",
    borderColor: "white",
  },

  "@media (max-width:1200px)": {
    width: "7rem",
    height: "2rem",
    fontSize: "14px",
  },
});

const StyledMarquee = styled('marquee')({
  background:fontYellow,
  height:"4rem",
  display:"flex",
  flexDirection:"column",
  justifyContent:'center',
  color:darkBrown,
  border:`2px solid ${darkBrown}`,
  fontSize:"25px",

  
  "@media (max-width:1200px)": {
    marginTop:"3rem",
    fontSize:"20px",
    height:"3rem"
  },
}) 
export default function Home() {
  return (
    <Wrapper>
      <ImageCarousel />

      <Heading>
        <h1>Your Timber Oasis: </h1>
        <h1 style={{ color: "white" }}>Cottages, Gazebos, and Cabins</h1>
        <Button>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            Contact Us
          </Link>
        </Button>
      </Heading>

      <Benefits />
      <StyledMarquee>
        <h3 >Services we provide: Wooden Cottages , Gazebo , Tensile Shed, Utility Cabins etc</h3>
      </StyledMarquee>
      <Products />

      <OurProjects />
    </Wrapper>
  );
}
