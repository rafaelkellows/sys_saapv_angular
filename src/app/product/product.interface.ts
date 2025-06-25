export interface ProductInterface {
    id: number, 
    label : string,
    imageUrl: string, 
    title: string, 
    description: string,
    price: number,
    fixedPrice: boolean,
    subProductsItens: object,
    status: boolean,
    inserted_at: string,
    updated_at: string
}
