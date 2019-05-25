import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Employe } from '../models/employe';
import { STATES } from '../mock-states';

import { MatDialogRef, MatDialog } from '@angular/material';
import { PesquisaEmployeDialogComponent } from '../dialogs/pesquisa-employe-dialog.component';
import { User } from '../models/user';
import { Roles } from '../models/roles';

@Component({
  selector: 'app-employ-cadastro',
  templateUrl: './employ-cadastro.component.html'
})
export class EmployCadastroComponent implements OnInit {

  cadEmployForm: FormGroup;

  employe: Employe;
  user: User;
  roles: Roles;


  estados = STATES;

  dialogRef: MatDialogRef<PesquisaEmployeDialogComponent>;

  tipos =[
    {value:'Personal'},
    {value:'funcionario'}
  ];

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog) {
      this.cadEmployForm = this.formBuilder.group({
        nome: ''  ,
        dataNascimento: '',
        endereco: '',
        cidade: '',
        email:'',
        senha: '',
        documento: '',
        cpf:'',
        rg:'',
        telefone:'',
        userName:'',
        confSenha:''
      });
    }

  ngOnInit() {

  }

  private openPesquisa(){
    this.dialogRef = this.dialog.open(PesquisaEmployeDialogComponent,{
      width:'500px',
      height:'390px',
      data:{nome: '', email:'', senha: '', confSenha:''}
    });
  }

  private generateForm(employe){
    this.cadEmployForm = this.formBuilder.group({
      nome: employe.person.nome  ,
      dataNascimento: employe.person.dataNascimento,
      endereco: employe.address.name,
      cidade: employe.address.city,
      email: employe.user.email,
      senha: employe.user.senha,
      documento: employe.documento,
      cpf: employe.person.cpf,
      rg: employe.person.rg,
      telefone: employe.person.telefone
    });
  }

  save(cadEmployForm){
    this.user.role = this.roles
  }

  alterar(){
    this.openPesquisa();
    //this.generateForm(this.employe)
  }
  
}
