/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const style = {
  small: {
    height: 8,
    padding: 0,
    radius: 4
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4
  },
  large: {
    height: 16,
    padding: 4,
    radius: 8
  }
}
const ProgressBar = ({ value, size }) => {
  const styles = style[size];
  return <Wrapper
  role="progressbar"
  aria-valuenow={value}
  aria-valuemin="0"
  aria-valuemax="100"
  style={{
    '--padding': styles.padding + 'px',
    '--radius': styles.radius + 'px'
  }}>
      <BarWrapper><Bar style={{
        '--height': styles.height + 'px',
        '--width': value + "%",
      }}></Bar></BarWrapper>
      <VisuallyHidden>{value}</VisuallyHidden>
    </Wrapper>;
};

const Wrapper = styled.div`
  padding: var(--padding);
  border-radius: var(--radius);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 8px 2px 4px ${COLORS.transparentGray35};
`;
const BarWrapper = styled.div`
  border-radius: 4px;
  /* Hide the inner bar at large % to maintain rounded corner effect */
  overflow: hidden;
  
`;
const Bar = styled.div`
  height: var(--height);
  width: var(--width);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
