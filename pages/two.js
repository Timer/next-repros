import React from "react";
import Head from "next/head";
import { styled } from "linaria/react";

import Box7 from "../Box7";
import Box8 from "../Box8";
import Box9 from "../Box9";

const Box = styled.div`
  margin-top: 40px;
  margin-left: 40px;
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: spin 2s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

export default () => {
  return (
    <React.Fragment>
      <Head>
        <title>With Linaria</title>
      </Head>
      <Box>Zero runtime CSS in JS</Box>

      <Box7 />
      <Box8 />
      <Box9 />
    </React.Fragment>
  );
};
