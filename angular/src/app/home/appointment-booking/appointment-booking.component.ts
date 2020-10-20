import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-appointment-booking',
  templateUrl: './appointment-booking.component.html',
  styleUrls: ['./appointment-booking.component.scss']
})
export class AppointmentBookingComponent implements OnInit {
  public selectedMoment = new Date();
  selectedMoment2 = new Date();
  add_minute = moment(this.selectedMoment2).add(30, 'minutes')
  rows: [];
  constructor(private homeservice: HomeService, private router: Router) { }


  ngOnInit() {
  }
  backtolist() {
    this.router.navigateByUrl('/home');
  }
  add() {

  }
  change(data) {
    this.add_minute = moment(data).add(30, 'minutes')


    this.homeservice.checkavailability(moment.parseZone(data).utc().format(), moment.parseZone(this.add_minute).utc().format())
      .subscribe((data) => {
        if (data['error_code']) {
          alert("this slot was already created")
        } else {
          var today = new Date()
          var curHr = today.getHours()

          if (curHr < 12) {
            console.log('morning')
          } else if (curHr < 18) {
            console.log('afternoon')
          } else {
            console.log('evening')
          }
          let value = {
            "start_time": moment.parseZone(data).utc().format(),
            "end_time": moment.parseZone(this.add_minute).utc().format(),
            "date_": moment.parseZone(today).utc().format(),
            "section": curHr
          }
          this.homeservice.createSlot(value)
            .subscribe((data) => {
              document.getElementById('close').click();

              this.dataLoad()
            })
        }

      })
  }
  dataLoad() {
    let convertDate = moment.parseZone(this.selectedMoment).utc().format()
    // console.log(moment.parseZone(this.selectedMoment).utc().format())
    this.homeservice.getAllslot(convertDate)
      .subscribe((data) => {
        console.log(data, data['error_code'])
        if (!data['error_code']) {
          this.rows = data['output']
        } else {
          console.log("something went wrong")
        }
      });

  }
  addSlot() {
    document.getElementById('open').click();

  }

}
