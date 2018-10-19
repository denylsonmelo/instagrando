import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Aluno } from './../../models/aluno.model';
import { stringify } from '@angular/core/src/util';

@Injectable()
export class ArmazenamentoProvider {

	public apagarAluno(chave: string) {
		return this.storage.remove(`aluno.${chave}`)
			.then(() => true);

	}

	public pegarAlunos(): Promise<Array<Aluno>> {

		return this.storage.ready()
			.then((localForage: LocalForage) => {
				let alunos: Array<Aluno> = [];
				return this.storage.forEach((value: Aluno, key: string, iterationNumber: Number) => {
					if (key.indexOf("aluno.") > -1) {
						alunos.push(value);
					}
				}).then(() =>
					alunos
				);
			});

		// return this.storage.keys()
		// 	.then((chaves: Array<string>) => {
		// 		let chavesCertas = [];
		// 		chaves.forEach(chave => {
		// 			if (chave.startsWith("aluno.")) {
		// 				chavesCertas.push(chave);
		// 			}
		// 		});
		// 		// chaves
		// 		// 	.map(chaveDoMap => chaveDoMap)
		// 		// 	.filter(chaveDoFilter => {
		// 		// 		chaveDoFilter.startsWith("aluno.");
		// 		// 	});
		// 		return chavesCertas;
		// 	});
	}

	public inserir(aluno: Aluno): Promise<any> {
		aluno.id = btoa(aluno.email);
		return this.storage.set(`aluno.${aluno.id}`, aluno);
	}

	private pegarProximoId(): Promise<number> {
		return this.storage.get('proximoID')
			.then((valor) => { return valor || 1 });
	}

	constructor(private storage: Storage, ) {
	}

}
