# Professional Git

Main branch has production code
Check off a feature from main onto a feature branch

### If we are committed to Test Driven Development
At some point, devs do a pull request from feature branch to main branch 
Other members of team review pull request
If good, approve PR into main
Kicks off trigger, can be done with GitHub Actions to: Build, Test, Deploy.
Test stage has stringently written test classes to make sure expected behaviour in the new feature is as we want it, and old behaviours that have passed tests
continue to behave as expected and the new branch hasn't unexpectedly disrupted something.

### If we are not so committed
Set up three major branches: Dev, Staging, Main

At some point, devs do a pull request from their feature branch on their local computer to the dev branch
Other developers check pull request and approve it if all good
When merged, it goes to the dev branch. This triggers GitHub Actions which updates the dev environment.
The dev environment is hosted on AWS and is a fully functional environment that devs can move around and test features on. When we have a website, this will
look like the website. In the earliest days, we probably don't need this as a lot of the testing will just be console logs.
Regardless, it's low cost and can probably be done on AWS's generous free allowances for various services. It also uses fake or minimal data purely for 
testing and experimentation.

When we have a "release" i.e. something we want to put in front of users, we make a PR to the Staging branch. 
This triggers a GitHub Action pipeline which spins up a "Staging" environment with more realistic datasets. In the future this would be a good place to 
put beta testers. It's also where we run stress tests. Load tests, smoke tests.

Then we do a PR to the Main branch. Again, this triggers a GitHub Actions which updates our actual deployment with all the live data, AWS services, etc.


### Git commands

When we begin programming each new feature, we want a complete copy of the project on our local workspace. To do that, start a new project in your IDE
and run the terminal command 'git clone "github-repo.git"'

