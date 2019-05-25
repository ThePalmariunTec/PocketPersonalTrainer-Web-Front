import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { STATES } from '../mock-states';
import { Client } from '../models/client';
import { User } from '../models/user';
import { Roles } from '../models/roles';
import { Address } from '../models/address';
import { Person } from '../models/person';

@Component({
  selector: 'app-client-cadastro',
  templateUrl: './client-cadastro.component.html'
})
export class ClientCadastroComponent{

  hide = true;

  cadClientForm: FormGroup;

  estados = STATES;
  
  person: Person;
  client: Client;
  user: User;
  roles: Roles;
  address: Address;

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
    this.person.nome =  cadClientForm.nome
    this.person.cpf =  cadClientForm.cpf
    this.person.rg =  cadClientForm.rg
    this.user.email =  cadClientForm.email
    this.user.senha =  this.senhaTemporaria
    this.user.userName = cadClientForm.userName
    this.user.role  = this.roles
    this.client.user = this.user
    this.address.name = cadClientForm.endereco
    this.address.city = cadClientForm.cidade
    this.address.states = cadClientForm.estados
    this.person.dataNascimento = cadClientForm.dataNascimento
    this.person.telefone = cadClientForm.telefone
    
  }



}