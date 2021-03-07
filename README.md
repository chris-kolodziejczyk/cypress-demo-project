# cypress-demo-project

### Project description

Demo project containing an exemplary implementation of good practices and patterns, incl. Page Object Pattern.
The project contains an example of the implementation of your own configuration overwriting the default options of the tool with the given parameters.
The configuration has implemented functions that relate directly to the startup process and the Cypress tool process.Thus, it injects its own dependencies and creates, for example, its own launch commands invoked from the terminal level including:

- options that run the designated application environment or the selected mobile device in the selected browser with separate runtime options for phone and tablet

# Project installation

- We download or clone the project to the selected directory
  \*We open the project in the selected development environment or open a terminal window in the project directory

  - Run the installation script in the terminal window: **npm install**

    - The script will install all necessary external components inside the project in the **node_modules** directory. **Tools and libraries such as:**

      - cypress
      - @testing-library/cypress
      - cypress-failed-log
      - mocha
      - mochawesome
      - mochawesome-report-generator
      - eslint
      - eslint-plugin-cypress
      - path

# Running tests

- In order to run tests, again using the terminal from the main project directory we run the selected script from the **package.json** file:

  - npm run web-chrome **// The tests will be run in the chrome browser in full desktop resolution**
  - npm run chrome-galaxys5 **// The tests will be run in the chrome browser in galaxy s5 device**
  - npm run chrome-ipad **// The tests will be run in the chrome browser in ipad device**
  - npm run web-firefox **// The tests will be run in the firefox browser in full desktop resolution**
  - npm run firefox-galaxys5 **// The tests will be run in the firefox browser in galaxy s5 device**
  - npm run firefox-ipad **// The tests will be run in the firefox browser in ipad device**
  - npm run web-edge **// The tests will be run in the edge browser in full desktop resolution**
  - npm run edge-galaxys5 **// The tests will be run in the edge browser in galaxy s5 device**
  - npm run edge-ipad **// The tests will be run in the edge browser in ipad device**

        **The tests will be run successively**

# Launching the Cypress tool working window

In order to run tool window, again using the terminal from the main project directory we run the selected script: **node demo-run.js --uat -o**
