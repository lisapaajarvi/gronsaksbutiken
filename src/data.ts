export interface Product {
    id: number,
    name: string,
    price: number
}

export const mockedProducts: Product[] = [
    {
        id: 1,
        name: "Morötter",
        price: 25
    },
    {
        id: 2,
        name: "Gurka",
        price: 10
    },
    {
        id: 3,
        name: "Palsternacka",
        price: 12
    }
]