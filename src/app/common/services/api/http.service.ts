import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MockUtils } from '../../utils/mock.utils';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private mockUtils: MockUtils, private httpClient:HttpClient) { }

  callService(serviceName:string, serviceMethod = 'POST', requestBody?:any): Observable<any> {
    let responseServiceObservable: Observable<any>;
    const serviceCallParams = {serviceName:serviceName,serviceMethod:serviceMethod,requestBody:requestBody}
    if (environment.mockProvider){
      responseServiceObservable = this.mockUtils.mockResponse(serviceCallParams);
    } else {
      responseServiceObservable = this.httpCall(serviceCallParams);
    }

    responseServiceObservable = responseServiceObservable.pipe(map((response) => {
      console.log("Response service call observable pipe");
      console.log(response);
      // TODO: implement some project needed validations here
      if (environment.mockProvider)return response.default;
      return response;
    }))
    return responseServiceObservable;
  }

  private httpCall(serviceCallParams) {
    const headers = this.getAppHeaders()

    switch (serviceCallParams.serviceMethod){
      case 'GET':
        return this.httpClient.get(environment.apiDomain, {headers})
      case 'POST':
        return this.httpClient.post(environment.apiDomain, serviceCallParams.requestBody, {headers:headers})
      //TODO: add all http methods  
      default:
        return null;
    }
  }

  private getAppHeaders(): HttpHeaders {
    let httpHeaders: HttpHeaders;
    const token = this.getToken()
    if(token) {
      httpHeaders.append('Authorization',token);
    }
    //TODO: add your required http headers that need your app
    return httpHeaders;
  }

  private getToken() {
    return localStorage.getItem("token") || null;
  }

}
