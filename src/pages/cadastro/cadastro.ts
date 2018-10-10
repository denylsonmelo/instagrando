import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Aluno } from './../../models/aluno.model';

@IonicPage()
@Component({
	selector: 'page-cadastro',
	templateUrl: 'cadastro.html',
})
export class CadastroPage {

	alunoASerCadastrado: Aluno;

	cadastrarAlunos() {

		let toast = this.alertCtrl.create({
			message: 'Cadastrando Usuário ....',
		});

		toast.onDidDismiss(() => {
			console.log('Dismissed toast');
			this.voltar();
		});

		toast.present();

		this.storage.get("proximoId")
			.then(valor => {
				this.storage.get("listaAlunos")
					.then(lista => {
						this.alunoASerCadastrado.id = valor || 1;
						let array = lista || [];
						array.push(this.alunoASerCadastrado);
						this.storage.set("proximoId", (valor + 1))
							.then(idSalvo => {
								this.storage.set("listaAlunos", array);
								toast.dismiss();

							});
					});
			});

		//this.inicializarAluno();
	}

	private voltar() {
		this.navCtrl.pop();
	}

	private inicializarAluno(): void {
		this.alunoASerCadastrado = this.navParams.get("alunoASerEditado") || new Aluno();
	}

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private storage: Storage,
		public alertCtrl: AlertController) {
	}

	ngOnInit() {
		this.inicializarAluno();
	}

}
