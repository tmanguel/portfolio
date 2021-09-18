import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public posY:string = ''
  public posX:string = ''
  public mouseEvent: any;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('mousemove', ['$event'])
  public mousemove(event: MouseEvent):void{
    this.mouseEvent = event
    this.posY = (event.pageY-300) + 'px';
    this.posX = (event.pageX-300) + 'px';
  }
}
