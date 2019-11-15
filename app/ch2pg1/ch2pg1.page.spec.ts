import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ch2pg1Page } from './ch2pg1.page';

describe('Ch2pg1Page', () => {
  let component: Ch2pg1Page;
  let fixture: ComponentFixture<Ch2pg1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ch2pg1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ch2pg1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
