import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionEducation = ({ education }) => {
  if (!education.length) return null;

  return (
    <Section title="Education">
      {education.map((education) => (
        <SummaryItem
          key={education.school}
          name={education.school}
          description={education.degree}
          link={education.link}
        />
      ))}
    </Section>
  );
};

export default SectionEducation;
