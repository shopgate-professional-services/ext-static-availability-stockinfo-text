import React from 'react';
import { css } from 'glamor';
import PropTypes from 'prop-types';
import getConfig from '../../helpers/getConfig';

const { staticStockInfoText } = getConfig();

/**
 *  @return {JSX.Element}
 */
const StaticStockInfoText = ({ children }) => {
  if (!staticStockInfoText) {
    return children;
  }

  if (!staticStockInfoText.show) {
    return null;
  }

  if (!staticStockInfoText.text || staticStockInfoText.text === '') {
    return children;
  }

  return <p className={css(staticStockInfoText.styles || {})}>{staticStockInfoText.text}</p>;
};

StaticStockInfoText.propTypes = {
  children: PropTypes.node,
};

StaticStockInfoText.defaultProps = {
  children: null,
};

export default StaticStockInfoText;
