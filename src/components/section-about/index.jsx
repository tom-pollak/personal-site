import React from 'react';

import Section from '../section';
import get from 'lodash/get';

const classes = {
  wrapper: 'block pt-3 pb-6 md:flex',
  title: 'md:w-full md:max-w-150 md:p-1',
  content: 'text-xl font-light text-gray-600 italic flex-non md:flex-1 md:pl-20',
  //flex-none text-lg text-gray-600 font-light md:flex-1 md:pl-20
};

const SectionAbout = ({ about, emoji }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>
      </div>
      <p className={classes.content}>
        {about}
        <span className="not-italic">{emoji}</span>
      </p>
    </div>
  );
};

export default SectionAbout;
