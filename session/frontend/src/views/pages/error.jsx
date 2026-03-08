function ErrorPage() {
  return (
    <div className="container text-center vh-100 d-flex flex-column justify-content-center align-items-center bg-light">
      <h1 className="display-1 text-danger">404 Error</h1>
      <p className="lead text-secondary">
        We're sorry, but the page you requested could not be found.
      </p>
      <div className="mt-4">
        <h2 className="h4 text-dark">Possible Causes:</h2>
        <ul className="list-unstyled text-start">
          <li>The URL is incorrect or mistyped.</li>
          <li>The page has been moved or deleted.</li>
          <li>There is a network connectivity issue.</li>
        </ul>
      </div>
      <div className="mt-4">
        <h2 className="h4 text-dark">How to Fix:</h2>
        <ul className="list-unstyled text-start">
          <li>Double-check the URL for typos.</li>
          <li>
            Go back to the{" "}
            <a href="/login" className="text-primary">
              login page
            </a>
            .
          </li>
          <li>Contact support if the issue persists.</li>
        </ul>
      </div>
    </div>
  );
}

export default ErrorPage;
