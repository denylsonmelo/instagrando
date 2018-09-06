import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Pagina_2Page } from './../pagina-2/pagina-2';

@IonicPage()
@Component({
	selector: 'page-pagina-1',
	templateUrl: 'pagina-1.html',
})
export class Pagina_1Page {

	nomeNovoAluno: string = "";

	cadastrarAlunos() {
		let proximoId = Number.parseInt(localStorage.getItem("proximoId")) || 1;
		let lista = JSON.parse(localStorage.getItem("listaAlunos")) || [];

		lista.push(
			{
				id: proximoId,
				nome: this.nomeNovoAluno
			}
		);


		localStorage.setItem("listaAlunos", JSON.stringify(lista));
		localStorage.setItem("proximoId", (proximoId + 1).toString());

		this.nomeNovoAluno = "";

	}

	mostrarAlunos() {
		this.navCtrl.push(Pagina_2Page);
	}


	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad Pagina_1Page');
	}

}
