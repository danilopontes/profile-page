import { Component, Input ,OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() homeComponent: HomeComponent;

  navLinks: Object[] = [
    { name: 'Home', route: '/' },
    { name: 'About me', route: '/about' },
    { name: 'Contact', route: '/contact' }
  ];

  constructor() { }

  ngOnInit() {
  }
}
