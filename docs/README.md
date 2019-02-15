# Just Ate - React Basics

## Index
1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
      * [Install Node and NPM](#install-node-and-npm)
      * [Running Tests](#running-tests)
3. [Available Scripts](#available-scripts)
4. [Useful React And ES6 Concepts](#useful-react-and-es6-concepts)
      * [React Components](#react-components)
      * [Destructuring](#destructuring)
      * [Arrow Function](#arrow-function)
      * [Map function](#map-function)
      * [Spread Operator](#spread-operator)
      * [Template Literals](#template-literals)
5. [App Summary](#app-summary)
6. [App Components](#app-components)
      * [Menu Item](#menu-item)
      * [Menu Section](#menu-section)
      * [Menu Header](#menu-header)
      * [Menu](#menu)
      * [Cart Item](#cart-item)
      * [Cart Totals](#cart-totals)
      * [Cart](#cart)

## Introduction
[Back to Index](#index)

[React](https://reactjs.org/) is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called [components](#react-components).

## Getting Started
[Back to Index](#index)

**Note:** You can use `node --version` to find the version of node installed and `npm ---version` to find the version of npm installed. Preferred node version is 10 and npm version is 6. If you do not have node and npm installed follow [this step](#install-node-and-npm) before proceeding.

```shell
cd ~/Desktop
git clone https://github.com/surajverma2587/react-basics.git
cd react-basics/
npm install
```

### Install Node and NPM
[Back to Index](#index)

Steps to install and use the latest version of node:

- Download the nvm install script via cURL:
`curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash`
- Ensure that nvm was installed correctly with `nvm --version`, which should return the version of nvm installed.
- Install the version of Node.js you want using `nvm install version_you_want`
- Install the latest version with `nvm install node`
- Use the latest version with `nvm use node`
- Install the latest LTS version with `nvm install --lts`
- Use the latest LTS verison with `nvm use --lts`

### Running Tests
[Back to Index](#index)

The test framework uses [Enzyme](https://airbnb.io/enzyme/) and [Jest](https://jestjs.io/) to run unit tests. The test setup has been done and tests have been written so that you can adopt a TDD approach when developing the indiviudal modules. You can run `npm run test` which will run the tests in a watch mode and re-run tests upon any code change. When all tests pass for a given module you can proceed to the next module.

---

## Available Scripts
[Back to Index](#index)

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.<br>
The page will auto-reload when you make any changes to the code.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode with the silent and verbose options.<br>

### `npm run build`

Builds the app for production in to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.<br>
The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Useful React and ES6 Concepts

### React Components
[Back to Index](#index)

React lets you define components as classes or functions. Components defined as classes currently provide more features which are described in detail on this page. To define a React component class, you need to extend React.Component:
The only method you must define in a React.Component subclass is called render().

### Destructuring
[Back to Index](#index)

The destructuring assignment syntax is a JavaScript expression that will unpack the required key from a given object and assign the value to a const with the same name as the key.

```javascript
const props = {
  name: 'Arthur Morgan',
  bounty: 'Dead or Alive',
  price: '$200',
  associates: [
    'Dutch Van De Linde',
    'John Marston',
    'Saddie Adler'
  ],
};

/* Without destructuring */
const name = props.name;
const bounty = props.bounty;
const price = props.price;
const associates = props.associates;

/* With destructuring */
const { name, bounty, price, associates } = props;
```
---
### Arrow Function
[Back to Index](#index)

An arrow function (or fat arrow function) expression has a shorter syntax than a function expression and can be denoted as `() => {}`. If the function body contains only the return statement then the curly braces are not required along with the return keyword. However, if the function body has some code apart from the return statement then the curly braces are required along with the return keyword. The code below shows how ES5 functions are written in ES6 using arrow functions:

```javascript
/* When function body has only a return statement */

// ES5
const multiplier = function(x, y) {
  return x * y;
}

// ES6
const multiplier = (x, y) => x * y;

/* When function body has more lines other than a return statement */

// ES5
const discountCalculator = function(amount, discountPercentage) {
  const discount = amount * discountPercentage / 100;
  const finalAmount = amount - discount;
  return finalAmount;
}

// ES6
const discountCalculator = (amount, discountPercentage) => {
  const discount = amount * discountPercentage / 100;
  const finalAmount = amount - discount;
  return finalAmount;
}

// OR
const discountCalculator = (amount, discountPercentage) => amount - (amount * discountPercentage / 100);
```
---
### Map function
[Back to Index](#index)

The javaScript `.map()` method is widely used in React to render multiple components of the same type. For instance, a list of characters of a game can be rendered by mapping through the character array and rendering the list component for each character in the array. To ensure React’s DOM diff’ing works correctly, each component will require a unique key. A simple example of the map method in React is shown below where we want to render an unordered list of characters:

```javascript
const listOfCharacters = [
  'Arthur Morgan',
  'Dutch Vand De Linde',
  'John Marston',
  'Saddie Adler',
  'Leviticus Cornwall',
];

const ListItem = ({ name }) => {
  return <li>{name}</li>
}

const Characters = () => {
  return (
    <div>
      <h2>Red Dead Redemption 2 character list:</h2>
      <ul>
        {
          listOfCharacters.map((character, index) => {
            return <ListItem name={character} key={index} />
          })
        }
      </ul>
    </div>
  )
}
```
---
### Spread Operator
[Back to Index](#index)

Spread syntax allows an array or object to be expanded. It is denoted by 3 dots followed by the name of the object or array `...objectOrArray`. The code below shows the use case of the spread operator:

```javascript
const userObject = {
  name: 'Arthur Morgan',
  address: 'Valentine',
  age: 45,
}

const anotherObject = {
  name: 'Arthur Morgan',
  address: 'Valentine',
  age: 45,
  bounty: 'Dead or Alive',
  price: '$200',
}

// Using the spread operator we get the same value as anotherObject
const spreadObject = {
  ...userObject,
  bounty: 'Dead or Alive',
  price: '$200',
}
```

The code below shows the use case of the spread operators in React when passing props to the Bounty component:

```javascript
const props = {
  name: 'Arthur Morgan',
  address: 'Valentine',
  age: "45",
  bounty: 'Dead or Alive',
  price: '$200',
}

// Without props spreading
<Bounty
  name={props.name}
  address={props.address}
  age={props.age}
  bounty={props.bounty}
  price={props.price}
/>

// With props spreading resulting in the same Bounty component as above
<Bounty {...props} />
```
---
### Template Literals
[Back to Index](#index)

Template literals is a new javaScript syntax for allowing string concatenation and embedding variables within strings. The code below shows an example of the usage of template literals:

```javascript

const firstName = 'Arthur';
const lastName = 'Morgan';
const age = 45;

// Without template literals
const formattedString = firstName + ' ' + lastName + ' is ' + age + ' years old!!';

// With template literals
const formattedString = `${firstName} ${lastName} is ${age} years old!!`;
```
---
## App Summary
[Back to Index](#index)

**"Just Ate"** is a react-based web application, similar to [Just Eat](https://www.just-eat.co.uk/restaurants-halo-stockport/menu), that allows a user to view an online menu of a restaurant and add items to their cart. The online restaurant menu constitutes a list of menu-items, such as Classic Wrap, under their respective menu-sections, such as Wraps, along with additional information such as restaurant information, titles, short descriptions, prices, buttons to add items to the cart, and collapsible panels for menu-sections (as shown below).

![App Preview](https://raw.githubusercontent.com/surajverma2587/react-basics/master/docs/resources/app_preview.png)

The cart displays the menu items added to the cart, a delete button to delete the menu item/s from the cart along with pricing information such as sub-total, taxes, delivery fees and the total to pay (as shown below).

![Cart Preview](https://raw.githubusercontent.com/surajverma2587/react-basics/master/docs/resources/cart_preview.png)
---
## App Components
### Menu Item
[Back to Index](#index)

This is a function-based component that should render the individual menu-item and display information such as title, a short description, and price of the menu-item. It should also render a button that allows a user to add the respective menu-item to the cart during an on-click event. The component preview is shown below.

![Menu Item Component Preview](https://raw.githubusercontent.com/surajverma2587/react-basics/master/docs/resources/menu_item_preview.png)

#### Props

| Prop Name     | Prop Type | Description                                       | Required |
|:-------------:|:---------:|:-------------------------------------------------:|:--------:|
| id            | string    | unique id of the menu-item                        | yes      |
| title         | string    | title of the menu-item                            | yes      |
| description   | string    | a short description of the menu item              | yes      |
| price         | number    | the price of the menu-item                        | yes      |
| onClick       | function  | the function to invoke when add button is clicked | yes      |

*Note:* If any of the required props are missing the component should NOT be rendered. 

#### Usage

```javascript
<MenuItem
  id="123"
  title="Some Title"
  description="Some description"
  price={3.99}
  onClick={() => {/* function to invoke on click event */}}
/>
```

#### HTML Template
The HTML template for the menu-item is as shown below. Open the file [menuItem.html](https://github.com/surajverma2587/react-basics/blob/master/src/templates/menu/menuItem.html) from the project on your local machine in any web browser to preview the styled menu-item component.

```html
<div class="menu_item">
  <div class="row">
    <div class="col-sm-10 menu_item--title">
      <span>Common Guy Burger</span>
    </div>
    <div class="col-sm-1 menu_item--price">
      <span>£3.99</span>
    </div>
    <div class="col-sm-1">
      <button type="button" class="btn btn-success qa-menu-item-button" id="id" onClick="onClickFunction()">+</button>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12 menu_item--description">
      <span>Classic beef patty served with American cheese, lettuce, onion, tomato & ketchup on a toasted sesame seed bun.</span>
    </div>
  </div>
</div>
```
---
### Menu Section
[Back to Index](#index)

This is a function-based component that should render the individual menu-section and display information such as title, a short description, and a list of menu-item components. It should also render a button that allows a user to collapse/expand the panel containing the menu-items. The component preview of the menu-section when expanded is shown below.

![Menu Section Exapned Component Preview](https://raw.githubusercontent.com/surajverma2587/react-basics/master/docs/resources/menu_section_open_preview.png)

The component preview of the menu-section when collapsed is shown below.

![Menu Section Collapsed Component Preview](https://raw.githubusercontent.com/surajverma2587/react-basics/master/docs/resources/menu_section_closed_preview.png)

#### Props

| Prop Name       | Prop Type | Description                                       | Required |
|:---------------:|:---------:|:-------------------------------------------------:|:--------:|
| id              | string    | unique id of the menu-section                     | yes      |
| title           | string    | title of the menu-section                         | yes      |
| description     | string    | a short description of the menu section           | yes      |
| menuItems       | array     | array of menu item objects for the menu section   | yes      |
| onClickMenuItem | function  | the function to invoke when add button is clicked | yes      |

*Note:* If any of the required props are missing the component should NOT be rendered. 

#### Usage

```javascript
<MenuSection
  id="123"
  title="Some Title"
  description="Some description"
  menuItems={[{ id: '111', title: 'Foo', description: 'Bar', price: 4.99 }, ...]}
  onClickMenuItem={() => {/* function to invoke on click event */}}
/>
```

#### HTML Template
The HTML template for the menu-section is as shown below. Open the file [menuSection.html](https://github.com/surajverma2587/react-basics/blob/master/src/templates/menu/menuSection.html) from the project on your local machine in any web browser to preview the styled menu-section component.

```html
<div class="menu_section">
  <div class="menu_section--header">
    <div class="row">
      <div class="col-sm-11 menu_section--title">
        <span>Burgers</span>
      </div>
      <div class="col-sm-1">
        <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#someID">v</button>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 menu_section--description">
        <span>All burgers include lettuce, red onions & tomatoes. Add fries £1.39, curly fries £1.79 & sweet potato fries £2.29 extra are available.</span>
      </div>
    </div>
  </div>
  <div class="collapse menu_section--body" id="someID">
    <div class="menu_item">
      <div class="row">
        <div class="col-sm-10 menu_item--title">
          <span>Common Guy Burger</span>
        </div>
        <div class="col-sm-1 menu_item--price">
          <span>£3.99</span>
        </div>
        <div class="col-sm-1">
          <button type="button" class="btn btn-success qa-menu-item-button" id="S1I001" onClick="onClickFunction()">+</button>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 menu_item--description">
          <span>Classic beef patty served with American cheese, lettuce, onion, tomato & ketchup on a toasted sesame seed bun.</span>
        </div>
      </div>
    </div>
    <div class="menu_item">
      <div class="row">
        <div class="col-sm-10 menu_item--title">
          <span>Classic Chicken Burger</span>
        </div>
        <div class="col-sm-1 menu_item--price">
          <span>£3.99</span>
        </div>
        <div class="col-sm-1">
          <button type="button" class="btn btn-success qa-menu-item-button" id="S1I002" onClick="onClickFunction()">+</button>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 menu_item--description">
          <span>Classic chicken fillet burger served with lettuce & mayo on a toasted sesame bun</span>
        </div>
      </div>
    </div>
    <div class="menu_item">
      <div class="row">
        <div class="col-sm-10 menu_item--title">
          <span>Deluxe Cheeseburger</span>
        </div>
        <div class="col-sm-1 menu_item--price">
          <span>£4.69</span>
        </div>
        <div class="col-sm-1">
          <button type="button" class="btn btn-success qa-menu-item-button" id="S1I003" onClick="onClickFunction()">+</button>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 menu_item--description">
          <span>Beef patty, beef stock, cheese spread, monetary jack cheese & halo sauce</span>
        </div>
      </div>
    </div>
  </div>
</div>
```
---
### Menu Header
[Back to Index](#index)

This is a function-based component that should render the menu-header and display information such as title, address, image, reviews and ratings. The component preview is shown below.

![Menu Header Component Preview](https://raw.githubusercontent.com/surajverma2587/react-basics/master/docs/resources/menu_header_preview.png)

#### Props

| Prop Name     | Prop Type | Description                          | Required |Defaults |
|:-------------:|:---------:|:------------------------------------:|:--------:|:-------:|
| title         | string    | title of the restaurant              | yes      |         |
| address       | string    | address of the restaurant            | yes      |         |
| imgUrl        | string    | image link of the restaurant         | no       |''       |
| reviews       | number    | total number of reviews              | no       |0        |
| rating        | number    | overall restaurant rating out of 5   | no       |0        |

*Note:* If any of the required props are missing the component should NOT be rendered. 

#### Usage

```javascript
<MenuHeader
  title="Some title"
  address="Some address"
  imgUrl="Some imgUrl"
  reviews={200}
  rating={3.8}
/>
```

#### HTML Template
The HTML template for the menu-header is as shown below. Open the file [menuHeader.html](https://github.com/surajverma2587/react-basics/blob/master/src/templates/menu/menuHeader.html) from the project on your local machine in any web browser to preview the styled menu-header component.

```html
<div class="media">
  <div class="media-left">
    <img class="mr-3" src="https://www.seriouseats.com/recipes/images/2015/07/20150728-homemade-whopper-food-lab-35.jpg" alt="Halo" width="120" height="100" />
  </div>
  <div class="media-body">
    <div class="row">
      <div class="col-sm-12">
        <h2>Halo</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-2">
        <span>Star ratings</span>
      </div>
      <div class="col-sm-10">
        <span>2067 reviews</span>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <span>109 London Road, Stockport, SK7 4HH</span>
      </div>
    </div>
  </div>
</div>
```
---
### Menu
[Back to Index](#index)

This is a function-based component that should render the individual menu and display the menu-header component and a list of menu-section components. The component preview of the menu is shown below.

![Menu Section Exapned Component Preview](https://raw.githubusercontent.com/surajverma2587/react-basics/master/docs/resources/menu_preview.png)

#### Props

| Prop Name       | Prop Type | Description                                       | Required |
|:---------------:|:---------:|:-------------------------------------------------:|:--------:|
| id              | string    | unique id of the menu                             | yes      |
| title           | string    | title of the menu                                 | yes      |
| address         | string    | address of the restaurant                         | yes      |
| imgUrl          | string    | link to the restaurant logo image                 | yes      |
| reviews         | string    | reviews of the restaurant                         | yes      |
| rating          | string    | rating of the restaurant                          | yes      |
| menuSections    | array     | array of menu section objects for the menu        | yes      |
| onClickMenuItem | function  | on click function passed to the child component   | yes      |

*Note:* If any of the required props are missing the component should NOT be rendered. 

#### Usage
  
```javascript
<Menu
  id="123"
  title="Some Title"
  address="Somewhere"
  imgUrl="https://some-img.com"
  reviews={2000}
  rating={4.5}
  menuSections={[
      {
            id: '1',
            title: 'Section',
            description: 'Section description',
            menuItems: [{ id: '111', title: 'Foo', description: 'Bar', price: 4.99 }, ...]
      }, ...
  ]}
  onClickMenuItem={() => {/* function to invoke on click event */}}
/>
```

#### HTML Template
The HTML template for the menu is as shown below. Open the file [menu.html](https://github.com/surajverma2587/react-basics/blob/master/src/templates/menu/menu.html) from the project on your local machine in any web browser to preview the styled menu component.

```html
<div class="restaurant">
  <div class="media">
    <div class="media-left">
      <img class="mr-3" src="https://www.seriouseats.com/recipes/images/2015/07/20150728-homemade-whopper-food-lab-35.jpg" alt="Halo" width="120" height="100" />
    </div>
    <div class="media-body">
      <div class="row">
        <div class="col-sm-12">
          <h2>Halo</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-2">
          <span>Star ratings</span>
        </div>
        <div class="col-sm-10">
          <span>2067 reviews</span>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <span>109 London Road, Stockport, SK7 4HH</span>
        </div>
      </div>
    </div>
  </div>
  <div class="menu">
    <div class="menu_section">
      <div class="menu_section--header">
        <div class="row">
          <div class="col-sm-11 menu_section--title">
            <span>Burgers</span>
          </div>
          <div class="col-sm-1">
            <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#burgers">v</button>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 menu_section--description">
            <span>All burgers include lettuce, red onions & tomatoes. Add fries £1.39, curly fries £1.79 & sweet potato fries £2.29 extra are available.</span>
          </div>
        </div>
      </div>
      <div class="collapse menu_section--body" id="burgers">
        <div class="menu_item">
          <div class="row">
            <div class="col-sm-10 menu_item--title">
              <span>Common Guy Burger</span>
            </div>
            <div class="col-sm-1 menu_item--price">
              <span>£3.99</span>
            </div>
            <div class="col-sm-1">
              <button type="button" class="btn btn-success qa-menu-item-button" id="S1I001" onClick="onClickFunction()">+</button>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 menu_item--description">
              <span>Classic beef patty served with American cheese, lettuce, onion, tomato & ketchup on a toasted sesame seed bun.</span>
            </div>
          </div>
        </div>
        <div class="menu_item">
          <div class="row">
            <div class="col-sm-10 menu_item--title">
              <span>Classic Chicken Burger</span>
            </div>
            <div class="col-sm-1 menu_item--price">
              <span>£3.99</span>
            </div>
            <div class="col-sm-1">
              <button type="button" class="btn btn-success qa-menu-item-button" id="S1I002" onClick="onClickFunction()">+</button>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 menu_item--description">
              <span>Classic chicken fillet burger served with lettuce & mayo on a toasted sesame bun</span>
            </div>
          </div>
        </div>
        <div class="menu_item">
          <div class="row">
            <div class="col-sm-10 menu_item--title">
              <span>Deluxe Cheeseburger</span>
            </div>
            <div class="col-sm-1 menu_item--price">
              <span>£4.69</span>
            </div>
            <div class="col-sm-1">
              <button type="button" class="btn btn-success qa-menu-item-button" id="S1I003" onClick="onClickFunction()">+</button>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 menu_item--description">
              <span>Beef patty, beef stock, cheese spread, monetary jack cheese & halo sauce</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="menu_section">
      <div class="menu_section--header">
        <div class="row">
          <div class="col-sm-11 menu_section--title">
            <span>Wraps</span>
          </div>
          <div class="col-sm-1">
            <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#wraps">v</button>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 menu_section--description">
            <span>Add fries £1.39, curly fries £1.79 & sweet potato fries £2.29 extra are available.</span>
          </div>
        </div>
      </div>
      <div class="collapse menu_section--body" id="wraps">
        <div class="menu_item">
          <div class="row">
            <div class="col-sm-10 menu_item--title">
              <span>Classic Wrap</span>
            </div>
            <div class="col-sm-1 menu_item--price">
              <span>£3.79</span>
            </div>
            <div class="col-sm-1">
              <button type="button" class="btn btn-success qa-menu-item-button" id="S1I001" onClick="onClickFunction()">+</button>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 menu_item--description">
              <span>Chicken fillet, lettuce & mayo</span>
            </div>
          </div>
        </div>
        <div class="menu_item">
          <div class="row">
            <div class="col-sm-10 menu_item--title">
              <span>Peri Wrap</span>
            </div>
            <div class="col-sm-1 menu_item--price">
              <span>£3.99</span>
            </div>
            <div class="col-sm-1">
              <button type="button" class="btn btn-success qa-menu-item-button" id="S1I002" onClick="onClickFunction()">+</button>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 menu_item--description">
              <span>Chicken fillet, lettuce & peri mayo</span>
            </div>
          </div>
        </div>
        <div class="menu_item">
          <div class="row">
            <div class="col-sm-10 menu_item--title">
              <span>Mexican Wrap</span>
            </div>
            <div class="col-sm-1 menu_item--price">
              <span>£4.79</span>
            </div>
            <div class="col-sm-1">
              <button type="button" class="btn btn-success qa-menu-item-button" id="S1I003" onClick="onClickFunction()">+</button>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 menu_item--description">
              <span>Chicken fillet with American cheese, hot salsa, nachos, jalapenos & guacamole</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Cart Item
[Back to Index](#index)

This is a function-based component that should render the individual cart-item and display information such as the item title and price in the cart. It should also render a button that allows a user to delete the respective item from the cart during an on-click event. The component preview is shown below.

![Cart Item Component Preview](https://raw.githubusercontent.com/surajverma2587/react-basics/master/docs/resources/cart_item_preview.png)

#### Props

| Prop Name     | Prop Type | Description                                          | Required |
|:-------------:|:---------:|:----------------------------------------------------:|:--------:|
| id            | string    | unique id of the cart-item                           | yes      |
| title         | string    | title of the cart-item                               | yes      |
| price         | number    | the price of the cart-item                           | yes      |
| onClick       | function  | the function to invoke when delete button is clicked | yes      |

*Note:* If any of the required props are missing the component should NOT be rendered. 

#### Usage

```javascript
<CartItem
  id="123"
  title="Some Title"
  price={3.99}
  onClick={() => {/* function to invoke on click event */}}
/>
```

#### HTML Template
The HTML template for the cart-item is as shown below. Open the file [cartItem.html](https://github.com/surajverma2587/react-basics/blob/master/src/templates/cart/cartItem.html) from the project on your local machine in any web browser to preview the styled cart-item component.

```html
<div class="cart_item">
  <div class="row">
    <div class="col-sm-10 cart_item--title">
      <span>Common Guy Burger</span>
    </div>
    <div class="col-sm-1 cart_item--price">
      <span>£3.99</span>
    </div>
    <div class="col-sm-1">
      <button type="button" class="btn btn-danger qa-cart-item-button" id="someID" onClick="onClickFunction()">-</button>
    </div>
  </div>
</div>
```

### Cart Totals
[Back to Index](#index)

This is a function-based component that should render the cart-totals and display information such as the sub-total, taxes, delivery, and total price. The component preview is shown below.

![Cart Totals Component Preview](https://raw.githubusercontent.com/surajverma2587/react-basics/master/docs/resources/cart_totals_preview.png)

#### Props

| Prop Name     | Prop Type | Description                                          | Required |
|:-------------:|:---------:|:----------------------------------------------------:|:--------:|
| subTotal      | number    | total of all the items                               | yes      |
| taxes         | number    | 20% of the sub-total                                 | yes      |
| delivery      | number    | £1.50 if sub-total is over £12                       | yes      |
| total         | number    | sum of the sub-total, taxes and delivery             | yes      |

*Note:* If any of the required props are missing the component should NOT be rendered. 

#### Usage

```javascript
<CartTotals
  subTotal={10}
  taxes={1}
  delivery={0}
  total={11}
/>
```

#### HTML Template
The HTML template for the cart-totals is as shown below. Open the file [cartTotals.html](https://github.com/surajverma2587/react-basics/blob/master/src/templates/cart/cartTotals.html) from the project on your local machine in any web browser to preview the styled cart-totals component.

```html
<div class="cart_totals">
  <div class="row">
    <div class="col-sm-6 cart_totals--info">
      <span>Sub-Total:</span>
    </div>
    <div class="col-sm-6 cart_totals--price">
      <span>£20.00</span>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-6 cart_totals--info">
      <span>Taxes:</span>
    </div>
    <div class="col-sm-6 cart_totals--price">
      <span>£2.50</span>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-6 cart_totals--info">
      <span>Delivery:</span>
    </div>
    <div class="col-sm-6 cart_totals--price">
      <span>£1.50</span>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-6 cart_totals--info">
      <span>TOTAL:</span>
    </div>
    <div class="col-sm-6 cart_totals--price">
      <span>£24.00</span>
    </div>
  </div>
</div>
```

### Cart Item
[Back to Index](#index)

This is a function-based component that should render the individual cart-item and display information such as the item title and price in the cart. It should also render a button that allows a user to delete the respective item from the cart during an on-click event. The component preview is shown below.

![Cart Item Component Preview](https://raw.githubusercontent.com/surajverma2587/react-basics/master/docs/resources/cart_item_preview.png)

#### Props

| Prop Name     | Prop Type | Description                                          | Required |
|:-------------:|:---------:|:----------------------------------------------------:|:--------:|
| id            | string    | unique id of the cart-item                           | yes      |
| title         | string    | title of the cart-item                               | yes      |
| price         | number    | the price of the cart-item                           | yes      |
| onClick       | function  | the function to invoke when delete button is clicked | yes      |

*Note:* If any of the required props are missing the component should NOT be rendered. 

#### Usage

```javascript
<CartItem
  id="123"
  title="Some Title"
  price={3.99}
  onClick={() => {/* function to invoke on click event */}}
/>
```

#### HTML Template
The HTML template for the cart-item is as shown below. Open the file [cartItem.html](https://github.com/surajverma2587/react-basics/blob/master/src/templates/cart/cartItem.html) from the project on your local machine in any web browser to preview the styled cart-item component.

```html
<div class="cart_item">
  <div class="row">
    <div class="col-sm-10 cart_item--title">
      <span>Common Guy Burger</span>
    </div>
    <div class="col-sm-1 cart_item--price">
      <span>£3.99</span>
    </div>
    <div class="col-sm-1">
      <button type="button" class="btn btn-danger qa-cart-item-button" id="someID" onClick="onClickFunction()">-</button>
    </div>
  </div>
</div>
```

### Cart
[Back to Index](#index)

This is a function-based component that should render the cart and display information such as the cart items and cart totals. The component preview is shown below.

![Cart Component Preview](https://raw.githubusercontent.com/surajverma2587/react-basics/master/docs/resources/cart_preview.png)

#### Props

| Prop Name       | Prop Type | Description                                          | Required |
|:---------------:|:---------:|:----------------------------------------------------:|:--------:|
| subTotal        | number    | total of all the items                               | yes      |
| taxes           | number    | 20% of the sub-total                                 | yes      |
| delivery        | number    | £1.50 if sub-total is over £12                       | yes      |
| total           | number    | sum of the sub-total, taxes and delivery             | yes      |
| selectedItems   | array     | array of cart-item objects                           | yes      |
| onClickCartItem | function  | the function to invoke when delete button is clicked | yes      |

*Note:* If any of the required props are missing the component should NOT be rendered. 

#### Usage

```javascript
<Cart
  subTotal={10}
  taxes={1}
  delivery={0}
  total={11}
  selectedItems={[{
    id: "1"
    title: "Something"
    price: 4.99
    onClick: onClickFunction()
  }, ...]},
  onClickCartItem={onClickFunction()},
/>
```

#### HTML Template
The HTML template for the cart-totals is as shown below. Open the file [cart.html](https://github.com/surajverma2587/react-basics/blob/master/src/templates/cart/cart.html) from the project on your local machine in any web browser to preview the styled cart component.

```html
<div class="cart">
  <div class="card">
    <div class="card-body">
      <span class="cart--title">Cart</span>
      <hr />
      <div class="cart_item">
        <div class="row">
          <div class="col-sm-10 cart_item--title">
            <span>Common Guy Burger</span>
          </div>
          <div class="col-sm-1 cart_item--price">
            <span>£3.99</span>
          </div>
          <div class="col-sm-1">
            <button type="button" class="btn btn-danger qa-cart-item-button" id="1" onClick="onClickFunction()">-</button>
          </div>
        </div>
      </div>
      <div class="cart_item">
        <div class="row">
          <div class="col-sm-10 cart_item--title">
            <span>Classic Wrap</span>
          </div>
          <div class="col-sm-1 cart_item--price">
            <span>£3.79</span>
          </div>
          <div class="col-sm-1">
            <button type="button" class="btn btn-danger qa-cart-item-button" id="2" onClick="onClickFunction()">-</button>
          </div>
        </div>
      </div>
      <div class="cart_totals">
        <div class="row">
          <div class="col-sm-6 cart_totals--info">
            <span>Sub-Total:</span>
          </div>
          <div class="col-sm-6 cart_totals--price">
            <span>£20.00</span>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 cart_totals--info">
            <span>Taxes:</span>
          </div>
          <div class="col-sm-6 cart_totals--price">
            <span>£2.50</span>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 cart_totals--info">
            <span>Delivery:</span>
          </div>
          <div class="col-sm-6 cart_totals--price">
            <span>£1.50</span>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 cart_totals--info">
            <span>TOTAL:</span>
          </div>
          <div class="col-sm-6 cart_totals--price">
            <span>£24.00</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```
