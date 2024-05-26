"use client"

import {  Typography } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Image from "next/image";
import { styled } from '@mui/material/styles';

const CustomizedBreadcrumbs = styled(Breadcrumbs)`
  & .MuiBreadcrumbs-ol {
    justify-content: center;
  }
`;

const Section1 = () => {
  return (
    <div className="section-1">
      <div className="background"></div>
      <div className="container">
        <div className="wrap">
          <CustomizedBreadcrumbs
            aria-label="breadcrumb"
            sx={{
              fontSize: 16,
              color: "white",
              justifyContent: 'center'
            }}
          >
            <Link underline="hover" color="white" href="/">
              HOME
            </Link>
            <Typography color="white">FAMILY MEMBERS</Typography>
          </CustomizedBreadcrumbs>
          <div className="member">
            <div className="avatar">
              <Image src="/assets/avatar/avatar.jpg" alt="avatar" fill />
            </div>
            <div className="information">
              <h1>John Lewis</h1>
              <span>July 8, 1878 - September 4, 1923</span>
              <span>Aged 45</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
