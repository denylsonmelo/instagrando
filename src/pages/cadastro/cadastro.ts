import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Aluno } from './../../models/aluno.model';

@IonicPage()
@Component({
	selector: 'page-cadastro',
	templateUrl: 'cadastro.html',
})
export class CadastroPage {

	alunoASerCadastrado: Aluno;

	cadastrarAlunos() {
		let proximoId = Number.parseInt(localStorage.getItem("proximoId")) || 1;
		let lista = JSON.parse(localStorage.getItem("listaAlunos")) || [];

		this.alunoASerCadastrado.id = proximoId;
		lista.push(this.alunoASerCadastrado);


		localStorage.setItem("listaAlunos", JSON.stringify(lista));
		localStorage.setItem("proximoId", (proximoId + 1).toString());

		//this.inicializarAluno();
		this.voltar();
	}

	private voltar(){
		this.navCtrl.pop();
	}

	private inicializarAluno(): void{
		this.alunoASerCadastrado =  this.navParams.get("alunoASerEditado")  || new Aluno();
	}

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ngOnInit() {
		this.inicializarAluno();
	}

}
