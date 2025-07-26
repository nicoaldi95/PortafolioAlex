import { Component } from '@angular/core';
import { Header } from '../components/header/header';
import { Main } from '../components/main/main';
import { Footer } from '../components/footer/footer';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [Header, Main, Footer],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPage {}
