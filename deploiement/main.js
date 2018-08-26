(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenavContainer\">\n  <mat-sidenav #sidenav mode=\"side\" opened=\"true\" class=\"sidenav\" [fixedInViewport]=true >        \n      <app-connexion></app-connexion>\n      <app-side-nav></app-side-nav>\n  </mat-sidenav>\n  <mat-sidenav-content role=\"main\">\n      <!-- <div class=\"banniere\" ></div> -->\n      <router-outlet></router-outlet>  \n  </mat-sidenav-content>     \n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var config = {
            apiKey: "AIzaSyDhV8nVBIu81DVQ7LnSUXIfT2tagiye7X8",
            authDomain: "marilyne-royer.firebaseapp.com",
            databaseURL: "https://marilyne-royer.firebaseio.com",
            projectId: "marilyne-royer",
            storageBucket: "marilyne-royer.appspot.com",
            messagingSenderId: "972596999367"
        };
        firebase__WEBPACK_IMPORTED_MODULE_1__["initializeApp"](config);
        var firestore = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
        var settings = { timestampsInSnapshots: true };
        firestore.settings(settings);
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_connexion_connexion_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/connexion/connexion.component */ "./src/app/components/connexion/connexion.component.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/side-nav/side-nav.component */ "./src/app/components/side-nav/side-nav.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_error_handler_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/error-handler.service */ "./src/app/services/error-handler.service.ts");
/* harmony import */ var _services_personnes_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/personnes.service */ "./src/app/services/personnes.service.ts");
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ "./src/app/components/sign-up/sign-up.component.ts");
/* harmony import */ var _components_profil_nounou_profil_nounou_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/profil-nounou/profil-nounou.component */ "./src/app/components/profil-nounou/profil-nounou.component.ts");
/* harmony import */ var _services_profil_nounou_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/profil-nounou.service */ "./src/app/services/profil-nounou.service.ts");
/* harmony import */ var _components_contrat_contrat_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/contrat/contrat.component */ "./src/app/components/contrat/contrat.component.ts");
/* harmony import */ var _components_liste_contrats_liste_contrats_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/liste-contrats/liste-contrats.component */ "./src/app/components/liste-contrats/liste-contrats.component.ts");
/* harmony import */ var _components_liste_personnes_liste_personnes_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/liste-personnes/liste-personnes.component */ "./src/app/components/liste-personnes/liste-personnes.component.ts");
/* harmony import */ var _components_update_personne_update_personne_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/update-personne/update-personne.component */ "./src/app/components/update-personne/update-personne.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var mesRoutes = [
    { path: 'signUp', component: _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_12__["SignUpComponent"] },
    { path: 'profilNounou', component: _components_profil_nounou_profil_nounou_component__WEBPACK_IMPORTED_MODULE_13__["ProfilNounouComponent"] },
    { path: 'contrat', component: _components_contrat_contrat_component__WEBPACK_IMPORTED_MODULE_15__["ContratComponent"] },
    { path: 'contrats', component: _components_liste_contrats_liste_contrats_component__WEBPACK_IMPORTED_MODULE_16__["ListeContratsComponent"] },
    { path: 'personnes', component: _components_liste_personnes_liste_personnes_component__WEBPACK_IMPORTED_MODULE_17__["ListePersonnesComponent"] },
    { path: '', redirectTo: 'accueil', pathMatch: 'full' },
    { path: '**', redirectTo: 'accueil' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_connexion_connexion_component__WEBPACK_IMPORTED_MODULE_6__["ConnexionComponent"],
                _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_8__["SideNavComponent"],
                _services_error_handler_service__WEBPACK_IMPORTED_MODULE_10__["modalErrorHandler"],
                _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_12__["SignUpComponent"],
                _components_profil_nounou_profil_nounou_component__WEBPACK_IMPORTED_MODULE_13__["ProfilNounouComponent"],
                _components_contrat_contrat_component__WEBPACK_IMPORTED_MODULE_15__["ContratComponent"],
                _components_liste_contrats_liste_contrats_component__WEBPACK_IMPORTED_MODULE_16__["ListeContratsComponent"],
                _components_liste_personnes_liste_personnes_component__WEBPACK_IMPORTED_MODULE_17__["ListePersonnesComponent"],
                _components_update_personne_update_personne_component__WEBPACK_IMPORTED_MODULE_18__["UpdatePersonneComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(mesRoutes),
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
            ],
            providers: [
                _services_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"],
                _services_error_handler_service__WEBPACK_IMPORTED_MODULE_10__["ErrorHandlerService"],
                _services_personnes_service__WEBPACK_IMPORTED_MODULE_11__["PersonnesService"],
                _services_profil_nounou_service__WEBPACK_IMPORTED_MODULE_14__["ProfilNounouService"]
            ],
            entryComponents: [
                _services_error_handler_service__WEBPACK_IMPORTED_MODULE_10__["modalErrorHandler"],
                _components_update_personne_update_personne_component__WEBPACK_IMPORTED_MODULE_18__["UpdatePersonneComponent"],
                _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_8__["SideNavComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classes/contrat.ts":
/*!************************************!*\
  !*** ./src/app/classes/contrat.ts ***!
  \************************************/
/*! exports provided: Contrat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contrat", function() { return Contrat; });
var Contrat = /** @class */ (function () {
    function Contrat() {
        this.tauxHoraireBrut = 0;
        this.tauxHoraireNet = 0;
        this.nbSemainesGardeAn = 0;
        this.nbHeuresGardeSemaine = 0;
        this.nbJoursGardeSemaine = 0;
        this.montantRepas = 0;
        this.montantIndemnites = 0;
        this.montantGouter = 0;
        this.baremeKm = 0;
        this.salaireBaseBrut = 0;
        this.salaireBaseNet = 0;
        this.congesPayesBaseBrut = 0;
        this.congesPayesBaseNet = 0;
        this.salaireTotalBaseBrut = 0;
        this.salaireTotalBaseNet = 0;
        this.moyNbJoursGardeMois = 0;
        this.moyNbHeuresGardeMois = 0;
    }
    return Contrat;
}());



/***/ }),

/***/ "./src/app/classes/donneesContrat.ts":
/*!*******************************************!*\
  !*** ./src/app/classes/donneesContrat.ts ***!
  \*******************************************/
/*! exports provided: DonneesContrat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonneesContrat", function() { return DonneesContrat; });
var DonneesContrat = /** @class */ (function () {
    function DonneesContrat() {
    }
    return DonneesContrat;
}());



/***/ }),

/***/ "./src/app/classes/personne.ts":
/*!*************************************!*\
  !*** ./src/app/classes/personne.ts ***!
  \*************************************/
/*! exports provided: Personne */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Personne", function() { return Personne; });
var Personne = /** @class */ (function () {
    function Personne() {
        this.idDoc = "";
        this.nom = '';
        this.prenom = '';
        this.adresse = '';
        this.telPortable = '';
        this.mail = '';
        this.actif = true;
        this.status = '';
        this.urlPhoto = '';
    }
    return Personne;
}());



/***/ }),

/***/ "./src/app/classes/planning.ts":
/*!*************************************!*\
  !*** ./src/app/classes/planning.ts ***!
  \*************************************/
/*! exports provided: Planning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Planning", function() { return Planning; });
var Planning = /** @class */ (function () {
    function Planning() {
        this.lundi = {
            heureArrivee: '',
            heureDepart: ''
        };
        this.mardi = {
            heureArrivee: '',
            heureDepart: ''
        };
        this.mercredi = {
            heureArrivee: '',
            heureDepart: ''
        };
        this.jeudi = {
            heureArrivee: '',
            heureDepart: ''
        };
        this.vendredi = {
            heureArrivee: '',
            heureDepart: ''
        };
        this.samedi = {
            heureArrivee: '',
            heureDepart: ''
        };
        this.dimanche = {
            heureArrivee: '',
            heureDepart: ''
        };
    }
    return Planning;
}());



/***/ }),

/***/ "./src/app/classes/profilNounou.ts":
/*!*****************************************!*\
  !*** ./src/app/classes/profilNounou.ts ***!
  \*****************************************/
/*! exports provided: profilNounou */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profilNounou", function() { return profilNounou; });
var profilNounou = /** @class */ (function () {
    function profilNounou() {
    }
    return profilNounou;
}());



/***/ }),

/***/ "./src/app/classes/user.ts":
/*!*********************************!*\
  !*** ./src/app/classes/user.ts ***!
  \*********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(pId, pEmail, pMdp, pStatus) {
        (pEmail) ? this.email = pEmail : this.email = '';
        (pMdp) ? this.mdp = pMdp : this.mdp = '';
        (pStatus) ? this.status = pStatus : this.status = 'Visiteur';
        this.isConnected = false;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/components/connexion/connexion.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/connexion/connexion.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf='user.isConnected; else elseBlock'>\n  <mat-card>\n      <mat-card-header>            \n              <mat-card-title><h3>{{personne.prenom}}</h3></mat-card-title>\n              <mat-card-title><h3>{{personne.nom}}</h3></mat-card-title>\n          <img #avatar mat-card-avatar mat-card-md-image [src]=\"personne.urlPhoto\" >\n          <mat-card-subtitle><a routerLink='/' (click)='deconnexion()'>Déconnexion</a></mat-card-subtitle>\n      </mat-card-header> \n  </mat-card>    \n</div>\n<ng-template #elseBlock>  \n    <form [formGroup]=\"userForm\">\n        <mat-card>\n            <mat-icon>email</mat-icon>\n            <mat-form-field>\n                <input matInput type=\"text\" formControlName=\"email\" placeholder='E-mail'>                \n            </mat-form-field>\n            <br><i class=\"material-icons prefix\">vpn_key</i>\n            <mat-form-field>\n                <input matInput type=\"password\" formControlName=\"mdp\" placeholder='Mot de passe'>\n                <mat-error></mat-error>\n            </mat-form-field><br>     \n            <button mat-raised-button color=\"primary\" [disabled]=\"userForm.invalid\" (click)=\"connexion()\" name=\"btnEnvoi\" class = \"btn z-depth-4\">Connexion</button><br/>         \n            <br><a routerLink=\"/signUp\">S'inscrire </a>\n        </mat-card>\n    </form>    \n</ng-template>"

/***/ }),

/***/ "./src/app/components/connexion/connexion.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/connexion/connexion.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/connexion/connexion.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/connexion/connexion.component.ts ***!
  \*************************************************************/
/*! exports provided: ConnexionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnexionComponent", function() { return ConnexionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes/user */ "./src/app/classes/user.ts");
/* harmony import */ var _classes_personne__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes/personne */ "./src/app/classes/personne.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_personnes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/personnes.service */ "./src/app/services/personnes.service.ts");
/* harmony import */ var _services_error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/error-handler.service */ "./src/app/services/error-handler.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ConnexionComponent = /** @class */ (function () {
    function ConnexionComponent(serviceUsers, servicePersonne, snackBar, formBuilder, serviceErreur) {
        this.serviceUsers = serviceUsers;
        this.servicePersonne = servicePersonne;
        this.snackBar = snackBar;
        this.formBuilder = formBuilder;
        this.serviceErreur = serviceErreur;
        this.user = new _classes_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.personne = new _classes_personne__WEBPACK_IMPORTED_MODULE_2__["Personne"]();
    }
    ConnexionComponent.prototype.connexion = function () {
        //lors du clic sur le bouton connexion dans le formulaire
        var formulaire = this.userForm.value;
        var userTemp = new _classes_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        userTemp.email = formulaire['email'];
        userTemp.mdp = formulaire['mdp'];
        this.serviceUsers.signIn(userTemp);
    };
    //Déconnecte l'utilisateur
    ConnexionComponent.prototype.deconnexion = function () {
        this.serviceUsers.signOut();
    };
    ConnexionComponent.prototype.initializeForm = function () {
        this.userForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            mdp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
        });
    };
    ConnexionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initializeForm();
        this.souscriptionPersonne = this.servicePersonne.subjectPersonne.subscribe(function (personne) {
            //La connexion a été établie, on a récupéré les données de la personne connectée
            _this.personne = personne;
            _this.snackBar.open("Bienvenue " + ((_this.personne.prenom) ? _this.personne.prenom : "visiteur") + '.', 'Fermer', {
                duration: 2500
            });
        }, 
        //une erreur s'est produite
        function (error) {
            _this.serviceErreur.afficheErreur("Erreur lors de la connexion de l'utilisateur", error);
        });
        this.souscriptionUser = this.serviceUsers.subjectUser.subscribe(function (user) {
            _this.user = user;
        }, function (error) {
            _this.serviceErreur.afficheErreur("Erreur lors de la connexion de l'utilisateur", error);
        });
        if (this.userForm.value['email'] != '' && this.userForm.value['mdp'] != '')
            this.connexion();
    };
    ConnexionComponent.prototype.ngOnDestroy = function () {
        this.souscriptionUser.unsubscribe();
        this.souscriptionPersonne.unsubscribe();
    };
    ConnexionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-connexion',
            template: __webpack_require__(/*! ./connexion.component.html */ "./src/app/components/connexion/connexion.component.html"),
            styles: [__webpack_require__(/*! ./connexion.component.scss */ "./src/app/components/connexion/connexion.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"],
            _services_personnes_service__WEBPACK_IMPORTED_MODULE_4__["PersonnesService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _services_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlerService"]])
    ], ConnexionComponent);
    return ConnexionComponent;
}());



