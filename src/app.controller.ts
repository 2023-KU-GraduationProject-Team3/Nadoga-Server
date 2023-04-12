import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // 43.200.106.28
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/library')
  getLibrary(@Body('url') url: string) {
    return this.appService.getLibraryAPIData(url);
  }
}
