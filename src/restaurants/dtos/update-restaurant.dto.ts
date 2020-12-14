import { ArgsType, Field, InputType, PartialType } from '@nestjs/graphql';

import { CreateRestaurnatDto } from './create-restaurant.dto';

@InputType()
export class UpdateRestaurantInputDto extends PartialType(
  CreateRestaurnatDto,
) {}

@InputType()
export class UpdateRestaurantDto {
  @Field(type => Number)
  id: number;

  @Field(type => UpdateRestaurantInputDto)
  data: UpdateRestaurantInputDto;
}
