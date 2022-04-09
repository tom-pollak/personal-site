import React from 'react';

import Section from '../section';

const SectionAbout = ({ about }) => {
  return (
    <Section>
      <div className="mb-3">
        <p>{about}</p>
      </div>
    </Section>
  );
};

export default SectionAbout;
