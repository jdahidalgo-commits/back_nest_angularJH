import type { User } from '../../users/entities/user.entity.js';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Persona {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @OneToOne('User', (user: User) => user.persona)
  @JoinColumn()
  user: User;
}
