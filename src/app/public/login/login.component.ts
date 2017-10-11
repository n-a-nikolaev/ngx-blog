import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { LoginData } from '../../shared/interface/login-data.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService
  ) { }

  public ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  public onLoginFormSubmit(): void {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value as LoginData).subscribe(res => {
        // TODO
        console.log(res);
      })
    }
  }

}
