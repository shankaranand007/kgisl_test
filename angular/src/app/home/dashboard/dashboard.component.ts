import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import * as moment from 'moment';

import { MomentModule } from 'ngx-moment';
import { Router } from '@angular/router';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    model: any = {};
    myDate: Date;
    rows = [];
    public selectedMoment = new Date();
    constructor(private homeservice: HomeService, private router: Router) {
        this.dataLoad(this.selectedMoment)
    }
    ngOnInit() {
    }
    dateSplit(data) {
        console.log(moment(data).get('hour'))
        return "a"
        return moment(data).get('hour') + ":" + moment(data).get('minute')
    }
    addNewSlot() {
        this.router.navigateByUrl('/home/slot');
    }
    dataLoad(date) {
        let convertDate = moment.parseZone(date).utc().format()
        console.log(moment.parseZone(this.selectedMoment).utc().format(), "kjfbkjbfk")
        this.homeservice.getData(convertDate)
            .subscribe((data) => {
                console.log(data, data['error_code'])
                if (!data['error_code']) {
                    this.rows = data['output']
                } else {
                    console.log("something went wrong")
                }
            });

    }
}
