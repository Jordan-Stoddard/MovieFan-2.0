# MovieFan - Personal Project - Built by Jordan Stoddard

<div align="center"> ## Explore. Discover. Remember. </div>

<div align="center"><img src="https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg" /></div>




# Overview 

MovieFan allows you to browse movies from top rated to upcoming, from old favorites to the newest releases.

<strong>Front End Deployment: https://moviefanapp.online <br/>
  Movie API: https://www.themoviedb.org/

</strong>

## Key Features

- Immediately see what movies or TV shows are trending nation wide.
- View popular, top rated, upcoming, or now playing movies and TV shows..
- Select an individual movie or TV show to see additional details such as:
  - Rating
  - Movie website
  - Movie tagline
  - Cast
  - Official trailer
  - Popular reviews
- Select a cast member of a movie or TV show to see additional details such as:
  - Popularity
  - Birthplace, gender, birth date
  - Biography
  - Popular roles
 - Search functionality to type in an individual movie or TV show that you want to look up.
 
 
 # Tech

## Frontend built using:

### React

With its vast eco-system and modular nature React is a great choice for developing the front-end of our project.

### React Hooks
React Hooks simplify working with React due to use near exclusive use of functional components versus class components. Also, because logic can be shared, using React hooks results in smaller package sizes, which maximizes efficiency. It also allows us to abstract out a lot of local state logic keeping our component files smaller, easier to debug and more scalable.

### node-sass

SCSS AKA SASS is a styling compiler, however, using node-sass allows us to inherit all of the functionality of the sass styling compiler without having to run a compiler on our local machine during development.

We chose SASS as a methodology for our styling in order to be able to keep styling organized in various partial files, the ability to use mixins, variables and to keep our React component file syntax easier for humans to read.

### Zeit

Our front end was deployed using Zeit. Zeit is a serverless cloud deployment experience which makes Continuous Deployment a breeze by connecting to our github repository. Some of the great features we took advantage of: Zeit only re-builds the parts of your application that have changed. No matter how large your repository. Zeit makes our code blazing fast: cold, hot and in-between. Our deployment is decomposed into small units of execution, all built, deployed and executed independently. Instead of deploying a large server, we deploy lots of small functions that look and act as one.

Minimize friction. Maximize security. Speed up our cloud.

Each incoming request yields a unique thread of computation in the cloud. When our deployment is not actively receiving traffic, our server stays quiet. Instead of worrying about servers uptime, tedious CPU and memory allocations and scaling algorithms, we just think about our code. Scaling doesn’t need to be complicated or expensive.

### Various Third Party Packages

For a full list of all the third-party npm packages we used in the build of the app please visit [this file](https://github.com/Jordan-Stoddard/MovieFan-2.0/blob/master/package.json)

## Backend built using: 

Backend was sourced fully by The Movie Database.

# Security

 ### For Frontend:
You will need to create an environment variable to make Unsplash API calls. 
<br />
Steps to create secret and env variable:

- add now dependency, in CLI: yarn add now

- choose the now user or team that secrets will be created under, in CLI: now switch

- create now secret, in CLI: now secret add my-secret-name my-secret-value
**run "now secrets ls" in CLI to list all secrets 

- create env variable and assign secret value to env variable, in now.json:
```
"build":{
      "env":{
        "API_KEY": "@my-secret-name"
      }
    },
```
- access env variable: `process.env.API_KEY`

# Contributing
Contributions are welcome. If you choose to contribute to this project, you agree to abide by our [Code of Conduct](https://github.com/labs12-real-estate/labs12-real-estate-FE/blob/master/AppNotes/CODE_OF_CONDUCT.md). Please create an Issue if there is a bug or feature request you are interested in adding to the project. If you would like to implement the pull request for this Issue yourself, please request permission in the Issue commentary and affirm from a Maintainer that you can proceed. Once confirmed, assign yourself the Issue in Github.

Pull requests are made via the git feature branch workflow described [here](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow). Once you are assigned the Issue, you can clone the repo locally, and begin working on the feature branch.

As you implement tests, please ensure you are running tests in both the server and client as described in the testing section. If you are implementing new features, please introduce well thought-out unit/integration tests as needed to ensure the feature works properly. Please also ensure you are running eslint using [our config](https://github.com/labs12-real-estate/labs12-real-estate-FE/blob/master/.eslintrc.json), and eliminating any linting errors before attempting to create a pull request. Please also run Prettier using [our config](https://github.com/labs12-real-estate/labs12-real-estate-FE/blob/master/.prettierrc.json), to ensure you are meeting the formatting standards for this project.

Once your feature has been finished, please use `git push -u origin *feature-name*` to create the branch on the remote repository, then create the pull request in github. As part of the pull request, please fill out the [pull request template](https://github.com/labs12-real-estate/labs12-real-estate-FE/blob/master/AppNotes/pull_request_template.md). Once completed, you may create your pull request. A review from a contributor and ultimate merge approval by an admin will be required. If there are requests raised in the review, please address them.

Thanks for your interest in MyHouse; we look forward to your feedback & participation! <br/>
—Jordan Stoddard

