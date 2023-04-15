# COSC2759 Assignment 1

## Notes App - CI Pipeline

- Full Name: **Yung-En Chi**
- Student ID: **s3864916**

## 1. Analysis of the problem

### 1.1 Deliver new features with potential bug or error

Currently, the code is developed and tested manually by the development team, which could potentially introduce errors that were not fully tested. This has resulted in instances where publishing buggy code has caused an increase in workload for both the support service team and development teams.

### 1.2 Mannully built and deployed

Currently, the build and deployment for the application is done manually from the lead developer's laptop, which is inefficient for build and deployment. By this approach, there has been an instance where, due to the leave of the lead developer, Alpine Inc missed a critical release containing a new feature for one of their largest clients.

## 2. Explain and justify the solution

### 2.1 Solution approach: CI Pipeline

To address the issues outlined in the problem analysis, the proposed solution is to establish a Continuous Integration (CI) pipeline. This will reduce the dependency on manual processes, introduce automated builds, and automate the testing processes. By implementing a CI pipeline, the strain on the QA team will be reduced, and any bugs or development defects will be picked up quickly and fed back to developers to be resolved before any changes are promoted to production.

### 2.2 Explain of CI Pipline process

To run the CI Pipeline automatically on every branch, we set up the run condition:

<img width="513" alt="截圖 2023-04-15 下午4 29 10" src="https://user-images.githubusercontent.com/77286183/232190599-7397f0d3-a5aa-451c-876c-3d3c902df48a.png">

Our proposed CI pipeline consists of six phases of testing, and a deployment part: linting, unit testing, SAST (Static Application Security Testing), integration testing, end-to-end (e2e) testing, and packaging for deployment. To make sure each test happens in order, we use "needs" to chain the tests together.

<img width="599" alt="截圖 2023-04-15 下午4 31 44" src="https://user-images.githubusercontent.com/77286183/232190704-34c43acc-6592-4f81-a857-e74870259244.png">


#### Lint test / SAST (Static Application Security Testing)
By using linting test to checks the code for syntax and style errors, the pipeline ensures that the code is consistent and follows best practices. The Lint test will be perform at the very begin of the CI pipeline, which can reduce waste time for the rest of process to run if there's an issue that happens.

<img width="688" alt="截圖 2023-04-15 下午4 28 02" src="https://user-images.githubusercontent.com/77286183/232190557-c57ed8b3-3403-48e8-b908-d7b3ee13674f.png">

By using the condition "failure()", we ensure the CI pipeline will break when the test is fail.

#### Unit test
The next phase is the unit test part. In the phase, unit  tests ensure that the functionality of small, isolated parts of the code are workking as expected. Make it easier to locate the bug efficiently when adding other features that might influence previous features. In this phase, if test has not succeed, the pipeline will stop, which reduce the time wasting. The artifact of unit test result and its coverage result will be generate and show in github.

Below is the part that ensure the pipelines break and the artifact generating
<img width="641" alt="截圖 2023-04-15 下午4 33 08" src="https://user-images.githubusercontent.com/77286183/232190770-737cd73d-50a3-4a0f-9bab-1e6223a991df.png">

#### Integration testing
After the unit test, we use integration tests to ensure the codes work together correctly. This helps to test a more complet feature as it will be in a production environment. The CI pipeling will stop if the integration test fails to reduce the time waste. The artifact of integration test result and its coverage result will be generate and show in github.
To perform the integration test, we have to set up the docker backend in background:

<img width="438" alt="截圖 2023-04-15 下午4 36 34" src="https://user-images.githubusercontent.com/77286183/232191033-7888cf78-7478-423c-b8dc-43700eac532b.png">

Below is the part that ensure the pipelines break and the artifact generating

<img width="600" alt="截圖 2023-04-15 下午4 33 48" src="https://user-images.githubusercontent.com/77286183/232190805-63bedff2-43c7-451d-9ca6-4f9302081013.png">

#### End-to-end (e2e) testing
The final test before deploy packaging is the End-to-end testing. E2E test is where the entire system is tested to ensure it functions as expected from start to finish. This helps ensure that the system works as intended in a production environment in popular web bowsers as well. E2E testing ensuring that the system meets its requirements, and improving overall system reliability. The artifact of E2E test report will be generate and show in github.
To perform the e2e test, is actully more complex, we have to set up not just the docker backend, but also the frontend in background as well, so I use pm2, to manage the background running for the frontend of the application.

<img width="603" alt="截圖 2023-04-15 下午4 34 34" src="https://user-images.githubusercontent.com/77286183/232190865-4b8ca000-d29f-4c5e-8bdf-50cb94ba2235.png">

#### Packaging
The final step of the CI pipeline is packaging, this happends only when every tests are passed. By packaging up the project, we generate a deployable file as an artifact able to be view on github.
