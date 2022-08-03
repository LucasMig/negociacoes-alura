export function logarTempoDeExec(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let divisor = 1;
            let unidade = "milisegundos";
            if (emSegundos) {
                divisor = 1000;
                unidade = "segundos";
            }
            const t1 = performance.now();
            metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${this.constructor.name}.${propertyKey}() - tempo de execução: ${((t2 - t1) /
                divisor).toFixed(3)} ${unidade}.`);
        };
        return descriptor;
    };
}
//# sourceMappingURL=logarTempoDeExec.js.map