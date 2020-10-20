import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kgisl';


    constructor(private router: Router) {
    }

    // public initUserForm() {
    //     this.user = this.form.group({
    //         username: ['', Validators.required],
    //         password: ['', Validators.required]
    //     });
    //     this.isValidUser = true;
    // }

    // public login() {
    //     this.routePath = this.route.snapshot.routeConfig.path;
    //     const data = this.user.value;
    //     this.loginService.authenticate(data).subscribe(
    //         res => {
    //             this.successLogin(res);
    //         },
    //         err => {
    //             this.failureLogin(err);
    //         }
    //     );
    // }

    private successLogin(res) {
        this.router.navigateByUrl('/home');
    }


    ngOnInit() {
        sessionStorage.clear();
    }

}
