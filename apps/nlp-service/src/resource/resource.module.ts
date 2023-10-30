import { Module } from "@nestjs/common";
import { ResourceModuleBase } from "./base/resource.module.base";
import { ResourceService } from "./resource.service";
import { ResourceResolver } from "./resource.resolver";

@Module({
  imports: [ResourceModuleBase],
  providers: [ResourceService, ResourceResolver],
  exports: [ResourceService],
})
export class ResourceModule {}
