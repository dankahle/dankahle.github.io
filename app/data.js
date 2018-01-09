

var skills = [
   {
      title: 'front end',
      desc: 'TypeScript, ES6, HTML5, SCSS, Material, Bootstrap,  Lodash'
   },
   {
      title: 'angular 1.5',
      desc: 'UI-Router, UI-Bootstrap, Bootstrap, cg-angular, Karma/Jasmine'
   },
   {
      title: 'angular 5',
      desc: 'Material, @angular/cli, @angular/flex-layout, Rxjs, redux, Karma/Jasmine'
   },
   {
      title: 'node 6.9.2',
      desc: 'Node, NPM, Express, Lodash, Mocha/Chai'
   },
   {
      title: 'mongoDB 3.2',
      desc: 'MongoDB, MongoDB node native driver, Mongoose'
   },
   {
      title: 'tools',
      desc: 'Macbook pro, WebStorm, Chrome, Gulp/Grunt, Github, Bitbucket, Jira, Scrum'
   },
   {
      title: 'patterns',
      desc: 'MVC, MVVM, module/closure/AMD, IoC, Repository, GoF, Enterprise Architecture, Refactoring'
   }
];

var jobs = [
   {
      title: 'dk-contacts',
      link: 'https://github.com/dankahle/dk-contacts',
      city: 'github repo',
      dates: 'Nov 2017 - Dec 2017 (2mo)',
      desc: 'Duplicated Google Contacts using angular5/node8/mongodb3.4, as a showcase project for interviewing.',
      skills: 'mean stack: angular5/node8/mongodb3.4, es6, typescript, rxjs, scss, material, @angular/flex-layout, @angular/cli, json schema, redoc, mlab, heroku, github pages, karma, jasmine, mocha, chai'
   },
   {
      title: 'acxiom',
      link: 'https://www.acxiom.com/',
      city: 'Austin, TX',
      dates: 'Oct 2015 - Oct 2017 (2yr)',
      desc: 'Implemented acxiom’s next-generation data gathering/parsing/etl tools using the MEAN stack.',
      skills: 'mean stack: angular4/node6/mongodb3.2, es5/6, typescript, jquery, rxjs, less/scss, bootstrap/material, ui-bootstrap, kraken, cg-angular, karma, jasmine, express, mongoose, grunt, git, stash/bitbucket, jenkins, jira, scrum'
   },
   {
      title: 'Technology Change - ASP.NET to MEAN stack',
      city: 'San Diego, CA',
      dates: 'Sep 2013 - Jun 2015 (1yr 9mo)',
      desc: 'Took time off to learn new technologies, moved from .NET web apps to the MEAN stack.',
      skills: 'mean stack: angular/node/mongodb, jquery, ui-router, restangular, polymer, sass/less, lodash, async, express, mongoose, karma/jasmine, mocha/chai/sinon, webstorm, npm/bower, gulp/grunt, git/github, balsamiq, aws, heroku, mongolab'
   },
   {
      title: 'LPL Financial',
      link: 'https://lplfinancial.lpl.com',
      city: 'San Diego, CA',
      dates: 'Dec 2011 - Sep 2013 (1yr 10mo)',
      desc: 'Enhanced LPL’s BranchNet, a public-facing financial advisor website.',
      skills: 'Asp.net MVC3, Asp.net4, jQuery,  WCF, Sql Server2008'
   },
   {
      title: 'Learning.com',
      link: 'http://www.learning.com',
      city: 'Portland, OR',
      dates: 'Dec 2010 - Jun 2011 (7mo)',
      desc: 'Enhanced learning.com\'s K through 12 educational webite.',
      skills: 'Asp.net4, jQuery, WCF, Entity Framework, Sql Server2008, multi-browser, Scrum'
   },
   {
      title: 'Intel',
      link: 'http://www.intel.com',
      city: 'Portland, OR',
      dates: 'Jan 2010 - Nov 2010 (11mo)',
      desc: 'Implemented iCost, Intel’s global financial cost analysis project.',
      skills: 'Asp.net3.5, WCF, Sql Server2008, SSIS'
   },
   {
      title: 'NWEA',
      link: 'https://www.nwea.org/',
      city: 'Portland, OR',
      dates: 'Apr 2008 - May 2009 (1yr 2mo)',
      desc: 'Implemented a 2 TB database reduction application for qa/dev testing.',
      skills: 'Asp.net3.5, SMO, SSIS, Sql Server2005'
   },
   {
      title: 'WebMD',
      link: 'https://www.webmd.com/',
      city: 'Portland, OR',
      dates: 'Oct 2007 - Mar 2008 (6mo)',
      desc: 'Enhanced a multi-corp medical benefits customization portal.',
      skills: 'Asp.net3.5, MVP, Sql Server2005, multi-browser, Scrum'
   },
   {
      title: 'Corvel',
      link: 'http://www.corvel.com/',
      city: 'Portland, OR',
      dates: 'Jun 2006 - Sep 2007 (1yr 4mo)',
      desc: 'Implemented internal intranet applications to support business needs.',
      skills: 'Asp.net3, Sql Server2005, WWF, Active Directory, MOM, MIIS'
   },
   {
      title: 'Ciber',
      link: 'https://www.ciber.com/',
      city: 'Vancouver, WA',
      dates: 'Nov 2004 - May 2006 (1yr 7mo)',
      desc: 'Enhanced a public-facing multi-state labor market information website.',
      skills: 'Asp.net2, Sql Server2000, Erwin, Full-text indexing, Index Services'
   },
   {
      title: 'Intel',
      link: 'http://www.intel.com',
      city: 'Portland, OR',
      dates: 'Apr 2003 - Jun 2004 (1yr 3mo)',
      desc: 'Enhanced Intel’s “Teach to the Future” extranet website.',
      skills: 'Asp.net1, SqlServer2000, multi-browser'
   }
]

