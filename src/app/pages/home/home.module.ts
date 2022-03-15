import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { ContactModule } from '../contact/contact.module';
import { ProjectsComponent } from './components/projects/projects.component';


@NgModule({
  declarations: [
    HomeComponent,
    SkillsComponent,
    CertificationsComponent,
    ProjectsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ContactModule
  ]
})
export class HomeModule { }
