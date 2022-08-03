export function inspecionar() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function (...args: Array<any>) {
      const retorno = metodoOriginal.apply(this, args);
      console.log(`> Método: ${this.constructor.name}.${propertyKey}()`);
      console.log(` >  Recebe: ${JSON.stringify(args)}`);
      console.log(` >  Retorna: ${JSON.stringify(retorno)}`);
      return retorno;
    };
    return descriptor;
  };
}
