import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { InputComponent } from './input/input.component'
import { RatingComponent } from './rating/rating.component'
import { RadioComponent } from './radio/radio.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'


@NgModule({
    declarations: [InputComponent, RatingComponent, RadioComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent, RatingComponent, RadioComponent, CommonModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule {

}