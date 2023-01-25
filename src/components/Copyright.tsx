import React from "react";
import { Link } from "@mui/material";

export default function Copyright({ hostname }: any) {
  return (
    <React.Fragment>
      {"© "}
      <Link color="inherit" href="https://github.com/hasan132002">
        {hostname}
      </Link>{" "}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}
