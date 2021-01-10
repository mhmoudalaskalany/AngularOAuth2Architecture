
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'core/services/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  async ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      console.log('not authenticated at Stock  login');
      await this.authService.login();
    }
    console.log('authenticated at Stock login');
    this.router.navigate(['main/home']);
  }

}
