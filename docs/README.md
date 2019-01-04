
## App Summary

**"Just Ate"** is a react-based web application, similar to [Just Eat](https://www.just-eat.co.uk/restaurants-halo-stockport/menu), that allows a user to view the online menu of a restaurant and add items in to their cart. The menu constitutes a list of menu-items, such as individual burgers, under the respective menu-sections, such as burgers, along with additional information such as title, a short description, price of the item and a button to add the item to the cart.

The cart displays the menu items added to the cart with the option of deleting the menu item/s from the cart along with pricing information such as sub-total, taxes, delivery fees and the total to pay.

## App Components
### Menu Item Component

This is a function-based component that should render the individual menu-item and display information such as title, a short description, and price of the menu-item. It should also render a button that allows a user to add the respective menu-item to the cart during an on-click event.

The props for this component are as follows:

| Prop Name     | Prop Type | Description                                       | Required |
|:-------------:|:---------:|:-------------------------------------------------:|:--------:|
| id            | string    | unique id of the menu-item                        | yes      |
| title         | string    | title of the menu-item                            | yes      |
| description   | string    | a short description of the menu item              | yes      |
| price         | number    | the price of the menu-item                        | yes      |
| onClick       | function  | the function to invoke when add button is clicked | yes      |

*Note:* If any of the required props are missing the component should not be rendered. 
