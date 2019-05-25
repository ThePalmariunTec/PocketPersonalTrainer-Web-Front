import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Employe } from '../models/employe';
import { DialogData } from './dialog-data';
import { EmployeService } from '../services/employ-service';
import { Observable } from 'rxjs';

@Component({
  template: `
<h1 mat-dialog-title>Redefinção de Senha</h1>
<mat-dialog-content>
  <form [formGroup]="form" class="formularios">
    <mat-checkbox [(ngModel)]="checkedName" >Nome</mat-checkbox>
    <mat-checkbox [(ngModel)]="checkedEmail" >Email</mat-checkbox>
    <mat-form-field>
      <input matInput formControlName="nome" type="text" placeholder="Nome" >
    </mat-form-field>
    <mat-form-field>
      <input matInput formControlName="email" type="email" placeholder="Email">
    </mat-form-field>
  </form>
</mat-dialog-content>
<mat-dialog-actions>
  <button mat-raised-button color="primary" type="submit" (click)="consultar(form)">Consultar</button>
  <button mat-button (click)="closeRedfinirDialog()">Fechar</button>
</mat-dialog-actions>
`
})
export class PesquisaEmployeDialogComponent implements OnInit {
  form: FormGroup;
  myFormControl = new FormControl();
  hide=true;
  optons: any;

  checkedName = false;
  checkedEmail = false;

  employe: Observable<Employe>;

  employeService: EmployeService;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<PesquisaEmployeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      //this.optons = this.employeService.getAll();
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
      this.employe = this.employeService.select(form.value.nome);
      this.dialogRef.close();
    }
    if(this.checkedEmail == true){
      this.employe= this.employeService.select(form.value.email);
      this.dialogRef.close();;
    }
    return this.employe;
  }

}
