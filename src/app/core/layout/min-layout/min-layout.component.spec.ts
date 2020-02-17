import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {MatToolbarModule} from '@angular/material/toolbar';

import { MinLayoutComponent } from './min-layout.component';
import { FooterComponent} from '../footer/footer.component';

describe('MinLayoutComponent', () => {
  let component: MinLayoutComponent;
  let fixture: ComponentFixture<MinLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatToolbarModule],
      declarations: [ FooterComponent, MinLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
