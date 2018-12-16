# friend_finder
### Compatibility-based "FriendFinder" application. Takes results from users' surveys, then compares their answers with those from other users to match compatible friends!

#### Resources:
##### Written in JavaScript on Node.js using the following npm packages: 
* express 

Internal node package: 
* path

Server runs api and html paths stored in separate files. html paths direct to `home.html` and `survey.html`. api paths post new friends from the survey data and get the user's match to display in a modal.

Match-making algorithm compares the scores to each question rather than the total score to the survey for more precise matching.
