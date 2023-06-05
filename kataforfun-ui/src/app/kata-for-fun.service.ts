import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KataForFunService {

  private readonly serverUrl: string;

  constructor(private http: HttpClient, @Inject('SERVER_URL') private serverUrlValue: string) {
    this.serverUrl = serverUrlValue;
  }

  // tslint:disable-next-line:typedef
  public convert(inputNumber: number) {
    const endPoint = '/kata-for-fun/';
    const url = this.serverUrl + endPoint + inputNumber;
    return this.http.get(url);
  }


}
