/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ResourceWhereInput } from "./ResourceWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ResourceListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ResourceWhereInput,
  })
  @ValidateNested()
  @Type(() => ResourceWhereInput)
  @IsOptional()
  @Field(() => ResourceWhereInput, {
    nullable: true,
  })
  every?: ResourceWhereInput;

  @ApiProperty({
    required: false,
    type: () => ResourceWhereInput,
  })
  @ValidateNested()
  @Type(() => ResourceWhereInput)
  @IsOptional()
  @Field(() => ResourceWhereInput, {
    nullable: true,
  })
  some?: ResourceWhereInput;

  @ApiProperty({
    required: false,
    type: () => ResourceWhereInput,
  })
  @ValidateNested()
  @Type(() => ResourceWhereInput)
  @IsOptional()
  @Field(() => ResourceWhereInput, {
    nullable: true,
  })
  none?: ResourceWhereInput;
}
export { ResourceListRelationFilter as ResourceListRelationFilter };
