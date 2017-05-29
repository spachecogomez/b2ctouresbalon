import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';

import { AlertModule } from 'ng2-bootstrap';
//import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap';
import { CarouselModule } from 'ng2-bootstrap/carousel';
import { TypeaheadModule } from 'ng2-bootstrap/typeahead';
import {NgxPaginationModule} from 'ngx-pagination';


import { AppComponent } from './app.component';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { ObjectNgforPipe } from './object-ngfor.pipe';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminComponent } from './components/admin/admin.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { SearchComponent } from './components/search/search.component';
import { CustomersComponent } from './components/customers/customers.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    HomeComponent,
    ObjectNgforPipe,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    OrdersComponent,
    ProductsComponent,
    CartComponent,
    SearchComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    HttpModule,
    routes,
    AlertModule.forRoot(),
    TabsModule.forRoot(),
    CarouselModule.forRoot(),
    TypeaheadModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
