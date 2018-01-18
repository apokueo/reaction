import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Estrum </h1>
        </header>
        <div className="App-intro">
        <br>
        </br>
          <h1>
            Setting up a global user in the command line.
          </h1>

            <p>
              git config --global user.name "(insert name)"
            </p>

            <p>
              git config --global user.email "(insert email)"
            </p>

          <h3>
            git config --global --list
          </h3>

            <p>
              (will show the set global options )
            </p>

          <h3>
            cat ~/.gitconfig
          </h3>

            <p>
              ( Will display the values in a concatenated representation )
            </p>


          <h3>
            git config global core.editor
          </h3>

            <p className = "content">
              editorExamples = [vim,atom,notepad];
            </p>
            <p className = "content">
              ~(sets the core text editor)~
            </p>

          <h3>
            git config --global help.autocorrect 1
          </h3>

            <p className = "content"> (0 = false 1 = true and incremented numbers after 1 are added 1/10th of a second) </p>


        </div>
        <br>
        </br>
        <div className = "App-gitCommands">
          <h1>
            Local Repositories
          </h1>
          <h3 className = "titles">
            git init
          </h3>
            <p className = "content">
              This command turns a directory into an empty Git repository. This is the first step in creating a repository. After running git init, adding and committing files/directories is possible.
            </p>

            <p className = "commands">
              <li>
                cd /file/path/to/code
              </li>
              <li>
                git init
              </li>
            </p>

          <h3 className = "titles">
            git add
          </h3>
            <p className = "content">
              Adds files in the to the staging area for Git. Before a file is available to commit to a repository, the file needs to be added to the Git index (staging area). There are a few different ways to use git add, by adding entire directories, specific files, or all unstaged files.
            </p>

            <p className = "commands">
              <li>
                git add (file or directory name here)
              </li>
              <li>
                git add .
                # . means all files in directory that are not staged
              </li>
            </p>

          <h3 className = "titles">
            git commit
          </h3>
            <p className = "content">
              Record the changes made to the files to a local repository. For easy reference, each commit has a unique ID.

              It’s best practice to include a message with each commit explaining the changes made in a commit. Adding a commit message helps to find a particular change or understanding the changes.

            </p>

            <p className = "commands">
              <li>
                git commit -m "Commit message in quotes here"
              </li>
            </p>


          <h3 className = "titles">
            git status
          </h3>

            <p className = "content">
              This command returns the current state of the repository.

              git status will return the current working branch. If a file is in the staging area, but not committed, it shows with git status. Or, if there are no changes it’ll return nothing to commit, working directory clean.
            </p>

            <p className = "commands">
              <li>
                git status
              </li>
            </p>

          <h3 className = "titles">
            git config
          </h3>

            <p className = "content">
              With Git, there are many configurations and settings possible. git config is how to assign these settings. Two important settings are user user.name and user.email. These values set what email address and name commits will be from on a local computer. With git config, a --global flag is used to write the settings to all repositories on a computer. Without a --global flag settings will only apply to the current repository that you are currently in.

              There are many other variables available to edit in git config. From editing color outputs to changing the behavior of git status. Learn about git config settings in the official Git documentation.
            </p>

            <p className = "commands">
              <li>
                git config (setting) (command)
              </li>
            </p>

          <h3 className = "titles">
            git branch
          </h3>

            <p className = "content">
              To determine what branch the local repository is on, add a new branch, or delete a branch.
            </p>

            <p className = "commands">
              <li>
                git branch (branch_name)
              </li>
              <li>
                git branch -a   : lists all remote and local branches
              </li>
              <li>
                git branhc -d (branch_name) : deletes
              </li>
            </p>

          <h3 className = "titles">
            git checkout
          </h3>

            <p className = "content">
              To start working in a different branch, use git checkout to switch branches.
            </p>

            <p className = "commands">
              <li>
                git checkout (branch_name)
              </li>
              <li>
                git checkout -b (new_branch)
              </li>
            </p>

          <h3 className = "titles">
            git merge
          </h3>

            <p className = "content">
              Integrate branches together. git merge combines the changes from one branch to another branch. For example, merge the changes made in a staging branch into the stable branch.
            </p>

            <p className = "commands">
              <li>
                git checkout (branch_name)
              </li>
              <li>
                git checkout -b (new_branch)
              </li>
            </p>
        </div>
    </div>
    );
  }
}

export default App;
