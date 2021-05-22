import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { SlideComponent } from './slide/slide.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { FilterPipe } from './filter.pipe';

import { AdminComponent } from './admin/admin.component';
import { AddressComponent } from './address/address.component';
import { ClientComponent } from './client/client.component';
//import { RegisterComponent } from './register/register.component';
import { ToiComponent } from './toi/toi.component';
import { ListComponent } from './list/list.component';
//import { ProcurationComponent } from './procuration/procuration.component';

@NgModule({
    declarations: [
        HomeComponent,
        MenuComponent,
        SlideComponent,
        AttendanceComponent,
        FilterPipe,
        ToiComponent,
        ListComponent,
        //       RegisterComponent,
        AdminComponent,
//        ProcurationComponent,
        ClientComponent,
        AddressComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [HomeComponent]
})
export class AppModule { }
