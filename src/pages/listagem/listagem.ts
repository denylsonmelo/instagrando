import { GravatarImageProvider } from './../../providers/gravatar-image/gravatar-image.service';
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

	constructor(public navCtrl: NavController, public navParams: NavParams, public service : GravatarImageProvider) {
	}

	ionViewDidLoad() {
		this.alunos = JSON.parse(localStorage.getItem("listaAlunos")) || [];
		this.deveMostrarAlunos = this.alunos.length > 0 ? true : false;

		this.alunos.forEach(aluno => aluno.urlImagem = "assets/imgs/nophoto.png");

		if(this.deveMostrarAlunos){
			this.alunos.forEach(aluno => {
				this.service.pegarImagem(aluno.email).subscribe(url => console.log(url));
			});
		}
	}

}
