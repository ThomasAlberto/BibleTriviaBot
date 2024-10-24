# Git important commands

Always clone or pull from dev
Always work on a new feature branch
Never use --force in any command. Team meeting if we are having version control issues.

#### Cloning from the dev branch to local env:
git clone --single-branch --branch dev https://github.com/mark-hinds/portico-sports.git
git checkout feature/new-feature

#### When ready to open a pull request on the repo
git add .
git commit -m "Some informative commit message"
git push -u origin dev
Then go to GitHub and create a pull request

#### Delete new feature branch on GitHub
Either do it on the repo manually by clicking the bin button or from CLI with:
git push origin --delete feature/new-feature
Then on your local env:
git branch -d feature/new-feature

#### Update your local dev environment:
git pull origin dev
