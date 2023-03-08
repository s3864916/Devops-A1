# Notes App with MongoDB, Express.js and Node.js

The Notes app uses the following technologies and javascript libraries:
```bash
$ node --version
v17.6.0

$ npm list
notes
├── dotenv@16.0.0
├── ejs@3.1.6
├── eslint-config-standard@16.0.3
├── eslint-plugin-import@2.25.4
├── eslint-plugin-node@11.1.0
├── eslint-plugin-promise@6.0.0
├── eslint@8.11.0
├── expect.js@0.3.1
├── express@4.17.3
├── jest-junit@13.0.0
├── jest@27.5.1
├── method-override@3.0.0
├── mockingoose@2.15.2
├── mongoose@6.2.6
└── supertest@6.2.2
```

## What are the features?
The Notes app lets you add new notes and delete notes. The data is stored in MongoDB (via mongoose)

# How to use

**NOTE: All commands listed here are issued from the root directory.**

To run this application locally you need to have an instance of MongoDB running.
A `docker-compose.yml` file has been provided that will run an instance of MongoDB in docker container.
To start the MongoDB container, from the root directory run the following command:

```
docker-compose up -d
```

An `.env` file has been provided, that lets the Notes app know where to access the database.

To install the dependencies:
```
npm install --prefix src
```

To start the application:
```
npm run start --prefix src
```

The application can be accessed in a browser at: `localhost:3000`

## Testing

**NOTE: Use a comparison tool (like Beyond Compare) to ensure you have the latest version of this repo https://github.com/ashley-mallia/devops-training-assignment-1**

Four testing routines have been included as part of this application:
- Static Code Analysis / Linting (uses `eslint`)
- Unit Testing Models (uses `jest`)
- Integration Testing (uses `jest`)
- E2E (End to End) Testing (uses `playwright`)

### Static Code Analysis / Linting
Static Code Analysis and Linting is run across the code base.

```
npm run test-lint --prefix src
```

### Unit Testing

Unit Tests are run on the models for each object stored in MongoDB.
This validates the models and ensures that required data is entered.
Run unit testing with the following command:

```
npm run test-unit --prefix src
```

### Integration Testing

*Note: MongoDB needs to be running for testing to work*

Integration testing is included to ensure the application can talk to the MongoDB Backend:
Run integration testing with the following command:

```
npm run test-integration --prefix src
```

### E2E Testing

E2E Testing is included to ensure that the website operates as it should from the users perspective.
We use a tool called `playwright`, which loads the website in 3 different browsers and it programmatically clicks on the user interface to make sure the website does what is expected.

Refer to https://playwright.dev/docs/ci for the GitHub Actions script you will need.

---

###### This project is licensed under the MIT Open Source License
