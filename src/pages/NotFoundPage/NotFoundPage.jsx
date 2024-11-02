import "./NotFoundPage.scss";
import { Link, useParams } from "react-router-dom";

function NotFoundPage() {
  const { "*": params } = useParams();
  const baseUrl = window.location.origin;

  let routeSuggestion = null;
  const suggestRoute = (userRoute) => {
    const routes = [
      { name: "home", path: "/" },
      { name: "upload", path: "/upload" },
    ];

    const cleanedUserRoute = userRoute.toLowerCase();

    for (const route of routes) {
      if (
        cleanedUserRoute.includes(route.name) ||
        route.name.includes(cleanedUserRoute)
      ) {
        routeSuggestion = route;
        break;
      }
    }

    if (!routeSuggestion) {
      for (const route of routes) {
        let count = 0;
        for (const letter of cleanedUserRoute) {
          if (route.name.includes(letter)) count++;
        }
        if (count >= route.name.length / 2) {
          routeSuggestion = route;
          break;
        }
      }
    }

    return routeSuggestion;
  };

  if (params) {
    suggestRoute(params);
  }

  return (
    <section className="not-found-page">
      <h1 className="not-found-page__title">404</h1>
      <p className="not-found-page__message">Page not found.</p>
      {!params && (
        <p className="not-found-page__message">That video does not exist.</p>
      )}
      {routeSuggestion && (
        <p className="not-found-page__message">
          Did you mean{" "}
          <Link to={routeSuggestion.path} className="not-found-page__link">
            {`${baseUrl}${routeSuggestion.path}`}
          </Link>
          ?
        </p>
      )}
    </section>
  );
}

export default NotFoundPage;
