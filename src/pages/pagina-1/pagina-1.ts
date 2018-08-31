import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-pagina-1',
	templateUrl: 'pagina-1.html',
})
export class Pagina_1Page {

	variavelString: string = "algum texto";
	variavelNumero: number = 654;
	variavelNumeroComDecimal: number = 654.156;
	deveMostrarAlunos: boolean = true;
	nomeNovoAluno: string = "";
	private contador: number = 5;

	alunos: Array<{ id: number, nome: string }> = [
		{ id: 1, nome: "luna" },
		{ id: 2, nome: "geyssy" },
		{ id: 3, nome: "juvenaldo" },
		{ id: 4, nome: "cleu" },
	];

	cadastrarAlunos(){
		this.alunos.push({
			id: this.contador,
			nome: this.nomeNovoAluno
		});

		this.contador++;
		this.nomeNovoAluno = "";
	}

	mudarNomeAluno(event: any){
		this.nomeNovoAluno = this.nomeNovoAluno + event.key;
	}

	mostrarAlunos() {
		this.deveMostrarAlunos = !this.deveMostrarAlunos;
	}


	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad Pagina_1Page');
	}

}
