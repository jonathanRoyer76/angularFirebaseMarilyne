import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, ErrorHandler } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatCardModule, MatFormFieldModule, MatSidenavModule, 
  MatInputModule, MatButtonModule, MatCheckboxModule, MatDividerModule, 
  MatMenuModule, MatIconModule, MatExpansionModule, MatDialogModule, 
  MatSnackBarModule, MatSelectModule, MatTableModule, MatTabsModule, 
  MatDatepickerModule, MatNativeDateModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ConnexionComponent } from './components/connexion/connexion.component';

import { UsersService } from './services/users.service';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorHandlerService, modalErrorHandler } from './services/error-handler.service';
import { PersonnesService } from './services/personnes.service';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const mesRoutes = [
  { path: 'signUp', component: SignUpComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: '**', redirectTo: 'accueil' } 
];

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    SideNavComponent,
    modalErrorHandler,
    SignUpComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule,
    RouterModule.forRoot(mesRoutes),
    MatCardModule, MatFormFieldModule, MatSidenavModule,
    BrowserModule, BrowserAnimationsModule, MatInputModule, MatButtonModule, 
    MatCheckboxModule, MatCardModule, MatDividerModule, MatMenuModule, MatIconModule,
    MatExpansionModule, MatDialogModule, MatSnackBarModule, MatSelectModule,
    MatTableModule, MatTabsModule, MatDatepickerModule, MatNativeDateModule
  ],
  providers: [
    UsersService,
    ErrorHandlerService,
    PersonnesService
  ],
  entryComponents: [
    modalErrorHandler
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
