import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  getHello(): string {
    return 'Hello World!';
  }

  getLibraryAPIData(url: string) {
    this.httpService.get(url).subscribe((res) => {
      console.log(res.data);
      return JSON.stringify(res.data);
    });
  }
}
