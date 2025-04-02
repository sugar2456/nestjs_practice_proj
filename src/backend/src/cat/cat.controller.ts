import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from 'src/interface/cat.interface';

@Controller('cat')
export class CatController {
  constructor(private catsService: CatService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  findAll(): Cat[] {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }
  @Get('bread')
  findBread(): string {
    return 'This action returns all bread';
  }
}
