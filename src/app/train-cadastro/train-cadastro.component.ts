import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Train } from '../models/train';

@Component({
  selector: 'app-train-cadastro',
  templateUrl: './train-cadastro.component.html'
})
export class TrainCadastroComponent implements OnInit {


  cadExercicioForm: FormGroup;

  trainning: Train;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute, 
    private location: Location) {
      this.cadExercicioForm = this.formBuilder.group({
        nome: '' ,
        descricao: '' ,
        aparelho: ''
      });
     }

  ngOnInit() {
  }

  generateForm(trainning?){
    this.cadExercicioForm = this.formBuilder.group({
      nome: trainning.nome ,
      descricao: trainning.descricao ,
      aparelho: trainning.aparelho
    });
}

goBack(): void {
  this.location.back();
}

}
