# React/Redux/React Router Simple Blog App
This was a simple React/Redux/ReactRouter blog project based off Stephen Griders Udemy course on React/Redux. It uses Stephens API with a unique key added to the
end of the url(See http://reduxblog.herokuapp.com/). I added a few things to it as it's my first attempt at using Redux with React. 
If you're interested in more, see the links below to get started. 

If you're interested in learning, check out [Stephen Griders course: Modern React with Redux](https://www.udemy.com/react-redux/).
You can clone the starter repo, which is based off this project, from [Stephen Grider's GitHub page](https://github.com/StephenGrider/ReduxSimpleStarter).

## Instructions

### First
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/bsartain/ReactReduxBlogApp.git
> cd ReactReduxBlogApp
> npm install
> npm start
> Navigate to http://localhost:8080/
```

### Second
You'll have to add a unique key. The key can be whatever you want just as long as its unique. The API to will not work properly without it or you may see posts from someone else. Navigate to src > actions > index on line 10
e.g. const API_KEY = '?key=MyKey'
