

var skills = [
   {
      title: 'front end',
      desc: 'HTML5, ECMAScript6, CSS3, AngularJS, Polymer, SASS/LESS, Bootstrap3,  jQuery, lodash, async'
   },
   {
      title: 'angular',
      desc: 'UI-Router, Restangular'
   },
   {
      title: 'back-end service',
      desc: 'Node/Express/MongoDB native driver/Mongoose, WebAPI2, WCF, Entity Framework6'
   },
   {
      title: 'server-side web application',
      desc: 'Asp.net MVC5, Asp.net'
   },
   {
      title: 'database',
      desc: 'MongoDB, Sql Server, Amazon (S3/EC2/RDS), Azure (Storage/Sql Database)'
   },
   {
      title: 'test',
      desc: 'Karma/Jasmine/Protractor, Mocha/Chai/Sinon, MSTest, xUnit, MOQ'
   },
   {
      title: 'tools',
      desc: 'WebStorm, npm/bower, gulp/grunt, git, github, yeoman, VisualStudio, TFS, Subversion, Balsamiq'
   },
   {
      title: 'cloud',
      desc: 'Amazon Web Services, Microsoft Azure, Heroku, MongoLab'
   },
   {
      title: 'patterns',
      desc: 'MVC, MVVM, module/closure/AMD, Promises, IoC, Repository, GoF, Enterprise Architecture, Refactoring'
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
      title: 'Timeout',
      city: 'San Diego, CA',
      dates: 'Sep 2013 - Jun 2015 (1yr 9mo)',
      desc: 'Timeout to learn new technologies, moved from pc/.net to mac/mean stack',
      summary: 'Took time off to learn new technologies, moved from pc/.net to mac/mean stack. Looked at react/ember/angular, decided to go with angular. Fell in love with node, ditched my pc for a mac and don’t even try to take webstorm/git from me. Looked into the future with es6/polymer/web components. Started contributing to github projects.',
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
      title: 'Timeout',
      city: 'Portland, OR',
      dates: 'Jun 2001 - Mar 2003 (2yr 2mo)',
      desc: 'Timeout to learn new technologies.',
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
      title: 'dk-modal github',
      url: 'https://github.com/dankahle/dk-modal',
      desc: 'An angular module for creating modal windows. The modal can be any size and placed anywhere on screen (center, viewport offset, target element offset). Dual purposed for general messages and data edit popups with separate css settings for each mode, say slower/darker for messages, faster/lighter for editing.'
   },
   {
      title: 'dk-modal',
      url: 'https://github.com/dankahle/dk-modal',
      desc: 'An angular module for creating modal windows. The modal can be any size and placed anywhere on screen (center, viewport offset, target element offset). Dual purposed for general messages and data edit popups with separate css settings for each mode, say slower/darker for messages, faster/lighter for editing.'
   },
   {
      title: 'dk-modal',
      url: 'https://github.com/dankahle/dk-modal',
      desc: 'An angular module for creating modal windows. The modal can be any size and placed anywhere on screen (center, viewport offset, target element offset). Dual purposed for general messages and data edit popups with separate css settings for each mode, say slower/darker for messages, faster/lighter for editing.'
   },
];

var blogs = [
   {
      title: 'dk-modal blog',
      url: 'https://github.com/dankahle/dk-modal',
      desc: 'An angular module for creating modal windows. The modal can be any size and placed anywhere on screen (center, viewport offset, target element offset). Dual purposed for general messages and data edit popups with separate css settings for each mode, say slower/darker for messages, faster/lighter for editing.'
   },
   {
      title: 'dk-modal',
      url: 'https://github.com/dankahle/dk-modal',
      desc: 'An angular module for creating modal windows. The modal can be any size and placed anywhere on screen (center, viewport offset, target element offset). Dual purposed for general messages and data edit popups with separate css settings for each mode, say slower/darker for messages, faster/lighter for editing.'
   },
   {
      title: 'dk-modal',
      url: 'https://github.com/dankahle/dk-modal',
      desc: 'An angular module for creating modal windows. The modal can be any size and placed anywhere on screen (center, viewport offset, target element offset). Dual purposed for general messages and data edit popups with separate css settings for each mode, say slower/darker for messages, faster/lighter for editing.'
   },
];
