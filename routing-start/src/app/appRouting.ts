import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './users/user/user.component';
import { ServerComponent } from './servers/server/server.component';

export const rotas: Routes = [
    { path: "", component: HomeComponent },
    { path: "users", component: UserComponent },
    { path: "servers", component: ServerComponent }
];
