import { ApiProperty } from "@nestjs/swagger";


export class UpdateUserDto {
    @ApiProperty()
    favoriteFoods: string[];

    @ApiProperty()
    age: number;
}
