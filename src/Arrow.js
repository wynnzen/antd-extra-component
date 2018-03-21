import React from 'react';
import { Icon } from 'antd';

const Arrow = ({ value }) => {
  return (
    <span>
      {(() => {
        if (value > 0) {
          return <Icon type="caret-up" style={{ color: '#ff7a7a' }} />;
        } else if (value < 0) {
          return <Icon type="caret-down" style={{ color: '#00b3bc' }} />;
        } else {
          return '';
        }
      })()}
    </span>
  );
};

export default Arrow;
