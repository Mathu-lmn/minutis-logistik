import { Component, AfterViewInit, Input } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  standalone: true,
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit {
  private map: any;
  @Input({ transform: parseFloat }) lat?: number; // = 45.7431141144872
  @Input({ transform: parseFloat }) lng?: number; // = 4.22320976350099;
  @Input({ transform: parseInt }) mapId?: number;

  private initMap(): void {
    this.map = L.map(`map${this.mapId}`).on('load', () => {
      setTimeout(() => {
        this.map.invalidateSize();
      }, 50);
    });

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 25,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);

    this.map.setView([this.lat ? this.lat : 1, this.lng ? this.lng : 1], 16);

    L.Icon.prototype.options = {
      ...L.Icon.prototype.options,
      shadowUrl: 'assets/marker-shadow.png',
      // iconUrl: "",
      iconUrl: 'assets/marker-icon.png',
      iconSize: [26, 41],
      iconAnchor: [13, 41],
    };
    L.marker([this.lat ? this.lat : 1, this.lng ? this.lng : 1], {
      icon: L.icon(L.Icon.prototype.options),
    }).addTo(this.map);
  }

  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();
  }
}
