import { ArmazenamentoProvider } from './../../providers/armazenamento/armazenamento.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, Alert } from 'ionic-angular';
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

	deletar(){
		// apresentar loadind ==> apagando
		this.armazenamento.apagarAluno(this.alunoASerCadastrado.id)
			.then((valor: boolean) =>{
				if(valor){
					// metodo de exibir um toast. alert, loading
					// alert.dimiss
					this.navCtrl.pop()
				}
			});
	}

	prepararAlert(): Alert {
		let alert = this.alertCtrl.create({
			message: 'Cadastrando Usuário ....',
		});

		alert.onDidDismiss(() => {
			this.voltar();
		});

		alert.present();

		return alert;
	}

	cadastrarAlunos() {
		let alert = this.prepararAlert();
		this.armazenamento.inserir(this.alunoASerCadastrado)
			.then((aluno: Aluno) => {
				alert.dismiss();
			});

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
