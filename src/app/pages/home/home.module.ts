import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { CertificationsComponent } from './components/certifications/certifications.component';


@NgModule({
  declarations: [
    HomeComponent,
    SkillsComponent,
    CertificationsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
