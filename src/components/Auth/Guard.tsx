import { useEffect } from "react";
import excludedRoutes from "../../constants/excluded-routes";
import { useGetUser } from "../../hooks/useGetUser";
import { authenticatedVar } from "../../constants/authenticated";

interface GuardProps {
  children: JSX.Element;
}

const Guard = ({ children }: GuardProps) => {
  const { data: user } = useGetUser();

  useEffect(() => {
    if (user) {
      authenticatedVar(true);
    }
  }, [user]);

  return (
    <div>
      {excludedRoutes.includes(window.location.pathname)
        ? children
        : user && children}
    </div>
  );
};

export default Guard;
