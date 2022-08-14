import { Body, Controller, Get, Post } from '@nestjs/common';
import { ExampleService } from './example.service';
import { CreateExampleDto } from './dto/example.dto';

@Controller('example')
export class ExampleController {
  constructor(private exampleService: ExampleService) {}
  @Post('create')
  async create(@Body() createExampleDto: CreateExampleDto) {
    try {
      await this.exampleService.create(createExampleDto);
      return { success: true };
    } catch (e) {
      throw `Error: ${e}`;
    }
  }
  @Get('get')
  getAllExamples(): any {
    return this.exampleService.getAllExamples();
  }
}
