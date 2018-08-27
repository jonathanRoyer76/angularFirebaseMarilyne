import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, ErrorHandler } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatCardModule, MatFormFieldModule, MatSidenavModule, 
  MatInputModule, MatButtonModule, MatCheckboxModule, MatDividerModule, 
  MatMenuModule, MatIconModule, MatExpansionModule, MatDialogModule, 
  MatSnackBarModule, MatSelectModule, MatTableModule, MatTabsModule, 
  MatDatepickerModule, MatNativeDateModule, MatTooltipModule, MatListModule, MatListItem, MatChip, MatChipsModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ConnexionComponent } from './components/connexion/connexion.component';

import { UsersService } from './services/users.service';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ErrorHandlerService, modalErrorHandler } from './services/error-handler.service';
import { PersonnesService } from './services/personnes.service';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProfilNounouComponent } from './components/profil-nounou/profil-nounou.component';
import { ProfilNounouService } from './services/profil-nounou.service';
import { ContratComponent } from './components/contrat/contrat.component';
import { ListeContratsComponent } from './components/liste-contrats/liste-contrats.component';
import { ListePersonnesComponent } from './components/liste-personnes/liste-personnes.component';
import { UpdatePersonneComponent } from './components/update-personne/update-personne.component';
import { AjoutePersonneComponent } from './components/ajoute-personne/ajoute-personne.component';

const mesRoutes = [
  { path: 'signUp', component      : SignUpComponent },
  { path: 'newPerson', component   : AjoutePersonneComponent },
  { path: 'profilNounou', component: ProfilNounouComponent },
  { path: 'contrat', component     : ContratComponent },
  { path: 'contrats', component    : ListeContratsComponent },
  { path: 'personnes', component   : ListePersonnesComponent },
  { path: '', redirectTo           : 'accueil', pathMatch: 'full' },
  { path: '**', redirectTo         : 'accueil' }   
];

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    SideNavComponent,
    modalErrorHandler,
    SignUpComponent,
    ProfilNounouComponent,
    ContratComponent,
    ListeContratsComponent,
    ListePersonnesComponent,
    UpdatePersonneComponent,
    AjoutePersonneComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule,
    RouterModule.forRoot(mesRoutes),
    MatCardModule, MatFormFieldModule, MatSidenavModule,
    BrowserModule, BrowserAnimationsModule, MatInputModule, MatButtonModule, 
    MatCheckboxModule, MatCardModule, MatDividerModule, MatMenuModule, MatIconModule,
    MatExpansionModule, MatDialogModule, MatSnackBarModule, MatSelectModule,
    MatTableModule, MatTabsModule, MatDatepickerModule, MatNativeDateModule, MatTooltipModule,
    MatListModule, MatChipsModule 
  ],
  providers: [
    UsersService,
    ErrorHandlerService,
    PersonnesService,
    ProfilNounouService
  ],
  entryComponents: [
    modalErrorHandler,
    UpdatePersonneComponent,
    SideNavComponent
  ],
  bootstrap: [AppComponent] 
})
export class AppModule { }
