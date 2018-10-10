import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';


@Injectable()
export class ImageProvider {

	getBase64Image(img: HTMLImageElement) {
		var canvas = document.createElement("canvas");
		canvas.width = img.width;
		canvas.height = img.height;
		var ctx = canvas.getContext("2d");
		ctx.drawImage(img, 0, 0);
		var dataURL = canvas.toDataURL("image/png");
		return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
	}

	getBase64ImageFromURL(url: string) {
		return Observable.create((observer: Observer<string>) => {
			let img = new Image();
			img.src = url;
			img.crossOrigin="anonymous";
			if (!img.complete) {
				img.onload = () => {
					observer.next(this.getBase64Image(img));
					observer.complete();
				};
				img.onerror = (err) => {
					observer.error(err);
				};
			} else {
				observer.next(this.getBase64Image(img));
				observer.complete();
			}
		});
	}

	constructor(public http: HttpClient) {
		console.log('Hello ImageProvider Provider');
	}

}
