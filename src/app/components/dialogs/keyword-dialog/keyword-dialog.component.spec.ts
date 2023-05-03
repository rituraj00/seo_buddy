import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordDialogComponent } from './keyword-dialog.component';

describe('KeywordDialogComponent', () => {
  let component: KeywordDialogComponent;
  let fixture: ComponentFixture<KeywordDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeywordDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeywordDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
