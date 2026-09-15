import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Desafiofinal } from './desafiofinal';

describe('Desafiofinal', () => {
  let component: Desafiofinal;
  let fixture: ComponentFixture<Desafiofinal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Desafiofinal],
    }).compileComponents();

    fixture = TestBed.createComponent(Desafiofinal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
