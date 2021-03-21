import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToiComponent } from './toi/toi.component'
import { RegisterComponent } from './register/register.component'

const routes: Routes = [
    { path: "", component: RegisterComponent },
    { path: "register", component: RegisterComponent },
    { path: "toi", component: ToiComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false} )],
    exports: [RouterModule]
})
export class AppRoutingModule { }