/***/ }),

/***/ "./src/app/components/contrat/contrat.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contrat/contrat.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>   \n  <mat-tab label=\"Renseignements\"> \n    <form [formGroup]='userForm'>   \n      <div>\n        <h3 class='h3-contrat'><mat-icon matPrefix>child_care</mat-icon> Enfant</h3> \n        <mat-divider></mat-divider>\n        <mat-form-field>\n          <input matInput placeholder=\"Nom\" formControlName='enfantNom' required>\n          <mat-error *ngIf=\"userForm.invalid\">Champ requis invalide</mat-error>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Prénom\" formControlName='enfantPrenom' required>\n          <mat-error *ngIf=\"userForm.invalid\">Champ requis invalide</mat-error>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput [matDatepicker]='dateNaissanceEnfant' placeholder=\"Date de naissance\" formControlName=\"enfantDateNaissance\">\n          <mat-datepicker-toggle matPrefix [for]='dateNaissanceEnfant'></mat-datepicker-toggle>\n          <mat-datepicker #dateNaissanceEnfant></mat-datepicker>\n        </mat-form-field>\n      </div> \n      <div>\n        <h3 class='h3-contrat'><mat-icon matPrefix>supervisor_account</mat-icon> Mère</h3>\n        <mat-divider></mat-divider>\n        <mat-form-field>\n          <input matInput placeholder=\"Nom\" formControlName='mereNom' required>\n          <mat-error *ngIf=\"userForm.invalid\">Champ requis invalide</mat-error>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Prénom\" formControlName='merePrenom' required>\n          <mat-error *ngIf=\"userForm.invalid\">Champ requis invalide</mat-error>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"E-mail\" formControlName='mereMail'>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Adresse\" formControlName='mereAdresse'>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Numéro de téléphone\" formControlName='mereTelPortable'>\n        </mat-form-field>\n      </div>\n      <div>\n        <h3 class='h3-contrat'><mat-icon matPrefix>supervisor_account</mat-icon> Père</h3>\n        <mat-divider></mat-divider>\n        <mat-form-field>\n          <input matInput placeholder=\"Nom\" formControlName='pereNom' required>\n          <mat-error *ngIf=\"userForm.invalid\">Champ requis invalide</mat-error>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Prénom\" formControlName='perePrenom' required>\n          <mat-error *ngIf=\"userForm.invalid\">Champ requis invalide</mat-error>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"E-mail\" formControlName='pereMail'>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Adresse\" formControlName='pereAdresse'>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Numéro de téléphone\" formControlName='pereTelPortable'>\n        </mat-form-field>\n      </div>\n      <div>\n        <h3 class='h3-contrat'><mat-icon matPrefix>person</mat-icon> Tuteur</h3>\n        <mat-divider></mat-divider>\n        <mat-form-field>\n          <input matInput placeholder=\"Nom\" formControlName='tuteurNom'>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Prénom\" formControlName='tuteurPrenom'>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Numéro de téléphone\" formControlName='tuteurTelPortable'>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Adresse\" formControlName='tuteurAdresse'>\n        </mat-form-field>\n      </div>\n      <div>\n        <h3 class='h3-contrat'><mat-icon matPrefix>local_hospital</mat-icon> Médecin de famille</h3>\n        <mat-divider></mat-divider>\n        <mat-form-field>\n          <input matInput placeholder=\"Nom\" formControlName='medecinNom'>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Prénom\" formControlName='medecinPrenom'>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Numéro de téléphone\" formControlName='medecinTelPortable'>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Adresse\" formControlName='medecinAdresse'>\n        </mat-form-field>\n      </div>\n    </form>\n  </mat-tab>\n  <mat-tab label=\"Contrat\"> \n    <form [formGroup]='userForm'> \n      <h3 class=\"h3-contrat\"><mat-icon matPrefix>home</mat-icon><i>Conditions d'accueil </i></h3>\n      <mat-divider></mat-divider>\n      <div>\n        <mat-form-field>\n          <input matInput placeholder=\"Moy d'heures par semaine\" formControlName=\"nbHeuresGardeSemaine\" (keyup)='majNbHeuresGardeSemaine()'>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Moy de semaines par an\" formControlName=\"nbSemainesGardeAn\" (keyup)='majNbSemainesGardeAn()'>\n        </mat-form-field>  \n        <mat-form-field>\n          <input matInput placeholder=\"Nb de jours par semaine\" formControlName=\"nbJoursGardeSemaine\" (keyup)='majNbJoursGardeSemaine()'>\n        </mat-form-field>               \n      </div>\n      <div>\n        <mat-form-field>\n          <input matInput  placeholder=\"Moy d'heures par mois\" formControlName=\"moyNbHeuresGardeMois\">\n        </mat-form-field>\n        <mat-form-field>\n            <input matInput placeholder=\"Moy de jours par mois\" formControlName=\"moyNbJoursGardeMois\">\n          </mat-form-field>\n        <mat-form-field>\n          <input matInput [min]='minDateDebut' [matDatepicker]=\"datePickerDebut\" placeholder=\"Date de début du contrat\" formControlName=\"dateDebut\">\n          <mat-datepicker-toggle matPrefix [for]='datePickerDebut'></mat-datepicker-toggle>\n          <mat-datepicker #datePickerDebut></mat-datepicker>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput [min]='minDateDebut' [matDatepicker]='datePickerfin' placeholder=\"Date de fin du contrat\" formControlName=\"dateFin\">\n          <mat-datepicker-toggle matPrefix [for]='datePickerfin'></mat-datepicker-toggle>\n          <mat-datepicker #datePickerfin></mat-datepicker>\n        </mat-form-field>        \n      </div> \n      <h3 class=\"h3-contrat\"><mat-icon matPrefix>euro_symbol</mat-icon><i> Rémunération</i></h3> \n      <mat-divider></mat-divider>\n      <div>\n        <mat-form-field>\n          <input matInput placeholder=\"Taux horaire brut\" formControlName=\"tauxHoraireBrut\" >          \n          <span matSuffix><mat-icon>euro_symbol</mat-icon></span>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Taux horaire net\" formControlName=\"tauxHoraireNet\" (keyup)='majTauxHoraireNet()'>\n          <span matSuffix><mat-icon>euro_symbol</mat-icon></span>\n        </mat-form-field>        \n      </div>\n      <div>\n        <mat-form-field>\n          <input matInput placeholder=\"Salaire brut mensuel\" formControlName=\"salaireBaseBrut\">\n          <span matSuffix><mat-icon>euro_symbol</mat-icon></span> \n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Montant CP brut contrat\" formControlName=\"congesPayesBaseBrut\">\n          <span matSuffix><mat-icon>euro_symbol</mat-icon></span>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Total salaire brut mensuel\" formControlName=\"salaireTotalBaseBrut\">\n          <span matSuffix><mat-icon>euro_symbol</mat-icon></span>\n        </mat-form-field>        \n      </div>\n      <div>\n        <mat-form-field>\n          <input matInput placeholder=\"Salaire net mensuel\" formControlName=\"salaireBaseNet\">\n          <span matSuffix><mat-icon>euro_symbol</mat-icon></span>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Montant CP net contrat\" formControlName=\"congesPayesBaseNet\">\n          <span matSuffix><mat-icon>euro_symbol</mat-icon></span>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Total salaire net mensuel\" formControlName=\"salaireTotalBaseNet\">\n          <span matSuffix><mat-icon>euro_symbol</mat-icon></span>\n        </mat-form-field>\n      </div>\n      <h3 class=\"h3-contrat\"><mat-icon matPrefix>restaurant_menu</mat-icon><i>Indemnités</i></h3>\n      <mat-divider></mat-divider>\n      <div>\n        <mat-form-field>\n          <input matInput placeholder=\"Repas\" formControlName=\"montantRepas\">\n          <span matSuffix><mat-icon>euro_symbol</mat-icon></span>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"indemnités jounalières\" formControlName=\"montantIndemnites\">\n          <span matSuffix><mat-icon>euro_symbol</mat-icon></span>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Goûter\" formControlName=\"montantGouter\">\n          <span matSuffix><mat-icon>euro_symbol</mat-icon></span>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Barème kilométrique\" formControlName=\"baremeKm\">\n          <span matSuffix><mat-icon>euro_symbol</mat-icon></span>\n        </mat-form-field>\n      </div>      \n    </form>\n  </mat-tab>\n  <mat-tab label=\"Planning\">\n    <form [formGroup]='userForm'>\n      <mat-divider></mat-divider>\n      <h3 class='h3-contrat'><u><i>Lundi</i></u></h3>\n      <label>Heure d'arrivée : </label>\n      <mat-form-field>\n        <input matInput placeholder=\"HH:MM\" formControlName='lundiArrivee'>\n      </mat-form-field>\n      <label>Heure de départ : </label>\n      <mat-form-field>\n        <input matInput placeholder=\"HH:MM\" formControlName='lundiDepart'>\n      </mat-form-field>  \n      <h3 class='h3-contrat'><u><i>Mardi</i></u></h3>\n      <label>Heure d'arrivée : </label>\n      <mat-form-field>\n        <input matInput placeholder=\"HH:MM\" formControlName='mardiArrivee'>\n      </mat-form-field>\n      <label>Heure de départ : </label>\n      <mat-form-field>\n        <input matInput placeholder=\"HH:MM\" formControlName='mardiDepart'>\n      </mat-form-field>\n      <h3 class='h3-contrat'><u><i>Mercredi</i></u></h3>\n      <label>Heure d'arrivée : </label>\n      <mat-form-field>\n        <input matInput placeholder=\"HH:MM\" formControlName='mercrediArrivee'>\n      </mat-form-field>\n      <label>Heure de départ : </label>\n      <mat-form-field>\n        <input matInput placeholder=\"HH:MM\" formControlName='mercrediDepart'>\n      </mat-form-field>\n      <h3 class='h3-contrat'><u><i>Jeudi</i></u></h3>\n      <label>Heure d'arrivée : </label>\n      <mat-form-field>\n        <input matInput placeholder=\"HH:MM\" formControlName='jeudiArrivee'>\n      </mat-form-field>\n      <label>Heure de départ : </label>\n      <mat-form-field>\n        <input matInput placeholder=\"HH:MM\" formControlName='jeudiDepart'>\n      </mat-form-field>\n      <h3 class='h3-contrat'><u><i>Vendredi</i></u></h3>\n      <label>Heure d'arrivée : </label>\n      <mat-form-field>\n        <input matInput placeholder=\"HH:MM\" formControlName='vendrediArrivee'>\n      </mat-form-field>\n      <label>Heure de départ : </label>\n      <mat-form-field>\n        <input matInput placeholder=\"HH:MM\" formControlName='vendrediDepart'>\n      </mat-form-field>\n      <h3 class='h3-contrat'><u><i>Samedi</i></u></h3>\n      <label>Heure d'arrivée : </label>\n      <mat-form-field>\n        <input matInput placeholder=\"HH:MM\" formControlName='samediArrivee'>\n      </mat-form-field>\n      <label>Heure de départ : </label>\n      <mat-form-field>\n        <input matInput placeholder=\"HH:MM\" formControlName='samediDepart'>\n      </mat-form-field>\n      <h3 class='h3-contrat'><u><i>Dimanche</i></u></h3>\n      <label>Heure d'arrivée : </label>\n      <mat-form-field>\n        <input matInput placeholder=\"HH:MM\" formControlName='dimancheArrivee'>\n      </mat-form-field>\n      <label>Heure de départ : </label>\n      <mat-form-field>\n        <input matInput placeholder=\"HH:MM\" formControlName='dimancheDepart'>\n      </mat-form-field>   \n    </form>\n  </mat-tab>\n</mat-tab-group>\n<a routerLink='' mat-raised-button> \n  <mat-icon matPrefix>cancel</mat-icon>\n  Annuler\n</a>\n<button mat-raised-button [disabled]=\"userForm.invalid\" color=\"primary\" (click)='envoiContrat()'>\n<!-- <button mat-raised-button color=\"primary\" (click)='envoiContrat()'> -->\n  Valider le contrat\n  <mat-icon matSuffix>send</mat-icon>\n</button>"

