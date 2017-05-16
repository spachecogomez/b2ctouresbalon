import { ModuleWithProviders } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

import { DetailsComponent } from './components/details/details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { SearchComponent } from './components/search/search.component';

export const router : Routes =[
    { path:'', component: HomeComponent },
    { path:'cart', component: CartComponent },
    { path:'search', component : SearchComponent},     
    { path:'details/:id', component: DetailsComponent },
    { path:'login', component: LoginComponent },
    { path:'register', component: RegisterComponent },
    { path:'admin', component: AdminComponent },
    { path:'admin/orders', component: OrdersComponent }                 
];

export const routes : ModuleWithProviders = RouterModule.forRoot(router);
