import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CadastroPage } from './../cadastro/cadastro';

import { Aluno } from './../../models/aluno.model';

@IonicPage()
@Component({
	selector: 'page-listagem',
	templateUrl: 'listagem.html',
})
export class ListagemPage {

	deveMostrarAlunos: boolean = false;
	alunos: Array<Aluno>;

	visualizar(aluno: Aluno): void{
		this.navCtrl.push(CadastroPage, {
			alunoASerEditado: aluno
		});
	}

	irParaPaginaDeCadastro() {
		this.navCtrl.push(CadastroPage);
	}

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		this.alunos = JSON.parse(localStorage.getItem("listaAlunos")) || [];
		this.deveMostrarAlunos = this.alunos.length > 0 ? true : false;
	}

}
