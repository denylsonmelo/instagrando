import { HttpClient,  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


import md5 from 'crypto-md5';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

@Injectable()
export class GravatarImageProvider {

	gravatarUrl: string = "https://gravatar.com/";
	//jsonPlaceHolder: string = "https://jsonplaceholder.typicode.com/todos/";

	public pegarImagem(email: string): Observable<any> {
		return this.http.get(`${this.gravatarUrl}${md5(email.toLowerCase(), 'hex')}.json`)
			.retry(2)
			.map(response => response);
	}

	constructor(public http: HttpClient) {
		console.log('Hello GravatarImageProvider Provider');
	}

}
