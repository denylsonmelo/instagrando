import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


import md5 from 'crypto-md5';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

@Injectable()
export class GravatarImageProvider {

	gravatarUrl: any = "https://www.gravatar.com/avatar/";

	public pegarImagem(email: any): Observable<any> {


		//this.gravatarUrl + md5(email.toLowerCase(), 'hex')
		return this.http.get("https://jsonplaceholder.typicode.com/todos/" + email)
			.retry(2)
			.map(response => response);


	}

	constructor(public http: HttpClient) {
		console.log('Hello GravatarImageProvider Provider');
	}

}
