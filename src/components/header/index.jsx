import { Link } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import profileImg from '../../images/portrait.png';

const classes = {
  wrapper: 'block md:flex',
  imageWrapper: 'w-full max-w-150',
  image: 'rounded-full transform transition-all duration-150 hover:scale-105',
  contentWrapper: 'flex-none pt-6 md:pt-1 md:flex-1 md:pl-20',
  contentWrapperNoImage: 'flex-none pt-6 md:pt-1 md:flex-1',
  name: 'text-4xl text-gray-900 font-bold leading-tight hover:text-black',
  description: 'text-gray-600',
  list: 'mt-3 tracking-wider',
  listNoDescription: 'mt-1 tracking-wider',
  item: 'inline list-none pr-4',
  link:
    'inline-block py-0 font-semibold text-sm text-blue-500 hover:text-pink-500',
};

const Header = ({ metadata = {}, noBlog = false, noPhoto = false, noDescription = false, noTitle = false}) => {
  const twitter = get(metadata, 'author', false);
  const github = get(metadata, 'github', false);
  const linkedin = get(metadata, 'linkedin', false);
  // const cv = get(metadata, 'cv', false);
  const cv = get(metadata, 'cv', false);

  return (
    <div className={classes.wrapper}>
      {!noPhoto && 
        <div className={classes.imageWrapper}>
          <Link to="/">
            <img className={classes.image} src={profileImg} alt={metadata.name} />
          </Link>
        </div>
      }
      <div className={!noPhoto ? classes.contentWrapper : classes.contentWrapperNoImage}>
      { !noTitle && 
        <div>
          <h1 className={classes.name}>
            <Link to="/">{metadata.name}</Link>
          </h1>
          {!noDescription && 
          <p className={classes.description}>{metadata.description}</p>}
        </div>
      }
        <ul className={!noDescription ? classes.list : classes.listNoDescription}>
          {noTitle && 
            <li className={classes.item}>
            <Link to="/" className={classes.link}>home</Link>
            </li>
          }
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
