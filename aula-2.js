import http from 'k6/http';

export const options={
    vus: 50,
    duration: '5s'
}

export default function(){
    http.get('https://google.com')
}