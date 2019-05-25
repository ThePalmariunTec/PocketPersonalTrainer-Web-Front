import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Client } from '../models/client';
import { ClientService } from '../services/client-service';

@Component({
  selector: 'app-client-relatorio',
  templateUrl: './client-relatorio.component.html'
})

export class ClientRelatorioComponent implements OnInit {
  displayedColumns: string[] = ['Código', 'Nome', 'Telefone', 'Aniversário'];
  dataSource = new MatTableDataSource<Client>();
  
  formFiltroRelatorio: FormGroup;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  http: ClientService;
  dataSorce = this.http.getAll;

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