/***/ }),

/***/ "./src/app/components/contrat/contrat.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/contrat/contrat.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/contrat/contrat.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contrat/contrat.component.ts ***!
  \*********************************************************/
/*! exports provided: ContratComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContratComponent", function() { return ContratComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _classes_donneesContrat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes/donneesContrat */ "./src/app/classes/donneesContrat.ts");
/* harmony import */ var _classes_contrat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../classes/contrat */ "./src/app/classes/contrat.ts");
/* harmony import */ var _classes_planning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../classes/planning */ "./src/app/classes/planning.ts");
/* harmony import */ var _classes_personne__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../classes/personne */ "./src/app/classes/personne.ts");
/* harmony import */ var _services_profil_nounou_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/profil-nounou.service */ "./src/app/services/profil-nounou.service.ts");
/* harmony import */ var _services_contrat_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/contrat.service */ "./src/app/services/contrat.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ContratComponent = /** @class */ (function () {
    function ContratComponent(formBuilder, serviceProfilNounou, serviceContrat, router, snackBar, adapter) {
        this.formBuilder = formBuilder;
        this.serviceProfilNounou = serviceProfilNounou;
        this.serviceContrat = serviceContrat;
        this.router = router;
        this.snackBar = snackBar;
        this.adapter = adapter;
        this.donneesContrat = new _classes_donneesContrat__WEBPACK_IMPORTED_MODULE_2__["DonneesContrat"]();
    }
    ContratComponent.prototype.envoiContrat = function () {
        var _this = this;
        var formulaire = this.userForm.value;
        // Données enfant
        this.donneesContrat.enfant.nom = formulaire['enfantNom'];
        this.donneesContrat.enfant.prenom = formulaire['enfantPrenom'];
        this.donneesContrat.enfant.dateNaissance = formulaire['enfantDateNaissance'];
        this.donneesContrat.enfant.status = 'Enfant';
        this.donneesContrat.enfant.actif = true;
        this.donneesContrat.enfant.urlPhoto = 'https://firebasestorage.googleapis.com/v0/b/marilyne-royer.appspot.com/o/avatars%2Fdefaut-enfant.png?alt=media&token=db7a591b-3eb3-4973-9a63-a283de87dc69';
        // Données mère
        this.donneesContrat.mere.nom = formulaire['mereNom'];
        this.donneesContrat.mere.prenom = formulaire['merePrenom'];
        this.donneesContrat.mere.mail = formulaire['mereMail'];
        this.donneesContrat.mere.adresse = formulaire['mereAdresse'];
        this.donneesContrat.mere.telPortable = formulaire['mereTelPortable'];
        this.donneesContrat.mere.actif = true;
        this.donneesContrat.mere.status = 'Parent';
        this.donneesContrat.mere.urlPhoto = 'https://firebasestorage.googleapis.com/v0/b/marilyne-royer.appspot.com/o/avatars%2Fdefaut-femme.png?alt=media&token=42d68cc1-1e62-4ddd-a57d-cd5f2ca428ea';
        // Données père
        this.donneesContrat.pere.nom = formulaire['pereNom'];
        this.donneesContrat.pere.prenom = formulaire['perePrenom'];
        this.donneesContrat.pere.mail = formulaire['pereMail'];
        this.donneesContrat.pere.adresse = formulaire['pereAdresse'];
        this.donneesContrat.pere.telPortable = formulaire['pereTelPortable'];
        this.donneesContrat.pere.actif = true;
        this.donneesContrat.pere.status = 'Parent';
        this.donneesContrat.pere.urlPhoto = 'https://firebasestorage.googleapis.com/v0/b/marilyne-royer.appspot.com/o/avatars%2Fdefaut-homme.png?alt=media&token=9a9fc729-52ee-4be1-af69-3ad4b1ee9c22';
        // Données tuteur
        this.donneesContrat.tuteur.nom = formulaire['tuteurNom'];
        this.donneesContrat.tuteur.prenom = formulaire['tuteurPrenom'];
        this.donneesContrat.tuteur.telPortable = formulaire['tuteurTelPortable'];
        this.donneesContrat.tuteur.adresse = formulaire['pereAdresse'];
        this.donneesContrat.tuteur.actif = true;
        this.donneesContrat.tuteur.status = 'Tuteur';
        this.donneesContrat.tuteur.urlPhoto = 'https://firebasestorage.googleapis.com/v0/b/marilyne-royer.appspot.com/o/avatars%2Fdefaut-homme.png?alt=media&token=9a9fc729-52ee-4be1-af69-3ad4b1ee9c22';
        // Données medecin
        this.donneesContrat.docteur.nom = formulaire['medecinNom'];
        this.donneesContrat.docteur.prenom = formulaire['medecinPrenom'];
        this.donneesContrat.docteur.telPortable = formulaire['medecinTelPortable'];
        this.donneesContrat.docteur.adresse = formulaire['medecinAdresse'];
        this.donneesContrat.docteur.actif = true;
        this.donneesContrat.docteur.status = 'Medecin';
        this.donneesContrat.docteur.urlPhoto = 'https://firebasestorage.googleapis.com/v0/b/marilyne-royer.appspot.com/o/avatars%2Fdefaut-medecin.png?alt=media&token=74076e51-de2b-410d-95cc-39d013bacb02';
        // Données contrat déjà remplies
        // Données planning
        this.donneesContrat.planning.lundi.heureArrivee = formulaire['lundiArrivee'];
        this.donneesContrat.planning.lundi.heureDepart = formulaire['lundiDepart'];
        this.donneesContrat.planning.mardi.heureArrivee = formulaire['mardiArrivee'];
        this.donneesContrat.planning.mardi.heureDepart = formulaire['mardiDepart'];
        this.donneesContrat.planning.mercredi.heureArrivee = formulaire['mercrediArrivee'];
        this.donneesContrat.planning.mercredi.heureDepart = formulaire['mercrediDepart'];
        this.donneesContrat.planning.jeudi.heureArrivee = formulaire['jeudiArrivee'];
        this.donneesContrat.planning.jeudi.heureDepart = formulaire['jeudiDepart'];
        this.donneesContrat.planning.vendredi.heureArrivee = formulaire['vendrediArrivee'];
        this.donneesContrat.planning.vendredi.heureDepart = formulaire['vendrediDepart'];
        this.donneesContrat.planning.samedi.heureArrivee = formulaire['samediArrivee'];
        this.donneesContrat.planning.samedi.heureDepart = formulaire['samediDepart'];
        this.donneesContrat.planning.dimanche.heureArrivee = formulaire['dimancheArrivee'];
        this.donneesContrat.planning.dimanche.heureDepart = formulaire['dimancheDepart'];
        //Appeler la méthode du service   
        this.serviceContrat.registerNewContrat(this.donneesContrat).subscribe(function (retour) {
            if (retour) {
                _this.snackBar.open('Enregistrement effectué', 'Fermer', {
                    duration: 2500
                });
            }
        });
    };
    ContratComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adapter.setLocale('fr-FR');
        this.initForm();
        this.getProfilNounou();
        this.donneesContrat = new _classes_donneesContrat__WEBPACK_IMPORTED_MODULE_2__["DonneesContrat"]();
        this.donneesContrat.contrat = new _classes_contrat__WEBPACK_IMPORTED_MODULE_3__["Contrat"]();
        this.donneesContrat.enfant = new _classes_personne__WEBPACK_IMPORTED_MODULE_5__["Personne"]();
        this.donneesContrat.mere = new _classes_personne__WEBPACK_IMPORTED_MODULE_5__["Personne"]();
        this.donneesContrat.pere = new _classes_personne__WEBPACK_IMPORTED_MODULE_5__["Personne"]();
        this.donneesContrat.docteur = new _classes_personne__WEBPACK_IMPORTED_MODULE_5__["Personne"]();
        this.donneesContrat.tuteur = new _classes_personne__WEBPACK_IMPORTED_MODULE_5__["Personne"]();
        this.donneesContrat.planning = new _classes_planning__WEBPACK_IMPORTED_MODULE_4__["Planning"]();
        this.userForm.get('nbHeuresGardeSemaine').valueChanges.subscribe(function (valeur) { _this.donneesContrat.contrat.nbHeuresGardeSemaine = valeur; });
        this.userForm.get('nbSemainesGardeAn').valueChanges.subscribe(function (valeur) { _this.donneesContrat.contrat.nbSemainesGardeAn = valeur; });
        this.userForm.get('nbJoursGardeSemaine').valueChanges.subscribe(function (valeur) { _this.donneesContrat.contrat.nbJoursGardeSemaine = valeur; });
        this.userForm.get('moyNbHeuresGardeMois').valueChanges.subscribe(function (valeur) { _this.donneesContrat.contrat.moyNbHeuresGardeMois = valeur; });
        this.userForm.get('moyNbJoursGardeMois').valueChanges.subscribe(function (valeur) { _this.donneesContrat.contrat.moyNbJoursGardeMois = valeur; });
        this.userForm.get('tauxHoraireBrut').valueChanges.subscribe(function (valeur) { _this.donneesContrat.contrat.tauxHoraireBrut = valeur; });
        this.userForm.get('tauxHoraireNet').valueChanges.subscribe(function (valeur) { _this.donneesContrat.contrat.tauxHoraireNet = valeur; });
        this.userForm.get('salaireBaseBrut').valueChanges.subscribe(function (valeur) { _this.donneesContrat.contrat.salaireBaseBrut = valeur; });
        this.userForm.get('congesPayesBaseBrut').valueChanges.subscribe(function (valeur) { _this.donneesContrat.contrat.congesPayesBaseBrut = valeur; });
        this.userForm.get('salaireTotalBaseBrut').valueChanges.subscribe(function (valeur) { _this.donneesContrat.contrat.salaireTotalBaseBrut = valeur; });
        this.userForm.get('salaireBaseNet').valueChanges.subscribe(function (valeur) { _this.donneesContrat.contrat.salaireBaseNet = valeur; });
        this.userForm.get('congesPayesBaseNet').valueChanges.subscribe(function (valeur) { _this.donneesContrat.contrat.congesPayesBaseNet = valeur; });
        this.userForm.get('salaireTotalBaseNet').valueChanges.subscribe(function (valeur) { _this.donneesContrat.contrat.salaireTotalBaseNet = valeur; });
        this.userForm.get('montantRepas').valueChanges.subscribe(function (valeur) { _this.donneesContrat.contrat.montantRepas = valeur; });
        this.userForm.get('montantIndemnites').valueChanges.subscribe(function (valeur) { _this.donneesContrat.contrat.montantIndemnites = valeur; });
        this.userForm.get('montantGouter').valueChanges.subscribe(function (valeur) { _this.donneesContrat.contrat.montantGouter = valeur; });
        this.userForm.get('baremeKm').valueChanges.subscribe(function (valeur) { _this.donneesContrat.contrat.baremeKm = valeur; });
    };
    ContratComponent.prototype.initForm = function () {
        this.userForm = this.formBuilder.group({
            enfantNom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            enfantPrenom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            enfantDateNaissance: [''],
            mereNom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            merePrenom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            mereMail: [''],
            mereAdresse: [''],
            mereTelPortable: [''],
            pereNom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            perePrenom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pereMail: [''],
            pereAdresse: [''],
            pereTelPortable: [''],
            tuteurNom: [''],
            tuteurPrenom: [''],
            tuteurTelPortable: [''],
            tuteurAdresse: [''],
            medecinNom: [''],
            medecinPrenom: [''],
            medecinTelPortable: [''],
            medecinAdresse: [''],
            nbHeuresGardeSemaine: [''],
            nbSemainesGardeAn: [''],
            nbJoursGardeSemaine: [''],
            moyNbHeuresGardeMois: [''],
            moyNbJoursGardeMois: [''],
            dateDebut: [''],
            dateFin: [''],
            tauxHoraireBrut: [''],
            tauxHoraireNet: [''],
            salaireBaseBrut: [''],
            congesPayesBaseBrut: [''],
            salaireTotalBaseBrut: [''],
            salaireBaseNet: [''],
            congesPayesBaseNet: [''],
            datesalaireTotalBaseNetFin: [''],
            salaireTotalBaseNet: [''],
            montantRepas: [''],
            montantIndemnites: [''],
            montantGouter: [''],
            baremeKm: [''],
            lundiArrivee: [''],
            lundiDepart: [''],
            mardiArrivee: [''],
            mardiDepart: [''],
            mercrediArrivee: [''],
            mercrediDepart: [''],
            jeudiArrivee: [''],
            jeudiDepart: [''],
            vendrediArrivee: [''],
            vendrediDepart: [''],
            samediArrivee: [''],
            samediDepart: [''],
            dimancheArrivee: [''],
            dimancheDepart: ['']
        });
    };
    ContratComponent.prototype.getProfilNounou = function () {
        var _this = this;
        this.serviceProfilNounou.getProfilFromServer().subscribe(function (profil) {
            if (profil) {
                _this.userForm.get('montantRepas').setValue(profil.montantRepas);
                _this.userForm.get('montantIndemnites').setValue(profil.montantIndemnites);
                _this.userForm.get('montantGouter').setValue(profil.montantGouters);
                _this.userForm.get('baremeKm').setValue(profil.baremeKm);
                _this.userForm.get('tauxHoraireNet').setValue(profil.tauxHoraire);
            }
        });
    };
    // Convertit l'objet retourné par le service pour l'affichage dans le service
    ContratComponent.prototype.mapObjetContratVersFormulaire = function (pContrat) {
        this.userForm.get('baremeKm').setValue(Number(pContrat.baremeKm).toFixed(2));
        this.userForm.get('congesPayesBaseBrut').setValue(Number(pContrat.congesPayesBaseBrut).toFixed(2));
        this.userForm.get('congesPayesBaseNet').setValue(Number(pContrat.congesPayesBaseNet).toFixed(2));
        this.userForm.get('montantGouter').setValue(Number(pContrat.montantGouter).toFixed(2));
        this.userForm.get('montantIndemnites').setValue(Number(pContrat.montantIndemnites).toFixed(2));
        this.userForm.get('montantRepas').setValue(Number(pContrat.montantRepas).toFixed(2));
        this.userForm.get('moyNbHeuresGardeMois').setValue(Number(pContrat.moyNbHeuresGardeMois).toFixed(2));
        this.userForm.get('moyNbJoursGardeMois').setValue(Number(pContrat.moyNbJoursGardeMois).toFixed(2));
        this.userForm.get('nbHeuresGardeSemaine').setValue(pContrat.nbHeuresGardeSemaine);
        this.userForm.get('nbJoursGardeSemaine').setValue(pContrat.nbJoursGardeSemaine);
        this.userForm.get('nbSemainesGardeAn').setValue(pContrat.nbSemainesGardeAn);
        this.userForm.get('salaireBaseBrut').setValue(Number(pContrat.salaireBaseBrut).toFixed(2));
        this.userForm.get('salaireBaseNet').setValue(Number(pContrat.salaireBaseNet).toFixed(2));
        this.userForm.get('salaireTotalBaseBrut').setValue(Number(pContrat.salaireTotalBaseBrut).toFixed(2));
        this.userForm.get('salaireTotalBaseNet').setValue(Number(pContrat.salaireTotalBaseNet).toFixed(2));
        this.userForm.get('tauxHoraireBrut').setValue(Number(pContrat.tauxHoraireBrut).toFixed(2));
        this.userForm.get('tauxHoraireNet').setValue(Number(pContrat.tauxHoraireNet).toFixed(2));
    };
    // Convertit les données présentes dans le formulaire dans un objet pour travail dans le service
    ContratComponent.prototype.mapValeursFormulaireVersObjetContrat = function () {
        console.log(parseFloat(this.userForm.get('congesPayesBaseBrut').value));
        var retour = new _classes_contrat__WEBPACK_IMPORTED_MODULE_3__["Contrat"]();
        retour.baremeKm = parseFloat(this.userForm.get('baremeKm').value);
        retour.congesPayesBaseBrut = parseFloat(this.userForm.get('congesPayesBaseBrut').value);
        retour.congesPayesBaseNet = parseFloat(this.userForm.get('congesPayesBaseNet').value);
        retour.montantGouter = parseFloat(this.userForm.get('montantGouter').value);
        retour.montantIndemnites = parseFloat(this.userForm.get('montantIndemnites').value);
        retour.montantRepas = parseFloat(this.userForm.get('montantRepas').value);
        retour.moyNbHeuresGardeMois = parseFloat(this.userForm.get('moyNbHeuresGardeMois').value);
        retour.moyNbJoursGardeMois = parseFloat(this.userForm.get('moyNbJoursGardeMois').value);
        retour.nbHeuresGardeSemaine = parseFloat(this.userForm.get('nbHeuresGardeSemaine').value);
        retour.nbJoursGardeSemaine = parseFloat(this.userForm.get('nbJoursGardeSemaine').value);
        retour.nbSemainesGardeAn = parseFloat(this.userForm.get('nbSemainesGardeAn').value);
        retour.salaireBaseBrut = parseFloat(this.userForm.get('salaireBaseBrut').value);
        retour.salaireBaseNet = parseFloat(this.userForm.get('salaireBaseNet').value);
        retour.salaireTotalBaseBrut = parseFloat(this.userForm.get('salaireTotalBaseBrut').value);
        retour.salaireTotalBaseNet = parseFloat(this.userForm.get('salaireTotalBaseNet').value);
        retour.tauxHoraireBrut = parseFloat(this.userForm.get('tauxHoraireBrut').value);
        retour.tauxHoraireNet = parseFloat(this.userForm.get('tauxHoraireNet').value);
        return retour;
    };
    ContratComponent.prototype.majNbHeuresGardeSemaine = function () {
        var _this = this;
        this.serviceContrat.majContratCalculMontants(this.donneesContrat.contrat).subscribe(function (retour) {
            if (retour)
                _this.mapObjetContratVersFormulaire(retour);
        });
    };
    ContratComponent.prototype.majNbSemainesGardeAn = function () {
        var _this = this;
        this.serviceContrat.majContratCalculMontants(this.donneesContrat.contrat).subscribe(function (retour) {
            if (retour)
                _this.mapObjetContratVersFormulaire(retour);
        });
    };
    ContratComponent.prototype.majNbJoursGardeSemaine = function () {
        var _this = this;
        this.serviceContrat.majContratCalculMontants(this.donneesContrat.contrat).subscribe(function (retour) {
            if (retour)
                _this.mapObjetContratVersFormulaire(retour);
        });
    };
    ContratComponent.prototype.majTauxHoraireNet = function () {
        var _this = this;
        this.serviceContrat.majContratCalculMontants(this.donneesContrat.contrat).subscribe(function (retour) {
            if (retour)
                _this.mapObjetContratVersFormulaire(retour);
        });
    };
    ContratComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contrat',
            template: __webpack_require__(/*! ./contrat.component.html */ "./src/app/components/contrat/contrat.component.html"),
            styles: [__webpack_require__(/*! ./contrat.component.scss */ "./src/app/components/contrat/contrat.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_profil_nounou_service__WEBPACK_IMPORTED_MODULE_6__["ProfilNounouService"],
            _services_contrat_service__WEBPACK_IMPORTED_MODULE_7__["ContratService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["DateAdapter"]])
    ], ContratComponent);
    return ContratComponent;
}());



