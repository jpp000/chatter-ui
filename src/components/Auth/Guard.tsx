import excludedRoutes from "../../constants/excluded-routes";
import { useGetUser } from "../../hooks/useGetUser";

interface GuardProps {
  children: JSX.Element;
}

const Guard = ({ children }: GuardProps) => {
  const { data: user } = useGetUser();

  return (
    <div>
      {excludedRoutes.includes(window.location.pathname)
        ? children
        : user && children}
    </div>
  );
};

export default Guard;
