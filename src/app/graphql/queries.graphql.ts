import gql from "graphql-tag";

const GET_BRANDS = gql`
query{
    findAllBrands{
      id
      name
    }
  }
`

const GET_MODELS = gql`
  query FindModelsByBrand($brand_id: Int){
    findModelsByBrandId(brand_id: $brand_id) {
        id
        name
        brand {
            name
        }
    }
  }
`

export { GET_BRANDS, GET_MODELS }