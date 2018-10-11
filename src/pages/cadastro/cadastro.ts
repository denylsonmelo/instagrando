import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
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

	formulario = new FormGroup({
		nome: new FormControl('', [
			Validators.required,
			Validators.minLength(5),
			Validators.maxLength(50),
		]),
		email: new FormControl('', [
			Validators.required,
			Validators.pattern('\\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$')
		])
	});
	alunoASerCadastrado: Aluno;

	cadastrarAlunos() {

		this.formulario.patchValue({
			nome: "nome do aluno modificado"
		});

		// let toast = this.alertCtrl.create({
		// 	message: 'Cadastrando Usuário ....',
		// });

		// toast.onDidDismiss(() => {
		// 	console.log('Dismissed toast');
		// 	this.voltar();
		// });

		// toast.present();

		// this.storage.get("proximoId")
		// 	.then(valor => {
		// 		this.storage.get("listaAlunos")
		// 			.then(lista => {
		// 				this.alunoASerCadastrado.id = valor || 1;
		// 				let array = lista || [];
		// 				array.push(this.alunoASerCadastrado);
		// 				this.storage.set("proximoId", (valor + 1))
		// 					.then(idSalvo => {
		// 						this.storage.set("listaAlunos", array);
		// 						toast.dismiss();

		// 					});
		// 			});
		// 	});

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
		public alertCtrl: AlertController,
		private builder: FormBuilder) {
	}

	ngOnInit() {
		this.inicializarAluno();
	}

}
