
import { Injectable } from '@angular/core'
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service'
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model'
import { Order } from './order.model'
import { Observable } from 'rxjs/Observable'
import { Http, RequestOptions } from '@angular/http'
import { iMeat_API } from 'app/app.api'



@Injectable()
export class OrderService {
    constructor(private cartService: ShoppingCartService, private http: Http) { }

    itemsValue(): number {
        return this.cartService.total()
    }
    cartItems(): CartItem[] {
        return this.cartService.items
    }

    increaseQty(item: CartItem) {
        this.cartService.increaseQty(item)
    }

    decreaseQty(item: CartItem) {
        this.cartService.decreaseQty(item)
    }

    remove(item: CartItem) {
        this.cartService.removeItem(item)
    }

    clear() {
        this.cartService.clear()
    }

    checkOrder(order: Order):Observable<string> {
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        return this.http
                        .post(`${iMeat_API}/orders`, JSON.stringify(order), new RequestOptions({headers: headers}))
                        .map(res => res.json())
    }
}
