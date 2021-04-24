import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlideComponent } from './slide/slide.component'
import { ToiComponent } from './toi/toi.component'
import { RegisterComponent } from './register/register.component'
import { AdminComponent } from './admin/admin.component'
import { ProcurationComponent } from './procuration/procuration.component'

const routes: Routes = [
    { path: "", component: SlideComponent },
    { path: "home", component: SlideComponent },
    { path: "solicit/register", component: RegisterComponent },
    { path: "solicit/procuration", component: ProcurationComponent },
    { path: "admin", component: AdminComponent },
    { path: "admin/toi", component: ToiComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false} )],
    exports: [RouterModule]
})
export class AppRoutingModule { }
