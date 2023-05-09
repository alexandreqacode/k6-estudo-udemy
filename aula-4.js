import http from 'k6/http';
import {check} from 'k6'
import { Counter } from 'k6/metrics'
import { Gauge } from 'k6/metrics';
import { Rate } from 'k6/metrics';
import { Trend } from 'k6/metrics';

export const options={
    vus: 1,
    duration: '3s'
}

const chamadas = new Counter('quantidade de chamadas');
const myGauge = new Gauge('Tempo bloqueado')
const myRate = new Rate('Taxa req 200')
const myTrend = new Trend('taxa de espera')

export default function(){
    const req = http.get('http://test.k6.io')
    chamadas.add(1);//contador
    myGauge.add(req.timings.blocked);//medidor
    myRate.add(req.status === 200)//taxa
    myTrend.add(req.timings.waiting)//tendencia
}