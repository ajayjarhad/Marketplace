import { gql } from "@apollo/client";

//Oauth with Google query
export const LOGIN_WITH_GOOGLE = gql`
  query {
    getLoginUrlsForLogin {
      GOOGLE
    }
  }
`;
