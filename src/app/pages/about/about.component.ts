import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public aboutMe:string = "I'm a FullStack developer, located in Buenos Aires, Argentina. I have a passion for Front End development, and I find myself constantly learning new technologies or concepts. I consider myself to be a well organized, responsible and problem solver person."

  public aboutMe2:string = "I'm a fan of comedy TV Series and a finance and investments lover. I'm really intrested in anything related to cryptocurrencies and blockchain (it has both finance and high technology, the best of both worlds)."

}
