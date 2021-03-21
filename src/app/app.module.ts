import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ToiComponent } from './toi/toi.component';
import { ListComponent } from './list/list.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
    declarations: [
        HomeComponent,
        RegisterComponent,
        ToiComponent,
        ListComponent,
        FilterPipe
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
