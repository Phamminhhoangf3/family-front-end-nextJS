"use client";

import * as React from "react";
import PropTypes from "prop-types";
import {
  TransitionContext,
  useTransitionStateManager,
  useTransitionTrigger,
} from "@mui/base/useTransition";
import { styled } from "@mui/system";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

export default function TransitionHooks({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <Trivia label="Did you know?">
      <SlideDown>{children}</SlideDown>
    </Trivia>
  );
}

const Content = styled("div")`
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
`;

const Root = styled("div")``;
const WrapBtn = styled("div")`
  display: flex;
  justify-content: center;
  background-color: transparent;
  height: 0px;
  position: relative;
`;

const ToggleButton = styled("button")(
  ({ theme }) => `
  font-size: 20px;
  background-color: rgb(171, 35, 17);  
  border-radius: 12% / 50% ;
  color: white;
  cursor: pointer;
  display: flex;
  width: 185px;
  height: 50px;
  border: none;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  
`
);

function Trivia(props: any) {
  const { children } = props;
  const [open, setOpen] = React.useState(true);
  const { contextValue } = useTransitionTrigger(open);
  const containerId = React.useId();

  return (
    <Root>
      <TransitionContext.Provider value={contextValue}>
        <Content id={containerId} aria-hidden={!open}>
          {children}
        </Content>
      </TransitionContext.Provider>
      <WrapBtn>
        <ToggleButton
          type="button"
          aria-controls={containerId}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? (
            <>
              <KeyboardDoubleArrowUpIcon /> HIDE BIO
            </>
          ) : (
            <>
              <KeyboardDoubleArrowDownIcon /> SHOW BIO
            </>
          )}
        </ToggleButton>
      </WrapBtn>
    </Root>
  );
}

Trivia.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string.isRequired,
};

const SlideDownOuterWrapper = styled("div")`
  display: grid;
  transition: grid-template-rows 200ms ease-in-out;
  grid-template-rows: 0fr;

  &.expanded {
    grid-template-rows: 1fr;
  }
`;

const SlideDownInnerWrapper = styled("div")`
  overflow: hidden;
`;

function SlideDown(props: any) {
  const { children } = props;
  const { requestedEnter, onExited } = useTransitionStateManager();

  return (
    <SlideDownOuterWrapper
      className={requestedEnter ? "expanded" : ""}
      onTransitionEnd={(event) => {
        if (event.propertyName === "grid-template-rows") {
          if (!requestedEnter) {
            onExited();
          }
        }
      }}
    >
      <SlideDownInnerWrapper>{children}</SlideDownInnerWrapper>
    </SlideDownOuterWrapper>
  );
}

SlideDown.propTypes = {
  children: PropTypes.node,
};
