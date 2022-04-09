module.exports = {
  siteMetadata: {
    siteUrl: `https://tom-pollak.github.io/`,
    name: 'Tom Pollak',
    title: `Tom Pollak`,
    description: `Studying Computer Science @ University of York
    `,
    author: ``,
    github: `https://github.com/tom-pollak`,
    linkedin: ``,
    cv: `src/assets/cv.pdf`,
    about: `Hi! I'm Tom, and I'm a CS student who loves to code. I've either directed you here, or you're recruiting a developer. Either way, welcome! Check out my GitHub, and feel free to reach out.`,
    education: [ 
      {
        school: `University of York`,
        degree: `BSc (Hons) Computer Science, 2023`,
        link: `https://www.york.ac.uk/`,
      },
      {
        school: 'Lady Manners School',
        degree:
          'A-Levels: Further Maths (A), Maths (A), Physics (A), Computer Science (A)',
        link: '',
      },
    ],
    projects: [
      {
        name: 'Each Way Matcher',
        description:
          'An automated horse racing betting program to make bets on profitable each-way and extra place races.',
        link: 'https://github.com/tom-pollak/each-way-matcher',
      },
      {
        name: 'Pirates!',
        description:
          'An interactive pirate game using Java and LibGDX as part of the ENG1 module.',
        link: 'https://github.com/tom-pollak/pirates',
      },
      {
        name: 'Poker Web Application',
        description:
          'A free live poker web application using Python and Django, deployed on Heroku.',
        link: 'https://github.com/tom-pollak/web-poker',
      },
      {
        name: 'FOR500 Windows Forensics - SANS Institute',
        description:
          'Completed the course over a period of two weeks. Sponsored to take part through the Cyber Discovery programme.',
        link: 'https://sans.org/cyber-security-courses/windows-forensic-analysis',
      },
      {
        name: 'Cyber Discovery',
        description:
          'Independently completed the Cyber Discovery programme run by HM government in partnership with SANS institute. I was selected as one of the top 500 students to attend the Cyber Discovery Elite event in London.',
        link: 'https://joincyberdiscovery.com/',
      },
    ],
    experience: [
      {
        name: 'Glasshouse Bar',
        description: 'Bartender, September 2021 - Present',
        link: '',
      },
      {
        name: 'Seafood Bar & Grill',
        description: 'Waiter, July - September 2021',
        link: '',
      },
      {
        name: 'Derbyshire Police - CID Interview Training',
        description: 'Mock Police Witness Interviewee - March 2021',
        link: '',
      },
      {
        name: 'Fishpond',
        description: 'Bartender, June - September 2020',
        link: '',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages',
        description: 'Python, Java, Haskell, JavaScript, SQL, BASH',
      },
      {
        name: 'Technologies',
        description:
          'Git, Django, Pandas, Numpy, LibGDX, Docker, Vue.js, PostgreSQL, Heroku, Selenium',
      },
      {
        name: 'Interests',
        description: 'Climbing, Hockey, Poker, Chess, Running',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    // `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/portrait.png`,
      },
    },
  ],
};
