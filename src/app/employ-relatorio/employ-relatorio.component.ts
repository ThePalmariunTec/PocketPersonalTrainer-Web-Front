import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employ-relatorio',
  templateUrl: './employ-relatorio.component.html'
})
export class EmployRelatorioComponent implements OnInit {

  formFiltroRelatorio: FormGroup;

  dataSource: any;

  constructor(private formBuilder: FormBuilder) {
    this.formFiltroRelatorio = this.formBuilder.group({
      dataInicio:'',
      dataFim:'',
      orderByCodigo: false,
      orderByNome: false,
      orderByDataNascimento: false
    });
  }

  ngOnInit() {
  }

  filtrar(formFiltroRelatorio){}

  loadDataSource(){
    //this.dataSouce = 
  }

}
