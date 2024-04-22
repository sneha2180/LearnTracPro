import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LocalStorageService } from 'ngx-localstorage';

interface StoredObject {
  id: number;
  name: string;
}

@Component({
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './storage-service.component.html'
})
export class StorageServiceComponent {
  protected readonly storageService = inject(LocalStorageService);
  protected readonly storedObject = this.storageService.get<StoredObject>('demo-key');
  constructor() {
    this.storageService.set<StoredObject>('demo-key', {
      id: 1,
      name: 'John Doe'
    });
  }
}
