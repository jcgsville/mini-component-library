import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';
import VisuallyHidden from '../VisuallyHidden'

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`

const NativeSelect = styled.select`
  opacity: 0%;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`

const PresentationalSelect = styled.div`
  display: block;

  border-radius: 8px;
  
  padding-inline-start: 16px;
  padding-inline-end: 56px;
  padding-block: 12px;
  width: fit-content;

  background-color: ${COLORS.transparentGray15};

  color: inherit;
  font-weight: 400;
  font-size: 1rem;

  color: ${COLORS.gray700};

  ${NativeSelect}:focus ~ & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }

`

const Chevron = styled(Icon)`
  position: absolute;
  right: 16px;
  top: 0;
  bottom: 0;
  margin: auto 0; 
`

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalSelect>{displayedValue}
      <Chevron id="chevron-down" size={16} strokeWidth={2}/></PresentationalSelect>
    </Wrapper>
  );
};

export default Select;
