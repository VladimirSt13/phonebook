import { Link, Navigate } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      <h1>Page not found</h1>
      <h2>404</h2>
      <Link to="/"> Back to main</Link>
    </div>
  );
}
