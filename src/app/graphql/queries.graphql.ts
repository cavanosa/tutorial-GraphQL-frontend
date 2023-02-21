import gql from "graphql-tag";

const GET_BRANDS = gql`
query{
    findAllBrands{
      id
      name
    }
  }
`

export { GET_BRANDS }