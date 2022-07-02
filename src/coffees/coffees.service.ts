import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: '1',
      name: 'Cappuccino',
      brand: 'Frothy Coffee',
      flavors: ['mocha', 'espresso', 'caramel'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: number) {
    // const coffee = this.coffees.find((coffee) => coffee.id === id);
    // if (!coffee) {
    //   throw new NotFoundException('Coffee not found');
    // }
    // return coffee;
  }

  create(coffee: Coffee) {
    this.coffees.push(coffee);
  }

  update(id: number, coffee: Coffee) {
    // const index = this.coffees.findIndex((c) => c.id === +id);
    // this.coffees[index] = coffee;
  }

  delete(id: number) {
    // this.coffees = this.coffees.filter((c) => c.id !== +id);
  }
}
