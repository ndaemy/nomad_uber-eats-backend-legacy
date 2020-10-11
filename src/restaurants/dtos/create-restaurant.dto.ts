import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class CreateRestaurnatDto {
  @Field(type => String)
  name: string;
  @Field(type => Boolean)
  isVegan: boolean;
  @Field(type => String)
  address: string;
  @Field(type => String)
  ownersName: string;
}
