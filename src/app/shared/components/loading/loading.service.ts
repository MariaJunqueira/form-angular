import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable({ 
  providedIn: 'root' 
})
export class LoadingService {
  _loadingSubject: Subject<boolean> = new Subject();
  _loadingCount: number = 0;
  _loading: boolean = true;

  get loadingCount() {
    return this._loadingCount;
  }

  set loadingCount(value: number) {
    this._loadingCount = value;
  }

  set loading(value:boolean) {
    this._loading = value;
  }

  get loading(): boolean {
    return this._loading;
  }

  increaseLoader(): void {
    this.loadingCount++;
  }

  decreaseLoader(): void {
    this.loadingCount--;
    this.loadingCount <= 0 ? this.loading = false : this.loading = true;
  }

  setLoading(value: boolean): void {
    this._loadingSubject.next(value);
  }
}