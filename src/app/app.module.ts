import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';

import { ListagemPage } from '../pages/listagem/listagem';
import { CadastroPage } from './../pages/cadastro/cadastro';

import { GravatarImageProvider } from '../providers/gravatar-image/gravatar-image.service';
import { ImageProvider } from '../providers/image/image.service';

@NgModule({
	declarations: [
		MyApp,
		CadastroPage,
		ListagemPage
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		IonicModule.forRoot(MyApp),
		IonicStorageModule.forRoot({
			name: 'cadastro-alunos__db'
		})
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		CadastroPage,
		ListagemPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		GravatarImageProvider,
		ImageProvider
	]
})
export class AppModule { }
