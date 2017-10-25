import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { TranslateService, TranslateDefaultParser } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public translations: any = {
    page_heading: 'HOME.PAGE_HEADING',
    error_general: 'ERROR.GENERAL'
  }
  public store: any;
  public currentLang: any;

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private translate: TranslateService,
    private parser: TranslateDefaultParser
  ) {
    
    setTimeout(() => {
      this.currentLang = this.translate.currentLang;
      this.store = this.translate.store.translations;
    }, 0);
  }

  ngOnInit() { }

  openSnackBar(): void {
    this.currentLang = this.translate.currentLang;
    this.store = this.translate.translations;
    this.snackBar.open(this.parser.getValue(this.store[this.currentLang], this.translations.error_general), null, {
      duration: 2000,
    });
  }

  goToLogin(): void {
    this.router.navigate(['login']);
  }

}
