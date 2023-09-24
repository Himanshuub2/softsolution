import { styled } from "@mui/material";
import { projectsdata } from "./projectsdata";
import { darkBrown, fontGreen, fontYellow } from "../../../theme/colors";


const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
 
  flexWrap: "wrap",
});

const Card = styled("div")({
    display:"flex",
    flexDirection:'column',
    justifyContent:"center",
    alignItems:"center",
  flex: "0 0 38%",
  margin:"1rem 1rem 0.5rem 1rem"
});

const Text = styled('h1')({
    fontSize:"2.5rem",
    color:fontGreen
})

const ProjectImage = styled('img')({
    borderRadius:"2rem",

    ":hover":{
        padding:"10px",
        border:"2px solid",
        borderColor:darkBrown,  
        width:"31.8rem",
        cursor:"pointer",
       filter:"blur(0.5px)"
    },

    "@media (max-width:1200px)": {
        width: "20rem",
        
      },
    
   
})

const SubHeading = styled('h3')({
    color:darkBrown,
    fontSize:"1.8rem",
    
    "@media (max-width:1200px)":{
        fontSize:"1.2rem"
    }
})

function OurProjects() {

  
  return (
    <>
      <Text>Our Projects</Text>
      <Wrapper>
        {projectsdata.map((project, idx) => (
          <Card key={idx}>
            <ProjectImage src={project.porjectImage} width={550} alt="project" />
            <SubHeading >{project.desc}</SubHeading>
          </Card>
        ))}
      </Wrapper>
    </>
  );
}

export default OurProjects;
