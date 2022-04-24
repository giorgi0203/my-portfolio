import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { AppComponent } from './app.component';


describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory({
    component: AppComponent,
    shallow: true
  });

  beforeEach(() => spectator = createComponent());

  it('should have a success class by default', () => {
    expect(spectator.component).toBeTruthy();
  });

});
