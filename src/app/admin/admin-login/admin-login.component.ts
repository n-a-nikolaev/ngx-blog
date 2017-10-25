import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../../core/services/auth.service';
import { LoginData } from '../../shared/interface/login-data.interface';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  public loginForm: FormGroup;
  public translations: any = {
    page_heading: 'LOGIN.PAGE_HEADING',
    placeholder_username: 'LOGIN.PLACEHOLDER_USERNAME',
    placeholder_password: 'LOGIN.PLACEHOLDER_PASSWORD',
    login_btn_text: 'LOGIN.LOGIN_BTN_TEXT',
    general_error: 'ERROR.GENERAL'
  }
  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private snackBar: MatSnackBar,
    private translate: TranslateService
  ) { }

  public ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  public onLoginFormSubmit(): void {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value as LoginData).subscribe(res => {
        // TODO
        console.log(res);
      }, error => {
        this.snackBar.open(this.translations.general_error, null, {
          duration: 2000,
        });
      })
    }
  }

}
