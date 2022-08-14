import { IsNumber, IsString } from 'class-validator';
export class CreateExampleDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly description: string;
  @IsNumber()
  readonly total_cost: number;
  @IsString()
  readonly file_url: string;
  @IsString()
  readonly gst: number;
  @IsString()
  readonly expense_type: string;
}
