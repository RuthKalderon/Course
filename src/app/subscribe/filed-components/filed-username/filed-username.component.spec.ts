import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiledUsernameComponent } from './filed-username.component';

describe('FiledUsernameComponent', () => {
  let component: FiledUsernameComponent;
  let fixture: ComponentFixture<FiledUsernameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiledUsernameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiledUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
