export function inspecionar() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const retorno = metodoOriginal.apply(this, args);
            console.log(`> Método: ${this.constructor.name}.${propertyKey}()`);
            console.log(` >  Recebe: ${JSON.stringify(args)}`);
            console.log(` >  Retorna: ${JSON.stringify(retorno)}`);
            return retorno;
        };
        return descriptor;
    };
}
//# sourceMappingURL=inspecionar.js.map