import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';

import { GravatarImageProvider } from '../providers/gravatar-image/gravatar-image.service';
import { ImageProvider } from '../providers/image/image.service';
import { ArmazenamentoProvider } from '../providers/armazenamento/armazenamento.service';

@NgModule({
	declarations: [
		MyApp,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		IonicModule.forRoot(MyApp, {
			preloadModules: true
		}),
		IonicStorageModule.forRoot({
			name: 'cadastro-alunos__db'
		}),
		ReactiveFormsModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		{ provide: LocationStrategy, useClass: PathLocationStrategy },
		GravatarImageProvider,
		ImageProvider,
		ArmazenamentoProvider
	]
})
export class AppModule { }
