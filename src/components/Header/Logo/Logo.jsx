import { useNavigate } from "react-router-dom";
import softLogo from "../../../assets/soft_solution_logo.png";
import { desktop } from "../../../responsive/screens";
import useMediaQuery from "../../../responsive/responsive";
import {styled} from "@mui/material";


const LogoImage = styled('img')({
  ":hover":{
    cursor:"pointer"
  }
})


function Logo() {
  const isDisplay = useMediaQuery(desktop);

  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return isDisplay ? (
    <LogoImage src={softLogo} onClick={handleClick} alt="Logo" width={120} />
  ) : (
    <LogoImage src={softLogo} onClick={handleClick} alt="Logo" width={80} />
  );
}

export default Logo;
