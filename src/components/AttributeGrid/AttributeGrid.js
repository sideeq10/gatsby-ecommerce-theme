import React from 'react';

import Attribute from '../Attribute';

import * as styles from './AttributeGrid.module.css';

const AttributeGrid = (props) => {
  return (
    <div className={styles.root}>
      <Attribute
        icon={'delivery'}
        title={'free delivery worldwide'}
        subtitle={'Click to learn more'}
      />
      <Attribute
        icon={'cycle'}
        title={'returns'}
        subtitle={'Return goods in 10 days'}
      />
      <Attribute
        icon={'creditcard'}
        title={'secured payment'}
        subtitle={'Shop safely with sideeq young'}
      />
    </div>
  );
};

export default AttributeGrid;
