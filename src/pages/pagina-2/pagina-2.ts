import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Pagina_2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-pagina-2',
	templateUrl: 'pagina-2.html',
})
export class Pagina_2Page {

	deveMostrarAlunos: boolean = false;
	alunos: Array<{ id: number, nome: string }>;

	voltar() {
		this.navCtrl.pop();
	}

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		this.alunos = JSON.parse(localStorage.getItem("listaAlunos")) || []
		this.deveMostrarAlunos = this.alunos.length > 0 ? true : false;
	}

}
