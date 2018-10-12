import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Aluno } from './../../models/aluno.model';

@Injectable()
export class ArmazenamentoProvider {

	public inserir(aluno: Aluno): any {
		this.pegarProximoId()
			.then((valor) => {
				aluno.id = valor
				this.storage.set(`aluno.${aluno.email}`, aluno)
					.then((valor: Aluno) => {return valor})
			});

	}

	private pegarProximoId(): Promise<number> {
		return this.storage.get('proximoID')
			.then((valor) => {return valor || 1});
	}

	constructor(private storage: Storage, ) {
		console.log('Hello ArmazenamentoProvider Provider');
	}

}
