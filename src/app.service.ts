import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import xml2js from 'xml2js';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  getHello(): string {
    return 'Hello World!';
  }

  // getLibraryAPIData(url: string): any {
  //   this.httpService.get(url).subscribe((res) => {
  //     console.log(res.data);
  //     return JSON.stringify(res.data);
  //   });
  // }

  async getLibraryAPIData(url: string): Promise<any> {
    try {
      const response = await axios.get(url);
      const xmlData = response.data;
      const parser = new xml2js.Parser({ explicitArray: false });
      const jsonData = await parser.parseStringPromise(xmlData);
      return jsonData;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
