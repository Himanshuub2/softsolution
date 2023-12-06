import { styled } from "@mui/material";
import {
  darkBrown,
  fontGreen,
  fontYellow,
  highBrown,
  lowBrown,
} from "../../theme/colors";
import "../../App.css";
import { socialdata, contactdata } from "./contactdata";
import Link from "@mui/material/Link";

// import InstagramIcon from "@mui/icons-material/Instagram";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import EmailIcon from "@mui/icons-material/Email";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactForm from "./Form/Form";

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "center",
  width: "100%",
  background: lowBrown,
  height: "40rem",

  "@media (max-width:1200px)": {
    height: "90rem",
  },
});

const Box = styled("div")({
  display: "flex",
  flexDirection: "row",
  width: "90%",
  justifyContent: "space-between",
  alignItems: "center",
  height: "70%",

  "@media (max-width:1200px)": {
    height: "90%",
    flexDirection: "column",
  },
});

const Section = styled("div")({
  width: "50%",
  height: "30rem",
  marginTop: "5rem",

  marginRight: "5px",
  color: darkBrown,
  fontWeight: `100 ${" !important"}`,
  fontFamily: "Frank Ruhl Libre",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  "@media (max-width:1200px)": {
    marginTop: "1rem",
    height: "40%",
    width: "95%",
    flexDirection: "column",
  },

  "&>*": {
    fontWeight: "200",
  },
});

const Socials = styled("h1")({
  fontSize: "2.5rem",
  fontWeight: "900",
  color: fontYellow,
  textAlign: "center",
  "@media (max-width:1200px)": {
    fontSize: "2rem",
    height: "0.1rem",
  },
});

const SocailProfile = styled("div")({
  marginTop: "-2rem",

  "&>*": {
    marginRight: "2.4rem",
    color: highBrown,
  },
});

const CustomLink = styled(Link)({
  color: highBrown,
  marginRight: "15px",
  "@media (max-width:1200px)": {
    marginRight: "10px",
  },
});

function Contact() {
  return (
    <Wrapper>
      <h1 style={{ color: fontGreen }}>Contact Us</h1>
      <Box>
        <Section>
          {Object.entries(contactdata[0]).map(([key, values]) => (
            <h2 key={key}>
              <span style={{ fontWeight: "900" }}>{key + " " + ":" + " "}</span>
              {values}
            </h2>
          ))}

          <Socials>
            <h3 style={{ marginBottom: "2rem" }}>Follow Us on</h3>
            <SocailProfile style={{ marginTop: "-1rem" }}>
              {socialdata.map((profile, index) => (
                <>
                  <CustomLink
                    key={index}
                    href={profile.linkUrl}
                    target="_blank"
                  >
                    {profile.profile}
                    {/* <InstagramIcon /> */}
                  </CustomLink>
                </>
              ))}
            </SocailProfile>
          </Socials>
        </Section>

        <Section>
          <ContactForm />
        </Section>
      </Box>
    </Wrapper>
  );
}

export default Contact;
