##Installing git on machine and install git grpah plugin on vs code

1. Git graph(UI) to make to easy understand what you are doing on your project
 eassy available on vs code extension

##Cloning a repository vai ssh and HTTP

1. it is point to the existing repo and make a clone of that repo where you want
2. it will copy the history of that repo incd .Git
3. we can clone vai https and also ssh key
4. command is for ssh key(if you dont have then you have to generate it)instrcu available in google
5. cmd -> git clone <ssh key url>

##Git Branch And Checkout

1.Git Branch represent the indp line of development (it will create a seperate path for any feature and devp)
2.It will create a new branch,delete,rename,list
3.If we want to switch to another branch the cmd is for git checkout <branch_name>
4.To Create Branch git checkout -b <branch_name>
5.To Delete branch git checkout -d <branch_name>imp (you will delete branch from another)

##Git Commit: Steps before commit (staging), discarding changes. Stash
1.Always before committing you have to stage all file and then make a commit then push that branch
2.if you think you had wrong in some file commit it you can revert back and remove some specifit commit by git revert <commit_id>
3.Not under standing discarding.

##changes, applying stash, perform initial git commit Initial Git Commit.
1.stash will you store any secure data to some place that will be not accsible from other user
cmd git stash -u (store current untracked files)
cmd git stash pop will come back to use this file and push to origin

##Git fetch and Git pull
1.Git pull > To get the latest version of a repository run git pull. This pulls the changes from the remote repository to the local computer.
cmd for pull git pull
2.git fetch > The git fetch command downloads commits, files, and refs from a remote repository into your local repo


##Git merging vs git rebase (fast forward merge)
1.Git merge> independent lines of development created by git branch and integrate them into a single branch.
2.Git rebase>Git rebase moves a feature branch into a master.(best way is rebase)
3.Sqash commit will add all commit together into one commit


##Process for creating Pull requests for review
Pull requests are proposed changes to a repository submitted by a user and accepted or rejected by a repository's collaborators
1. Once you push the changes to your repo, the Compare & pull request button will appear in GitHub.
2.Open a pull request by clicking the Create pull request button. This allows the repo's maintainers to review your contribution. 
    ask for some changes.