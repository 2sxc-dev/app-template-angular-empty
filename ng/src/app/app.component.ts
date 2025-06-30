import { Context, SxcAppComponent } from '@2sic.com/sxc-angular';
import { Component, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterOutlet]
})
export class AppComponent extends SxcAppComponent {
  constructor(el: ElementRef, context: Context) {
    super(el, context);
  }
}
