import { Component, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignalService } from '../Services/signal.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
   
    constructor(private  sig: SignalService){
      effect(()=> {
        console.log(this.sig.dataAmount())
        this.dataFromSignal = this.sig.dataAmount()
      })
    }

  dataFromSignal =0
  counter = signal(0)
  amount? : number
  // set update  effect




  bookAmount(){
    if(this.amount){
      this.counter.set(Number(this.amount))
    }
   
  }
  grow(){
    this.counter.update(val => val+1)
  }

  reduce(){
    if(this.counter()>1){
      this.counter.update(val => val-1)
    }
  }
}
