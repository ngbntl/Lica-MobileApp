import {
	IsEmail,
	IsNotEmpty,
	IsOptional,
	IsStrongPassword,
	MaxLength,
} from 'class-validator';

export class CreateUserDto {
	@IsNotEmpty() // Bắt buộc phải gửi lên
	@MaxLength(50) // Tối đa 50 ký tự
	first_name: string;

	@IsNotEmpty()
	@MaxLength(50)
	last_name: string;

	@IsNotEmpty()
	@MaxLength(50)
	@IsEmail() // Phải là định dạng email
	email: string;

	@IsNotEmpty()
	@MaxLength(50)
	username: string;

	@IsNotEmpty()
	@IsStrongPassword() // Password phải đủ độ mạnh
	password: string;
}