var repos = [
   {
      title: 'dk-contacts',
      url: 'https://github.com/dankahle/dk-contacts',
      desc: 'This project is a duplication of Google Contacts as an exercise in using the latest mean stack technologies: angular 5, node 8.9, mongo 3.4. It\'s comprised of 3 repos (below): a common node project, backend rest api (node/express/mongodb), and frontend UI (angular 5/material/flex-layout).'
   },
   {
      title: 'contacts-fe',
      url: 'https://github.com/dankahle/contacts-fe',
      desc: 'This is the angular 5/material/flex-layout frontend of the dk-contacts project. I went with global state management for global state visibility with an observable pub/sub for dealing with changes that required broadcasting to other components. flex-layout was incredibly handy for positioning and responsiveness.'
   },
   {
      title: 'contacts-be',
      url: 'https://github.com/dankahle/contacts-be',
      desc: 'The backend rest api for the contacts-fe project. This api supports both login/register/authentication and users/contacts apis. Json schema is used for post/put body validation, and renders mongoose unrequired. The schemas also doubled use for redoc\'s json schema based documentation. MongoDB\'s node native driver was very easy to work with and utilized the same api as mongo\'s client. '
   },
   {
      title: 'node-base',
      url: 'https://github.com/dankahle/node-base',
      desc: 'A node common project for reusable node code across all node projects. This pattern affords consistency between your node projects and your frontends as well, as the standard error messages and codes support reusable UI error handling.'
   },
   {
      title: 'redux2',
      url: 'https://github.com/dankahle/redux2',
      desc: 'A comparison between straight angular 4 and angular 4 on redux. My first foray into redux was an uncomfortable experience. Redux is orthogonal to angular in many respects. It was hard to discern what enterprise angular would look like as opposed to angular/redux (my first enterprise angular 4 app). This was an attempt to see the two side-by-side and how redux could be done better.'
   },
   {
      title: 'dk-modal',
      url: 'https://github.com/dankahle/dk-modal',
      desc: 'An angular 1 module for creating modal windows. The modal can be any size and placed anywhere on screen (center, viewport offset, target element offset). Dual purposed for general messages and data edit popups with separate css settings for each mode, say slower/darker for messages, faster/lighter for editing.'
   },
   {
      title: 'github.io (this site)',
      url: 'https://github.com/dankahle/dankahle.github.io',
      desc: 'An angular 1 website to show my skills, jobs, and github projects. It\'s responsive from phone to widescreen, and involves considerable animation.'
   }
];


