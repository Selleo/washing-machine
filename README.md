# Washing Machine manager

You are living in a student's dorm. It is quite small and has only one washing machine. You are the most responsible person that the dorm's administration knows, so you have the key to the laundry room. If someone wants to use the washing machine, he/she has to come up to you and tell you about it - just saying his/her name and the room number.

You need to handle reservations somehow, you used to write it down on a piece of paper, but since you are the great React/JavaScript master you decide to write a small form that will handle it.

Let's say that you want to start with a MVP, you want a simple form that allows you to pass the times of reservations per week, you start with one week view that will represent current week's reservations. You decide to use redux-persist to keep the state of reservations on you local computer and redux-form to manage changes. To setup time you have redux-datapicker library - it does not look pretty but it is good enough. To make the page look better you decide to use reactstrap (react bootstrap library), you also have lodash, scss and moment on your project, but you can add anything you wish. You use react-json-view to view the current state of reservations.

To run your project you must run:

`yarn && yarn start`

or coresponding `npm` commands

### To finish your MVP you need to achieve those points:

1. Add validation of reservations that will check

- if both `start` and `end` is present and set (will show under single wrong entry)
- if `end` time is after `start` (will show under single wrong entry)
- if duration of the reservation is not longer than 2:30h (will show under single wrong entry)
  If all of the above pass you need to check:
- if two reservations on same day do not collide (show this under day's name)
- if two reservations are not too close - there should be minimum 15min to switch keys (show this under the day's name)

in `src/components/Reservations.jsx` you will see how to setup proper validation errors in both cases

Durring implementation you should not bother about huge amounts of loops and repetitions of the same code, this is your implementation, it should work. Of course, some additional style points will be granted if you will use `_.reduce`

#### Hints

`moment.js` is great library that provide some nice tools to manage with times/dates. Methods that you can help you are `isAfter`, `isBetween`, `add(15, 'minutes')`. Remember - take care of good time parsing (take care of UTC problems if there will be any).

2. You need to add additional store for users

- add some router to the project and add additional route for users - eg. /users
- add some navigation buttons - use you good taste to style it
- create store for users (with current redux-persist config it should be persisted inside cache without additional implementation)
- create simple form for adding users - each has first name, last name, room number
- show a list of users and add some functionalities to remove them from the store
- configure proper action creators and reducers
- list and form can be on one view

3. In the reservation form add new input in a single reservation entry. It should be selected with the list of all the users. Make this value required in validation - because you need to know who made the reservation.

You can change whatever file you want, introduce new libraries to the project, and so on...

Good luck! Just have fun, this is a very interesting case, hope you will enjoy it. If you have any problems with requirements or/and repo (maybe something is off in repositiories/npm) please contact w.bozek[at]selleo.com
