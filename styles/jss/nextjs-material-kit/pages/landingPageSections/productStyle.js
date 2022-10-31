import { title } from "/styles/jss/nextjs-material-kit.js";

const productStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  logo_card_title: {
      fontWeight: "500",
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  description: {
    color: "#999"
  }
};

export default productStyle;
