import { Typography } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";
import router from "../Routes";

const Branding = () => {
  return (
    <>
      <ForumIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        onClick={() => router.navigate("/")}
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          cursor: "pointer",
          fontWeight: 700,
          letterSpacing: ".2rem",
          color: "inherit",
          textDecoration: "none",
          fontSize: '1rem'
        }}
      >
        CHATTER
      </Typography>
    </>
  );
};

export default Branding;
