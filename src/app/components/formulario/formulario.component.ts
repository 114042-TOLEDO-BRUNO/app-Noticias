import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Output()parametrosSeleccionados=new EventEmitter<any>();
  categoriaSeleccionada='general';
  paisSeleccionado='ar';
  

  
  categorias:any[]=[
    {value:'sports',nombre:'Deportes'},
    {value:'business',nombre:'Negocios'},
    {value:'technology',nombre:'Tecnologia'},
    {value:'entertainment',nombre:'Entretenimiento'},
    {value:'general',nombre:'General'},
    {value:'health',nombre:'Salud'},
    {value:'science',nombre:'Ciencia'}
  ]
  paises:any[]=[
    {value:'ar',nombre:'Argentina'},
    {value:'br',nombre:'Brasil'}
    
  ]
  
  
  constructor(){

  }

  buscarNoticia(){
    
      // console.log(this.categoriaSeleccionada);
      // console.log(this.paisSeleccionado);
      const PARAMETROS={
        categoria:this.categoriaSeleccionada,
        pais:this.paisSeleccionado
      }
      this.parametrosSeleccionados.emit(PARAMETROS);//disponibiliza la informacion a todo el proyecto
      
  }

}
