import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class PrimaryService {
  private scene: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);
  private primaryCamera: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);
  public currentBackgroundColor: string = '#1e2939';
  public currentBackgroundImage: any | undefined;

  constructor() { }

  set setScene(scene: any) {
    this.scene.next(scene)
  }

  get getScene() {
    return this.scene.asObservable();
  }

  set setPrimaryCamera(primaryCamera: any) {
    this.primaryCamera.next(primaryCamera)
  }

  get getPrimaryCamera() {
    return this.primaryCamera.asObservable();
  }

  set setCurrentBackgroundColor(color: string) {
    this.currentBackgroundColor = color;
  }

  set setCurrentBackgroundImage(image: any) {
    this.currentBackgroundImage = image;
  }
}
