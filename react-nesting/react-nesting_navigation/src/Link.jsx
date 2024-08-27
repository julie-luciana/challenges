export default function Link({ href, children }) {
  return (
    <a className="navigation__link">
      {children} href={href}
    </a>
  );
}
