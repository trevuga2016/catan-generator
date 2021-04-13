import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatanBoardGeneratorComponent } from './catan-board-generator.component';

describe('NewBoardGeneratorComponent', () => {
  let component: CatanBoardGeneratorComponent;
  let fixture: ComponentFixture<CatanBoardGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatanBoardGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatanBoardGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
