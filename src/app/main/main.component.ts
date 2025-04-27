import { Component } from '@angular/core';
import { ErrorDialogComponent } from "../error-dialog/error-dialog.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ErrorDialogComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
