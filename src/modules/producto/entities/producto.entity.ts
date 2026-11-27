import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity.js";
import { PedidoProducto } from "../../pedido/entities/pedidoproducto.entity.js";

@Entity('productos')

export class Producto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    precio: number;

    @Column()
    stock: number;

    @Column()
    image: string;

    @Column()
    descrpcion: string;

    @Column()
    estado:boolean;

    @ManyToOne('Categoria', (cat: Categoria) => cat.producto)
    categoria: Categoria;

    @OneToMany(()=>PedidoProducto,pedprod=>pedprod.producto)
    pedidoProducto:PedidoProducto[];
}
