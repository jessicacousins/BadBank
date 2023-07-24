import { useLocation, Link } from "react-router-dom";
import Tooltip from "./Layouts/Tooltip";

export default function Breadcrumbs() {
  const location = useLocation();

  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += ` /${crumb}`;
      return (
        <Tooltip text={currentLink}>
          <div className="crumb" key={crumb}>
            <Link to={currentLink}>{crumb}</Link>
          </div>
        </Tooltip>
      );
    });
  return <div className="breadcrumbs">{crumbs}</div>;
}
