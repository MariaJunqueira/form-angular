import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable({ 
  providedIn: 'root' 
})
export class LoadingService {
  private _loadingCount: number = 0;
  private _loading: boolean = true;

  get loadingCount() {
    return this._loadingCount;
  }

  set loadingCount(value: number) {
    this._loadingCount = value;
  }

  get loading(): boolean {
    return this._loading;
  }

  set loading(value:boolean) {
    this._loading = value;
  }

  increaseLoader(): void {
    this.loadingCount++;
  }

  decreaseLoader(): void {
    this.loadingCount--;
    this.loadingCount <= 0 ? this.loading = false : this.loading = true;
  }

  resetLoader(): void {
    this.loadingCount = 0;
    this.loading = false;
  }
}