/***/ }),

/***/ "./src/app/components/liste-contrats/liste-contrats.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/liste-contrats/liste-contrats.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  liste-contrats works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/liste-contrats/liste-contrats.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/liste-contrats/liste-contrats.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/liste-contrats/liste-contrats.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/liste-contrats/liste-contrats.component.ts ***!
  \***********************************************************************/
/*! exports provided: ListeContratsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListeContratsComponent", function() { return ListeContratsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListeContratsComponent = /** @class */ (function () {
    function ListeContratsComponent() {
    }
    ListeContratsComponent.prototype.ngOnInit = function () {
    };
    ListeContratsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-liste-contrats',
            template: __webpack_require__(/*! ./liste-contrats.component.html */ "./src/app/components/liste-contrats/liste-contrats.component.html"),
            styles: [__webpack_require__(/*! ./liste-contrats.component.scss */ "./src/app/components/liste-contrats/liste-contrats.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ListeContratsComponent);
    return ListeContratsComponent;
}());



/***/ }),

/***/ "./src/app/components/liste-personnes/liste-personnes.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/liste-personnes/liste-personnes.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"conteneur\">  \n    <ng-container *ngFor=\"let temp of listePersonnes\"> \n        <mat-card class=\"myMatCard\" *ngIf=\"temp.actif\">\n            <mat-card-title-group class=\"myTitleCard\">            \n                <mat-card-title>{{temp.prenom}} {{temp.nom}}</mat-card-title> \n                <mat-card-subtitle>{{temp.status}}</mat-card-subtitle>\n            </mat-card-title-group> \n            <img mat-card-image class=\"imageMatCard\" src=\"{{temp.urlPhoto}}\">\n            <mat-card-actions>\n                <button mat-raised-button color=\"accent\" (click)=\"onUpdateProfil(temp)\"\n                    matTooltip=\"Voir les détails de la personne\">Détails \n                </button>\n                <button *ngIf=\"temp.actif\" mat-raised-button color=\"primary\" (click)=\"onDesactiver(temp)\"\n                    matTooltip=\"Désactiver la personne\">Désactiver\n                </button>\n                <button *ngIf=\"!temp.actif\" mat-raised-button color=\"primary\" (click)=\"onActiver(temp)\"\n                    matTooltip=\"Activer la personne\">Activer\n                </button> \n            </mat-card-actions>\n        </mat-card>\n        <ng-container *ngIf=\"filtre\">\n            <mat-card *ngIf=\"!temp.actif\" class=\"myMatCard\" [ngClass]=\"{'myMatCard-desactive':temp.actif===false}\">\n                <mat-card-title-group class=\"myTitleCard\">            \n                    <mat-card-title>{{temp.prenom}} {{temp.nom}}</mat-card-title> \n                    <mat-card-subtitle>{{temp.status}}</mat-card-subtitle>\n                </mat-card-title-group> \n                <img mat-card-image class=\"imageMatCard\" src=\"{{temp.urlPhoto}}\">\n                <mat-card-actions>\n                    <button mat-raised-button color=\"accent\" (click)=\"onUpdateProfil(temp)\"\n                        matTooltip=\"Voir les détails de la personne\">Détails \n                    </button>\n                    <button *ngIf=\"temp.actif\" mat-raised-button color=\"primary\" (click)=\"onDesactiver(temp)\"\n                        matTooltip=\"Désactiver la personne\">Désactiver\n                    </button>\n                    <button *ngIf=\"!temp.actif\" mat-raised-button color=\"primary\" (click)=\"onActiver(temp)\"\n                        matTooltip=\"Activer la personne\">Activer\n                    </button> \n                </mat-card-actions> \n            </mat-card>\n        </ng-container>\n    </ng-container>\n</div>"

/***/ }),

