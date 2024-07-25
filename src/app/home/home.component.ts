import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog/dog.service';
import { Dog, Image } from 'src/models/dog.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dogs: Dog[] = [];
  currentPage: number = 1;
  dogsPerPage: number = 12;
  totalDogs: number = 60;

  constructor(private dogService: DogService) { }

  ngOnInit(): void {
    this.getDogs();
  }

  getDogs(): void {
    let paginationStart = (this.currentPage - 1) * this.dogsPerPage;
    let paginationEnd = paginationStart + this.dogsPerPage;
    if (this.currentPage >= 1 && this.currentPage <= this.calculateTotalPages()) {
      this.dogService.getDogs(this.currentPage).subscribe(
        (dogs: Dog[]) => {
          this.dogs = dogs.slice(paginationStart, paginationEnd);
          this.dogs.forEach((dog: Dog) => {
            this.dogService.getImageById(dog.reference_image_id).subscribe((image: Image) => {
              dog.imageUrl = image.url;
            });
          })
        }
      );
    }
  }

  setPage(page: number): void {
    if (page >= 1 && page <= this.calculateTotalPages()) {
      this.currentPage = page;
      this.getDogs();
    }
  }

  calculateTotalPages(): number {
    return Math.ceil(this.totalDogs / this.dogsPerPage);
  }
}
