import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Navlink({ to, children }) {
   return <Link to={to}>{children}</Link>;
}
