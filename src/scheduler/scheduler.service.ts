import { DiscoveryService } from '@golevelup/nestjs-discovery';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { SCHEDULER_TOKEN, SchedulerMeta } from './scheduler.consts';

@Injectable()
export class SchedulerService implements OnModuleInit {
  constructor(private discovery: DiscoveryService) {}

  public async onModuleInit() {
    await this.startIntervals();
  }

  public async startIntervals() {
    const discovered = await this.discovery.providerMethodsWithMetaAtKey<SchedulerMeta>(SCHEDULER_TOKEN);

    for (const { discoveredMethod, meta } of discovered) {
      setInterval(() => discoveredMethod.handler(), meta.ms);
    }
  }
}
