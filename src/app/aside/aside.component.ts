import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  public images: string[];
  public index: number;
  public urlImage1: string;
   public urlImage2: string;
  constructor() {
    this.index = 0;
    this.images = [
      "http://dogsworld.co.il/images/large-dogs.jpg",
      "http://images.photolight.co.il/photo/2008-09-11/262925.jpg",
      "http://www.patpet.co.il/wp-content/uploads/2014/10/168663336.jpg"
    ];
    
    this.urlImage1 = this.image;
     this.urlImage2 = this.image;
    setInterval(() => {
      this.urlImage1 = this.image;
      this.urlImage2= this.image;
    }, 2000)
  }



  public get image(): string {
    this.index++;
    this.index %= this.images.length;
    return this.images[this.index];
  }


  ngOnInit() {
  }

}

