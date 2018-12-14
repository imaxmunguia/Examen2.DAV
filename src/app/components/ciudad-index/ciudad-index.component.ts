import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ciudad-index',
  templateUrl: './ciudad-index.component.html',
  styleUrls: ['./ciudad-index.component.css']
})
export class CiudadIndexComponent implements OnInit {
  ciudadNum:number;
 
  listaCiudades: Array<object> = [
    { id: 3601783, name: "San Pedro Sula" },
    { id: 2643743, name: "Londres" },
    { id: 2968815, name: "Paris" },
    { id: 5128638, name: "Nueva York" },
    { id: 1850147, name: "Tokyo" },
    { id: 2147714, name: "Sydney" },
    { id: 3435910, name: "Buenos Aires" },
    { id: 3451190, name: "Rio de Janeiro" },
    { id: 2950158, name: "Berlín" },
    { id: 5601538, name: "Moscú" },
    { id: 292223, name: "Dubai" }
  ];

  @Output() valorAEnviar = new EventEmitter;

  constructor() { }


  toNumber(){
    this.ciudadNum = +this.ciudadNum;
    this.valorAEnviar.emit(this.ciudadNum.toString());
  }

  ngOnInit() {
  }

}
