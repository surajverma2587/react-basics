
## App Summary

**"Just Ate"** is a react-based web application, similar to [Just Eat](https://www.just-eat.co.uk/restaurants-halo-stockport/menu), that allows a user to view an online menu of a restaurant and add items to their cart. The online restaurant menu constitutes a list of menu-items, such as Classic Wrap, under their respective menu-sections, such as Wraps, along with additional information such as restaurant information, titles, short descriptions, prices, buttons to add items to the cart, and collapsible panels for menu-sections (as shown below).

![App Preview](https://raw.githubusercontent.com/surajverma2587/react-basics/master/docs/resources/app_preview.png)

The cart displays the menu items added to the cart, a delete button to delete the menu item/s from the cart along with pricing information such as sub-total, taxes, delivery fees and the total to pay (as shown below).

![Cart Preview](https://raw.githubusercontent.com/surajverma2587/react-basics/master/docs/resources/cart_preview.png)
      
## App Components
### Menu Item Component

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

### Menu Section Component

This is a function-based component that should render the individual menu-section and display information such as title, a short description, and a list of menu-item components. It should also render a button that allows a user to collapse/expand the panel containing the menu-items. The component preview is shown below.

![Menu Section Component Preview](https://raw.githubusercontent.com/surajverma2587/react-basics/master/docs/resources/menu_section_preview.png)

#### Props

| Prop Name       | Prop Type | Description                                       | Required |
|:---------------:|:---------:|:-------------------------------------------------:|:--------:|
| id              | string    | unique id of the menu-section                     | yes      |
| title           | string    | title of the menu-section                         | yes      |
| description     | string    | a short description of the menu section           | yes      |
| menuItems       | array     | the price of the menu-section                     | yes      |
| onClickMenuItem | function  | on click function passed to the child component   | yes      |

*Note:* If any of the required props are missing the component should NOT be rendered. 

#### Usage

```javascript
<MenuSection
  id="123"
  title="Some Title"
  description="Some description"
  menuItems=[{ id: '111', title: 'Foo', description: 'Bar', price: 4.99 }, ...]
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
          <button type="button" class="btn btn-success" id="S1I001" onClick="onClickFunction()">+</button>
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
          <button type="button" class="btn btn-success" id="S1I002" onClick="onClickFunction()">+</button>
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
          <button type="button" class="btn btn-success" id="S1I003" onClick="onClickFunction()">+</button>
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
