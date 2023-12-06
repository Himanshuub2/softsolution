// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
// https://formspree.io/f/xoqokrnd
import { darkBrown, fontYellow, lowBrown } from "../../../theme/colors";
import { formdata } from "../contactdata";
import { styled } from "@mui/material";
import { gql,useMutation } from "@apollo/client";
import { useState } from "react";

const Wrapper = styled("div")({
  border: "2px solid gray",
  borderRadius: "8px",
  width: "80%",
  height: "70rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  "@media (max-width:1200px)": {
    width: "100%",
    height: "25rem",
  },
});

const StyledForm = styled("form")({
  "&>*": {
    width: "18rem",
    display: "inline-block",
    // fontSize: "1.7rem",
    marginBottom: "1rem",
    padding: "10px",
    borderRadius: "5px",
    background: "whiteSmoke",
    borderColor: lowBrown,
    

    "@media (max-width:1200px)": {
        width: "11rem",
      },
  },

  "@media (max-width:1200px)": {
    width: "12rem",
  },
});

const Button = styled("button")({
  background: fontYellow,
  borderRadius: "6px",
  fontSize: "1.2rem",
  width: "19rem",

  ":hover": {
    background: darkBrown,
    color: "white",
    cursor: "pointer",
    
  },
  "@media (max-width:1200px)": {
    width: "12rem",
  },
});

const defaultUser = {
  name:"",
  email:"",
  phone:"",
  message:"",
}
export default function Form() {

  
  const [user,setUser] = useState(defaultUser)

  
  function handleChange(e){
    setUser({...user,[(e.target.name).toLowerCase()]:e.target.value})
  }
  
  const ADDUSER = gql`
  mutation addUser($name: String!, $email: String!, $phone: Int , $message: String!) {
    insert_soft_solution(
      objects: { name: $name, email: $email, phone: $phone , message:$message }
    ) {
      returning {
        name,
        email,
        phone,
        message
      }
    }
  }
  `

  const [addUser,{loading,error}]=useMutation(ADDUSER)

  function handleClick() {
    addUser({
      variables:{
        name:user.name,
        email:user.email,
        phone:user.phone,
        message:user.message
      }
    })
  }
  // 
  return (
    <Wrapper>
      <StyledForm action={"https://formspree.io/f/xoqokrnd"} method="POST">  
        {formdata.map((formlabel, idx) => (
          <>
            {idx < formdata.length - 1 ? (
              <input key={idx+formlabel} placeholder={formlabel} name={formlabel} onChange={handleChange} required/>
            ) : (
              <textarea key={idx+formlabel} placeholder={formlabel} name={formlabel} onChange={handleChange} />
            )}
            <br />
          </>
        ))}
        <Button type="submit" onClick={() => handleClick()}>
          Submit
        </Button>
      </StyledForm>
    </Wrapper>
  );
}
