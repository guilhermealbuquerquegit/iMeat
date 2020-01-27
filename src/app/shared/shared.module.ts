import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'

import { InputComponent } from './input/input.component'
import { RatingComponent } from './rating/rating.component'
import { RadioComponent } from './radio/radio.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'


import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { RestaurantsService } from "app/restaurants/restaurants.service";
import { OrderService } from "app/order/order.service";
import { NotificationService } from './messages/notification.service'
import { LoginService } from 'app/security-frontend/login/login.service'
import { LoggedInGuard } from 'app/security-frontend/LoggedInGuard'
@NgModule({
    declarations: [InputComponent, RatingComponent, RadioComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent, RatingComponent, RadioComponent, 
              CommonModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers:[ShoppingCartService, RestaurantsService, OrderService, 
                       NotificationService, LoginService, LoggedInGuard]
        }
    }
}