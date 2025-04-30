import { Component } from '@angular/core';
import { ErrorDialogComponent } from "../error-dialog/error-dialog.component";
import { SignalService } from '../Services/signal.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ErrorDialogComponent, FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  constructor(private sig : SignalService){

  }

  amount? : number

  saveDataAmount(){
    if(this.amount){
      this.sig.setDataAmount(this.amount)
    }
  }
}
