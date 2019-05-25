import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Gym } from '../models/gym';
import { GymService } from '../services/gym-service';
import { STATES} from '../mock-states';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../models/user';
import {  Roles } from '../models/roles';


@Component({
  selector: 'app-gymcadastrar',
  templateUrl: './gymcadastrar.component.html'
})
export class GymcadastrarComponent implements OnInit {

  selected="Selecione uma opção";

  cadastroAcademiaForm: FormGroup;

  hide = true;

  academia:Gym;
  roles: Roles;

  
  estados = STATES;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute, 
    private gymService: GymService,
    private location: Location) {
      this.cadastroAcademiaForm = this.formBuilder.group({
        nome:'',
        email: '',
        senha: '',
        cidade:'',
        endereco:''
      });
     }

  ngOnInit() {

  }

  generateFormulraioCadastro(){
    this.cadastroAcademiaForm = this.formBuilder.group({
      nome: this.academia.nome,
      email: this.academia.user.email,
      senha: this.academia.user.senha,
      cidade:this.academia.address.city,
      endereco: this.academia.address.name
    });
  }

  save(){
    this.academia.user.role = this.roles;
  }

  goBack(): void {
    this.location.back();
  }

}
