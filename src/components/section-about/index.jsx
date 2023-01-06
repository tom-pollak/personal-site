import React from 'react';

import Section from '../section';
import get from 'lodash/get';

const classes = {
  wrapper: 'block pt-3',
  title:
    'pb-6 pt-4 text-xl font-xs text-center font-light text-gray-600 italic',
  content: 'flex-none text-lg text-gray-600 font-light md:flex-1 md:pl-20',
};

const SectionAbout = ({ about, emoji }) => {
  return (
    <div className={classes.wrapper}>
      <p className={classes.title}>
        {about}
        <span className="not-italic">{emoji}</span>
      </p>
    </div>
  );
};

export default SectionAbout;
