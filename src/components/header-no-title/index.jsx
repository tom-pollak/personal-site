import { Link } from 'gatsby';
import get from 'lodash/get';
import React from 'react';


const classes = {
  wrapper: 'block md:flex',
  contentWrapper: 'flex-none pt-6 md:pt-1 md:flex-1 md:pl-0',
  name: 'text-5xl text-gray-900 font-bold leading-tight hover:text-black',
  description: 'text-gray-600',
  list: 'mt-0 tracking-wider',
  item: 'inline list-none pr-4',
  link:
    'inline-block py-2 font-semibold text-sm text-blue-500 hover:text-pink-500',
};

const Header = ({ metadata = {}, noBlog = false }) => {
  const twitter = get(metadata, 'author', false);
  const github = get(metadata, 'github', false);
  const linkedin = get(metadata, 'linkedin', false);
  // const cv = get(metadata, 'cv', false);
  const cv = get(metadata, 'cv', false);

  return (
    <div className={classes.wrapper}>
      <div className={classes.contentWrapper}>
        <ul className={classes.list}>
          <li className={classes.item}>
          <Link to="/" className={classes.link}>home</Link>
          </li>
          {twitter && (
            <li className={classes.item}>
              <a
                className={classes.link}
                href={`https://twitter.com/${twitter}`}
              >
                Twitter
              </a>
            </li>
          )}
          {github && (
            <li className={classes.item}>
              <a className={classes.link} href={github}>
                github
              </a>
            </li>
          )}
          {linkedin && (
            <li className={classes.item}>
              <a className={classes.link} href={linkedin}>
                LinkedIn
              </a>
            </li>
          )}
          {!noBlog && (
            <li className={classes.item}>
              <Link className={classes.link} to="/blog">
                my writings
              </Link>
            </li>
          )}
          <li className={classes.item}>
            <a className={classes.link} href={cv} target="_blank" rel="noreferrer">
              hire me!
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
