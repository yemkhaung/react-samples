import { gql } from "react-apollo";

export const shipOrder = gql`
    mutation($id: ID!, $shipped: Boolean!) {
        shipOrder(id: $id, shipped: $shipped) {
            id
            shipped
        }
    }
`;
