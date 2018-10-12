import { ArmazenamentoProvider } from './../../providers/armazenamento/armazenamento.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

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

		let toast = this.alertCtrl.create({
			message: 'Cadastrando Usuário ....',
		});

		toast.onDidDismiss(() => {
			console.log('Dismissed toast');
			this.voltar();
		});

		toast.present();

		console.log(this.alunoASerCadastrado);

		this.armazenamento.inserir(this.alunoASerCadastrado);

		this.inicializarAluno();
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
		public alertCtrl: AlertController,
		public armazenamento: ArmazenamentoProvider) {
	}

	ngOnInit() {
		this.inicializarAluno();
	}

}
