import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.label`
  display: block;
  height: var(--height);
  position: relative;
  width: var(--width);
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`

const StyledIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
`

const Input = styled.input`
  font-size: var(--font-size);
  font-weight: 700;
  color: inherit;
  background-color: transparent;

  border: none;
  border-bottom: solid ${COLORS.black} var(--border-thickness);

  padding-left: var(--height);
  width: 100%;
  height: 100%;

  &:focus {
    outline-offset: 2px;
  }

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`

const SIZE_BASED_STYLES = {
  small: {
    '--height': '24px',
    '--border-thickness': '1px',
    '--font-size': '14px',
  },
  large: {
    '--height': '36px',
    '--border-thickness': '2px',
    '--font-size': '18px',
  }
}

const ICON_SIZE_PROPS = {
  small: {
    size: 16,
    strokeWidth: 1,
  },
  large: {
    size: 24,
    strokeWidth: 2,
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styleVars = {
    '--width': width + 'px',
    ...SIZE_BASED_STYLES[size],
  };
  return <Wrapper style={styleVars}>
    <VisuallyHidden>{label}</VisuallyHidden>
    <StyledIcon id={icon} {...ICON_SIZE_PROPS[size]}/>
    <Input placeholder={placeholder}/>
  </Wrapper>;
};

export default IconInput;
