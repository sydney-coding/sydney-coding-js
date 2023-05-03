# sydney-coding-js

## Installing the environment

### 1. Gitbash > Check **node** version (requires 16+)

```
node -v
```
- From the above > if you get the result "unknown command node" or something similar, then they need to install node.js. There are two options:
  1.  Recommended: install **nvm** (Windows: https://github.com/coreybutler/nvm-windows), (Linux/Mac: https://github.com/nvm-sh/nvm). **nvm** allows you to easily switch between nodejs versions, but it may not be that beginner friendly as there are two steps in the beginning: download **nvm** and use **nvm** to install specific nodejs version.
  2. Go to official website: https://nodejs.org/en/download. This is less intimidating in the beginning but downloading older versions like 16 takes few more clicks. 
  
### 2.  Next, install **pnpm** (install instead of npm)
- **pnpm** is much faster than **npm** - shared libraries rather than libraries duplicated per project. However, downside is that it cannot be converted to **npm** (as this is the default on most projects)
- To do this, Gitbash > Enable corepack:
```
enable corepack
```
- If this doesn’t work > A script can be run instead (however this is less ideal as script can potentially harm your computer). You can also refer to the refer to the pnpm docs/source of truth: https://pnpm.io/installation

- **Script** if **enable corepack** doesn’t work:
  - Powershell > Script
  ```
  iwr https://get.pnpm.io/install.ps1 -useb | iex
  ```

### 3. Check the version of **pnpm**
```
pnpm -v
```
### 4. Connect to existing repo in Github
1. In Github > Sign In
2. Go to sydney-coding
3. Go to the sydney-coding-js repo
4. In the mid-top left, choose the **main** branch
5. In the top right, choose **Fork**
6. In your fork, create a branch by clicking the **main** button in the top left and type **setup**. When you press enter, this will create a **setup** branch.
7. Now on the top right, click on the **Code** dropdown button and copy the HTTPS URL
8. In Gitbash > type the below (this would be the HTTPS URL that you’ve just copied) - replace *username* with your *Github Username*
```
git clone https://github.com/username/sydney-coding-js.git
```
9. This will clone the repo
10. Now navigate to the containing folder via:
```
cd sydney-coding-js
```
11. In this folder in Gitbash, type the below to list out all the branches:
```
git branch
```
12. Then, still in the same folder, type the below to list out all the branches *in the remote repository*:
```
git branch -a
```
13. Now type the below to switch to a different existing branch **setup**
```
git switch setup
```
14. Now you can open VS Code, shortcut to open from here (from the current folder) is:
```
code .
```
15. This should now open VS Code in the current folder

### 5. Pnpm has a "Workspace" feature that allows for different projects in the solution (allows multiple startup projects)
* Reference: https://pnpm.io/pnpm-workspace_yaml
1. Create a file in the root folder called **pnpm-workspace.yaml**
2. Paste the below as a template:
```
packages:
  # all packages in direct subdirs of packages/
  - 'packages/*'
  # all packages in subdirs of components/
  - 'components/**'
  # exclude packages that are inside test directories
  - '!**/test/**'
  ```
  3. Adjust this template depending on your needs
  ```
  packages:
  # all packages in direct subdirs of packages/
  - 'apps/*'
  ```
  ### 6. This should now open VS Code with apps folder
  - Create a new folder inside called **website** inside the apps folder via clicking new folder and typing:
  ```
  apps\website
  ```
  ### 7. Create a new folder in the website directory called “src” and within this a subfolder via:
  ```
  src\pages
  ```
  ### 8. Create a file inside the pages folder called **index.js**
  ```
  index.js
  ```
  - Insert the following inside index.js
  ```
  export default function Homepage() {
    return <div><h1>Sydney Coding Meetup</h1></div>
}
```
### 9. Create a new file in the root directory called **package.json** and paste the below inside:
```
{
    "name": "website",
    "version": "0.0.1",
    "dependencies": {
        "next": "^13.3.0",
        "react": "^18.2.0",
        "react-dom": "^18.2.0"
    },
    "scripts": {
        "dev": "next dev"
    }
}
```
### 10. Install **pnpm** in this folder
- Use the terminal in VS Code (+ icon near output, choose Gitbash)
- Ensure you are in the parent folder and type:
```
pnpm install
```
### 11. Adding Next.js
- Gitbash > cd sydney-coding-js (same folder)
```
pnpm --filter=website add next
```
## 12. Add React and React Dom
- **Note:** Can use the up arrow to duplicate the previous command
- Gitbash > `cd sydney-coding-js` (same folder)
```
pnpm --filter=website add react react-dom
```
### 13. Add a file in the root directory called **.gitignore** and paste the below inside:
```
node_modules/
.next/
```
### 14. Run Gitbash directly in VS Code
- In VS Code > Output area, there is a **+** icon with a dropdown arrow next to it. From the dropdown arrow choose **Gitbash**. This now allows you to run Gitbash directly in VS Code.
Inside here, you can type (this method lets you run multiple startup projects):
```
pnpm --filter=website run dev
```
- Alternatively, you can navigate to the correct path (ie. `cd sydney-coding-js/apps/website`) and then:
```
pnpm run dev
```
- You should now be able to see the project running in your browser.