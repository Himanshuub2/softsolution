import { Link, styled } from "@mui/material";
import useMediaQuery from "../../responsive/responsive";
import { desktop } from "../../responsive/screens";
import {  midBrown,fontYellow } from "../../theme/colors";
import Logo from "../Header/Logo/Logo.jsx";
import { footerdata } from "./footerdata";
import { socialdata } from "../../pages/Contactus/contactdata";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


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
  alignItems:"center",
  color: "white",
  height:"21++rem",
  "&>*":{
    marginBottom:"2rem"
  },

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

const CustomLink = styled(Link)({

  
  color:"white",
  marginRight:"15px",
  ":hover":{
    color:fontYellow
  },
  "@media (max-width:1200px)": {
    marginRight:"10px",
  },

})

export default function Footer() {
  const isDesktop = useMediaQuery(desktop);
  const navigate = useNavigate()

  function handleClick(item){
    if(item==='Services'){
      navigate("/services")
    }
    else{
      navigate("/contact")
    }
  }

  useEffect(()=>{
    window.scrollTo(0,0)
  },[handleClick])
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
                <Item key={item} onClick={()=>handleClick(key)}>{item}</Item>
              </>
            ))}
          </Part>
        ))}
      </Section>

      <Section style={{width:"30%",marginTop:'-1rem'}}>

        {
          socialdata.map(item=>(
            <>
            <CustomLink href={item.linkUrl} target="_blank" >
            {item.profile}
            </CustomLink>
            </>
          ))
        }
     
      </Section>

      <Section>
        <p style={isDesktop ? { fontSize: "0.9rem" } : { fontSize: "0.6rem" }}>
          © Soft Solutions all rights reserved | Developed by flux codify
        </p>
      </Section>
    </Wrapper>
  );
}
