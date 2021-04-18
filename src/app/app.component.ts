import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-angular';
  constructor(private appService:AppService){
    this.appService.get().subscribe(res=>{
      console.log(res);
    });
  }
  
}
