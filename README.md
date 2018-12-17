# friend_finder

### Try out the [deployed app on Heroku!](https://boiling-mesa-36337.herokuapp.com/)

### Compatibility-based "FriendFinder" application. Takes results from users' surveys, then compares their answers with those from other users to match compatible friends!

#### Resources:
##### Written in JavaScript on Node.js using the following npm packages: 
* express 

Internal node package: 
* path

Server runs api and html paths stored in separate files. html paths direct to `home.html` and `survey.html`. api paths post new friends from the survey data and get the user's match to display in a modal.

Match-making algorithm compares the scores to each question rather than the total score to the survey for more precise matching.

Client side survey input validation included for name, photo, and all questions. If an input is left blank the app will `throw` an alert error prompting the user to input a missing field. This will not reload the page so the user doesn't lose the data already written. Validation happens before `api post` so the friends array will not be populated with an empty object which will break the app when running the `matchMaker` function.
