import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsNotificationModalPage } from './news-notification-modal.page';

describe('NewsNotificationModalPage', () => {
  let component: NewsNotificationModalPage;
  let fixture: ComponentFixture<NewsNotificationModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsNotificationModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsNotificationModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
