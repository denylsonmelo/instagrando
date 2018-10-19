import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { GravatarImageProvider } from './../../providers/gravatar-image/gravatar-image.service';
import { ImageProvider } from './../../providers/image/image.service';
import { ArmazenamentoProvider } from './../../providers/armazenamento/armazenamento.service';

import { Aluno } from './../../models/aluno.model';

@IonicPage()
@Component({
	selector: 'page-listagem',
	templateUrl: 'listagem.html',
})
export class ListagemPage {

	deveMostrarAlunos: boolean = false;
	alunosDaPagina: Array<Aluno>;

	visualizar(aluno: Aluno): void {
		this.navCtrl.push('CadastroPage', {
			alunoASerEditado: aluno
		});
	}

	irParaPaginaDeCadastro() {
		this.navCtrl.push('CadastroPage');
	}

	ionViewWillEnter() {

		this.alunosDaPagina = [];
		this.amazenamento.pegarAlunos()
			.then((alunosQueVemDoServico: Array<Aluno>) => {
				this.alunosDaPagina = alunosQueVemDoServico;
				this.deveMostrarAlunos = this.alunosDaPagina.length > 0 ? true : false;
				if (this.deveMostrarAlunos) {
					this.alunosDaPagina.forEach(aluno => {
						aluno.urlImagem = "assets/imgs/nophoto.png";
						this.gravatarService.pegarImagem(aluno.email)
							.subscribe((data) => {
								this.imageService.getBase64ImageFromURL(data.entry[0].thumbnailUrl)
									.subscribe((data: any) => {
										if (data !== this.gravatarService.imagemPadrao()) {
											aluno.urlImagem = "data:image/png;base64;" + data;
										}
									});
							});
					});
				}
			})
			.catch(data => console.log(data));

		// 	})
		// 	.catch(data => console.log("entrou no catch"));
	}

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public gravatarService: GravatarImageProvider,
		public imageService: ImageProvider,
		private amazenamento: ArmazenamentoProvider) {
	}

}
