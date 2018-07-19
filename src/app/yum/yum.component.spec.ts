import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YumComponent } from './yum.component';

describe('YumComponent', () => {
  let component: YumComponent;
  let fixture: ComponentFixture<YumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
