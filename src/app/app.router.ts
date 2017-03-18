import { ModuleWithProviders } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

export const router : Routes =[
    { path:'', component: HomeComponent },  
    { path:'details/:id', component: DetailsComponent }      
];

export const routes : ModuleWithProviders = RouterModule.forRoot(router);
