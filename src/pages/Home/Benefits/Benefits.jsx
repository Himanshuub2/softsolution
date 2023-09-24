import { styled } from "@mui/material";
import { darkBrown, fontYellow } from "../../../theme/colors";
import { benefitsData } from "./benefitsdata";
import { desktop } from "../../../responsive/screens";
import useMediaQuery from "../../../responsive/responsive";

const Wrapper = styled("div")({
  height: "15rem",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "center",
});
const Heading = styled("h1")({
  fontSize: "3rem",
  color: "black",
  marginTop: "-0.3rem",
  marginBottom: "-0.2rem",

  "@media (max-width:1200px)": {
    fontSize: "2rem",
    marginTop:'1rem'
  },
});

const BenefitWrap = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  
  width: "100%",
  height: "90%",

  "@media (max-width:1200px)": {
    flexWrap: "wrap",
    marginTop:"2rem",
    "&>*":{
        marginBottom:"18px"
      }
  },
});

const Benefit = styled("div")({
  display: "flex",
  
  flexDirection: "column",
  alignItems: "center",
  justifyContent:'center',

  ":hover":{
    cursor:"pointer",
    color:fontYellow
  }

  
});
function Benefits() {
  const isDesktop = useMediaQuery(desktop);

  return (
    <Wrapper>
      <Heading>Benefits</Heading>

      <BenefitWrap>
        {benefitsData.map((item) => (
          <>
            <Benefit>
              {isDesktop ? (
                <div> {item.icon("6rem")}</div>
              ) : (
                <div>{item.icon("4rem")}</div>
              )}
              <h1 style={isDesktop?{fontSize:"1.5rem"}:{fontSize:"1rem"}}>{item.description}</h1>
            </Benefit>
          </>
        ))}
      </BenefitWrap>
    </Wrapper>
  );
}

export default Benefits;
