import { Injectable, Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'

export interface DialogData {
  titre  : string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(
    public myModalDialog: MatDialog
  ) { }
  
  afficheErreur(pTitre: string, pMessage: string){
    
    const dialogRef = this.myModalDialog.open(modalErrorHandler, {
      data: {
        titre  : pTitre,
        message: pMessage    
      }  
    })
  }
}

@Component({
  selector: 'modalErrorHandler',
  template: `
    <h1 mat-dialog-title>{{titre}}</h1>
    <div mat-dialog-content>
      <div><b>Détail de l'erreur : </b>{{message}}</div>
    </div>
  `
})
export class modalErrorHandler{

  titre  : string
  message: string

  constructor(
    public dialogRef: MatDialogRef<modalErrorHandler>,
    @Inject(MAT_DIALOG_DATA) public data: string    
  ) {
    this.titre   = data['titre']
    this.message = data['message']
   }
}