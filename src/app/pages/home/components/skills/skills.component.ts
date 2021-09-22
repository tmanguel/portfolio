import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  public skillsTop: any[] = [
    {icon: 'assets/icons/angular-icon.svg', url: 'https://angular.io/'},
    {icon: 'assets/icons/html-icon.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML'},
    {icon: 'assets/icons/css-icon.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'},
    {icon: 'assets/icons/ionic-icon.png', url: 'https://ionicframework.com/'}
  ]

  public skillsMid: any[] = [
    {icon: 'assets/icons/js-icon.svg', url: 'https://developer.mozilla.org/es/docs/Web/JavaScript'},
    {icon: 'assets/icons/node-icon.svg', url: 'https://nodejs.org/en/'},
    {icon: 'assets/icons/ts-icon.svg', url: 'https://www.typescriptlang.org/'},
    {icon: 'assets/icons/bootstrap-icon.svg', url: 'https://getbootstrap.com/'},
    {icon: 'assets/icons/react-icon.svg', url: 'https://reactjs.org/'}
  ]


  public skillsBot: any[] = [
    {icon: 'assets/icons/sass-icon.svg', url: 'https://sass-lang.com/'},
    {icon: 'assets/icons/git-icon.svg', url: 'https://git-scm.com/'},
    {icon: 'assets/icons/postgresql-icon.svg', url: 'https://www.postgresql.org/'},
    {icon: 'assets/icons/postman-icon.svg', url: 'https://www.postman.com/'}
  ]

  ngOnInit(): void {
  }

}