/***/ "./src/app/components/liste-personnes/liste-personnes.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/liste-personnes/liste-personnes.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/liste-personnes/liste-personnes.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/liste-personnes/liste-personnes.component.ts ***!
  \*************************************************************************/
/*! exports provided: ListePersonnesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListePersonnesComponent", function() { return ListePersonnesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_personnes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/personnes.service */ "./src/app/services/personnes.service.ts");
/* harmony import */ var _update_personne_update_personne_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../update-personne/update-personne.component */ "./src/app/components/update-personne/update-personne.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListePersonnesComponent = /** @class */ (function () {
    function ListePersonnesComponent(servicePersonne, dialog, snackBar) {
        this.servicePersonne = servicePersonne;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.listePersonnes = [];
    }
    ListePersonnesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.servicePersonne.subjectFiltre.subscribe(function (retour) {
            _this.filtre = retour;
        });
        this.servicePersonne.getListePersonnes().subscribe(function (retour) {
            _this.listePersonnes = retour;
        });
    };
    // Mise à jour du profil
    ListePersonnesComponent.prototype.onUpdateProfil = function (personne) {
        var _this = this;
        var dialogRef = this.dialog.open(_update_personne_update_personne_component__WEBPACK_IMPORTED_MODULE_2__["UpdatePersonneComponent"], {
            data: personne
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.snackBar.open('Modifications enregistrées', 'Fermer', {
                    duration: 2500
                });
            }
        });
    };
    // Désactiver une personne
    ListePersonnesComponent.prototype.onDesactiver = function (personne) {
        personne.actif = false;
        this.servicePersonne.changeActif(personne).subscribe();
    };
    // Active une personne
    ListePersonnesComponent.prototype.onActiver = function (personne) {
        personne.actif = true;
        this.servicePersonne.changeActif(personne).subscribe();
    };
    ListePersonnesComponent.prototype.ngOnDestroy = function () {
    };
    ListePersonnesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-liste-personnes',
            template: __webpack_require__(/*! ./liste-personnes.component.html */ "./src/app/components/liste-personnes/liste-personnes.component.html"),
            styles: [__webpack_require__(/*! ./liste-personnes.component.scss */ "./src/app/components/liste-personnes/liste-personnes.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_personnes_service__WEBPACK_IMPORTED_MODULE_1__["PersonnesService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], ListePersonnesComponent);
    return ListePersonnesComponent;
}());



/***/ }),

/***/ "./src/app/components/profil-nounou/profil-nounou.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/profil-nounou/profil-nounou.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class='addProfil' [formGroup]='userForm'>\n  <mat-form-field>\n    <input matInput type=\"number\" placeholder=\"Taux horaire\" formControlName=\"tauxHoraire\" >\n    <mat-error *ngIf='userForm.invalid'>Champ requis invalide</mat-error>\n    <mat-icon matSuffix>euro_symbol</mat-icon>\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput type=\"number\" placeholder=\"Montant d'un repas\" formControlName=\"montantRepas\" >\n    <mat-error *ngIf='userForm.invalid'>Champ requis invalide</mat-error>\n    <mat-icon matSuffix>euro_symbol</mat-icon>\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput type=\"number\" placeholder=\"Montant d'une indemnité\" formControlName=\"montantIndemnites\" >\n    <mat-error *ngIf='userForm.invalid'>Champ requis invalide</mat-error>\n    <mat-icon matSuffix>euro_symbol</mat-icon>\n  </mat-form-field>\n    <mat-form-field>\n      <input matInput type=\"number\" placeholder=\"Montant d'un gouter\" formControlName=\"montantGouter\" >\n      <mat-error *ngIf='userForm.invalid'>Champ requis invalide</mat-error>\n      <mat-icon matSuffix>euro_symbol</mat-icon>\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput type=\"number\" placeholder=\"Barème au kilomètre\" formControlName=\"baremeKm\" >\n      <mat-error *ngIf='userForm.invalid'>Champ requis invalide</mat-error>\n      <mat-icon matSuffix>euro_symbol</mat-icon>\n    </mat-form-field>     \n  <div>\n    <button mat-raised-button color=\"primary\" [disabled]=\"userForm.invalid\" (click)=\"validation()\">\n      Valider \n      <mat-icon>send</mat-icon>\n    </button>    \n  </div>\n</form>"

/***/ }),

/***/ "./src/app/components/profil-nounou/profil-nounou.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/profil-nounou/profil-nounou.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profil-nounou/profil-nounou.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/profil-nounou/profil-nounou.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProfilNounouComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilNounouComponent", function() { return ProfilNounouComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_profil_nounou_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/profil-nounou.service */ "./src/app/services/profil-nounou.service.ts");
/* harmony import */ var _classes_profilNounou__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../classes/profilNounou */ "./src/app/classes/profilNounou.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfilNounouComponent = /** @class */ (function () {
    function ProfilNounouComponent(serviceProfilNounou, formBuilder, snackBar) {
        this.serviceProfilNounou = serviceProfilNounou;
        this.formBuilder = formBuilder;
        this.snackBar = snackBar;
    }
    ProfilNounouComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    ProfilNounouComponent.prototype.initForm = function () {
        this.userForm = this.formBuilder.group({
            tauxHoraire: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            montantRepas: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            montantIndemnites: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            montantGouter: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            baremeKm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    ProfilNounouComponent.prototype.validation = function () {
        var _this = this;
        var profil = new _classes_profilNounou__WEBPACK_IMPORTED_MODULE_3__["profilNounou"]();
        var formulaire = this.userForm.value;
        profil.baremeKm = formulaire['baremeKm'];
        profil.montantGouters = formulaire['montantGouter'];
        profil.montantIndemnites = formulaire['montantIndemnites'];
        profil.montantRepas = formulaire['montantRepas'];
        profil.tauxHoraire = formulaire['tauxHoraire'];
        this.serviceProfilNounou.setProfilNounou(profil).subscribe(function (retour) {
            if (retour) {
                _this.snackBar.open('Profil mis à jour', 'Fermer', {
                    duration: 2500
                });
            }
        });
    };
    ProfilNounouComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profil-nounou',
            template: __webpack_require__(/*! ./profil-nounou.component.html */ "./src/app/components/profil-nounou/profil-nounou.component.html"),
            styles: [__webpack_require__(/*! ./profil-nounou.component.scss */ "./src/app/components/profil-nounou/profil-nounou.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_profil_nounou_service__WEBPACK_IMPORTED_MODULE_2__["ProfilNounouService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], ProfilNounouComponent);
    return ProfilNounouComponent;
}());



/***/ }),

/***/ "./src/app/components/side-nav/side-nav.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/side-nav/side-nav.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]='user.status'>\n    <div *ngSwitchCase=\"'Administrateur'\">\n        <mat-accordion>\n              <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                  <mat-icon>dashboard</mat-icon>\n                  Tableau de bord\n                </mat-expansion-panel-header>\n                <p>\n                  <a >mon tableau de bord</a>\n                </p>\n              </mat-expansion-panel>\n              <mat-expansion-panel>\n                  <mat-expansion-panel-header>\n                      <mat-icon>child_care</mat-icon>\n                      Contrats\n                  </mat-expansion-panel-header>\n                  <p>\n                      <a routerLink=\"/contrats\">Liste des contrats</a>\n                  </p>\n                  <p>\n                      <a >Avenant de contrat</a>\n                  </p>\n                  <p>\n                      <a routerLink=\"/contrat\">Ajouter un contrat</a>\n                  </p>\n                  <p>\n                      <a >Terminer un contrat</a>\n                  </p>\n                  <p>\n                      <a >Fiches de renseignements</a>\n                  </p>\n                  </mat-expansion-panel>                \n              <mat-expansion-panel>\n                    <mat-expansion-panel-header>\n                      <mat-icon>person</mat-icon>\n                      Personnes                    \n                    </mat-expansion-panel-header>\n                    <p>\n                        <a routerLink=\"/personnes\">Liste des personnes   </a>\n                        <mat-checkbox name=\"filtrePersonnes\" color=\"primary\" (click)=\"changementFiltre()\" [(ngModel)]=\"chkTous\" autocomplete=\"off\">Afficher les personnes inactives</mat-checkbox> \n                    </p>\n                    <p>\n                        <a routerLink = \"/SignUp\">Ajouter une personne</a> \n                    </p>\n                    <p>\n                        <a routerLink = \"/SignUp\">Ajouter un utilisateur</a>\n                    </p>\n                    <p>\n                        <a (click)=\"updateProfile()\">Modifier un compte utilisateur</a> \n                    </p>\n                    </mat-expansion-panel>  \n            <mat-expansion-panel>\n            <mat-expansion-panel-header>\n              <mat-icon>face</mat-icon>\n              Nounou\n            </mat-expansion-panel-header>\n            <p>\n              <a routerLink=\"/profilNounou\">Données contractuelles </a>\n            </p>\n            <p>\n              <a (click)=\"updateProfileNounou()\">Modifier le profil utilisateur</a>\n            </p>\n            </mat-expansion-panel>          \n            <mat-expansion-panel>\n              <mat-expansion-panel-header>\n                <mat-icon>date_range</mat-icon>\n                Mois en cours\n              </mat-expansion-panel-header>\n              <p>\n                <a>\n                  Synthèse \n                </a>\n              </p>\n              <p>\n                <a>\n                  Vue par enfant\n                </a>\n              </p>\n          </mat-expansion-panel>\n        </mat-accordion>\n    </div>\n    <div *ngSwitchCase=\"'Nounou'\">\n      <mat-accordion> \n        <mat-expansion-panel>\n            <mat-expansion-panel-header>\n                <mat-icon>assessment</mat-icon>\n                Mon tableau de bord\n            </mat-expansion-panel-header>\n            <p>\n                <a >Synthèse du mois en cours</a>\n            </p>\n            <p>\n                <a >Pointage du mois en cours</a>\n            </p>\n        </mat-expansion-panel>    \n        <mat-expansion-panel>\n            <mat-expansion-panel-header>\n                <mat-icon>face</mat-icon>\n                Mon profil\n            </mat-expansion-panel-header>\n            <p>\n                <a (click)=\"updateProfileNounou()\">Modifier mon profil</a>\n            </p>\n            <p>\n                <a >Modifier une fiche enfant</a>\n            </p>\n            <p>\n                <a routerLink=\"/ProfileNounou\">Modifier mes informations financières</a>\n            </p>\n        </mat-expansion-panel> \n        <mat-expansion-panel>\n            <mat-expansion-panel-header>\n                <mat-icon>child_friendly</mat-icon>\n                Les enfants\n            </mat-expansion-panel-header>\n            <p>\n                <a href='#'>Les contrats en cours</a>\n            </p>\n            <p>\n                <a href='#'>Les anniversaires</a>\n            </p>\n            <p>\n                <a href='#'>Fiche de renseignements</a>\n            </p>\n            <p>\n                <a href='#'>Les vacances des enfants</a>\n            </p>\n        </mat-expansion-panel>   \n        <mat-expansion-panel>\n            <mat-expansion-panel-header>\n                <mat-icon>date_range</mat-icon>\n                Administratif\n            </mat-expansion-panel-header>\n            <p>\n                <a href='#'>Feuille de pointage</a>\n            </p>\n            <p>\n                <a href='#'>Autorisations de sortie</a>\n            </p>\n            <p>\n                <a href='#'>Enregistrer les dates de mes vacances</a>\n            </p>\n            <p>\n                <a href='#'>Imprimer une facture</a>\n            </p>\n            <p>\n                <a href='#'>Enregistrer les dates de vacances scolaires</a>\n            </p>\n        </mat-expansion-panel>  \n        <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    <mat-icon>archive</mat-icon>\n                    Mes archives\n                </mat-expansion-panel-header>\n                <p>\n                    <a href='#'>Pointages du mois dernier</a>\n                </p>\n                <p>\n                    <a href='#'>Factures du mois dernier</a>\n                </p>\n                <p>\n                    <a href='#'>Mes revenus du mois dernier</a>\n                </p>\n                <p>\n                    <a href='#'>Les mois précédents</a>\n                </p>\n            </mat-expansion-panel>   \n      </mat-accordion>\n    </div>\n    <div *ngSwitchCase=\"'Parent'\">\n        <mat-accordion>\n            Test du parent                \n        </mat-accordion>\n    </div>\n    <div *ngSwitchCase=\"'Enfant'\">\n        <mat-accordion>  \n            Test de l'enfant              \n        </mat-accordion>\n    </div>\n    <div *ngSwitchCase=\"'Visiteur'\"> \n        <br> \n        Bonjour visiteur(se)\n    </div>\n  </div>\n  <br>"

