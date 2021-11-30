import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthData } from '../auth-data.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    public auth: AuthService,
    private router: Router,
    // private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  submit(form: NgForm) {
    if (form.invalid) {
      return
    }
    const user: AuthData = {
      email: form.value.email,
      password: form.value.password,
    }

    this.auth.login(user).subscribe(() => {
      form.reset()
      this.router.navigate([''])
    })
  }
}
