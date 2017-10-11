import { Component, OnInit } from '@angular/core';
import { RoutesConfig } from '../../config/routes.config';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public links: { route: string, label: string }[] = RoutesConfig;

  ngOnInit() {
  }

}
