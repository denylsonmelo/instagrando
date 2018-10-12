import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { GravatarImageProvider } from './../../providers/gravatar-image/gravatar-image.service';
import { ImageProvider } from './../../providers/image/image.service';

import { Aluno } from './../../models/aluno.model';

@IonicPage()
@Component({
	selector: 'page-listagem',
	templateUrl: 'listagem.html',
})
export class ListagemPage {

	deveMostrarAlunos: boolean = false;
	alunos: Array<Aluno>;

	visualizar(aluno: Aluno): void {
		this.navCtrl.push('CadastroPage', {
			alunoASerEditado: aluno
		});
	}

	irParaPaginaDeCadastro() {
		this.navCtrl.push('CadastroPage');
	}

	ionViewWillEnter() {

		this.storage.get("listaAlunos")
			.then(data => {
				this.alunos = data || [];
				this.deveMostrarAlunos = this.alunos.length > 0 ? true : false;


				if (this.deveMostrarAlunos) {
					this.alunos.forEach(aluno => {
						aluno.urlImagem = "assets/imgs/nophoto.png";
						this.gravatarService.pegarImagem(aluno.email)
							.subscribe((data) => {
								this.imageService.getBase64ImageFromURL(data.entry[0].thumbnailUrl)
									.subscribe((data: any) => {
										if (data !== this.gravatarService.imagemPadrao()) {
											aluno.urlImagem = "data:image/png;base64," + data;
										}
									});
							});
					});
				}
			})
			.catch(data => console.log("entrou no catch"));
	}

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public gravatarService: GravatarImageProvider,
		public imageService: ImageProvider,
		private storage: Storage) {
	}

}
