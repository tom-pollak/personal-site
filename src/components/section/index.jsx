import React from 'react';

const classes = {
  wrapper: 'block pt-3 md:flex',
  title: 'pb-6 md:w-full md:max-w-prose md:p-1',
  heading:
    'font-xs font-light tracking-widest text-sm text-gray-600 leading-normal uppercase',
  content: 'flex-none text-lg text-gray-600 font-light md:flex-1 md:pl-20',
};

const Section = ({ title, children }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>
        <h2 className={classes.heading}>{title}</h2>
      </div>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default Section;
