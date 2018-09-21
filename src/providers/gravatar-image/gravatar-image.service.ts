import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import md5 from 'crypto-md5';
import { Observable } from 'rx';

@Injectable()
export class GravatarImageProvider {

	gravatarUrl: any = "https://www.gravatar.com/avatar/";

	public pegarImagem(email: string): any {

		return this.http.get(this.gravatarUrl + md5(email.toLowerCase(), 'hex'));


	}

	constructor(public http: HttpClient) {
		console.log('Hello GravatarImageProvider Provider');
	}

}
