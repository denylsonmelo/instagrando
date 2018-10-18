import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Aluno } from './../../models/aluno.model';

@Injectable()
export class ArmazenamentoProvider {

	public pegarAluno(chave: string): Promise<Aluno>{
		return this.storage.get(chave);
	}

	public pegarChavesAlunos(): Promise<any> {
		return this.storage.keys()
			.then((chaves: Array<string>) => {
				let chavesCertas = [];
				chaves.forEach(chave => {
					if(chave.startsWith("aluno.")){
						chavesCertas.push(chave);
					}
				});
				// chaves
				// 	.map(chaveDoMap => chaveDoMap)
				// 	.filter(chaveDoFilter => {
				// 		chaveDoFilter.startsWith("aluno.");
				// 	});
				return chavesCertas;
			});
	}

	public inserir(aluno: Aluno): Promise<any> {
		return this.pegarProximoId()
			.then((valor) => {
				aluno.id = valor
				return this.storage.set(`aluno.${btoa(aluno.email)}`, aluno);
			});
	}

	private pegarProximoId(): Promise<number> {
		return this.storage.get('proximoID')
			.then((valor) => { return valor || 1 });
	}

	constructor(private storage: Storage, ) {
		console.log('Hello ArmazenamentoProvider Provider');
	}

}
