# COSC2759 Assignment 1
## Notes App - CI Pipeline
- Full Name: **Yung-En Chi**
- Student ID: **s3864916**


## 1. Analysis of the problem
### 1.1 Deliver new features with potential bug or error
##### Currently, the code is developed and tested manually by the development team, which could potentially introduce errors that were not fully tested. This has resulted in instances where publishing a buggy code has caused an increase in workload for both the support service team and development teams.

### 1.2 Mannully built and deployed
##### Currently, the build and deployment for the application is done manually from the lead developer's laptop, which is inefficient for build and deployment. By the approach, There has been an instance where, due to the leave of the lead developer, Alpine Inc missed a critical release containing a new feature for one of their largest clients.


## 2. Explain and justify the solution
### 2.1 Solution approach: CI Pipeline
##### To address the issues outlined in the problem analysis, the proposed solution is to establish a Continuous Integration (CI) pipeline. This will reduce the dependency on manual processes, introduce automated builds, and automate the testing processes. By implementing a CI pipeline, the strain on the QA team will be reduced, and any bugs or development defects will be picked up quickly and fed back to developers to be resolved before any changes are promoted to production.
### 2.2 Explain of CI Pipline process
###### Our proposed CI pipeline consists of six phases: linting, unit testing, SAST (Static Application Security Testing), integration testing, end-to-end (e2e) testing, and packaging.
(More To add)