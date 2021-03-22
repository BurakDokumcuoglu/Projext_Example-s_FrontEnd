import { Component } from '@angular/core';  //component kullanabilmek için gerekli olan satır

@Component({  //AppComponent class'ının component olduğu belirtiliyor
  selector: 'app-root', //index.html'de app-root taginin kullanılacağı belirtiliyor
  templateUrl: './app.component.html', //component bu html'in datasını yönetecek 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'northwind';
  user: string = "Burak Dökümcüoğlu";
 
}
