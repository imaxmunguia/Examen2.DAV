import { ClimaService } from './../../services/clima.service';
import { ActivatedRoute } from '@angular/router';
import { IData } from './IData';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clima-index',
  templateUrl: './clima-index.component.html',
  styleUrls: ['./clima-index.component.css']
})
export class ClimaIndexComponent implements OnInit {
  datosClima: IData[]=[];
  id:string;

  //constructor() { }

  constructor(private climaService: ClimaService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
    })

  }

  RecibirValor(event){
    this.id=event;
    console.log(this.id)

    this.climaService
    .consultarClima(this.id)
    .subscribe((data: IData) => {
      console.log('Datos')
      console.log(data)

      
      this.datosClima.push(data);
      console.log(this.datosClima)
      
    });
  }

  ngOnInit() {
    this.id = '3601783';
    this.climaService
      .consultarClima(this.id)
      .subscribe((data: IData) => {
        console.log('Datos')
        console.log(data)

        
        this.datosClima.push(data);
        console.log(this.datosClima)
        
      });
  }
}
