import { Component, OnInit } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { Observable } from 'rxjs/internal/Observable';
import { Models3dService } from '../../services/models-3d/models-3d.service';
import { CommonModule } from '@angular/common';
import { listModels } from '../../constants/listModels';


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

@Component({
  selector: 'app-menu-models',
  imports: [
    CommonModule,
    ImageModule
  ],
  templateUrl: './menu-models.component.html',
  styleUrl: './menu-models.component.css'
})
export class MenuModelsComponent implements OnInit {

  public selectedModel: Observable<model3D>;
  public selectedCategory: Observable<category3D>;
  public listModels: any[] = [];

  constructor(private models3dService: Models3dService) {
    this.selectedModel = models3dService.getSelectedModel;
    this.selectedCategory = models3dService.getSelectedCategory;
  }

  ngOnInit(): void {
    this.getCurrentCategory()
  }

  getCurrentCategory() {
    this.selectedCategory.subscribe((value) => {
      this.listModels = listModels.filter((item) => item.typeModel === value.code) ?? [];
    });
  }

  changeModel(model: any) {
    this.models3dService.setSelectedModel = model;
  }
}
