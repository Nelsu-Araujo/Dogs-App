import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DogDetailsComponent } from './dog/dog-details/dog-details.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'gallery', component: GalleryComponent
  },
  {
    path: 'contacts', component: ContactsComponent
  },
  {
    path: 'dogs/:id', component: DogDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
