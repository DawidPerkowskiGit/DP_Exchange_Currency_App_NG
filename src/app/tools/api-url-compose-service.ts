import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiUrlComposeService {
  constructor() {}

  /**
   * Returns complete URL path to the REST API endpoint. First paramater must be URL path, other parameters are optional, URL parameters.
   * @param input List of url parameters.
   * @returns Complete URL path to the REST API endpoint.
   */
  composeUrl(input: string[]): string {
    var url = environment.API_ENPOINT;

    if (input.length > 0) {
      url += input[0];
      input = input.slice(1);

      if (input.length > 0) {
        url += '?' + input[0];
        input = input.slice(1);

        if (input.length > 0) {
          input.forEach((element) => {
            url += '&' + element;
          });
        }
      }
    }

    console.log("Composed URL::: ",url);
    return url;
  }
}