/***/ }),

/***/ "./src/app/components/side-nav/side-nav.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/side-nav/side-nav.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/side-nav/side-nav.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/side-nav/side-nav.component.ts ***!
  \***********************************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _classes_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes/user */ "./src/app/classes/user.ts");
/* harmony import */ var _services_personnes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/personnes.service */ "./src/app/services/personnes.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SideNavComponent = /** @class */ (function () {
    function SideNavComponent(serviceUsers, servicePersonnes) {
        this.serviceUsers = serviceUsers;
        this.servicePersonnes = servicePersonnes;
        this.chkTous = false;
    }
    SideNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = new _classes_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.soucriptionUsers = this.serviceUsers.subjectUser.subscribe(function (temp) {
            _this.user = temp;
        });
        this.servicePersonnes.setFiltreAffichagePersonnes(this.chkTous);
    };
    SideNavComponent.prototype.ngOnDestroy = function () {
        this.soucriptionUsers.unsubscribe();
    };
    SideNavComponent.prototype.changementFiltre = function () {
        this.servicePersonnes.setFiltreAffichagePersonnes(!this.chkTous);
    };
    SideNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-nav',
            template: __webpack_require__(/*! ./side-nav.component.html */ "./src/app/components/side-nav/side-nav.component.html"),
            styles: [__webpack_require__(/*! ./side-nav.component.scss */ "./src/app/components/side-nav/side-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"],
            _services_personnes_service__WEBPACK_IMPORTED_MODULE_3__["PersonnesService"]])
    ], SideNavComponent);
    return SideNavComponent;
}());



/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class ='register' [formGroup]='userForm'>\n  <mat-icon matPrefix>person</mat-icon>\n  <mat-form-field>\n      <input matInput placeholder='Nom' type=\"text\" formControlName=\"nom\" required>\n      <mat-error *ngIf='userForm.invalid'>Champ requis invalide</mat-error>\n  </mat-form-field>\n  <mat-icon matPrefix>person</mat-icon>\n  <mat-form-field>\n      <input matInput placeholder='Prénom' type=\"text\" formControlName=\"prenom\" required>\n      <mat-error *ngIf='userForm.invalid'>Champ requis invalide</mat-error>\n  </mat-form-field>\n  <mat-icon>vpn_key</mat-icon>\n  <mat-form-field>\n      <input matInput placeholder='Mot de passe' type=\"password\" formControlName=\"password\" required>\n      <mat-error *ngIf='userForm.invalid'>Champ requis invalide</mat-error>\n  </mat-form-field>\n  <mat-icon>vpn_key</mat-icon>\n  <mat-form-field>\n      <input matInput placeholder='Confirmer le mot de passe' type=\"password\" formControlName=\"confirmPassword\" required> \n      <mat-error *ngIf='userForm.invalid'>Champ requis invalide</mat-error> \n  </mat-form-field>\n  <mat-icon>phone</mat-icon>\n  <mat-form-field>\n      <input matInput type=\"text\" placeholder=\"01-23-45-67-89 ou 0123456789\" formControlName=\"telPortable\">\n  </mat-form-field>\n  <mat-datepicker-toggle [for]=\"pickerDate\"></mat-datepicker-toggle>\n  <mat-datepicker #pickerDate></mat-datepicker>\n  <mat-form-field>      \n    <input matInput [matDatepicker]=\"pickerDate\"  placeholder ='Choisir une date de naissance' formControlName=\"dateNaissance\">\n  </mat-form-field> \n  <mat-icon>place</mat-icon>\n  <mat-form-field>\n      <input matInput type=\"text\" placeholder ='Adresse' formControlName=\"adresse\">\n  </mat-form-field>\n  <mat-icon>email</mat-icon>\n  <mat-form-field>    \n      <input matInput placeholder='E-mail' type=\"text\" formControlName=\"mail\" required>\n      <mat-error *ngIf='userForm.invalid'>Champ requis invalide</mat-error>\n  </mat-form-field>\n      <div>\n          <mat-icon>add_a_photo</mat-icon>\n          <input type=\"file\" placeholder=\"Image du profil\" (change)=\"selectionFichier($event)\" name=\"avatar\" accept=\"image/*\">\n      </div>\n  <p>\n      <button mat-raised-button color=\"primary\" [disabled]=\"userForm.invalid\" (click)=\"validation()\" name=\"validation\">Valider l'inscription \n          <mat-icon>send</mat-icon>\n      </button> \n  </p>\n</form>"

/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.ts ***!
  \*********************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_personnes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/personnes.service */ "./src/app/services/personnes.service.ts");
/* harmony import */ var _services_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/error-handler.service */ "./src/app/services/error-handler.service.ts");
/* harmony import */ var _classes_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../classes/user */ "./src/app/classes/user.ts");
/* harmony import */ var _classes_personne__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../classes/personne */ "./src/app/classes/personne.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(location, serviceUsers, servicePersonne, snackBar, formBuilder, serviceErreur, adapter) {
        this.location = location;
        this.serviceUsers = serviceUsers;
        this.servicePersonne = servicePersonne;
        this.snackBar = snackBar;
        this.formBuilder = formBuilder;
        this.serviceErreur = serviceErreur;
        this.adapter = adapter;
    }
    SignUpComponent.prototype.initForm = function () {
        this.adapter.setLocale('fr-FR');
        this.userForm = this.formBuilder.group({
            nom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            prenom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            telPortable: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern(/#^0[1-68]([-. ]?[0-9]{2}){4}$#/)],
            dateNaissance: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(0)],
            mail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].email]],
            adresse: ['',]
        });
    };
    SignUpComponent.prototype.validation = function () {
        var _this = this;
        var user = new _classes_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
        var personne = new _classes_personne__WEBPACK_IMPORTED_MODULE_6__["Personne"]();
        var formulaire = this.userForm.value;
        if (formulaire['password'] == formulaire['confirmPassword']) {
            user.email = formulaire['mail'];
            user.mdp = formulaire['password'];
            personne.nom = formulaire['nom'];
            personne.prenom = formulaire['prenom'];
            personne.dateNaissance = formulaire['dateNaissance'];
            personne.adresse = formulaire['adresse'];
            personne.telPortable = formulaire['telPortable'];
            personne.mail = formulaire['mail'];
            personne.actif = true;
            personne.status = 'Parent';
            this.servicePersonne.registerNewPersonne(personne, this.fichier).subscribe(function (retour) {
                if (retour) {
                    user.urlPhoto = personne.urlPhoto;
                    _this.serviceUsers.registerNewUser(user).subscribe(function (retour) {
                        if (retour)
                            _this.snackBar.open("Enregistrement effectu\u00E9", 'Fermer', {
                                duration: 2500
                            });
                    });
                }
                _this.snackBar.open('Enregistrement effectué', 'Fermer', { duration: 2500 });
            });
        }
        else {
            this.serviceErreur.afficheErreur('Erreur de saisie :', 'Les mots de passe sont différents');
        }
    };
    SignUpComponent.prototype.selectionFichier = function (event) {
        this.fichier = event.target.files[0];
    };
    SignUpComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/components/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.scss */ "./src/app/components/sign-up/sign-up.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _services_personnes_service__WEBPACK_IMPORTED_MODULE_3__["PersonnesService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
            _services_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/components/update-personne/update-personne.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/update-personne/update-personne.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Modifier le profil de {{personne.prenom}} {{personne.nom}} </h2>\n<mat-dialog-content>\n  <form class ='register' [formGroup]='userForm'>\n    <div>\n      <mat-icon matPrefix>person</mat-icon>\n      <mat-form-field>      \n        <input matInput placeholder='Nom' type=\"text\" formControlName=\"nom\" required>\n        <mat-error *ngIf='userForm.invalid'>Champ requis invalide</mat-error>\n      </mat-form-field>\n      <mat-icon matPrefix>person</mat-icon>\n      <mat-form-field>\n        <input matInput placeholder='Prénom' type=\"text\" formControlName=\"prenom\" required>\n        <mat-error *ngIf='userForm.invalid'>Champ requis invalide</mat-error>\n      </mat-form-field>\n    </div>\n    <div>\n      <mat-icon>phone</mat-icon>\n      <mat-form-field>\n        <input matInput type=\"text\" placeholder=\"01-23-45-67-89 ou 0123456789\" formControlName=\"telPortable\">\n      </mat-form-field>\n      <mat-datepicker-toggle [for]=\"pickerDate\"></mat-datepicker-toggle>\n      <mat-datepicker #pickerDate></mat-datepicker>\n      <mat-form-field>      \n        <input matInput [matDatepicker]=\"pickerDate\"  placeholder ='Choisir une date de naissance' formControlName=\"dateNaissance\">\n      </mat-form-field> \n      <mat-icon>place</mat-icon>\n      <mat-form-field>\n        <input matInput type=\"text\" placeholder ='Adresse' formControlName=\"adresse\">\n      </mat-form-field>\n    </div> \n    <div>\n      <mat-icon>email</mat-icon>\n      <mat-form-field>    \n        <input matInput placeholder='E-mail' type=\"text\" formControlName=\"mail\" required>\n        <mat-error *ngIf='userForm.invalid'>Champ requis invalide</mat-error>\n      </mat-form-field>     \n      <mat-icon>poll</mat-icon>\n      <mat-form-field>    \n        <mat-select placeholder=\"Status\" [(value)]=\"personne.status\" required formControlName=\"status\">\n          <mat-option *ngFor=\"let item of listeStatus\" [value]=\"item\">\n            {{item}}\n          </mat-option>\n        </mat-select>\n        <mat-error *ngIf='userForm.invalid'>Champ requis invalide</mat-error>\n      </mat-form-field>\n      <mat-checkbox color=\"primary\" formControlName='actif' autocomplete=\"off\">Actif</mat-checkbox>\n    </div>\n      <div>\n        <mat-icon>add_a_photo</mat-icon>\n        <input type=\"file\" placeholder=\"Image du profil\" (change)=\"selectionFichier($event)\" name=\"avatar\" accept=\"image/*\">\n      </div>\n  </form>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-raised-button mat-dialog-close color=\"primary\" (click)=\"annulation()\" name=\"annulation\">Annuler\n    <mat-icon>cancel</mat-icon>\n  </button>\n  <button mat-raised-button color=\"accent\" (click)=\"validation()\" name=\"validation\">Valider les modifications \n      <mat-icon>done</mat-icon>\n  </button> \n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/components/update-personne/update-personne.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/update-personne/update-personne.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/update-personne/update-personne.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/update-personne/update-personne.component.ts ***!
  \*************************************************************************/
