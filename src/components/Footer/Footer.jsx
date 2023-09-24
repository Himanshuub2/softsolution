import { styled } from "@mui/material";
import useMediaQuery from "../../responsive/responsive";
import { desktop, mobile } from "../../responsive/screens";
import { highBrown, lowBrown, midBrown,fontYellow } from "../../theme/colors";
import Logo from "../Header/Logo/Logo.jsx";
import { footerdata } from "./footerdata";


const Wrapper = styled("div")({
  height: "30rem",
  background:midBrown,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  "@media (max-width:1200px)": {
    height: "50%",
  },
});

const Section = styled("div")({
  width: "80%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "start",
});

const Part = styled("div")({
  display: "flex",
  flexDirection: "column",
  color: "white",

  "@media (max-width:1200px)": {
    marginTop: "1rem",
    fontSize: "0.8rem",
    justifyContent:"space-between",
    width:"90%"
  },
});

const Heading = styled("h2")({
  fontSize: "30px",
  color: fontYellow,

  "@media (max-width:1200px)": {
    fontSize: "1rem",
  },
});

const Item = styled('p')({
    ":hover":{
        cursor:"pointer"
    }
})

export default function Footer() {
  const isDesktop = useMediaQuery(desktop);

  return (
    <Wrapper>
      <Section>
        <Logo />
      </Section>

      <Section>
        {Object.entries(footerdata).map(([key, value]) => (
          <Part key={key}>
            <Heading>{key}</Heading>
            {value.map((item) => (
              <>
                <Item key={item}>{item}</Item>
              </>
            ))}
          </Part>
        ))}
      </Section>

      <Section>
        <p style={isDesktop ? { fontSize: "0.9rem" } : { fontSize: "0.6rem" }}>
          © Soft Solutions all rights reserved | Developed by flux codify
        </p>
      </Section>
    </Wrapper>
  );
}
