
import {styled} from "@mui/material"
import { fontGreen } from '../../../theme/colors';


const LogoHeading = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "start",
    marginTop: "-25px",
  });

function Logo() {
  return (
    <LogoHeading>
    <h1
      style={{
        color: fontGreen,
        marginBottom: "-5px",
        fontSize: "3rem",
        fontWeight: "900",
      }}
    >
      Soft
    </h1>
    <span>Solution</span>
  </LogoHeading>
  )
}

export default Logo