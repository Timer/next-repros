import React from "react";
import Head from "next/head";
import { styled } from "linaria/react";

import Box1 from "../Box1";
import Box2 from "../Box2";
import Box3 from "../Box3";
import Box4 from "../Box4";
import Box5 from "../Box5";
import Box6 from "../Box6";

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
      <Box1 />
      <Box2 />
      <Box3 />
      <Box4 />
      <Box5 />
      <Box6 />
    </React.Fragment>
  );
};
