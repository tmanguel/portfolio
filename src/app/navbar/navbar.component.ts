import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller, private _router: Router) { }

  ngOnInit(): void {
  }

  public goToSkills(){
    this._router.navigate(['']);
    setTimeout(() => {
      this.viewportScroller.scrollToPosition([0,740]);
    }, 0);

  }
}
