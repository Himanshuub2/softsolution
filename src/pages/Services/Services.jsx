import { styled } from "@mui/material";
import { fontGreen, lowBrown } from "../../theme/colors";
import { sectionData } from "./Section/sectiondata";
import Section from "./Section/Section";

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",

  alignItems: "center",
  background: lowBrown,
  height: "100rem",

  "@media (max-width:1200px)": {
    height: "85rem",
  },
});

const Box = styled("div")();

const Text = styled("h1")({
  color: fontGreen,
  marginBottom: "6rem",

  "@media (max-width:1200px)": {
    fontSize: "1.5rem",
    marginBottom: "1rem",
  },
});

function Services() {
  return (
    <Wrapper>
      <Text>Services We Provide</Text>
      {sectionData.map((element, idx) => (
        <Box key={idx}>
          {idx % 2 === 0 ? (
            <Section element={element} direction="right" />
          ) : (
            <Section element={element} direction="left" />
          )}
        </Box>
      ))}
    </Wrapper>
  );
}

export default Services;
