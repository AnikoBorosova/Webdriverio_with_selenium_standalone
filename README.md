## Automated UI-tests with WebdriverIO - wdio v7 + wdio-docker-service

Website being tested: https://www.saucedemo.com/
Docker image being used: ```selenium/standalone-edge:96.0-20211217```
Browser: ```Microsoft Edge v96```

### Run the tests locally

Location of the web tests: ```./tests/specs/```

- clone the repository
- do ```npm install```
- start the tests with the command: ```npm run testLocal``` to run the locally

### Test scenarios 

Find the scenarios in ```./test/specs/```

1. Login process - positive scenario
- Navigate to main page
- Log in with valid user credentials and validate that the user is getting into their account

2. Login process - negative scenario - unregistered/locked out user
- Navigate to main page
- Try to log in with locked out user credentials and validate that the user is getting an error message

3. Login process - negative scenario - glitching user
- Navigate to main page
- Log in with valid user credentials and validate that the inventory items have incorrect images

### wdio-docker-service

Using wdio with docker locally:

1. Set up docker on your computer
https://www.docker.com/get-started | https://docs.docker.com/engine/install/ubuntu/

2. Search for available docker image tags
https://hub.docker.com/r/selenium/

Older docker images may use older browser versions, therefore make it possible to run your tests in older browser versions

3. Pull the docker image that you want to use
E.g.: pull the ```standalone-edge``` docker image with the tag ```96.0-20211217``` with the command:

```docker pull selenium/standalone-edge:96.0-20211217```

4. Adjust the docker image in ```wdio-shared.conf.js``` based on your needs

dockerOptions: {
	image: 'selenium/standalone-edge:96.0-20211217',
	healthCheck: 'http://localhost:4444',
	options: {
		p: ['4444:4444'],
		shmSize: '2g'
	}
}
5. Run your tests
No need to start selenium-standalone with the command 'selenium-standalone start' nor to run the docker image with the command 'docker run xyz'. Simply use the command ```npm run testLocal```.