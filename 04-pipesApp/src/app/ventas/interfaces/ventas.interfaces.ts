export enum Color {
    rojo, azul, verde, amarillo, blanco, negro
}

export interface Heroe {
    nombre: string,
    vuela: boolean,
    color: Color;
}
