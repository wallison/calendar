import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatNativeDateModule,
  MatPaginatorModule,
  MatProgressSpinnerModule, MatSelectModule
} from '@angular/material';

@NgModule({
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [],
})
export class MaterialModule {}
