import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login/login.component';
import { GymcadastrarComponent } from './gymcadastrar/gymcadastrar.component';
import { RedefinirSenhaDialogComponent } from './dialogs/redefinir-senha-dialog.component';
import { PesquisaClientDialogComponent } from './dialogs/Pesquisa-client-dialog.componet'; 
import { CarouselComponent } from './carousel-component';
import { ClientCadastroComponent } from './client-cadastro/client-cadastro.component';
import { EmployCadastroComponent } from './employ-cadastro/employ-cadastro.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { TrainCadastroComponent } from './train-cadastro/train-cadastro.component';
import { ClientRelatorioComponent } from './client-relatorio/client-relatorio.component';
import { EmployRelatorioComponent } from './employ-relatorio/employ-relatorio.component';
import { PesquisaEmployeDialogComponent } from './dialogs/pesquisa-employe-dialog.component';

//Angular MAterial
import {MatButtonModule, MatCheckboxModule, MatAutocompleteModule, 
  MatBadgeModule, MatInputModule, MatDatepickerModule, 
  MatFormFieldModule, MatRadioModule, MatSelectModule, 
  MatSliderModule, MatSlideToggleModule, MatMenuModule, 
  MatSidenavModule, MatToolbarModule, MatListModule, 
  MatGridListModule, MatCardModule, MatStepperModule, 
  MatTabsModule, MatExpansionModule, MatButtonToggleModule, 
  MatChipsModule, MatIconModule, MatProgressSpinnerModule, 
  MatProgressBarModule, MatDialogModule, MatTooltipModule, 
  MatSnackBarModule, MatTableModule, MatSortModule, MatPaginatorModule, MatNativeDateModule} from '@angular/material';




@NgModule({
  declarations: [
    AppComponent,LoginComponent,
    GymcadastrarComponent,
    RedefinirSenhaDialogComponent,
    PesquisaClientDialogComponent,
    PesquisaEmployeDialogComponent,
    CarouselComponent,
    ClientCadastroComponent,
    EmployCadastroComponent,
    MenuPrincipalComponent,
    TrainCadastroComponent,
    ClientRelatorioComponent,
    EmployRelatorioComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, BrowserAnimationsModule, FormsModule,
    HttpClientModule, ReactiveFormsModule,
    //Materials
    MatBadgeModule, MatCheckboxModule, MatCheckboxModule,
    MatButtonModule, MatInputModule, MatAutocompleteModule,
    MatDatepickerModule, MatFormFieldModule, MatRadioModule,
    MatSelectModule, MatSliderModule, MatSlideToggleModule,
    MatMenuModule, MatSidenavModule, MatToolbarModule,
    MatListModule, MatGridListModule, MatCardModule,
    MatStepperModule, MatTabsModule, MatExpansionModule,
    MatButtonToggleModule, MatChipsModule, MatIconModule,
    MatProgressSpinnerModule, MatProgressBarModule, MatDialogModule,
    MatTooltipModule, MatSnackBarModule, MatTableModule,
    MatSortModule, MatPaginatorModule, 
    MatNativeDateModule 
  ],
  entryComponents:[
    RedefinirSenhaDialogComponent,
    PesquisaClientDialogComponent,
    PesquisaEmployeDialogComponent
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
