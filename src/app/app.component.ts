import { Component } from '@angular/core';
import { NoticiasService } from './services/noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-noticias';
  //crear un listado de noticias
  listaDeNoticias:any[]=[]

  //carga spinner
  loading=false;
  //inyectar el servicio
  constructor(private _api: NoticiasService){
  }
  buscarNoticia(event:any){//es el metodo que es diponibilidazo del formulario y que lo agarra el padre 
    this.loading=true;//cuando se cargue las noticias el spinner se mostrara
    this.listaDeNoticias=[];//seteo el array a 0 para que se vea con mas tiempo el spinner
    setTimeout(()=>{//funcion para que se muestre el spinner 1 segundo y despues me muestre los resultados
      this._api.getNoticias(event).subscribe(result=>{//como get noticias devuelve un obseervable me tengo que suscribir 
        console.log(result);
        this.loading=false; //cuando se termina de cargar las noticias
        this.listaDeNoticias=result.articles; //articles es cada uno de los objetos que me devuelve la api
        
      });
    },1000); 
    
    
    
  }
}
