# Contributing to the project
## Contributing via fork, using a new branch for a new feature
### Walkthrough videos:
- What is git repo and GitHub:
https://www.loom.com/share/f46ef47d441b4b81950efce1d3b118ce
- Creating fork and merge change via pull request:
https://www.loom.com/share/330b5ea266c64868b48a5983b832f384

When multiple people working on the same branch, if there is a conflict, there are a few options available to use to avoid issues when committing.
- One option is to pull the current changes at the time before committing, manually adjust and then commit
- Another option is to create a separate branch, commit to this branch and then merge. <span style="color: gray">(recommended)</span>

In the below steps, we’ll go over the branch method, specifically inside a user’s own fork.

**Process**
- Fork the master branch (This allows not changing the master branch)
- Create a branch within your fork
- Commit on this new branch within your fork
- Create a pull request to merge into the master branch of the original repo
- Keep the master branch untouched (until a reviewer approves the request and then merges with the master/main branch)

**Steps**

1. Go to Github > Fork (copy the main branch only) to your user profile
    - Note: You can only have one fork, however you can have multiple branches
2. Within your fork, create a branch (ie. feature/update-readme)
    - Note: if your branch is behind, sync it to the upstream repository
3. Next, clone this branch locally to your machine
    1. Copy the URL for the new feature branch in your fork
    2. Git Bash > Go to the parent folder
    ```
    cd ..
    ```
    3. Clone this branch locally
    ```
    git clone URL
    ```
    4. If the clone fails:
        - Delete existing branches if necessary (see below examples)
        ```
        rm -rf sydney-coding-dotnet/
        ```
        ```
        rm -rf sydney-coding-js/
        ```
        - The "rm" command stands for "remove", and the "-rf" flags are options that make the command recursive and forceful.
    5. Try the local clone again (replace URL with your URL copied):
    ```
    git clone URL
    ```
4. Now navigate to the newly created local branch folder
```
cd sydney-coding-js/
```
- Type the below to display all the existing branches
```
git branch -a
```
- The above command displays a list of all branches in the repository, including remote-tracking branches
- The -a flag stands for "all", including remote branches
- Note, this should include the branch that was created in GitHub (ie. feature/update-readme)
5. Now we’ll switch to the branch that we created for the new feature (ie. feature/update-readme)
```
git switch feature/update-readme
```
This should advise that the branch has been switched in the output.
6. Now we’ll check the log via:
```
git log
```
- Additional note, you’ll see HEAD -> in the output.

    In Git, HEAD is a special pointer that points to the currently checked-out branch or commit. It represents the latest commit in the current branch that you are working on.
- Note: If you cannot type anything, you may need to exit the git log by pressing “q” (vim command to quit this separate editor and go back to Git Bash)
- You can now open VS Code from this folder in Git Bash via:
```
code .
```
7. Search for/open the file that you want to make changes to (ie. README.md)
- Make the changes needed
8. Now that you have changes, we want to commit this to the new branch in your fork.
- In Git Bash (same folder as before), run the following command (status with “short” flag)
```
git status -s
```
Which should result in the following output (or whichever files have been affected/changed) (notice <span style="color: #FF0000">M</span> is in <span style="color: #FF0000">red</span>):
```
M readme.md
```
*Above is modified but not yet staged*

- Now we want to add this modified file to the staging area
```
git add README.md
```
*Additionally, instead, you could write `git add .` which would add all*
- Now we’ll check the status to confirm the file has been added
```
git status -s
```
This should result in the following output (notice <span style="color: green">M</span> is now in <span style="color: green">green</span>)
```
M readme.md
```
- Now that our changes are in the staging area, we are ready to commit:
```
git commit -m 'update README'
```
- The above commits the changes to the fork locally, however we want to push it to the forked repository in GitHub (as this is the one that we cloned). We can do this by the below:
```
git push
```
9. Now that we have committed and pushed our commit to the new feature branch in our fork, we want to now create a **'Pull Request'** to push it to the main branch of the original repository.

Information about a Pull request (source: Chat GPT)

>A pull request is a feature of Git-based version control systems, such as GitHub, GitLab, and Bitbucket, that allows developers to propose changes to a project's codebase.
>
>When a developer creates a pull request, they are essentially asking the project maintainer(s) to review the proposed changes and merge them into the main branch of the codebase. Pull requests provide a way for developers to collaborate on code changes and ensure that the changes are reviewed and approved before being merged into the main codebase.
>
>Here's how the pull request process typically works:
> 1. A developer creates a new branch in their local repository to work on a new feature or fix a bug.
> 2. The developer makes changes to the code in the branch and pushes the changes to a remote repository, such as GitHub.
> 3. The developer creates a pull request, which includes a description of the changes, and submits it to the repository maintainer(s).
> 4. The maintainer(s) review the pull request and provide feedback or make additional changes.
> 5. Once the pull request has been approved, the changes are merged into the main codebase.
>
>Pull requests provide a way for developers to collaborate on code changes and ensure that the changes are reviewed and approved before being merged into the main codebase. They can also help ensure that changes are properly tested and documented before being merged.
10. In Github, in your fork - in the new feature branch, click 'Compare & pull request' (green button that should appear at the top of the page once commit has been pushed).
    1. This should then take you to a new Pull Request page.
- *Note in new pull request, we are going from the forked head repository (feature/update-readme) **to** base repository (main)*
    
    2. You can then choose a reviewer (ie. Malcolm as he is the owner of the original repo) (if your user has access to add this).

    3. Then you you can click ‘Create pull request’

    4. Once this is done and the pull request is created, you can see the confirmation of this in the request.
    
    5. Additionally, now if you are the reviewer, you can see the files changed tab, and choose to action accordingly

    6. Once approved, (as the reviewer) you can then 'Squash and Merge'

Information about Squash and Merge (Source: Chat GPT)

>Squash and merge is a feature commonly used in version control systems, particularly in Git, to combine and simplify the commit history of a branch before merging it into another branch.
>
>When you squash and merge, all the individual commits on the source branch are combined into a single commit before being merged into the target branch. This creates a cleaner and more organized commit history, with fewer, more meaningful commits.
>
>Squashing can be done by selecting the "Squash and Merge" option in Git, which will open a commit message editor where you can provide a new commit message for the squashed commit. This message will be used to describe the entire set of changes made in the squashed commits.
>
>It's worth noting that squash and merge is a **destructive operation**, as it discards the individual commit history of the source branch. Therefore, it's important to use it carefully and only when appropriate.

   7. Now that it is merged, you can choose to keep or delete the branch
    
   8. In this scenario, we can delete to keep files clean






