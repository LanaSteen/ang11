import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
     constructor(private route : ActivatedRoute){
           this.route.params.subscribe(data => console.log(data["id"]))
          //  this.route.params.subscribe(data => console.log(data["name"]))
           

     }

// promise .then
// observable    .subscibe
    //  ngOnInit(){

    //  }
}
