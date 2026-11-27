import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "../../cliente/entities/cliente.entity.js";
import { PedidoProducto } from "./pedidoproducto.entity.js";

@Entity('pedidos')
export class Pedido {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    fecha: string;

    @Column()
    estado: number;

    @Column()
    observaciones: string;

    @ManyToOne(()=>Cliente)
    cliente:Cliente;

    @OneToMany(()=>PedidoProducto,pedprod=>pedprod.pedido)
    pedidoProducto:PedidoProducto[];
}
