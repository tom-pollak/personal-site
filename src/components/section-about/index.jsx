import React from 'react';

import Section from '../section';

const SectionAbout = ({ about }) => {
  return (
    <Section>
      <div className="mb-3">
        <p><span class='font-extrabold inline text-2xl pr-2 text-gray-800'>Hi!</span>{about}</p>
      </div>
    </Section>
  );
};

export default SectionAbout;
