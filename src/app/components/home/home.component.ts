import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MainSectionComponent } from '../main-section/main-section.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ProjectsComponent } from '../projects/projects.component';
import { PortfooterComponent } from '../portfooter/portfooter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    MainSectionComponent,
    AboutMeComponent,
    ProjectsComponent,
    PortfooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
