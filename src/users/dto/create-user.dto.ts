import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    default: 'test@test.ru',
  })
  email: string;

  @ApiProperty({
    default: 'Василий Пупкин',
  })
  fullName: string;

  @ApiProperty({
    default: '123456789',
  })
  password: string;
}
