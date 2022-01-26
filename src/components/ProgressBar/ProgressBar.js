/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBarWrapperBase = styled.div`
  width: 100%;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 4px;
`

const LargeProgressBarWrapper = styled(ProgressBarWrapperBase)`
  padding: 4px;
  border-radius: 8px;
`

const ProgressBase = styled.div`
  background-color: ${COLORS.primary};
  clip-path: inset(0px ${({ value }) => 100-value}% 0px 0px);
  border-radius: 4px;
`

const LargeProgress = styled(ProgressBase)`
  height: 16px;
`

const MediumProgress = styled(ProgressBase)`
  height: 12px;
`

const SmallProgress = styled(ProgressBase)`
  height: 8px;
`

const COMPONENTS = {
  large: {
    wrapper: LargeProgressBarWrapper,
    progress: LargeProgress,
  },
  medium: {
    wrapper: ProgressBarWrapperBase,
    progress: MediumProgress,
  },
  small: {
    wrapper: ProgressBarWrapperBase,
    progress: SmallProgress,
  }
}

const ProgressBar = ({ value, size }) => {
  const { wrapper: Wrapper, progress: Progress } = COMPONENTS[size]

  return <Wrapper role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
    <VisuallyHidden>{value}%</VisuallyHidden>
    <Progress value={value}/>
  </Wrapper>;
};

export default ProgressBar;
