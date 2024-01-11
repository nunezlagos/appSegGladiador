import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrocelularPage } from './registrocelular.page';

describe('RegistrocelularPage', () => {
  let component: RegistrocelularPage;
  let fixture: ComponentFixture<RegistrocelularPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistrocelularPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
