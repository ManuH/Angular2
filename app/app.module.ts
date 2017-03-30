import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductListComponent } from './products/product-list.component';
import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms';
import { ProductFilterPipe } from "./products/product-filter.pipe";
import { StarComponent } from "./shared/star.component";
import { HttpModule } from "@angular/http";
import { ProductDetailsComponent } from "./products/product-detail.component";
import { WelcomeComponent } from "./home/welcome.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [ BrowserModule,
  FormsModule, HttpModule, RouterModule.forRoot([
    { path: 'products', component: ProductListComponent },
    { path: 'product/:id', component: ProductDetailsComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
  ]) ],
  declarations: [ AppComponent,
   ProductListComponent, ProductFilterPipe, StarComponent, ProductDetailsComponent, WelcomeComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
