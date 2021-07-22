import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as CannabisIcon } from './images/cannabis.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={CannabisIcon} viewBox="0 0 150 58" {...props} />;
} 