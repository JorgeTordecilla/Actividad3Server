import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateTodoDto {
  @ApiProperty({ example: 'Todo de muestra' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: false })
  @IsBoolean()
  @IsNotEmpty()
  completed: boolean;
}

export class UpdateTodoDto extends PartialType(CreateTodoDto) {}
