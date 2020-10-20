import { Component, OnInit } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

// import { AppService } from '../../app.service';
// import { appConst } from '../../app.const';
// import { appConfig } from '../../app.config';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

    constructor(private router: Router,
               ) {
    }

    protected selectedLanguage = 'en';
    private userProfilePic: any;
    alerts: any;
    unread: any = 0;
    // interval = appConfig.INTERVAL;

    private switchLanguage(language: string) {
        this.selectedLanguage = language;
        // appConst.LAN = language;
    }

    private getUserProfilePic() {
        // const filePath = this.appService.userData.profilePic;
        // if (!filePath) { return; }
        // this.appService.getUserProfilePic(filePath).subscribe(
        //     res => {
        //         this.userProfilePic = 'data:image/jpg;base64,' + res;
        //     }
        // );
    }

    private manageProfile() {
        // TODO
    }

    private changePassword() {
        // TODO
    }

    private logout() {
        // this.appService.logoutUser({});
    }

    private eventListener() {
       
        
    }

    log() {
        /* console.log('Nothing'); */
    }

    ngOnInit() {
        this.eventListener();
    }
}
