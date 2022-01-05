import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';


// Block level elements grow to fill their space...

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
    <NativeSelect value={value} onChange={onChange}>
      {children}
    </NativeSelect>
    <PresentationalDiv>
      {displayedValue}
      <IconWrapper style={{'--size': 24 + 'px'}}>
        <Icon id="chevron-down" strokeWidth={1} size={24}/>
      </IconWrapper>
    </PresentationalDiv>
    </Wrapper>
  );
};

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const PresentationalDiv = styled.div`
  padding: 12px 16px;
  padding-right: 52x;
  font-size: ${16/16}rem;
  color: ${COLORS.gray700};
  background: ${COLORS.transparentGray15};
  border-radius: 8px;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }

`;

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;

export default Select;
