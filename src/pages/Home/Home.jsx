import { styled } from "@mui/material";
import { highBrown, lowBrown, fontYellow, fontGreen } from "../../theme/colors";
import "../../App.css";
import ImageCarousel from "../../components/Carousel/Carousel";
import Benefits from "./Benefits/Benefits";
import Products from "./Products/Products";
import OurProjects from "./OurProjects/OurProjects";

const Wrapper = styled("div")({
  height: "160rem",
  width: "100vw",
  background: lowBrown,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "2rem",

  "@media (max-width:1200px)": {
    height: "140rem",
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
export default function Home() {
  return (
    <Wrapper>
      <ImageCarousel />

      <Heading>
        <h1>Your Timber Oasis: </h1>
        <h1 style={{ color: "white" }}>Cottages, Gazebos, and Cabins</h1>
        <Button>Contact Us</Button>
      </Heading>

      <Benefits />

      <Products />

      <OurProjects />
    </Wrapper>
  );
}
