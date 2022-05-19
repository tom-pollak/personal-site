import React from 'react';

import {default as SectionNoTitle} from '../section-list';
import Section from '../section';
import SummaryItem from '../summary-item';
import moment from 'moment';

const BlogPosts = ({ posts }) => {
  return (
    <SectionNoTitle>
      {posts.map((post) => (
        <Section title={moment(post.node.frontmatter.date).format('MMMM D, YYYY')}>
          <SummaryItem
            key={post.node.fields.slug}
            name={post.node.frontmatter.title}
            description={post.node.frontmatter.description}
            link={post.node.fields.slug}
            internal
          />
        </Section>
      ))}
    </SectionNoTitle>
  );
};

export default BlogPosts;
