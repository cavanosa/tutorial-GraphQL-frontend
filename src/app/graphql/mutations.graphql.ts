import gql from "graphql-tag";

const CREATE_BRAND = gql`
    mutation CreateBrand($dto: BrandDto) {
        saveBrand(dto: $dto){
            id
            name
        }
    }
`

const UPDATE_BRAND = gql`
    mutation UpdateBrand($id: Int, $dto: BrandDto) {
        updateBrand(id: $id, dto: $dto){
            id
            name
        }
    }
`

const DELETE_BRAND = gql`
    mutation UpdateBrand($id: Int) {
        deleteBrand(id: $id){
            id
            name
        }
    }
`

export { CREATE_BRAND, UPDATE_BRAND, DELETE_BRAND };