/*! exports provided: UpdatePersonneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePersonneComponent", function() { return UpdatePersonneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _classes_personne__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../classes/personne */ "./src/app/classes/personne.ts");
/* harmony import */ var _services_personnes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/personnes.service */ "./src/app/services/personnes.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var UpdatePersonneComponent = /** @class */ (function () {
    function UpdatePersonneComponent(data, ref, formBuilder, adapter, servicePersonne) {
        this.data = data;
        this.ref = ref;
        this.formBuilder = formBuilder;
        this.adapter = adapter;
        this.servicePersonne = servicePersonne;
        this.listeStatus = ['Administrateur', 'Nounou', 'Parent', 'Enfant', 'Tuteur', 'Medecin'];
        this.personne = data;
    }
    UpdatePersonneComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    UpdatePersonneComponent.prototype.initForm = function () {
        this.adapter.setLocale('fr-FR');
        this.userForm = this.formBuilder.group({
            nom: [this.personne.nom, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            prenom: [this.personne.prenom, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            telPortable: [this.personne.telPortable, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/#^0[1-68]([-. ]?[0-9]{2}){4}$#/)],
            dateNaissance: [this.personne.dateNaissance, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(0)],
            mail: [this.personne.mail, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            adresse: [this.personne.adresse,],
            actif: [this.personne.actif,],
            status: [this.personne.status,]
        });
    };
    UpdatePersonneComponent.prototype.validation = function () {
        var _this = this;
        var formulaire = this.userForm.value;
        this.personne.nom = formulaire['nom'];
        this.personne.prenom = formulaire['prenom'];
        this.personne.dateNaissance = formulaire['dateNaissance'];
        this.personne.adresse = formulaire['adresse'];
        this.personne.telPortable = formulaire['telPortable'];
        this.personne.mail = formulaire['mail'];
        this.personne.actif = formulaire['actif'];
        this.personne.status = formulaire['status'];
        this.servicePersonne.updatePersonne(this.personne).subscribe(function (retour) {
            if (retour)
                _this.ref.close('true');
        });
    };
    UpdatePersonneComponent.prototype.selectionFichier = function (event) {
        this.fichier = event.target.files[0];
    };
    UpdatePersonneComponent.prototype.annulation = function () {
    };
    UpdatePersonneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-personne',
            template: __webpack_require__(/*! ./update-personne.component.html */ "./src/app/components/update-personne/update-personne.component.html"),
            styles: [__webpack_require__(/*! ./update-personne.component.scss */ "./src/app/components/update-personne/update-personne.component.scss")],
            preserveWhitespaces: true
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_classes_personne__WEBPACK_IMPORTED_MODULE_3__["Personne"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["DateAdapter"],
            _services_personnes_service__WEBPACK_IMPORTED_MODULE_4__["PersonnesService"]])
    ], UpdatePersonneComponent);
    return UpdatePersonneComponent;
}());



/***/ }),

/***/ "./src/app/services/contrat.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/contrat.service.ts ***!
  \*********************************************/
/*! exports provided: ContratService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContratService", function() { return ContratService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _classes_contrat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/contrat */ "./src/app/classes/contrat.ts");
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-handler.service */ "./src/app/services/error-handler.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _personnes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./personnes.service */ "./src/app/services/personnes.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContratService = /** @class */ (function () {
    function ContratService(serviceErreurs, servicePersonne) {
        this.serviceErreurs = serviceErreurs;
        this.servicePersonne = servicePersonne;
        this.contrat = new _classes_contrat__WEBPACK_IMPORTED_MODULE_2__["Contrat"]();
    }
    // Ajoute un contrat
    ContratService.prototype.registerNewContrat = function (pDonneesContrat) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"]().collection('contrats').doc(pDonneesContrat.enfant.nom + '_' + pDonneesContrat.enfant.prenom).set(JSON.parse(JSON.stringify(pDonneesContrat))).then(function () {
                _this.servicePersonne.checkAndAddPersonne(pDonneesContrat.docteur);
                _this.servicePersonne.checkAndAddPersonne(pDonneesContrat.mere);
                _this.servicePersonne.checkAndAddPersonne(pDonneesContrat.pere);
                _this.servicePersonne.checkAndAddPersonne(pDonneesContrat.tuteur);
                _this.servicePersonne.checkAndAddPersonne(pDonneesContrat.enfant);
                observer.next(true);
            }, function (error) {
                observer.next(false);
            });
        });
    };
    // Modifie un contrat
    ContratService.prototype.updateContrat = function () {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) { });
    };
    // Supprime un contrat
    ContratService.prototype.deleteContrat = function () {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) { });
    };
    // cherche un contrat suivant le nom de l'enfant
    ContratService.prototype.getContratByNomPrenomEnfant = function (nomEnfant) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) { });
    };
    // Récupère la liste des contrats
    ContratService.prototype.getListeContrats = function () {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            var retour = [];
            firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"]().collection('contrats').get().then(function (bdd) {
                if (bdd) {
                    bdd.docs.forEach(function (temp) {
                        retour.push(JSON.parse(JSON.stringify(temp.data())));
                    });
                }
                else
                    console.log('retour vide');
            });
            observer.next(retour);
        });
    };
    // Calcule et met à jour le taux oraire brut lors de la saisie du net
    ContratService.prototype.calculTauxHoraireBrut = function () {
        this.contrat.tauxHoraireBrut = this.contrat.tauxHoraireNet * 100 / 77;
        this.calculSalaireBaseBrut();
        this.calculCPBaseBrut();
        this.calculCPBaseNet();
    };
    // Calcule la moyenne du nombre d'heures de garde par mois
    ContratService.prototype.calculMoyenneHeuresParMois = function () {
        this.contrat.moyNbHeuresGardeMois = (this.contrat.nbHeuresGardeSemaine * this.contrat.nbSemainesGardeAn) / 12;
    };
    // Calcule la moyenne de jours par mois
    ContratService.prototype.calculMoyenneJoursParMois = function () {
        this.contrat.moyNbJoursGardeMois = (this.contrat.nbSemainesGardeAn * this.contrat.nbJoursGardeSemaine) / 12;
    };
    // Calcule le salaire net de base
    ContratService.prototype.calculSalaireBaseNet = function () {
        this.contrat.salaireBaseNet = (this.contrat.tauxHoraireNet * this.contrat.nbSemainesGardeAn * this.contrat.nbHeuresGardeSemaine) / 12;
        this.calculSalaireBaseBrut();
        this.calculCPBaseBrut();
        this.calculCPBaseNet();
        this.calculSalaireTotalBaseNet();
    };
    // Calcule le salaire brut de base
    ContratService.prototype.calculSalaireBaseBrut = function () {
        this.contrat.salaireBaseBrut = (this.contrat.tauxHoraireBrut * this.contrat.nbSemainesGardeAn * this.contrat.nbHeuresGardeSemaine) / 12;
        this.calculCPBaseBrut();
        this.calculCPBaseNet();
        this.calculSalaireTotalBaseBrut();
    };
    // Calcule la base de rémunération des congés payés brut
    ContratService.prototype.calculCPBaseBrut = function () {
        this.contrat.congesPayesBaseBrut = (5 * this.contrat.tauxHoraireBrut * this.contrat.nbHeuresGardeSemaine) / 12;
        this.calculSalaireTotalBaseBrut();
    };
    // Calcule la base de rémunération des congés payés net
    ContratService.prototype.calculCPBaseNet = function () {
        this.contrat.congesPayesBaseNet = (5 * this.contrat.tauxHoraireNet * this.contrat.nbHeuresGardeSemaine) / 12;
        this.calculSalaireTotalBaseNet();
    };
    // Calcule le total brut du salaire 
    ContratService.prototype.calculSalaireTotalBaseBrut = function () {
        this.contrat.salaireTotalBaseBrut = this.contrat.salaireBaseBrut + this.contrat.congesPayesBaseBrut;
    };
    // Calcule le total net du salaire
    ContratService.prototype.calculSalaireTotalBaseNet = function () {
        this.contrat.salaireTotalBaseNet = this.contrat.salaireBaseNet + this.contrat.congesPayesBaseNet;
    };
    // MAJ du contrat et calculs
    ContratService.prototype.majContratCalculMontants = function (pContrat) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            if (pContrat) {
                _this.contrat = pContrat;
                _this.calculTauxHoraireBrut();
                _this.calculMoyenneHeuresParMois();
                _this.calculMoyenneJoursParMois();
                _this.calculSalaireBaseNet();
                _this.calculSalaireBaseBrut();
                _this.calculCPBaseBrut();
                _this.calculCPBaseNet();
                _this.calculSalaireTotalBaseBrut();
                _this.calculSalaireTotalBaseNet();
                observer.next(_this.contrat);
            }
            else {
                _this.serviceErreurs.afficheErreur('Erreur', 'le contrat passé est vide ou absent');
                observer.next(null);
            }
        });
    };
    ContratService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerService"],
            _personnes_service__WEBPACK_IMPORTED_MODULE_5__["PersonnesService"]])
    ], ContratService);
    return ContratService;
}());



/***/ }),

/***/ "./src/app/services/error-handler.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/error-handler.service.ts ***!
  \***************************************************/
/*! exports provided: ErrorHandlerService, modalErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerService", function() { return ErrorHandlerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalErrorHandler", function() { return modalErrorHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ErrorHandlerService = /** @class */ (function () {
    function ErrorHandlerService(myModalDialog) {
        this.myModalDialog = myModalDialog;
    }
    ErrorHandlerService.prototype.afficheErreur = function (pTitre, pMessage) {
        var dialogRef = this.myModalDialog.open(modalErrorHandler, {
            data: {
                titre: pTitre,
                message: pMessage
            }
        });
    };
    ErrorHandlerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ErrorHandlerService);
    return ErrorHandlerService;
}());

var modalErrorHandler = /** @class */ (function () {
    function modalErrorHandler(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.titre = data['titre'];
        this.message = data['message'];
    }
    modalErrorHandler = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'modalErrorHandler',
            template: "\n    <h1 mat-dialog-title>{{titre}}</h1>\n    <div mat-dialog-content>\n      <div><b>D\u00E9tail de l'erreur : </b>{{message}}</div>\n    </div>\n  "
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], String])
    ], modalErrorHandler);
    return modalErrorHandler;
}());



/***/ }),

/***/ "./src/app/services/personnes.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/personnes.service.ts ***!
  \***********************************************/
