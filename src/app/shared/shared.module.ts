import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Router } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {
  MatFormFieldModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,
  MatDialogModule,
  MatSelectModule
} from "@angular/material";

import {
  CarouselModule
} from "ngx-bootstrap/carousel";

@NgModule({
  declarations: [],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    // Material Common MOdules
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
  ],
  imports: [CommonModule, RouterModule, CarouselModule.forRoot()]
})
export class SharedModule {}
