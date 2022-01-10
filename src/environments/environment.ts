import {HttpHeaders} from "@angular/common/http";

export const environment = {
  production: false,
  host: 'http://localhost:4200',
  json_header: new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'Accept': 'application/json'
  })
};
