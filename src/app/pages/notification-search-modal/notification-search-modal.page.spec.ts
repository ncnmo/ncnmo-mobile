import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotificationSearchModalPage } from './notification-search-modal.page';

describe('NotificationSearchModalPage', () => {
  let component: NotificationSearchModalPage;
  let fixture: ComponentFixture<NotificationSearchModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationSearchModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationSearchModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
