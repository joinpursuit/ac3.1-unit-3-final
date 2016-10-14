# Unit 3 Final Assessment
Your goal is to build a simple shopping cart using Redux.

You will be assessed on the completeness and correctness of your code as well as the readability and organization of your code. Try to adhere to best practices and make your code readable and well structured.

Be sure to attempt every part of the exam. We will be giving partial credit, but we cannot even give partial credit if you leave things blank.

# Setup
- Fork the main repo (https://github.com/C4Q/ac3.1-unit-3-final)
- Clone your forked repo
- `npm install`
- `npm install redux`
- run `npm start` to start your app
- You are not required to use 'react-redux'. In other words, you are not required to use 'Provider' and 'connect' (however, you are welcome to use them if you think it would help you).

If you are not using 'react-redux', replace the `ReactDOM.render` function with the following:

```js
const render = () => ReactDOM.render(
  <App />,
  document.getElementById('root')
);

render();
store.subscribe(render);
```

Make sure you either import your store into `App.js` or create your store in `App.js`, because you will need access to it in order to use `store.subscribe`.

# Submission
Wait until at least 4:20 PM to submit you work (even if you finish earlier). If you finish before 4:20 you are welcome to go in the hallway or in the back and work on your own projects, just wait until at least 4:20 to officially submit. At 4:30 we'll briefly review plans for next week, then you'll be dismissed for the weekend.

To submit your test, make a pull request to the main repo (which your originally forked from) with your completed test.

# Instructions
Your goal is to build a simple shopping cart using Redux. Your cart should have the following parts:

- An 'Items List' that shows all of the items that the user has added to their cart.
![items list](http://i.imgur.com/vRSRH1k.png)
- And 'Add an Item' section that has buttons to add different types of items. The user should be able to add a shirt, shoes, hat, or sunglasses. Each item should have its own button, and when a user clicks on the button, the item should be added to their list of items.
![add item](http://i.imgur.com/IG0mqjF.png)
- An 'Items Count' section that shows the current count of the number of each item that the user has added to their list.
![items count](http://i.imgur.com/KjO5Jn0.png)

Make sure you have a store, reducer, and actions. Your state should only be updated by actions which are triggered when users click one of the buttons.

When you are done your app should have the following functionality. It does not need to look exactly like this, but should have all of these pieces:

![completed](http://i.imgur.com/tbW1Gx8.png)

# Extra credit
- Add a 'Remove Items' section that has one button for each item. When you click on one of the remove item buttons it should remove ALL of that specific item from the list, and update the count accordingly. So for example, if you click on the remove shirts button, it should remove all of the shirts from the list.

![remove items](http://i.imgur.com/PrrXsvK.png)

The completed app including the extra credit should look something like this:

![completed extra credit](http://i.imgur.com/6inYaTv.png)
