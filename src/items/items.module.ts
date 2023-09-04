import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { ItemModel } from '../infra/database/typeOrm/models/item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExtractItemsListener } from './listeners/extract-items.listener';

@Module({
  imports: [TypeOrmModule.forFeature([ItemModel])],
  exports: [TypeOrmModule],
  controllers: [ItemsController],
  providers: [ItemsService, ExtractItemsListener],
})
export class ItemsModule {}
