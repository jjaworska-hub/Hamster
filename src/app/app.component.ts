import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  nowyKon = new Kon();

  inputText='';
  inputText2='';
  inputText3 = '';
  inputText4 = true;


  constructor(){}

  ngOnInit(): void {
    let fifi = new Chomik;
    fifi.imie = "Fifi";
    fifi.wiek = 1;
    fifi.czyWKlatce = true;

    let pipi = new Chomik('Pipi', 1.5, false)

    this.syryjski = new Chomik;
    this.syryjski.imie = "Stefan";
    this.syryjski.wiek = 2;
    this.syryjski.czyWKlatce = true;
    console.log(this.syryjski.pobierzImie());
    this.syryjski.pobierzWiek();

    this.syryjski.dodajCzynnosc('bieganie w kółku');
    this.syryjski.dodajCzynnosc('jedzenie');
    this.syryjski.dodajCzynnosc('spanie');
    this.syryjski.dodajCzynnosc('skrobanie wapnia');




    console.log(this.syryjski);

    let Rodeo = new Kon;
    Rodeo.id = 1;
    Rodeo.nazwa = 'Rodeo';
    Rodeo.rasa = 'Arab';
    Rodeo.czyMaWlasciciela = true;


  }

  syryjski: Chomik;
  Rodeo: Kon;

  onClick(){
    this.syryjski.czynnosciChomika.push(this.inputText);
    this.inputText ='';
  }

  onClick2(){
    this.nowyKon.id = Math.floor(Math.random() * (100 - 1)) + 1;
    console.log(this.nowyKon);
  }



}

class Chomik{
  imie: string;
  wiek: number;
  czyWKlatce:boolean;
  czynnosciChomika: string[] = [];

  constructor(imie: string = '', wiek: number = 0, czyWKlatce:boolean = false){
    this.imie = imie;
    this.wiek = wiek;
    this.czyWKlatce = czyWKlatce;
  }

  pobierzImie(){
    return this.imie;
  }

    wypuscChomika(czyWypuszczony: boolean){
      if (czyWypuszczony === true){
        console.log('Chomik o imieniu ' + this.imie + ' jest poza klatką.')
        this.czyWKlatce = false;
      } else {
        console.log('Chomik ' + this.imie + ' wrócił do klatki.');
        this.czyWKlatce = true;
      }
    }

  pobierzWiek(){
    console.log(this.wiek);
  }

  dodajCzynnosc(nowaCzynnosc: string){
    this.czynnosciChomika.push(nowaCzynnosc);
  }




}

class Kon{
  id: number;
  nazwa: string;
  rasa: string;
  czyMaWlasciciela: boolean;
}




