import { useAuth } from 'src/hooks';
import { Link } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link to="/" end>
        Home
      </Link>
      {isLoggedIn && <Link to="/user-phone-book">PhoneBook</Link>}
    </nav>
  );
};
