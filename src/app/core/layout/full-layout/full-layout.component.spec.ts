import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {MatToolbarModule} from '@angular/material/toolbar';

import { FullLayoutComponent } from './full-layout.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

describe('FullLayoutComponent', () => {
  let component: FullLayoutComponent;
  let fixture: ComponentFixture<FullLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatToolbarModule],
      declarations: [ FullLayoutComponent, FooterComponent, HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
