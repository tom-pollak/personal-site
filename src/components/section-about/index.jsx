import React from 'react';

import Section from '../section';
import get from 'lodash/get';

const SectionAbout = ({ about }) => {
  let split = about.split('GitHub');
  const github = "https://github.com/tom-pollak"
  return (
    <Section>
      <div className="mb-8">
        <p><span className='font-extrabold inline text-3xl pr-3 text-gray-800'>Hi!</span>
        {split[0]}
        <a className="text-blue-500 hover:text-pink-500" href={github}>
          GitHub
        </a>
        {split[1]}
        </p>
      </div>
    </Section>
  );
};

export default SectionAbout;
