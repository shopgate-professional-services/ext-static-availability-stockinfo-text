import React from 'react';
import { css } from 'glamor';
import PropTypes from 'prop-types';
import getConfig from '../../helpers/getConfig';

const { staticAvailabilityText } = getConfig();

/**
 *  @return {JSX.Element}
 */
const StaticAvailabilityText = ({ children }) => {
  if (!staticAvailabilityText) {
    return children;
  }

  if (!staticAvailabilityText.show) {
    return null;
  }

  if (!staticAvailabilityText.text || staticAvailabilityText.text === '') {
    return children;
  }

  return <p className={css(staticAvailabilityText.styles || {})}>{staticAvailabilityText.text}</p>;
};

StaticAvailabilityText.propTypes = {
  children: PropTypes.node,
};

StaticAvailabilityText.defaultProps = {
  children: null,
};

export default StaticAvailabilityText;
