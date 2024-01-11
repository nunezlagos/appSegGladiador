import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreaPinPage } from './crea-pin.page';

describe('CreaPinPage', () => {
  let component: CreaPinPage;
  let fixture: ComponentFixture<CreaPinPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreaPinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
