import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { PersonalPageComponent } from './personal-page/personal-page.component';
import { BannerPageComponent } from './banner-page/banner-page.component';
import { PokedexProjectComponent } from './projects-page/pokedex-project/pokedex-project.component';
import { ToDoListProjectComponent } from './projects-page/to-do-list-project/to-do-list-project.component';
import { FooterComponent } from './footer/footer.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        PersonalPageComponent,
        BannerPageComponent,
        PokedexProjectComponent,
        ToDoListProjectComponent,
        FooterComponent
      ]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
