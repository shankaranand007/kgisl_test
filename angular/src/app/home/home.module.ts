import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NgxDatatableModule } from '@swimlane/ngx-datatable';
// import { ScrollbarModule } from 'ngx-scrollbar';
// import { TagInputModule } from 'ngx-chips';
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './home.component';
// import { MenuComponent } from '../shared/layout/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeService } from './home.service';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from '../shared/layout/header.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { MomentModule } from 'ngx-moment';
import { AppointmentBookingComponent } from './appointment-booking/appointment-booking.component';
// import {ModalModule} from "ngx-modal";
@NgModule({
    imports: [
        CommonModule,
        // ModalModule,
        FormsModule,
        MomentModule,
        NgxDatatableModule,
        ReactiveFormsModule,
        HomeRoutingModule,
        SharedModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        HttpClientModule,
    ],
    exports: [],
    declarations: [
        HomeComponent,
        HeaderComponent,
        DashboardComponent,
        AppointmentBookingComponent
    ],
    providers: [
        HomeService
    ],
})
export class HomeModule { }
