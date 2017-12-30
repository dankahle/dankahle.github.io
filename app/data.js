

var skills = [
   {
      title: 'front end',
      desc: 'HTML5, es6, TypeScript, CSS3, SCSS/LESS, Material, Bootstrap,  jQuery, Lodash'
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
		title: 'dk-modal, github.io site',
      city: 'San Diego, CA',
      dates: 'Jul 2015 - Aug 2015 (1.5mo)',
		desc: 'Built an angular modal dialog component: dk-modal. Created a github.io personal website.',
		summary: 'Created an angular modal dialog component for myself and the community. Wanted a modal that could be positioned anywhere and that could take a header/body and a ok, ok/cancel, yes/no buttoned footer that fired off ok/cancel events. It turned out nicely. Created a personal github.io website to show my skills, jobs, github projects and blog articles, you may be on it now.<br><a href="https://github.com/dankahle/dk-modal" target="_blank">dk-modal</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/dankahle/dankahle.github.io" target="_blank">github.io site</a><br>',
      skills: 'angular, jquery, less, bootstrap, gulp, git, github'
	},
   {
      title: 'mgcrea/angular-strap',
      city: 'San Diego, CA',
      dates: 'Feb 2015 - Feb 2015 (1mo)',
      desc: 'Contributed to the angular-strap project for a month. Like this module, nice architecture, nice animation.',
      summary: 'Contributed to the mgcrea/angular-strap project for a month  in an effort to refine my advanced directives and animation skills. Like this project a lot, a lot more than UI-bootstrap. I have no problem using bootstrap.js to get the job done, just that the code can be easily reused/refactored if placed in directives, and that\'s already been done for you with this project. Plus, the datepicker and typeahead are missing from bootstrap, two very useful components.<br><a href="http://mgcrea.github.io/angular-strap/" target="_blank">angular-strap</a>',
      skills: 'angular, jquery, karma, jasmine, grunt, gulp, git, github'
   },
   {
      title: 'Technology Change',
      city: 'San Diego, CA',
      dates: 'Sep 2013 - Jun 2015 (1yr 9mo)',
      desc: 'Took time off to learn new technologies, moved from .NET web apps to the MEAN stack.',
      summary: 'Took time off to learn new technologies, moved from .NET web apps to the MEAN stack. Looked at react/ember/angular, decided to go with angular. Fell in love with node, ditched my pc for a mac and don’t even try to take webstorm/git from me. Looked into the future with es6/polymer/web components. Started contributing to github projects.',
      skills: 'angular, jquery, ui-router, restangular, polymer, sass/less, lodash, async, node, express, mongoose, mongodb, karma/jasmine, mocha/chai/sinon, webstorm, npm/bower, gulp/grunt, git/github, balsamiq, aws, heroku, mongolab'
   },
   {
      title: 'LPL Financial',
      city: 'San Diego, CA',
      dates: 'Dec 2011 - Sep 2013 (1yr 10mo)',
      desc: 'Enhanced LPL’s BranchNet, a public-facing financial advisor website.',
      summary: 'Participated in multiple projects enhancing LPL’s BranchNet, a public-facing financial advisor website. Modified turbo tax integration for tax year 2012. Designed and implemented Account Management Center, a multi-browser single-page jQuery/Asp.net MVC 3 intranet application for retransmitting new customer accounts.',
      skills: 'jQuery, Asp.net MVC3, Asp.net4, WCF, Sql Server2008, multi-browser'
   },
   {
      title: 'Learning.com',
      city: 'Portland, OR',
      dates: 'Dec 2010 - Jun 2011 (7mo)',
      desc: 'Enhanced learning.com\'s K through 12 educational webite.',
      summary: 'Enhanced Learning.com’s educational multi-browser website for K through 12 school grades. The public site was Flash based for lesson content, with navigation/information UI features based on Asp.net, jQuery, and Ajax. Worked in the UI, business/data layers, and database. Refactored the business/data layers for better readability and efficiency. Researched several project strategies for addition into the Backlog. Mentored new engineers when possible. Worked with a team of 7 software developers, 4 database developers, 3 QA persons. Projects were performed in Scrum sprints with frequent releases.',
      skills: 'Asp.net4, jQuery, WCF, Entity Framework, Sql Server2008, multi-browser, Scrum'
   },
   {
      title: 'Intel',
      city: 'Portland, OR',
      dates: 'Jan 2010 - Nov 2010 (11mo)',
      desc: 'Created Intel\'s iCost global financial cost calculator.',
      summary: 'Created iCost, Intel’s global financial cost analysis project which valuated the cost of all global wafer lots dependent on their process step, for accurate end-of-month analysis. Enhanced InterfaceEngine’s web service, data pull, maintenance tool, and monitor tool; applications working in unison for ETL of financial cost analysis data. Utilized SSIS, implemented ETL stored procedures, configured a job automation scheduler, handled data from web services, atom feed, MARS, xml and text.',
      skills: 'Asp.net3.5, WCF, Sql Server2008, SSIS'
   },
   {
      title: 'NWEA',
      city: 'Portland, OR',
      dates: 'Apr 2008 - May 2009 (1yr 2mo)',
      desc: '2 TB database reduction application, for dev/qa use.',
      summary: 'Implemented an internal-facing 2TB Sql Server data set reduction website for QA/Dev. Used SQL Server Management Objects (SMO) to copy production database schemas from multiple SQL Server instances to a standard set of SQL Server instances. Used Ado.net’s SqlBulkCopy class for data extraction based on  dynamically generated SQL select statements using data and SQL Server metadata to determine table joins. Transferred SQL Agent jobs and SSIS packages via SQL Server Integration Service (SSIS) runtime API. Used Red Gate’s SQL Compare and SQL Data Compare for verification.',
      skills: 'Asp.net3.5, SMO, SSIS, Sql Server2005'
   },
   {
      title: 'WebMD',
      city: 'Portland, OR',
      dates: 'Oct 2007 - Mar 2008 (6mo)',
      desc: 'Enhanced multi-corp portal for new benefits package.',
      summary: 'Implemented a new feature to the Benefits multi-browser website which allows users to customize and compare their medical/dental/vision insurance benefit packages. Worked as part of a Scrum team meeting daily, releasing weekly, and prioritizing milestones and tasks. Implemented the Model View Presenter design pattern. Wrapped all code in unit tests using NUnit and RhinoMocks. Worked with numerous design patterns including. Factories, Builder, Composite, Mediator, Prototype, Decorator, Strategy, Visitor.',
      skills: 'Asp.net3.5, MVP, Sql Server2005, multi-browser, Scrum'
   },
   {
      title: 'Corvel',
      city: 'Portland, OR',
      dates: 'Jun 2006 - Sep 2007 (1yr 4mo)',
      desc: 'Internal business applications, MIIS server management.',
      summary: 'Designed and implemented intranet applications to support internal business needs. Worked closely with internal customers to make sure moving requirements were met during the design and development stages to maximize product applicability. Implemented an Active Directory self-service application utilizing Directory Services, Kerberos multi-hop constrained delegation for security, and weekly Sql Agent jobs using Sql Database Mail for notification of non-compliance, monitored with MOM. Worked with Windows Workflow Foundation (WWF). Implemented and maintained the Microsoft Identity Integration Server.',
      skills: 'Asp.net3, Sql Server2005, WWF, Active Directory, MOM, MIIS'
   },
   {
      title: 'Ciber',
      city: 'Vancouver, WA',
      dates: 'Nov 2004 - May 2006 (1yr 7mo)',
      desc: 'Enhanced 9 public facing state labor statistic sites.',
      summary: 'Enhanced 9 public facing state labor market information websites, managed off site hosting as well as an offshore team in India. Dealt directly with state customers, and met with the consortium in out-of-state seminars. Designed advanced searching functionality to crawl the website’s database and hard drive file content, displaying the ranked results. Ported a website from Sql Server to Oracle using Erwin to reverse engineer the database.',
      skills: 'Asp.net2, Sql Server2000, Erwin, Full-text indexing, Index Services'
   },
   {
      title: 'Intel',
      city: 'Portland, OR',
      dates: 'Apr 2003 - Jun 2004 (1yr 3mo)',
      desc: 'Enhanced public facing "Teach to the Future" website.',
      summary: 'Converted and enhanced Intel’s “Teach to the Future” multi-browser extranet website. Converted from VBScript/ASP/SQL Server to a C#/ASP.NET. Added new Seminars functionality. Refactored code and database eliminating 120 ASP files and over 200 stored procedures. Reviewed all www.asp.net starter kits and other ASP.NET solutions to create an application environment that minimized code redundancy while maximizing reusability. Designed custom server controls to enable client side JavaScript validation.',
      skills: 'Asp.net1, SqlServer2000, multi-browser'
   },
   {
      title: 'Technology Change',
      city: 'Portland, OR',
      dates: 'Jun 2001 - Mar 2003 (2yr 2mo)',
      desc: 'Took time off to learn new technologies, moved from windows apps to .net web apps.',
      summary: 'Took time off to learn new technologies, moved from Microsoft Windows programming to Microsoft .NET web programming.',
      skills: 'C#, Asp.net1, Sql Server 2000, HTML, CSS, javascript'
   },
   {
      title: 'Network General',
      city: 'Portland, OR',
      dates: 'Nov 1993 - Jan 2001 (7yr 3mo)',
      desc: 'Enhance numerous network analysis applications.',
      summary: 'Implemented/Enhanced Foundation Manager/Cornerstone Agent, a distributed network analysis Windows application for monitoring/optimizing network use. Initially sniffer competition, ProTools was eventually acquired by Network General. Transferred over to the Network General ATM Sniffer team and worked on their core sniffer technology as it migrated from DOS to Windows.',
      skills: 'Win32, MFC, COM Windows network analysis applications'
   },
]

var repos = [
   {
      title: 'dk-modal',
      url: 'https://github.com/dankahle/dk-modal',
      desc: 'An angular module for creating modal windows. The modal can be any size and placed anywhere on screen (center, viewport offset, target element offset). Dual purposed for general messages and data edit popups with separate css settings for each mode, say slower/darker for messages, faster/lighter for editing.'
   },
   {
      title: 'github.io (this site)',
      url: 'https://github.com/dankahle/dankahle.github.io',
      desc: 'A website to show off my skills, jobs, projects and blogs. Its main claim to fame is its ability to morph nicely for phone/portrait/landscape/widescreen, no small task. Animating the media changes without having content flashing was challenging as well.'
   },
   {
      title: 'passport-local-dk',
      url: 'https://github.com/dankahle/passport-local-dk',
      desc: 'Four examples of how to handle username/password authetication. Two roll-your-own solutions and 2 solutions using passport/passport-local, with one of each using passport-local-mongoose. Login pages are in angular (instead of server side).'
   },
   {
      title: 'passport-oauth-dk',
      url: 'https://github.com/dankahle/passport-oauth-dk',
      desc: 'An example of using passport for an oauth login via facebook and google.'
   },
];

var blogs = [
   {
      title: 'Filling up rest of open space between floating divs',
      url: 'http://dankahle-dev.blogspot.com/2015/06/filling-up-rest-of-open-space-between.html',
      desc: 'This was the most amazing css discovery of the year. I used to be a big table guy, partially cause it lined things up, but also for its ability to fill in the space between things. Turns out divs will do that too, but there\'s a trick.'
   },
   {
      title: 'Restangular vs the repository pattern',
      url: "http://dankahle-dev.blogspot.com/2015/05/restangular-vs-repository-pattern.html",
      desc: "Restangular replaces the repository pattern nicely, but only so much so."
   },
   {
      title: "Hashbang vs html5Mode in single-page applications",
      url: "http://dankahle-dev.blogspot.com/2015/05/hashbang-vs-html5mode-in-single-page.html",
      desc: "There are subtle differences between hashbang and html5mode applications. The dual querystring capability of hashbang urls can be key."
   },
   {
      title: "Comparing the different object clone methods",
      url: "http://dankahle-dev.blogspot.com/2015/05/comparing-different-object-clone-methods.html",
      desc: "A comparison of javascript object cloning techniques."
   },
   {
      title: "Hooks with kareem",
      url: "http://dankahle-dev.blogspot.com/2015/04/hooks-with-kareem.html",
      desc: "Nobody hooks like Kareem :). This is what mongoose uses for its pre/post hooks."
   },
   {
      title: "Requiring async modules in node",
      url: "http://dankahle-dev.blogspot.com/2015/03/requiring-async-modules-in-node.html",
      desc: "A strategy for requiring async modules in node, i.e. modules that won't be ready right off the bat. A database is something that comes to mind, you need access, but must wait for it's connection. Thankfully mongoose caches the requests until it's ready."
   },
   {
      title: "Readable file object stream with a through stream",
      url: "http://dankahle-dev.blogspot.com/2015/03/readable-file-object-stream-with.html",
      desc: "An attempt to simulate how gulp works, with its vinyl objects and through streams."
   },
   {
      title: "Node's xmas tree vs asnyc series",
      url: "http://dankahle-dev.blogspot.com/2015/03/nodes-xmas-tree-vs-asnyc-series.html",
      desc: "I just can't get enough of async.js. I used to think it was all promised based, but I stand corrected, it's lean and mean async code."
   },
   {
      title: "Animating form messages",
      url: "http://dankahle-dev.blogspot.com/2015/02/animating-form-messages.html",
      desc: "A strategy for animating angular form messages."
   },
   {
      title: "Async promise issues with jasmine",
      url: "http://dankahle-dev.blogspot.com/2015/01/async-promise-issues-with-jasmine.html",
      desc: "There's a trick for dealing with async promises in jasmine tests."
   },
   {
      title: "Copy to clipboard button",
      url: "http://dankahle-dev.blogspot.com/2015/01/copy-to-clipboard-button.html",
      desc: "How to implement a \"copy the clipboard\" button."
   },
   {
      title: "Gulp: comparing file watch options",
      url: "http://dankahle-dev.blogspot.com/2014/11/gulp-comparing-file-watch-options.html",
      desc: "A comparison of the different gulp file watch options."
   },
   {
      title: "gulp-watch vs gulp.watch",
      url: "http://dankahle-dev.blogspot.com/2014/11/gulp-watch-vs-gulpwatch.html",
      desc: "A comparison of gulp-watch to gulp.watch."
   },
   {
      title: "Angular and Polymer, a first attempt",
      url: "http://dankahle-dev.blogspot.com/2014/11/angular-and-polymer-first-attempt.html",
      desc: "An attempt to integrate polymer with angular1. It doesn't go so well, as polymer only affords one-way data binding. Surely angular2 won't have this issue."
   },
   {
      title: "The lowdown on Ecmascript 6, and getting up on Google's Traceur compiler",
      url: "http://dankahle-dev.blogspot.com/2014/10/the-lowdown-on-ecmascript-6-and-getting.html",
      desc: "Getting setup with Google's Traceur to work with Ecmascript 6."
   },
];
