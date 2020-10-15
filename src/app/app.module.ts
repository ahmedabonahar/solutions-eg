import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './client/home/home.component';
import { FooterComponent } from './client/footer/footer.component';
import { FooterContactComponent } from './client/footer-contact/footer-contact.component';
import { ContactComponent } from './client/contact/contact.component';
import { HeaderComponent } from './client/header/header.component';
import { AboutComponent } from './client/about/about.component';
import { PortfolioComponent } from './client/portfolio/portfolio.component';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { StatisticComponent } from './client/statistic/statistic.component';
  
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    FooterContactComponent,
    ContactComponent,
    HeaderComponent,
    AboutComponent,
    PortfolioComponent,
    StatisticComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
            // ngx-translate and the loader module
            HttpClientModule,
            TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [HttpClient]
                }
            })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

