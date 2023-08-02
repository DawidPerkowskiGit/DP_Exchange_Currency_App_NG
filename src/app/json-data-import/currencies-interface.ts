export interface SingleCurrencyObject {
    id?: number;
    name?: string;
}

export interface ListCurrencyResponse {
    currencies?: SingleCurrencyObject;
}

// export interface ListCurrencyResponse {
//     currencies: {
//         id: number;
//         name: string;
//     };
// }

export interface SingleExchangeObject {

}