import React from 'react';
import { Icon, Tooltip } from 'antd';

const Question = ({ tip }) => {
  return (
    <Tooltip title={tip || '无提示'}>
      <Icon type="question-circle-o" />
    </Tooltip>
  );
};

export default Question;
