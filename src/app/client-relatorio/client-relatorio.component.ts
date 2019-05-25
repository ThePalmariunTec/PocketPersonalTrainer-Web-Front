import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Client } from '../models/client';

@Component({
  selector: 'app-client-relatorio',
  templateUrl: './client-relatorio.component.html'
})

export class ClientRelatorioComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Client>();
  
  formFiltroRelatorio: FormGroup;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private formBuilder: FormBuilder) {
    this.formFiltroRelatorio = this.formBuilder.group({
      dataInicio:'',
      dataFim:'',
      orderByCodigo: false,
      orderByNome: false,
      orderByDataNascimento: false,
      orderByDataPagamento: false
    });
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  filtrar(formFiltroRelatorio){}
}
