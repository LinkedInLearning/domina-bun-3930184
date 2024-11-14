import { expect , test} from "bun:test";
import Calcular from "./Calcular";


test( "sumar 2+2" ,  ()=>{
    const calcular = new Calcular();
    const resultado = calcular.sumarDigitos(2,2);
    expect(resultado).toBe(4);
} )