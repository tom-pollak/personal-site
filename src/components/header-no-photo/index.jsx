import { Link } from 'gatsby';
import get from 'lodash/get';
import React from 'react';


const classes = {
  wrapper: 'block md:flex',
  imageWrapper: 'w-full max-w-150',
  image: 'rounded-full transform transition-all duration-150 hover:scale-105',
  contentWrapper: 'flex-none pt-6 md:pt-1 md:flex-1 md:pl-20',
  name: 'text-5xl text-gray-900 font-bold leading-tight hover:text-black',
  description: 'text-gray-600',
  list: 'mt-3 tracking-wider',
  item: 'inline list-none pr-4',
  link:
    'inline-block py-2 font-semibold text-sm text-blue-500 hover:text-pink-500',
};

const HeaderNoPhoto = ({ metadata = {}, noBlog = false }) => {
  const twitter = get(metadata, 'author', false);
  const github = get(metadata, 'github', false);
  const linkedin = get(metadata, 'linkedin', false);
  // const cv = get(metadata, 'cv', false);
  const cv = get(metadata, 'cv', false);

  return (
    <div className={classes.wrapper}>
      <div className={classes.contentWrapper}>
        <h1 className={classes.name}>
          <Link to="/">{metadata.name}</Link>
        </h1>
        <p className={classes.description}>{metadata.description}</p>
        <ul className={classes.list}>
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
            <a className={classes.link} href={cv} target="_blank">
              hire me!
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderNoPhoto;
