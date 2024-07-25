import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DogService } from '../dog.service';
import { Dog, Image } from 'src/models/dog.model';

@Component({
  selector: 'app-dog-details',
  templateUrl: './dog-details.component.html',
  styleUrls: ['./dog-details.component.scss']
})
export class DogDetailsComponent implements OnInit {
  dog!: Dog;

  constructor(private route: ActivatedRoute, private dogService: DogService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.dogService.getDogById(+id).subscribe((info: Dog) => {
        this.dog = info;
      });
    }
  }
}

