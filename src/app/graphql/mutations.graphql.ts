import gql from "graphql-tag";

const CREATE_BRAND = gql`
    mutation CreateBrand($dto: BrandDto) {
        saveBrand(dto: $dto){
            id
            name
        }
    }
`

export { CREATE_BRAND };