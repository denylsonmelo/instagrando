import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ListagemPage } from '../pages/listagem/listagem';
import { CadastroPage } from './../pages/cadastro/cadastro';

import { GravatarImageProvider } from '../providers/gravatar-image/gravatar-image.service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
	HomePage,
	TabsPage,
	CadastroPage,
	ListagemPage
],
imports: [
	BrowserModule,
	HttpClientModule,
    IonicModule.forRoot(MyApp)
],
bootstrap: [IonicApp],
entryComponents: [
	MyApp,
    AboutPage,
    ContactPage,
	HomePage,
    TabsPage,
	CadastroPage,
	ListagemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GravatarImageProvider
  ]
})
export class AppModule {}
