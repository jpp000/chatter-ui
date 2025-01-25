import { gql, useQuery } from "@apollo/client";
import { User } from "../models/User";

const GET_USER = gql`
  query GetUser {
    getUser {
      _id
      email
    }
  }
`;

const useGetUser = () => {
  return useQuery<User>(GET_USER);
};

export { useGetUser };
