import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitteComponent } from './twitte.component';

describe('TwitteComponent', () => {
  let component: TwitteComponent;
  let fixture: ComponentFixture<TwitteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
