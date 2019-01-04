
## App Summary

**"Just Ate"** is a react-based web application, similar to [Just Eat](https://www.just-eat.co.uk/restaurants-halo-stockport/menu), that allows a user to view the online menu of a restaurant and add items in to their cart. The menu constitutes a list of menu-items, such as individual burgers, under the respective menu-sections, such as burgers, along with additional information such as title, a short description, price of the item and a button to add the item to the cart.

The cart displays the menu items added to the cart with the option of deleting the menu item/s from the cart along with pricing information such as sub-total, taxes, delivery fees and the total to pay.

## App Components
### Menu Item Component

This is a function-based component that should render the individual menu-item and display information such as title, a short description, and price of the menu-item. It should also render a button that allows a user to add the respective menu-item to the cart during an on-click event.

#### Props

| Prop Name     | Prop Type | Description                                       | Required |
|:-------------:|:---------:|:-------------------------------------------------:|:--------:|
| id            | string    | unique id of the menu-item                        | yes      |
| title         | string    | title of the menu-item                            | yes      |
| description   | string    | a short description of the menu item              | yes      |
| price         | number    | the price of the menu-item                        | yes      |
| onClick       | function  | the function to invoke when add button is clicked | yes      |

*Note:* If any of the required props are missing the component should not be rendered. 

#### Usage

```javascript
<MenuItem
  id="123"
  title="Some Title"
  description="Some description"
  price={3.99}
  onClick={() => {}}
/>
```

#### HTML Template
The HTML template for the menu-item is as shown below. Open the file [menuItem.html](https://github.com/surajverma2587/react-basics/blob/master/src/templates/menu/menuItem.html) from the project on your machine in any web browser to preview the menu-item component with all the required styling applied.

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
      <button type="button" class="btn btn-success" id="id" onClick="onClickFunction()">+</button>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12 menu_item--description">
      <span>Classic beef patty served with American cheese, lettuce, onion, tomato & ketchup on a toasted sesame seed bun.</span>
    </div>
  </div>
</div>
```
