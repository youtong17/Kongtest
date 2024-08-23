# Kongtest

## Table of contents
- Test Purpose
- Installation
- Test structure
- Test explaination


## Test Purpose
This e2e test is mainly about creating a gateway service and route then deleing them on an empty default workspace.

## Installation
1. go to github https://github.com/youtong17/Kongtest and download Kongtest to local laptop.
2. upload docker-compose.yml to Docker. open terminal in docker: cd local path, docker-compose up -d
3. go to http://localhost:8002/workspaces to see if the docker installation is working.
4. open code in vscode
5. install Node.js
6. install cypress in vscode. npm install cypress --save-dev
7. install Cucumber Preprocessor. npm install --save-dev @badeball/cypress-cucumber-preprocessor
8. run cypress in terminal. npx cypress open
9. Choose Chrome browser and click services.feature
10. run docker-compose down to shut down docker services

## Test structure

cypress
├── e2e
│   ├── features
│   │   └── services.feature
│   │   └── services.js
│   ├── pages
│   │   └── GatewayServicesPage.js
│   │   └── KongManagerPage.js
│   │   └── RoutersPage.js
│       
└── support
    └── commands.js


## Test explaination
This test is only a basic regression test for creating and deleting services on an empty default working. So, if the default workspace with some excisting services e.g. gateway, router, the whole e2e test will fail. I have thought about creating and deleting services on excisting ones, but it seems to be out of this assignment scope and time frame. 

The whole test process is creating a gateway servive, creating a route with the new creating gateway, deleting this route and then deleting this gateway.

Also, the whole test uses POM and cucumber, we can see each test step explaination in cypress. I added some validations about the error message with wrong url or route and deleting message.