/*! exports provided: PersonnesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonnesService", function() { return PersonnesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_personne__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/personne */ "./src/app/classes/personne.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error-handler.service */ "./src/app/services/error-handler.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PersonnesService = /** @class */ (function () {
    function PersonnesService(serviceError) {
        this.serviceError = serviceError;
        this.personneConnecte = null;
        this.subjectPersonne = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.listePersonnes = [];
        this.subjectFiltre = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    PersonnesService.prototype.ngOnInit = function () {
        this.personneConnecte = new _classes_personne__WEBPACK_IMPORTED_MODULE_1__["Personne"]();
    };
    // Définit si on affiche les personnes inactives
    PersonnesService.prototype.setFiltreAffichagePersonnes = function (res) {
        this.filtreAffichage = res;
        this.emitChangementFiltre();
    };
    // Emet le signal de changement de filtre
    PersonnesService.prototype.emitChangementFiltre = function () {
        this.subjectFiltre.next(this.filtreAffichage);
    };
    PersonnesService.prototype.emitSubjectPersonne = function () {
        this.subjectPersonne.next(this.personneConnecte);
    };
    // Mise à jour d'une personne
    PersonnesService.prototype.updatePersonne = function (personne) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            if (personne.idDoc) {
                firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('personnes').doc(personne.idDoc).update(JSON.parse(JSON.stringify(personne)))
                    .then(function () {
                    observer.next(true);
                });
            }
            else {
                _this.serviceError.afficheErreur('Erreur dans la mise à jour du profil', 'non trouvé dans la base de données');
                observer.next(false);
            }
        });
    };
    //Retourne personneConnecte
    PersonnesService.prototype.getPersonneConnecte = function () {
        return this.personneConnecte;
    };
    //Définit la personne connectée au site
    PersonnesService.prototype.setPersonneConnecte = function (personne) {
        this.personneConnecte = personne;
        this.emitSubjectPersonne();
    };
    //procédure d'enregistrement d'une nouveau Personne
    PersonnesService.prototype.registerNewPersonne = function (personne, fichier) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            if (fichier) {
                _this.enregistreAvatar(fichier).subscribe(function (url) {
                    if (url) {
                        personne.urlPhoto = url;
                        firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('personnes').doc(personne.nom + '_' + personne.prenom).set(JSON.parse(JSON.stringify(personne))).then(function () {
                            observer.next(true);
                        }, function (error) {
                            _this.serviceError.afficheErreur('Erreur survenur lors de l\ajout', error);
                            observer.next(false);
                        });
                    }
                });
                firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('personnes').doc(personne.nom + '_' + personne.prenom).set(JSON.parse(JSON.stringify(personne))).then(function () {
                    observer.next(true);
                }, function (error) {
                    _this.serviceError.afficheErreur('Erreur survenur lors de l\ajout', error);
                    observer.next(false);
                });
            }
            else {
                firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('personnes').doc(personne.nom + '_' + personne.prenom).set(JSON.parse(JSON.stringify(personne))).then(function () {
                    observer.next(true);
                }, function (error) {
                    _this.serviceError.afficheErreur('Erreur survenur lors de l\'ajout', error);
                    observer.next(false);
                });
                observer.next(false);
            }
        });
    };
    PersonnesService.prototype.enregistreAvatar = function (fichier) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            if (fichier) {
                var emplacement_1 = 'avatars/' + Date.now() + fichier.name;
                var upload = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child(emplacement_1).put(fichier);
                upload.on(firebase__WEBPACK_IMPORTED_MODULE_3__["storage"].TaskEvent.STATE_CHANGED, function () {
                    // Chargement en cours
                }, function (error) {
                    _this.serviceError.afficheErreur('Erreur lors du chargement de la photo', 'Erreur inconnue');
                    observer.next(null);
                }, function () {
                    firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child(emplacement_1).getDownloadURL().then(function (url) {
                        observer.next(url);
                    });
                });
            }
        });
    };
    // retourne la liste des personnes enregistrées
    PersonnesService.prototype.getListePersonnes = function () {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            var retour = [];
            firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('personnes').get().then(function (snap) {
                if (snap) {
                    snap.docs.forEach(function (temp) {
                        var personne = JSON.parse(JSON.stringify(temp.data()));
                        personne.idDoc = temp.id;
                        retour.push(personne);
                    });
                    observer.next(retour);
                }
                else
                    observer.next(null);
            });
        });
    };
    // Vérifie les doublons et ajoute dans la bdd
    PersonnesService.prototype.checkAndAddPersonne = function (personne) {
        var _this = this;
        this.getListePersonnes().subscribe(function (liste) {
            if (liste) {
                _this.listePersonnes = liste;
                // Vérifie si les personnes saisies sont déjà dans la bdd
                if (personne.prenom != '' && personne.nom != '') {
                    if (!_this.listePersonnes.find(function (el) { return el.nom === personne.prenom; })) {
                        if (!_this.listePersonnes.find(function (el) { return el.prenom === personne.nom; })) {
                            // Ajout dans la bdd
                            _this.registerNewPersonne(personne).subscribe();
                        }
                    }
                }
            }
        });
    };
    // Connecte la personne gràce a son mail et sopn mdp
    PersonnesService.prototype.connectePersonneByMail = function (mail) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.getPersonneByMail(mail).subscribe(function (personne) {
                if (personne) {
                    _this.setPersonneConnecte(personne);
                    observer.next(personne);
                }
                else {
                    observer.next(null);
                }
            });
        });
    };
    // Retrouve une personne en fonction de son mail
    PersonnesService.prototype.getPersonneByMail = function (mail) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('personnes').where('mail', '==', mail).get().then(function (snap) {
                if (!snap.empty) {
                    var retour = new _classes_personne__WEBPACK_IMPORTED_MODULE_1__["Personne"]();
                    retour = JSON.parse(JSON.stringify(snap.docs[0].data()));
                    retour.idDoc = snap.docs[0].id;
                    observer.next(retour);
                }
                else
                    observer.next(null);
            });
        });
    };
    // Retrouve une personne en fonction de ses nom et prénom
    PersonnesService.prototype.getPersonneByPrenomAndNom = function (prenom, nom) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            var retour = new _classes_personne__WEBPACK_IMPORTED_MODULE_1__["Personne"]();
            firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('personnes').where('prenom', '==', prenom).where('nom', '==', nom).get().then(function (snap) {
                if (snap) {
                    retour = JSON.parse(JSON.stringify(snap.docs[0].data()));
                    retour.idDoc = snap.docs[0].id;
                    observer.next(retour);
                }
                else {
                    _this.serviceError.afficheErreur('Résultat :', 'Personne n\'est enregistré avec ces noms et prénoms');
                    observer.next(null);
                }
            });
        });
    };
    //enregistre l'avatar sur le serveur
    PersonnesService.prototype.uploadAvatarUser = function (fichier) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            if (!fichier) {
                _this.serviceError.afficheErreur('Erreur', 'fichier absent');
                observer.next('echec');
            }
            if (!firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser) {
                _this.serviceError.afficheErreur('Erreur de transfert', 'Utilisateur non connecté');
                observer.next('echec');
            }
            var emplacement = 'avatars/' + Date.now() + fichier.name;
            var upload = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child(emplacement).put(fichier);
        });
    };
    // Desactive une personne
    PersonnesService.prototype.changeActif = function (personne) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('personnes').doc(personne.idDoc).update(JSON.parse(JSON.stringify(personne))).then(function () {
                observer.next(true);
            })
                .catch(function (error) {
                _this.serviceError.afficheErreur('Une erreur s\est produite', error);
            });
        });
    };
    PersonnesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlerService"]])
    ], PersonnesService);
    return PersonnesService;
}());



/***/ }),

/***/ "./src/app/services/profil-nounou.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/profil-nounou.service.ts ***!
  \***************************************************/
/*! exports provided: ProfilNounouService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilNounouService", function() { return ProfilNounouService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_profilNounou__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/profilNounou */ "./src/app/classes/profilNounou.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error-handler.service */ "./src/app/services/error-handler.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfilNounouService = /** @class */ (function () {
    function ProfilNounouService(serviceErreurs) {
        this.serviceErreurs = serviceErreurs;
    }
    // Définit le profil 
    ProfilNounouService.prototype.setProfilNounou = function (profil) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('nounou').doc('profil').set({
                tauxHoraire: profil.tauxHoraire,
                montantRepas: profil.montantRepas,
                montantIndemnites: profil.montantIndemnites,
                montantGouter: profil.montantGouters,
                baremeKm: profil.baremeKm
            }).then(function () {
                observer.next(true);
            }, function (error) {
                _this.serviceErreurs.afficheErreur('Erreur dans l\'enregistrement du profil nounou', error);
                observer.next(false);
            });
        });
    };
    // Récupère le profil
    ProfilNounouService.prototype.getProfilFromServer = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('nounou').doc('profil').get().then(function (snap) {
                if (snap) {
                    var retour = new _classes_profilNounou__WEBPACK_IMPORTED_MODULE_1__["profilNounou"]();
                    retour.baremeKm = snap.data()['baremeKm'];
                    retour.montantGouters = snap.data()['montantGouter'];
                    retour.montantIndemnites = snap.data()['montantIndemnites'];
                    retour.montantRepas = snap.data()['montantRepas'];
                    retour.tauxHoraire = snap.data()['tauxHoraire'];
                    observer.next(retour);
                }
                else {
                    _this.serviceErreurs.afficheErreur('Le profil n\'est pas renseigné', 'Remplissez le profil en premier lieu');
                    observer.next(null);
                }
            }, function (error) {
                _this.serviceErreurs.afficheErreur('Une erreur s\'est produite lors de la récupération du profil', error);
                observer.next(null);
            });
        });
    };
    ProfilNounouService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlerService"]])
    ], ProfilNounouService);
    return ProfilNounouService;
}());



/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/user */ "./src/app/classes/user.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error-handler.service */ "./src/app/services/error-handler.service.ts");
/* harmony import */ var _personnes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./personnes.service */ "./src/app/services/personnes.service.ts");
/* harmony import */ var _classes_personne__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../classes/personne */ "./src/app/classes/personne.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UsersService = /** @class */ (function () {
    function UsersService(serviceErreur, servicePersonne) {
        var _this = this;
        this.serviceErreur = serviceErreur;
        this.servicePersonne = servicePersonne;
        this.userConnecte = null;
        this.subjectUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().onAuthStateChanged(function (user) {
            var personne = new _classes_personne__WEBPACK_IMPORTED_MODULE_6__["Personne"]();
            if (user) {
                _this.userConnecte = new _classes_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
                _this.userConnecte.email = user.email;
                _this.userConnecte.urlPhoto = user.photoURL;
                _this.userConnecte.isConnected = true;
                _this.servicePersonne.connectePersonneByMail(user.email).subscribe(function (personne) {
                    if (personne) {
                        _this.userConnecte.status = personne.status;
                        _this.servicePersonne.emitSubjectPersonne();
                        _this.emitSubjectUser();
                    }
                });
            }
            else {
                _this.userConnecte = new _classes_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
                _this.userConnecte.isConnected = false;
                _this.emitSubjectUser();
            }
        });
    }
    UsersService.prototype.ngOnInit = function () {
        this.userConnecte = new _classes_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
    };
    UsersService.prototype.emitSubjectUser = function () {
        this.subjectUser.next(this.userConnecte);
    };
    UsersService.prototype.getUserConnecte = function () {
        return this.userConnecte;
    };
    //Procédure de connexion
    UsersService.prototype.signIn = function (user) {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().signInWithEmailAndPassword(user.email, user.mdp).then(function () { }, function (erreur) {
            _this.userConnecte = new _classes_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
            switch (erreur.code) {
                case 'auth/invalid-email':
                    _this.serviceErreur.afficheErreur("Erreur lors de la connexion de l'utilisateur", 'le mail saisi est invalide');
                    break;
                case 'auth/user-not-found':
                    _this.serviceErreur.afficheErreur("Erreur lors de la connexion de l'utilisateur", 'Utilisateur introuvable');
                    break;
                case 'auth/user-disabled':
                    _this.serviceErreur.afficheErreur("Erreur lors de la connexion de l'utilisateur", 'Utilisateur désactivé');
                    break;
                case 'auth/wrong-password':
                    _this.serviceErreur.afficheErreur("Erreur lors de la connexion de l'utilisateur", 'Mot de passe incorrect');
                    break;
                default:
                    _this.serviceErreur.afficheErreur("Erreur lors de la connexion de l'utilisateur", erreur /*'Une erreur s\'est produite dans la connexion de l\'utilisateur'*/);
            }
        });
    };
    // Déconnexion
    UsersService.prototype.signOut = function () {
        firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().signOut();
    };
    // Enregistrement d'un nouveau user
    UsersService.prototype.registerNewUser = function (user) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().createUserWithEmailAndPassword(user.email, user.mdp).then(function (retourUser) {
                user.uidfirebase = retourUser.user.uid;
                if (user.urlPhoto != '')
                    _this.updatePhotoUser(user);
                observer.next(true);
            }, function (erreur) {
                var messageErreur = '';
                switch (erreur.code) {
                    case 'auth/invalid-email':
                        messageErreur = 'le mail saisi est invalide';
                        _this.serviceErreur.afficheErreur("Erreur lors de l'enregistrement de l'utilisateur", messageErreur);
                        break;
                    case 'auth/email-already-in-use':
                        messageErreur = 'E-mail déjà enregistré sur le site';
                        _this.serviceErreur.afficheErreur("Erreur lors de l'enregistrement de l'utilisateur", messageErreur);
                        break;
                    case 'auth/operation-not-allowed':
                        messageErreur = 'Opération non permise';
                        _this.serviceErreur.afficheErreur("Erreur lors de l'enregistrement de l'utilisateur", messageErreur);
                        break;
                    case 'auth/weak-password':
                        messageErreur = 'Mot de passe trop faible';
                        _this.serviceErreur.afficheErreur("Erreur lors de l'enregistrement de l'utilisateur", messageErreur);
                        break;
                    default:
                        messageErreur = 'Une erreur s\'est produite dans l\'enregistrement de l\'utilisateur';
                        _this.serviceErreur.afficheErreur("Erreur lors de l'enregistrement de l'utilisateur", messageErreur);
                }
                observer.next(false);
            });
        });
    };
    //MAJ du profil connecté
    UsersService.prototype.updatePhotoUser = function (user) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            if (!firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser) {
                firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().signInWithEmailAndPassword(user.email, user.mdp).then(function () { }, function (error) {
                    _this.serviceErreur.afficheErreur('Erreur lors de la mise à jour du profil', error);
                    observer.next(false);
                });
            }
            var userFirebase = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser;
            userFirebase.photoURL = user.urlPhoto;
            firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().updateCurrentUser(userFirebase).then(function () {
                observer.next(true);
            }, function (error) {
                _this.serviceErreur.afficheErreur('Erreur lors de la mise à jour du profil', error);
                observer.next(false);
            });
        });
    };
    UsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlerService"],
            _personnes_service__WEBPACK_IMPORTED_MODULE_5__["PersonnesService"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/jonathan/Débarras/angularFirebaseMarilyne/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map