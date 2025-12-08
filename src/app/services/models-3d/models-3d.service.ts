import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { listModels } from '../../constants/listModels';
import { listCategories } from '../../constants/listCategories';

interface model3D {
  typeModel: string,
  modelRoute: string,
  previweRoute: string,
  label: string,
  dataImage: {
    radius: number,
    height: number,
    positionY: number
  }
}

interface category3D {
  name: string,
  code: string,
  disabled: boolean,
}

@Injectable({
  providedIn: 'root'
})

export class Models3dService {

  private selectedModel: BehaviorSubject<model3D> = new BehaviorSubject<model3D>(listModels[0]);
  private selectedCategory: BehaviorSubject<category3D> = new BehaviorSubject<category3D>(listCategories[0]);

  constructor() { }

  set setSelectedModel(model: model3D) {
    this.selectedModel.next(model)
  }

  get getSelectedModel() {
    return this.selectedModel.asObservable();
  }

  set setSelectedCategory(category: category3D) {
    this.selectedCategory.next(category)
  }

  get getSelectedCategory() {
    return this.selectedCategory.asObservable();
  }
}
