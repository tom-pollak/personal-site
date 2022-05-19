import React from 'react';

const classes = {
  wrapper: 'block pt-6 md:flex',
  content: 'flex-none text-lg text-gray-600 font-light md:flex-1',
};

const Section = ({ children }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default Section;
