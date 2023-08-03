export class SingleCurrencyObject {
    id!: number;
    name!: string;
}

export class ListCurrencyResponse {
    currencies!: SingleCurrencyObject[];
}

// export interface ListCurrencyResponse {
//     currencies: {
//         id: number;
//         name: string;
//     };
// }

export interface SingleExchangeObject {

}