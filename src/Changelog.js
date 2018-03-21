import React from 'react';
import { Timeline } from 'antd';

const Changelog = ({ data }) => {
  // data -> [['test1','test2'],'test3']
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

export default Changelog;
