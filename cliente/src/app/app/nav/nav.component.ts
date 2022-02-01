import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
   
  
  webtitle:string = 'HN Feed';
  websubtitle:string= 'We <3 hackers news!';
  

  constructor() { }

  ngOnInit(): void {
  }


}
