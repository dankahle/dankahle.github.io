

var skills = [
   {
      title: 'front end',
      desc: 'HTML5, es5/6, TypeScript, CSS3, SCSS/LESS, Material, Bootstrap,  jQuery, Lodash'
   },
   {
      title: 'angular 1.5',
      desc: 'cg-angular, UI-Router, UI-Bootstrap, Bootstrap, Karma/Jasmine'
   },
   {
      title: 'angular 5',
      desc: '@angular/cli, Typescript, Rxjs, Material, @angular/flex-layout, Karma/Jasmine'
   },
   {
      title: 'node 6.9.2',
      desc: 'Node, Express, Mongoose, Q, Lodash, Mocha/Chai/Sinon'
   },
   {
      title: 'mongoDB 3.2',
      desc: 'MongoDB, MongoDB node native driver, Mongoose'
   },
   {
      title: 'tools',
      desc: 'Macbook pro, WebStorm, NPM/Bower, Gulp/Grunt, Git, Github, Stash/Bitbucket, Jira, Scrum'
   },
   {
      title: 'patterns',
      desc: 'MVC, MVVM, module/closure/AMD, Promise/Observable, IoC, Repository, GoF, Enterprise Architecture, Refactoring'
   }
];

var jobs = [
	{
		title: 'acxiom',
      link: 'https://www.acxiom.com/',
      city: 'Austin, TX',
      dates: 'Oct 2015 - Oct 2017 (2yr)',
		desc: 'Implemented acxiom’s next generation of data gathering/parsing/etl tools using the MEAN stack.',
      skills: 'angular 1.5/4, es5/6, typescript, jquery, rxjs, less/scss, bootstrap/material, ui-bootstrap, kraken, cg-angular, karma, jasmine, node 6.9.2, express, mongoose, mongodb 3.2, grunt, git, stash/bitbucket, jenkins, jira, scrum'
	},
   {
      title: 'Technology Change',
      city: 'San Diego, CA',
      dates: 'Sep 2013 - Jun 2015 (1yr 9mo)',
      desc: 'Took time off to learn new technologies, moved from .NET web apps to the MEAN stack.',
      skills: 'angular, jquery, ui-router, restangular, polymer, sass/less, lodash, async, node, express, mongoose, mongodb, karma/jasmine, mocha/chai/sinon, webstorm, npm/bower, gulp/grunt, git/github, balsamiq, aws, heroku, mongolab'
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
      summary: 'Enhanced Learning.com’s educational multi-browser website for K through 12 school grades. The public site was Flash based for lesson content, with navigation/information UI features based on Asp.net, jQuery, and Ajax. Worked in the UI, business/data layers, and database. Refactored the business/data layers for better readability and efficiency. Researched several project strategies for addition into the Backlog. Mentored new engineers when possible. Worked with a team of 7 software developers, 4 database developers, 3 QA persons. Projects were performed in Scrum sprints with frequent releases.',
      skills: 'Asp.net4, jQuery, WCF, Entity Framework, Sql Server2008, multi-browser, Scrum'
   },
   {
      title: 'Intel',
      link: 'http://www.intel.com',
      city: 'Portland, OR',
      dates: 'Jan 2010 - Nov 2010 (11mo)',
      desc: 'Created Intel\'s iCost global financial cost calculator.',
      summary: 'Created iCost, Intel’s global financial cost analysis project which valuated the cost of all global wafer lots dependent on their process step, for accurate end-of-month analysis. Enhanced InterfaceEngine’s web service, data pull, maintenance tool, and monitor tool; applications working in unison for ETL of financial cost analysis data. Utilized SSIS, implemented ETL stored procedures, configured a job automation scheduler, handled data from web services, atom feed, MARS, xml and text.',
      skills: 'Asp.net3.5, WCF, Sql Server2008, SSIS'
   },
   {
      title: 'NWEA',
      link: 'https://www.nwea.org/',
      city: 'Portland, OR',
      dates: 'Apr 2008 - May 2009 (1yr 2mo)',
      desc: '2 TB database reduction application, for dev/qa use.',
      summary: 'Implemented an internal-facing 2TB Sql Server data set reduction website for QA/Dev. Used SQL Server Management Objects (SMO) to copy production database schemas from multiple SQL Server instances to a standard set of SQL Server instances. Used Ado.net’s SqlBulkCopy class for data extraction based on  dynamically generated SQL select statements using data and SQL Server metadata to determine table joins. Transferred SQL Agent jobs and SSIS packages via SQL Server Integration Service (SSIS) runtime API. Used Red Gate’s SQL Compare and SQL Data Compare for verification.',
      skills: 'Asp.net3.5, SMO, SSIS, Sql Server2005'
   },
   {
      title: 'WebMD',
      link: 'https://www.webmd.com/',
      city: 'Portland, OR',
      dates: 'Oct 2007 - Mar 2008 (6mo)',
      desc: 'Enhanced multi-corp portal for new benefits package.',
      summary: 'Implemented a new feature to the Benefits multi-browser website which allows users to customize and compare their medical/dental/vision insurance benefit packages. Worked as part of a Scrum team meeting daily, releasing weekly, and prioritizing milestones and tasks. Implemented the Model View Presenter design pattern. Wrapped all code in unit tests using NUnit and RhinoMocks. Worked with numerous design patterns including. Factories, Builder, Composite, Mediator, Prototype, Decorator, Strategy, Visitor.',
      skills: 'Asp.net3.5, MVP, Sql Server2005, multi-browser, Scrum'
   },
   {
      title: 'Corvel',
      link: 'http://www.corvel.com/',
      city: 'Portland, OR',
      dates: 'Jun 2006 - Sep 2007 (1yr 4mo)',
      desc: 'Internal business applications, MIIS server management.',
      summary: 'Designed and implemented intranet applications to support internal business needs. Worked closely with internal customers to make sure moving requirements were met during the design and development stages to maximize product applicability. Implemented an Active Directory self-service application utilizing Directory Services, Kerberos multi-hop constrained delegation for security, and weekly Sql Agent jobs using Sql Database Mail for notification of non-compliance, monitored with MOM. Worked with Windows Workflow Foundation (WWF). Implemented and maintained the Microsoft Identity Integration Server.',
      skills: 'Asp.net3, Sql Server2005, WWF, Active Directory, MOM, MIIS'
   },
   {
      title: 'Ciber',
      link: 'https://www.ciber.com/',
      city: 'Vancouver, WA',
      dates: 'Nov 2004 - May 2006 (1yr 7mo)',
      desc: 'Enhanced 9 public facing state labor statistic sites.',
      summary: 'Enhanced 9 public facing state labor market information websites, managed off site hosting as well as an offshore team in India. Dealt directly with state customers, and met with the consortium in out-of-state seminars. Designed advanced searching functionality to crawl the website’s database and hard drive file content, displaying the ranked results. Ported a website from Sql Server to Oracle using Erwin to reverse engineer the database.',
      skills: 'Asp.net2, Sql Server2000, Erwin, Full-text indexing, Index Services'
   },
   {
      title: 'Intel',
      link: 'http://www.intel.com',
      city: 'Portland, OR',
      dates: 'Apr 2003 - Jun 2004 (1yr 3mo)',
      desc: 'Enhanced public facing "Teach to the Future" website.',
      summary: 'Converted and enhanced Intel’s “Teach to the Future” multi-browser extranet website. Converted from VBScript/ASP/SQL Server to a C#/ASP.NET. Added new Seminars functionality. Refactored code and database eliminating 120 ASP files and over 200 stored procedures. Reviewed all www.asp.net starter kits and other ASP.NET solutions to create an application environment that minimized code redundancy while maximizing reusability. Designed custom server controls to enable client side JavaScript validation.',
      skills: 'Asp.net1, SqlServer2000, multi-browser'
   }
]

var repos = [
   {
      title: 'dk-contacts',
      url: 'https://github.com/dankahle/dk-contacts',
      desc: 'This project is a duplication of Google\'s "Contacts" site as an exercise in using the latest mean stack technologies: angular 5, node 8.9, mongo 3.4. It\'s comprised of 3 repos (below): a common node project, backend rest api (node/express/mongodb), and frontend UI (angular 5/material/flex-layout).'
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


