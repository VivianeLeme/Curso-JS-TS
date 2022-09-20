import { url } from "inspector";
import { add } from "../A0037-type-guards/A0037-type-guards";

export class Calculadora {
    constructor(public numero: number) { }

    add(n: number): this {
        this.numero += n;
        return this;
    }

    sub(n: number): this {
        this.numero -= n;
        return this;
    }

    div(n: number): this {
        this.numero /= n;
        return this;
    }

    mul(n: number): this {
        this.numero *= n;
        return this;
    }
}

export class SubCalculadora extends Calculadora {
    pow(n: number): this {
        this.numero **= n;
        return this;
    }
}

const calculadora = new SubCalculadora(10);
calculadora.add(5).mul(2).div(2).sub(5).pow(2);
console.log(calculadora);

// Builder - Gof
export class RequestBuilder {
    private method: 'get' | 'post' | null = null;
    private url: string | string | null = null;

    SetMethod(method: 'get' | 'post'): this {
        this.method = method;
        return this;
    }

    SetUrl(url: string): this {
        this.url = url;
        return this;
    }

    send(): void {
        console.log('Enviando dados via ${this.method} para ${this.url}');
    }
 }

 const request = new RequestBuilder(); // Builder
 request.SetUrl('http://www.google.com').SetMethod('post').send();
