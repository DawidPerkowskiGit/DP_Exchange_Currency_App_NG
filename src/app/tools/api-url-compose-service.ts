import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.prod"

@Injectable({
    providedIn: 'root',
  })
export class ApiUrlComposeService {

    constructor() {};

    composeUrl(input: string[]): string {
        return '';
    }
}