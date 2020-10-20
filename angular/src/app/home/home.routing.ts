import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentBookingComponent } from './appointment-booking/appointment-booking.component';

const homeRoutes: Routes = [
    {
        path: '', component: HomeComponent,
        children: [
            { path: "", component: DashboardComponent },
            { path: "slot", component: AppointmentBookingComponent }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(homeRoutes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }
