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
		matricula: new FormControl('', [
			Validators.required,
			Validators.pattern('(20)(0|1)([0-8])(1|2)(tinf)([0-9]{4})'),
			Validators.nullValidator
		]),
		nome: new FormControl('', [
			Validators.required,
			Validators.minLength(5),
			Validators.maxLength(50),
			Validators.nullValidator
		]),
		email: new FormControl('', [
			Validators.required,
			Validators.email,
			Validators.nullValidator
		]),
		idade: new FormControl(18, [
			Validators.required,
			Validators.nullValidator
		]),
		sexo: new FormControl('', [
			Validators.required,
			Validators.nullValidator
		])
	});
	alunoASerCadastrado: Aluno;

	cadastrarAlunos() {

		console.log(this.alunoASerCadastrado)
		console.log(this.formulario)


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
