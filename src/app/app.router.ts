import { ModuleWithProviders } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { OrdersComponent } from './orders/orders.component';

export const router : Routes =[
    { path:'', component: HomeComponent },  
    { path:'details/:id', component: DetailsComponent },
    { path:'login', component: LoginComponent },
    { path:'register', component: RegisterComponent },
    { path:'admin', component: AdminComponent },
    { path:'admin/orders', component: OrdersComponent }                    
];

export const routes : ModuleWithProviders = RouterModule.forRoot(router);
