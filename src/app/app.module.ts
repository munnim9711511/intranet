import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SportsComponent } from './sports/sports.component';
import { ReligionComponent } from './religion/religion.component';
import { CookingComponent } from './cooking/cooking.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SportsComponent,
    ReligionComponent,
    CookingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: "",
        component: MainComponent,
        children: [
          {
            path: "sports",
            component: SportsComponent
          },
          {
            path: "religion",
            component: ReligionComponent
          },
          {
            path:"cooking",
            component:CookingComponent
          }
        ]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
