import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
const config = {
  apiKey: "AIzaSyD_hgzN86-dWBsQ2Sb7QK7-t6DlXBnmlOs",
  authDomain: "my-portfolio-37dbf.firebaseapp.com",
  projectId: "my-portfolio-37dbf",
  storageBucket: "my-portfolio-37dbf.appspot.com",
  messagingSenderId: "534220250451",
  appId: "1:534220250451:web:e11f08c74f604079d195a6",
  measurementId: "G-1H6PMGPF34"
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
