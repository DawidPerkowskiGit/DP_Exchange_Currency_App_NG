import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
  })

  export class BuildMapService {
    buildMap(obj: any) {
        let map = new Map();
        Object.keys(obj).forEach(key => {       
            map.set(key, obj[key]);
        });
        return map;
    }
  }