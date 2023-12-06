import { styled } from "@mui/material";
import { darkBrown, fontGreen, highBrown, lowBrown } from "../../theme/colors";
import { aboutdata } from "./aboutdata";

const Wrapper = styled("div")({
  display: "flex",
  width: "100%",
  background: lowBrown,
  flexDirection: "column",
  justifyContent: "justify-start",
  alignItems: "center",
});

const Box = styled("div")({
  margin: "1.5rem 0 2rem 0",
  width: "50%",
  lineHeight: "2rem",
});

const Heading = styled("h1")({
  fontSize: "2.5rem",
  color: fontGreen,
});

const Description = styled("div")({
  fontSize: "1.2rem",
});

const Wrap = styled("div")({
  display: "flex",
  flexDirection: "row",
  width: "75%",
  marginTop: "2rem",

  "&>*": {
    marginRight: "2rem",
    marginTop: "2rem",
  },
});
export default function About() {
  return (
    <Wrapper>
      <Heading style={{ marginTop: "2rem", marginBottom: "1rem" }}>
        About Us
      </Heading>
      <Description style={{ width: "75%", lineHeight: "2rem" }}>
        Welcome to Soft Solution, where we transform outdoor spaces into havens
        of tranquility. Specializing in bespoke wooden cottages, charming
        gazebos, and sturdy tensile sheds, our creations seamlessly blend with
        nature's beauty. With a passion for craftsmanship, commitment to
        quality, and dedication to personalized service, we craft spaces that
        invite you to escape, unwind, and immerse yourself in the serene embrace
        of the great outdoors. Experience the perfect fusion of elegance and
        durability – experience Soft Solution.
      </Description>
      <Wrap>
        {aboutdata.map((element, index) => (
          <>
            {index === 0 ? (
              <Box
                style={{
                  borderRight: `2px solid ${highBrown}`,
                  marginRight: "2rem",
                  marginLeft: "2rem",
                }}
              >
                <Heading style={{ marginBottom: "2rem", textAlign: "center" }}>
                  {element.heading}
                </Heading>
                <Description> {element.description}</Description>
              </Box>
            ) : (
              <Box>
                <Heading style={{ marginBottom: "2rem", textAlign: "center" }}>
                  {element.heading}
                </Heading>
                <Description> {element.description}</Description>
              </Box>
            )}
          </>
        ))}
      </Wrap>
    </Wrapper>
  );
}
