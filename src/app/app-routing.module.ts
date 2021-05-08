import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlideComponent } from './slide/slide.component'
import { ToiComponent } from './toi/toi.component'
import { RegisterComponent } from './register/register.component'
import { AdminComponent } from './admin/admin.component'
import { ProcurationComponent } from './procuration/procuration.component'
import { AttendanceComponent } from './attendance/attendance.component'

const routes: Routes = [
    { path: "", component: SlideComponent },
    { path: "home", component: SlideComponent },
    { path: "solicit", component: SlideComponent },
    { path: "solicit/process", component: SlideComponent },
    { path: "solicit/register", component: RegisterComponent },
    { path: "solicit/attendance", component: AttendanceComponent },
    { path: "solicit/procuration", component: ProcurationComponent },
    { path: "solicit/hyposufficiency", component: ProcurationComponent },
    { path: "admin", component: AdminComponent },
    { path: "admin/toi", component: ToiComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false} )],
    exports: [RouterModule]
})
export class AppRoutingModule { }
