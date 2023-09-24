import { styled } from "@mui/material";
// import { fontGreen, lowBrown } from "../../theme/colors"
// import { sectionData } from "./sectiondata"
import PropTypes from "prop-types";
import useMediaQuery from "../../../responsive/responsive";
import { desktop, mobile } from "../../../responsive/screens";

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "20rem",
  "&>*": {
    padding: "0 3rem 0 3rem 0",

    "@media (max-width:1200px)": {
      fontSize: "0.5rem",
      padding: "0 1rem 0 1rem 0",
    },
  },

  "@media (max-width:1200px)": {
    fontSize: "0.5rem",
  },
});

const LeftBox = styled("div")({
  width: "50%",
  display: "flex",
  flexDirection: "column",
  marginBottom: "2rem",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 0 0 3rem",
  lineHeight: "2rem",

  "&>img": {
    borderRadius: "2.5rem",
  },

  "@media (max-width:1200px)": {
    fontSize: "0.5rem",
    lineHeight: "1rem",
    padding: "0 0 0 1rem",
    width: "80%",
    marginBottom: "2rem",

    "&>img": {
      borderRadius: "1.5rem",
    },
  },
});

const RightBox = styled("div")({
  width: "50%",
  display: "flex",
  flexDirection: "column",
  marginBottom: "2rem",
  alignItems: "center",
  padding: "0 3rem 0 0",
  lineHeight: "2rem",

  "&>img": {
    borderRadius: "2.5rem",
  },

  "@media (max-width:1200px)": {
    fontSize: "0.5rem",
    lineHeight: "1rem",
    width: "80%",
    padding: "0 0 0 1rem",

    "&>img": {
      borderRadius: "1rem",
    },
  },
});
function Section(props) {
  console.log(props);

  const isDesktop = useMediaQuery(desktop);

  return (
    <Wrapper>
      {isDesktop ? (
        <>
          {props.direction === "right" ? (
            <>
              <LeftBox>
                <h1>{props.element.name}</h1>
                <p>{props.element.desc}</p>
              </LeftBox>
              <RightBox>
                <img
                  src={props.element.productImage}
                  alt="product"
                  width={isDesktop ? 650 : 200}
                />
              </RightBox>
            </>
          ) : (
            <>
              <LeftBox>
                <img
                  src={props.element.productImage}
                  alt="product"
                  width={isDesktop ? 650 : 200}
                />
              </LeftBox>
              <RightBox>
                <h1>{props.element.name}</h1>
                <p>{props.element.desc}</p>
              </RightBox>
            </>
          )}
        </>
      ) : (
        <LeftBox>
          <h1>{props.element.name}</h1>
          <p>{props.element.desc}</p>
          <img
            src={props.element.productImage}
            alt="product"
            width={isDesktop ? 600 : 270}
          />
        </LeftBox>
      )}
    </Wrapper>
  );
}

export default Section;

Section.propTypes = {
  element: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      desc: PropTypes.string,
      productImage: PropTypes.object,
    })
  ),
  direction: PropTypes.string,
};
