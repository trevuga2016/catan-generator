import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionBoardGeneratorComponent } from './extension-board-generator.component';

describe('ExtensionBoardGeneratorComponent', () => {
  let component: ExtensionBoardGeneratorComponent;
  let fixture: ComponentFixture<ExtensionBoardGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtensionBoardGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtensionBoardGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
