let data = [
  /*************
  *
  * Languages
  *
  **************/
  {
    cat: 'Languages', name: 'C', value: 20,
    icon: 'img/c.png',
    desc: `
      C was originally developed by Dennis Ritchie between 1972 and 1973 at Bell Labs. It was created to make utilities running on Unix.
    `
  },
  {
    cat: 'Languages', name: 'C++', value: 30,
    icon: 'img/cpp.png',
    desc: `
      C++ is a general-purpose programming language. It has imperative, object-oriented and generic programming features, while also providing facilities for low-level memory manipulation.
    `
  },
  {
    cat: 'Languages', name: 'C#', value: 40,
    icon: 'img/csharp.png',
    desc: `
      C# is a general-purpose, multi-paradigm programming language encompassing strong typing, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.
    `
  },
  {
    cat: 'Languages', name: 'Java', value: 40,
    icon: 'img/java.png',
    desc: `
      Java is a general-purpose computer-programming language that is concurrent, class-based, object-oriented, and specifically designed to have as few implementation dependencies as possible.
    `
  },
  {
    cat: 'Languages', name: 'Python', value: 30,
    icon: 'img/python.png',
    desc: `
      Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python has a design philosophy that emphasizes code readability, notably using significant whitespace.
    `
  },
  {
    cat: 'Languages', name: 'SQL', value: 30,
    icon: 'img/sql.png',
    desc: `
      SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system, or for stream processing in a relational data stream management system.
    `
  },
  {
    cat: 'Languages', name: 'HTML5 & CSS3', value: 20,
    icon: 'img/html5-css3.png',
    desc: `
      HTML 5 is a software solution stack that defines the properties and behaviors of web page content by implementing a markup based pattern to it.
      Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.
    `
  },
  {
    cat: 'Languages', name: 'JavaScript', value: 50,
    icon: 'img/javascript.png',
    desc: `
      JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is a language that is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.
    `
  },
  {
    cat: 'Languages', name: 'SASS (SCSS flavor)', value: 20,
    icon: 'img/sass.png',
    desc: `
      Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). SassScript is the scripting language itself.
    `
  },
  {
    cat: 'Languages', name: 'Bash', value: 20,
    icon: 'img/bash.png',
    desc: `
      Bash is a Unix shell and command language written by Brian Fox for the GNU Project. First released in 1989, it has been distributed widely as the default login shell for most Linux distributions and Apple's macOS.
    `
  },
  /*************
  *
  * Libraries
  *
  **************/
  {
    cat: 'Libraries', name: 'UIkit', value: 10,
    icon: 'img/uikit-logo.svg',
    desc: `
    A lightweight and modular front-end framework for developing fast and powerful web interfaces.
    `
  },
  {
    cat: 'Libraries', name: 'jQuery', value: 10,
    icon: 'img/jquery.png',
    desc: `
      jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax.
    `
  },
  {
    cat: 'Libraries', name: 'D3', value: 10,
    icon: 'img/d3.svg',
    desc: `
      D3.js is a JavaScript library for producing dynamic, interactive data visualizations in web browsers. It makes use of the widely implemented SVG, HTML5, and CSS standards.
    `
  },
  {
    cat: 'Libraries', name: 'Moment JS', value: 10,
    icon: 'img/momentjs.png',
    desc: `
        A lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates.
    `
  },

  /*************
  *
  * Runtimes & Frameworks
  *
  **************/
  {
    cat: 'Runtimes & Frameworks', name: 'Vue.js', value: 20,
    icon: 'img/vuejs.png',
    desc: `
      Vue.js is an open-source JavaScript framework for building user interfaces and single-page applications.
    `
  },
  {
    cat: 'Runtimes & Frameworks', name: 'AngularJS', value: 70,
    icon: 'img/angular1.png',
    desc: `
      AngularJS is a JavaScript-based open-source front-end web application framework by Google.
    `
  },
  {
    cat: 'Runtimes & Frameworks', name: 'Bootstrap CSS', value: 20,
    icon: 'img/bootstrap.svg',
    desc: `
      Originally created by a designer and a developer at Twitter, Bootstrap has become one of the most popular front-end frameworks and open source projects in the world.
    `
  },
  {
    cat: 'Runtimes & Frameworks', name: 'Java Spring', value: 20,
    icon: 'img/sts.png',
    desc: `
      The Spring Framework is an application framework and inversion of control container for the Java platform. The framework's core features can be used by any Java application, but there are extensions for building web applications on top of the Java EE platform.
    `
  },
  {
    cat: 'Runtimes & Frameworks', name: 'NodeJS', value: 50,
    icon: 'img/nodejs.svg',
    desc: `
      Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.
    `
  },
  {
    cat: 'Runtimes & Frameworks', name: 'Flask', value: 30,
    icon: 'img/flask.png',
    desc: `
      Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries. It has no database abstraction layer, form validation, or any other components where pre-existing third-party libraries provide common functions.
    `
  },
  {
    cat: 'Runtimes & Frameworks', name: 'PHP', value: 40,
    icon: 'img/php.png',
    desc: `
      PHP: Hypertext Preprocessor is a server-side scripting language designed for Web development.
    `
  },
  {
    cat: 'Runtimes & Frameworks', name: 'ASP.NET', value: 50,
    icon: 'img/asp.png',
    desc: `
      ASP.NET is an open-source server-side web application framework designed for web development to produce dynamic web pages. It was developed by Microsoft to allow programmers to build dynamic web sites, web applications and web services.
    `
  },
  /*************
  *
  * CI/CD
  *
  **************/
  {
    cat: 'CI/CD', name: 'Jenkins', value: 50,
    icon: 'img/jenkins.png',
    desc: `
      Jenkins is an open source automation server written in Java. Jenkins helps to automate the non-human part of the software development process, with continuous integration and facilitating technical aspects of continuous delivery.
    `
  },
  {
    cat: 'CI/CD', name: 'Travis CI', value: 20,
    icon: 'img/travisci.png',
    desc: `
      Travis CI is a hosted, distributed continuous integration service used to build and test software projects hosted at GitHub. Open source projects may be tested at no charge via travis-ci.org.
    `
  },
  {
    cat: 'CI/CD', name: 'GulpJS', value: 20,
    icon: 'img/gulp.png',
    desc: `
      Gulp is an open-source JavaScript toolkit by Fractal Innovations and the open source community at GitHub, used as a streaming build system in front-end web development.
    `
  },
  /*************
  *
  * Version Control
  *
  **************/
  {
    cat: 'Version Control', name: 'Git', value: 30,
    icon: 'img/git.png',
    desc: `
      Git is a version-control system for tracking changes in computer files and coordinating work on those files among multiple people.
    `
  },
  {
    cat: 'Version Control', name: 'Subversion', value: 20,
    icon: 'img/subversion.png',
    desc: `
      Apache Subversion is a software versioning and revision control system distributed as open source under the Apache License.
    `
  },
  {
    cat: 'Version Control', name: 'Maven', value: 10,
    icon: 'img/maven.png',
    desc: `
      Maven is a build automation tool used primarily for Java projects. Maven addresses two aspects of building software: first, it describes how software is built, and second, it describes its dependencies.
    `
  },
  {
    cat: 'Version Control', name: 'PIP', value: 10,
    icon: 'img/pip.png',
    desc: `
      The PyPA recommended tool for installing Python packages.
    `
  },
  {
    cat: 'Code Analysis', name: 'Jasmine', value: 30,
    icon: 'img/jasmine.png',
    desc: `
      Jasmine is a behavior-driven development framework for Code Analysis JavaScript code. It does not depend on any other JavaScript frameworks. It does not require a DOM. And it has a clean, obvious syntax so that you can easily write tests.
    `
  },
  /*************
  *
  * Code Analysis
  *
  **************/
  {
    cat: 'Code Analysis', name: 'Karma', value: 30,
    icon: 'img/karma.svg',
    desc: `
      A simple tool that allows you to execute JavaScript code in multiple real browsers. The main purpose of Karma is to make your test-driven development easy, fast, and fun.
    `
  },
  {
    cat: 'Code Analysis', name: 'JUnit', value: 30,
    icon: 'img/junit.png',
    desc: `
      JUnit is a simple framework to write repeatable tests. It is an instance of the xUnit architecture for unit Code Analysis frameworks.
    `
  },
  {
    cat: 'Code Analysis', name: 'Tox', value: 10,
    icon: 'img/tox.png',
    desc: `
      Tox aims to automate and standardize Code Analysis in Python. It is part of a larger vision of easing the packaging, Code Analysis and release process of Python software.
    `
  },
  {
    cat: 'Code Analysis', name: 'Fortify', value: 10,
    icon: 'img/fortify.png',
    desc: `
      Micro Focus Fortify Static Code Analyzer reduces software risk by identifying security vulnerabilities that pose the biggest threats to your organization. It pinpoints the root cause of the vulnerability, correlates and prioritizes results, and provides best practices so developers can develop code more securely.
    `
  },
  {
    cat: 'Code Analysis', name: 'SonarQube', value: 10,
    icon: 'img/sonarqube.svg',
    desc: `
      SonarQube is an open-source platform developed by SonarSource for continuous inspection of code quality to perform automatic reviews with static analysis of code to detect bugs, code smells, and security vulnerabilities on 20+ programming languages.
    `
  },
  {
    cat: 'Code Analysis', name: 'Grunt', value: 20,
    icon: 'img/grunt.png',
    desc: `
      Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, compilation, unit testing, and linting. It uses a command-line interface to run custom tasks defined in a file.			`
  },
  {
    cat: 'Code Analysis', name: 'ESLint', value: 20,
    icon: 'img/eslint.svg',
    desc: `
      A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript. Maintain your code quality with ease.
    `
  },
  /*************
  *
  * Virtualization
  *
  **************/
  {
    cat: 'virtualization', name: 'Docker', value: 30,
    icon: 'img/docker.svg',
    desc: `
      Docker is a computer program that performs operating-system-level virtualization, also known as "containerization".
    `
  },
  {
    cat: 'virtualization', name: 'K8s', value: 30,
    icon: 'img/k8s.png',
    desc: `
      Kubernetes is an open-source container-orchestration system for automating deployment, scaling and management of containerized applications. It was originally designed by Google and is now maintained by the Cloud Native Computing Foundation.
    `
  },
  {
    cat: 'virtualization', name: 'Helm', value: 10,
    icon: 'img/helm.svg',
    desc: `
      Helm helps you manage Kubernetes applications — Helm Charts helps you define, install, and upgrade even the most complex Kubernetes application.
    `
  },
  {
    cat: 'virtualization', name: 'KVM', value: 10,
    icon: 'img/kvm.png',
    desc: `
      Kernel-based Virtual Machine is a virtualization module in the Linux kernel that allows the kernel to function as a hypervisor.
    `
  },
  {
    cat: 'virtualization', name: 'ECOMP / ONAP', value: 10,
    icon: 'img/onap.png',
    desc: `
      ONAP - the Open Networking Automation Platform. On February 23, 2017, ONAP was announced as a result of a merger of the OpenECOMP and Open-Orchestrator projects. ONAP provides a platform for real-time, policy-driven orchestration and automation of physical and virtual network functions.
    `
  },
  /*************
  *
  * OpenStack Projects
  *
  **************/
  {
    cat: 'OpenStack', name: 'Keystone', value: 10,
    icon: 'img/keystone.png',
    desc: `
      Keystone is an OpenStack service that provides API client authentication, service discovery, and distributed multi-tenant authorization by implementing OpenStack’s Identity API.
    `
  },
  {
    cat: 'OpenStack', name: 'OpenStack-Helm', value: 10,
    icon: 'img/oshelm.png',
    desc: `
      The goal of OpenStack-Helm is to enable deployment, maintenance, and upgrading of loosely coupled OpenStack services and their dependencies individually or as part of complex environments.
    `
  },
  /*************
  *
  * Servers
  *
  **************/
  {
    cat: 'Servers', name: 'OpenStack', value: 10,
    icon: 'img/openstack.png',
    desc: `
      OpenStack is a free and open-source software platform for cloud computing, mostly deployed as infrastructure-as-a-service, whereby virtual servers and other resources are made available to customers.
    `
  },
  {
    cat: 'Servers', name: 'SharePoint', value: 50,
    icon: 'img/sharepoint.png',
    desc: `
      SharePoint is a web-based collaborative platform that integrates with Microsoft Office. Launched in 2001, SharePoint is primarily sold as a document management and storage system, but the product is highly configurable and usage varies substantially among organizations.
    `
  },
  {
    cat: 'Servers', name: 'IIS', value: 30,
    icon: 'img/iis.png',
    desc: `
      Internet Information Services is an extensible web server created by Microsoft for use with the Windows NT family. IIS supports HTTP, HTTP/2, HTTPS, FTP, FTPS, SMTP and NNTP.
    `
  },
  {
    cat: 'Servers', name: 'Amazon Web Services', value: 20,
    icon: 'img/aws.png',
    desc: `
      Amazon Web Services is a subsidiary of Amazon that provides on-demand cloud computing platforms to individuals, companies and governments, on a paid subscription basis. The technology allows subscribers to have at their disposal a virtual cluster of computers, available all the time, through the Internet.
    `
  },
  {
    cat: 'Servers', name: 'Apache', value: 10,
    icon: 'img/apache.png',
    desc: `
      The Apache HTTP Server, colloquially called Apache, is free and open-source cross-platform web server software, released under the terms of Apache License 2.0. Apache is developed and maintained by an open community of developers under the auspices of the Apache Software Foundation.
    `
  },
  {
    cat: 'Servers', name: 'Nginx', value: 10,
    icon: 'img/nginx.png',
    desc: `
      Nginx is a web server which can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache. The software was created by Igor Sysoev and first publicly released in 2004.
    `
  },
  /*************
  *
  * Editors
  *
  **************/
  {
    cat: 'Editors', name: 'Atom', value: 5,
    icon: 'img/atom.png',
    desc: `
      Atom is a free and open-source text and source code editor for macOS, Linux, and Microsoft Windows with support for plug-ins written in Node.js, and embedded Git Control, developed by GitHub.
    `
  },
  {
    cat: 'Editors', name: 'Google Chrome Devtools', value: 15,
    icon: 'img/chrome-devtools.svg',
    desc: `
      Chrome DevTools is a set of web developer tools built directly into the Google Chrome browser. DevTools can help you edit pages on-the-fly and diagnose problems quickly, which ultimately helps you build better websites, faster.
    `
  },
  {
    cat: 'Editors', name: 'Sublime Text', value: 5,
    icon: 'img/sublimetext.png',
    desc: `
      Sublime Text is a proprietary cross-platform source code editor with a Python application programming interface.
    `
  },
  {
    cat: 'Editors', name: 'Notepad++', value: 5,
    icon: 'img/nppp.png',
    desc: `
      Notepad++ is a text editor and source code editor for use with Microsoft Windows. It supports tabbed editing, which allows working with multiple open files in a single window.
    `
  },
  {
    cat: 'Editors', name: 'Visual Studio Code', value: 5,
    icon: 'img/vscode.png',
    desc: `
      Visual Studio Code is a source code editor developed by Microsoft for Windows, Linux and macOS.
    `
  },
  {
    cat: 'Editors', name: 'Vim', value: 5,
    icon: 'img/vim.png',
    desc: `
      Visual Studio Code is a source code editor developed by Microsoft for Windows, Linux and macOS.
    `
  },
  {
    cat: 'Editors', name: 'Eclipse', value: 5,
    icon: 'img/eclipse.png',
    desc: `
      Eclipse is an integrated development environment (IDE) used in computer programming, and is the most widely used Java IDE.[6] It contains a base workspace and an extensible plug-in system for customizing the environment.
    `
  },
  /*************
  *
  * Lifestyles
  *
  **************/
  {
    cat: 'Lifestyles', name: 'REST', value: 40,
    icon: 'img/rest.png',
    desc: `
      Representational State Transfer (REST) is a software architectural style that defines a set of constraints to be used for creating web services.
    `
  },
  {
    cat: 'Lifestyles', name: 'SOAP', value: 40,
    icon: 'img/soap.png',
    desc: `
      SOAP (originally Simple Object Access Protocol) is a messaging protocol specification for exchanging structured information in the implementation of web services in computer networks. Its purpose is to induce extensibility, neutrality and independence.
    `
  },
  {
    cat: 'Lifestyles', name: 'SAFe', value: 20,
    icon: 'img/safe.png',
    desc: `
      The Scaled Agile Framework (abbreviated as SAFe), is a set of organization and workflow patterns intended to guide enterprises in scaling lean and agile practices.
    `
  },
  {
    cat: 'Lifestyles', name: 'Scrum', value: 20,
    icon: 'img/agile.png',
    desc: `
      Scrum is an agile framework for managing knowledge work, with an emphasis on software development. It is designed for teams of three to nine members, who break their work into actions that can be completed within timeboxed iterations, called "sprints"
    `
  },
  {
    cat: 'Lifestyles', name: 'Kanban', value: 20,
    icon: 'img/kanban.svg',
    desc: `
      Kanban is a scheduling system for lean manufacturing and just-in-time manufacturing. Taiichi Ohno, an industrial engineer at Toyota, developed kanban to improve manufacturing efficiency. Kanban is one method to achieve JIT.
    `
  }
];
