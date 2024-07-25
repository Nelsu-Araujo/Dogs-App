import { Component } from '@angular/core';
import { Carousel } from 'src/models/carousel.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  carousels: Carousel[] = [
    {
      urlImage: 'https://images.unsplash.com/photo-1550001632-fcfab51361ff?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      label: 'Mini Dachshund',
      simpleDescription: 'What characterises the miniature Dachshund is its size. Thus, while the chest circumference of the standard Dachshund measures over 35 centimetres, that of its smaller companions varies between 30 and 35 centimetres.',
    },
    {
      urlImage: 'https://images.unsplash.com/photo-1621757298919-50ce140ccb19?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      label: 'Smooth Haired Dachshund',
      simpleDescription: 'Long body, short paws, long droopy ears and big, inquisitive eyes: these are the characteristics of the Dachshund that make it one of the most charming dogs with the greatest number of fans in the world.',
    },
    {
      urlImage: 'https://images.unsplash.com/photo-1598963733287-a77ebe0f0a9f?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      label: 'Long Haired Dachshund',
      simpleDescription: 'The Longhaired Dachshund is a lively, bold and courageous dog. It may have an independent and obstinate side, but the Longhaired Dachshund is said to be the calmest and most obedient of the other two versions.',
    }
  ]

}
