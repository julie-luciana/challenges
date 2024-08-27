/**
 * ### 1. Header component

Task: Outsource the `<header>` into a `Header` component.

- In the `/src` folder, create a subfolder called `components`. 
This is where all component files will live.
- In `/src/components`, create a file called `Header.jsx`.
  - Export a `Header` component which returns the same 
  `<header></header>` element as in the `App.jsx` file.
  - Don't forget the `className` attribute.
  - The function should receive a `children` prop and render it between the opening and closing `<header>` tags.
- In the `App.jsx` file, import the `Header` component and replace the `<header></header>` tags with it.

🎉 Congratulations, you've created a wrapping `Header` component using the `children` prop!
 */

export default function Header({ children }) {
  return <header className="header">{children}</header>;
}
