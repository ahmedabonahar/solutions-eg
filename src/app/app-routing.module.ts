import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './client/about/about.component';
import { BlogDetailsComponent } from './client/blog-details/blog-details.component';
import { BlogsComponent } from './client/blogs/blogs.component';
import { ContactComponent } from './client/contact/contact.component';
import { HomeComponent } from './client/home/home.component';
import { PortfolioComponent } from './client/portfolio/portfolio.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent}, 
  {path: 'contact', component: ContactComponent}, 
  {
    path: 'blog', children: [
      {
        path: '', component: BlogsComponent
      },
      {
        path: 'details', component: BlogDetailsComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
