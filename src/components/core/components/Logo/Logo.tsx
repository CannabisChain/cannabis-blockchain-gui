import React from 'react';
import styled from 'styled-components';
import { Box, BoxProps } from '@material-ui/core';
import { Cannabis } from '@cannabis/icons';

const StyledCannabis = styled(Cannabis)`
  max-width: 100%;
  width: auto;
  height: auto;
`;

export default function Logo(props: BoxProps) {
  return (
    <Box {...props}>
      <StyledCannabis />
    </Box>
  );
}
