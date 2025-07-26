import { Component } from '@angular/core';
import { Projects } from '../projects/projects';
import { Skills } from '../skills/skills';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [Projects, Skills, Contact],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {}
