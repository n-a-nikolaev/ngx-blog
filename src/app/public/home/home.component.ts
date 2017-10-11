import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public translations: any = {
    page_heading: 'HOME.PAGE_HEADING'
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToLogin(): void {
    this.router.navigate(['login']);
  }

}
