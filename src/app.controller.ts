import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // 43.200.106.28
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


}
