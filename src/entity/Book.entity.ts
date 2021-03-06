import { IsInt, IsNotEmpty, IsNumber, Length, MaxLength } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User.entity";

@Entity()
export class Book {

    @PrimaryGeneratedColumn()
    book_number: string;

    @Column({type: 'varchar', length: 30, nullable: false})
    @Length(5, 30)
    @IsNotEmpty()
    title: string;

    @Column({type: "varchar", length: 255, nullable: false})
    @Length(5, 255)
    @IsNotEmpty()
    description: string;

    @Column({type: "varchar", length: 25, nullable: false})
    @Length(5, 25)
    @IsNotEmpty()
    category: string;

    @Column({type: "int", nullable: false})
    @IsInt()
    @IsNotEmpty()
    price: number;
    
    @Column({type: "varchar", length: 15, nullable: false})
    @IsNotEmpty()
    page_number: string;

    @Column({type: "varchar", length: 15, nullable: false})
    @Length(2, 10)
    @IsNotEmpty()
    language: string;

    @Column({type: 'varchar', length: 125, nullable: false})
    bookFileUrl: string

    @ManyToOne(() => User, (user) => user.code_user)
    user: User
    
    constructor(title: string, description: string, category: string,
        price: string, page_number: string, language: string){

            this.title = title;
            this.description = description;
            this.category = category;
            this.price = parseInt(price);
            this.page_number = page_number;
            this.language = language;
    }
}
