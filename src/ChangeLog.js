import React from 'react';
import { Timeline } from 'antd';

const ChangeLog = ({ data }) => {
  return (
    <Timeline>
      {data.map(
        elem =>
          elem instanceof Array ? (
            <Timeline.Item>{elem.map(item => <p>{item}</p>)}</Timeline.Item>
          ) : (
            <Timeline.Item>{elem}</Timeline.Item>
          )
      )}
    </Timeline>
  );
};

export default ChangeLog;
