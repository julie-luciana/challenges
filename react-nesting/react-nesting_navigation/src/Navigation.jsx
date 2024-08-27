/* 2. Navigation component

Let's do (almost) the same with the navigation.

Task: Outsource the `<nav>` into a `Navigation` component.

- Create `src/components/Navigation.jsx`.
- The `Navigation` should receive a `children` prop used in its return statement.
  - 💡 Note that the `nav` does not have a `className`, so there is no need to add this attribute.
- In the `App.jsx` file, import the `Navigation` component and replace the `<nav></nav>` tags with it.

Awesome! You are a true `children` prop professional now. Let's dive <deeper!></deeper!>
*/

function Nav({ children }) {
  return <nav>{children}</nav>;
}
export default Nav;
