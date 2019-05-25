import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ClientService } from '../services/client-service';
import { DialogData } from './dialog-data';
import { Client } from '../models/client';
import { Observable } from 'rxjs';

@Component({
    template: `
  <h1 mat-dialog-title>Redefinção de Senha</h1>
  <mat-dialog-content>
    <form [formGroup]="form" (ngSubmit)="submit(form)" class="formularios">
      <mat-checkbox [(ngModel)]="checkedName" >Nome</mat-checkbox>
      <mat-checkbox [(ngModel)]="checkedEmail" >Email</mat-checkbox>
      <mat-form-field>
        <input matInput formControlName="nome" type="text" placeholder="Nome" [formControl]="myControl" [matAutocomplete]="auto">
        <mat-autocomplete #auto="matAutocomplete">
          <mat-option *ngFor="let option of options" [value]="option">
            {{option}}
          </mat-option>
        </mat-autocomplete>
      </mat-form-field>
      <mat-form-field>
        <input matInput formControlName="email" type="email" placeholder="Email" [formControl]="myControl" [matAutocomplete]="auto">
        <mat-autocomplete #auto="matAutocomplete">
          <mat-option *ngFor="let option of options" [value]="option.email">
           {{option.email}
          </mat-option>
        </mat-autocomplete>
      </mat-form-field>
    </form>
  </mat-dialog-content>
  <mat-dialog-actions>
    <button mat-raised-button color="primary" type="submit" (click)="consultar(form)">Consultar</button>
    <button mat-button (click)="closeRedfinirDialog()">Fechar</button>
  </mat-dialog-actions>
`
})
export class PesquisaClientDialogComponent{
    form: FormGroup;
    myFormControl = new FormControl();
    hide=true;
    optons: any;
    checkedName = false;
    checkedEmail = false;
    client: Observable<Client>;

    clientService: ClientService;

    constructor(
      private formBuilder: FormBuilder,
      public dialogRef: MatDialogRef<PesquisaClientDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {
        this.optons = this.clientService.getAll();
      }
  
    ngOnInit(){
      this.form = this.formBuilder.group({
        nome: this.data.nome,
        email: this.data.email
      });
    }
  
    closePesquisaDialog(){
      this.dialogRef.close();
    }
  
    consultar(form){
      if(this.checkedName == true){
        this.client = this.clientService.select(form.value.nome);
        this.dialogRef.close();
      }
      if(this.checkedEmail == true){
        this.client = this.clientService.select(form.value.email)
        this.dialogRef.close();;
      }
    }
  
}