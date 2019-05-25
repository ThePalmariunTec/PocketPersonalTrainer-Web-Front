import {MediaMatcher} from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { Gym } from '../models/gym';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html'
})
export class MenuPrincipalComponent implements OnInit {

  mobileQuery: MediaQueryList;

  fillerNavCadastros = [
    {name:'Clientes', option:'#cadastroClient', icon:'person'},
    {name:'Funcionários', option:'#employCadastro', icon:'person'},
    {name:'Exercícios', option:'#trainCadastro', icon:'assignment'}
  ];

  fillerNavRelatorios = [
    {name:"Clientes", option:'#clientSheet', icon:'list'},
    {name:"Funcionários", option:'#employSheet', icon:'list'}
  ];

  academia: Gym;

  menuOptions: any;
  
  private _mobileQueryListener: () => void;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher){
   //icones de menu
   iconRegistry.addSvgIcon(
    'menu-icon',
    sanitizer.bypassSecurityTrustResourceUrl('assets/open-iconic-master/svg/cog.svg'));
   iconRegistry.addSvgIcon(
   'person-icon',
    sanitizer.bypassSecurityTrustResourceUrl('assets/open-iconic-master/svg/person.svg'));
   iconRegistry.addSvgIcon(
    'logout-icon', 
    sanitizer.bypassSecurityTrustResourceUrl('assets/open-iconic-master/svg/account-logout.svg'));
    iconRegistry.addSvgIcon(
      'document', 
      sanitizer.bypassSecurityTrustResourceUrl('assets/open-iconic-master/svg/document.svg'));

    this.mobileQuery = media.matchMedia('(max-width: 870px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit() {
  }

  menuClick(option:any){
    this.menuOptions = option;
  }
}
