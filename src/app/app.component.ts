import {Component} from "@angular/core";
import {MealFood} from "./mealFood";
import {DataService} from "./data.service";
import {Day} from "./day";

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  providers: [DataService]
})
export class AppComponent {
  calories: number = 0;
  days: Day[];

  constructor(private dataService: DataService) {

  }

  ngAfterViewInit() {
    console.debug("ngAfterViewInit");
    setTimeout(()=> {
      this.days = this.dataService.load();
      if (this.days == null) {
        this.days = [this.dataService.newDay()];
      }
    }, 1);
  }

  onFoodSelected(food: MealFood) {
    console.debug("food selected : " + JSON.stringify(food));
    //test service
    this.dataService.addMealFood(food);
  }
}
