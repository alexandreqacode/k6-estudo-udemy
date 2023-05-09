//1- inicialização
import sleep from k6

//2- configuração - quantidade de usuários virtuais e tempo de carga
export const options={
    vus: 1,
    duration: '10s'
}

//3- execução // código vu
export default function(){
    console.log('teste k6');
    sleep(1);
}

//4- desmontagem
export function teardown(data){
    console.log(data);
}