import { NgModule } from '@angular/core';
import {
  MatFormFieldModule, MatSelectModule, MatMenuModule, MatInputModule,
  MatButtonModule, MatCheckboxModule, MatTooltipModule,
  MatDividerModule, MatRadioModule, MatTableModule, MatNativeDateModule, MatListModule, MatExpansionModule,
  MatCardModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatProgressSpinnerModule,
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table'
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatDividerModule,
    MatRadioModule,
    MatTableModule,
    CdkTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatDividerModule,
    MatRadioModule,
    MatTableModule,
    CdkTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule
  ],
})

export class MaterialModule {


}
