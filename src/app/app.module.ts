import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//components
import { HomeComponent } from './home/home.component';
import { PersonalPageComponent } from './home/personal-page/personal-page.component';
import { BannerPageComponent } from './home/banner-page/banner-page.component';

//modules
import { ProjectsPageModule } from "./home/projects-page/projects-page.module";
import { FooterComponent } from './home/footer/footer.component';
import { SmallScreenComponent } from './home/small-screen/small-screen.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PersonalPageComponent,
        BannerPageComponent,
        FooterComponent,
        SmallScreenComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ProjectsPageModule
    ]
})
export class AppModule { }
