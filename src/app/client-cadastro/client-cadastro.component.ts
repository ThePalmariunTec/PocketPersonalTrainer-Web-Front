import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { STATES } from '../mock-states';
import { Client } from '../models/client';
import { Roles } from '../models/roles';
import { ClientService } from '../services/client-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-client-cadastro',
  templateUrl: './client-cadastro.component.html'
})
export class ClientCadastroComponent{

  hide = true;

  http: ClientService

  cadClientForm: FormGroup;

  estados = STATES;
  
  client: Client;
  roles:Roles = {
    id: 1, name:"Common", desciption: "Regular User permission, Only app"
  }

  senhaTemporaria: any;

  constructor(private formBuilder: FormBuilder){
    this.cadClientForm = this.formBuilder.group({
    
      nome: '' ,
      cpf: '' ,
      rg: '',
      dataNascimento: '' ,
      endereco: '' ,
      cidade: '',
      email: '',
      telefone: '',
      userName: ``
    
    });
  }

  ngOnInit() {
  }

  generateForm(client){
    
    this.cadClientForm = this.formBuilder.group({
    
      nome:  client.person.nome ,
      cpf: client.person.cpf ,
      rg: client.person.rg,
      dataNascimento: client.person.dataNascimento ,
      endereco: client.address.name ,
      cidade: client.address.city,
      email: client.user.email,
      telefone: client.person.telefone,
      userName: client.user.userName
    
    }); 
  }

  save(cadClientForm){
    
    this.client.person.nome =  cadClientForm.nome
    this.client.person.cpf =  cadClientForm.cpf
    this.client.person.rg =  cadClientForm.rg
    this.client.user.email =  cadClientForm.email
    this.client.user.senha =  this.senhaTemporaria
    this.client.user.userName = cadClientForm.userName
    this.client.user.role  = this.roles
    this.client.person.address.name = cadClientForm.endereco
    this.client.person.address.city = cadClientForm.cidade
    this.client.person.address.states = cadClientForm.estados
    this.client.person.dataNascimento = cadClientForm.dataNascimento
    this.client.person.telefone = cadClientForm.telefone
    
    this.http.create(this.client)
  }

}