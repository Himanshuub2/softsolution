import { styled } from "@mui/material";
import image2 from "../../../assets/image1.jpg";
import { fontYellow, darkBrown } from "../../../theme/colors";
import { desktop } from "../../../responsive/screens";
import useMediaQuery from "../../../responsive/responsive";
import "../../../App.css";
import { productdata } from "./productsdata";


const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  width: "100%",
  height: "30rem",
  background: darkBrown,
  marginTop: "1rem",
  padding: "0 1rem 0 1rem",

  "@media (max-width:1200px)": {
    flexDirection: "column",
    padding: "0 0.1rem 0 0.1rem",
  },
});

const LeftSection = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "center",
  width: "40%",

  overflowWrap: "break-word",

  "@media (max-width:1200px)": {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "93%",
    padding: "1rem",
  },
});

const RightSection = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "50%",
  "@media (max-width:1200px)": {
    width: "100%",
    justifyContent: "center",
  },
});

const Heading = styled("h1")({
  fontSize: "3.5rem",
  color: fontYellow,
  fontFamily: "Frank Ruhl Libre",
  "@media (max-width:1200px)": {
    fontSize: "1.5rem",
  },
});

const Para = styled("p")({
  fontSize: "1rem",
  color: "white",
  marginTop: "-1rem",
  lineHeight: "2.5rem",

  "@media (max-width:1200px)": {
    fontSize: "0.7rem",
    lineHeight: "1.5rem",
    marginLeft: "5px",
  },
});

function Products() {
  const isDesktop = useMediaQuery(desktop);
  return (
    <Wrapper>
      <LeftSection>
        <Heading>
          {productdata.heading}
        </Heading>
        <Para>
          {productdata.description}
        </Para>
      </LeftSection>

      <RightSection>
        <img
          src={image2}
          alt="wooden image"
          width={isDesktop ? 700 : 350}
        ></img>
      </RightSection>
    </Wrapper>
  );
}

export default Products;
