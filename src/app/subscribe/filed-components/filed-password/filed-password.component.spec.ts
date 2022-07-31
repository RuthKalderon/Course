import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiledPasswordComponent } from './filed-password.component';

describe('FiledPasswordComponent', () => {
  let component: FiledPasswordComponent;
  let fixture: ComponentFixture<FiledPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiledPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiledPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
