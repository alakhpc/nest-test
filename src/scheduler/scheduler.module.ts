import { DiscoveryModule } from '@golevelup/nestjs-discovery';
import { Module } from '@nestjs/common';
import { SchedulerService } from './scheduler.service';

@Module({
  imports: [DiscoveryModule],
  providers: [SchedulerService],
})
export class SchedulerModule {}
