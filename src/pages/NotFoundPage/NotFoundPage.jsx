import "./NotFoundPage.scss";
import { Link, useParams } from "react-router-dom";

function NotFoundPage() {
  const { "*": params } = useParams();
  const url = window.location.href;
  const baseUrl = url.slice(0, url.lastIndexOf("/"));

  const routes = [
    { name: "home", path: "/" },
    { name: "upload", path: "/upload" },
  ];
  let routeSuggestion = null;

  const suggestRoute = (userRoute) => {
    for (const route of routes) {
      if (
        userRoute.toLowerCase().includes(route.name) ||
        route.name.includes(userRoute.toLowerCase())
      ) {
        routeSuggestion = route;
        return;
      }
    }
  };

  suggestRoute(params);
  const pageName = "Home";
  return (
    <section className="not-found-page">
      <h1 className="not-found-page__title">404</h1>
      <p className="not-found-page__message">Page not found.</p>
      {routeSuggestion && (
        <p className="not-found-page__message">
          Did you mean{" "}
          <Link to={routeSuggestion.path} className="not-found-page__link">
            {`${baseUrl}/${routeSuggestion.name}`}
          </Link>
          ?
        </p>
      )}
    </section>
  );
}

export default NotFoundPage;
