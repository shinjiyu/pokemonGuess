export function LogMethodCalls(label: string = "",excepts:string[] = []): ClassDecorator {
    return function (constructor: Function) {
        // Get all property names of the class
        const properties = Object.getOwnPropertyNames(constructor.prototype);

        properties.forEach(propertyName => {
           
            const lowcase = propertyName.toLocaleString();
            for(const except of excepts) {
                if(lowcase.includes(except)) {
                    return;
                }
            }

            // 跳过get accesser 因为accessor的访问可能会访问未初始化属性            
            if (typeof Object.getOwnPropertyDescriptor(constructor.prototype, propertyName)?.get === 'function') {
                return;
            }
            
            const originalMethod = constructor.prototype[propertyName];


            // Check if the property is a function and not the constructor itself
            if (propertyName !== 'constructor' && typeof originalMethod === 'function') {
                // Replace the original method with a new function that includes logging
                constructor.prototype[propertyName] = function (...args: any[]) {
                    const currentTime = new Date().toLocaleTimeString();
                    console.log(`[${currentTime}] [${label}] Calling method: ${propertyName} with arguments:`, JSON.stringify(args));
                    const result = originalMethod.apply(this, args);
                    console.log(`[${label}] Method: ${propertyName} returned:`, result);
                    return result;
                };
            }
        });
    };
}



export function LogMethodCallsWithProxy<T extends object>(object: T, label: string = ""): T {
    const handler: ProxyHandler<T> = {
        get(target, propKey, receiver) {
            const targetValue = Reflect.get(target, propKey, receiver);
            if (typeof targetValue === 'function') {
                return function (...args: any[]) {
                    const currentTime = new Date().toLocaleTimeString();
                    console.log(`[${currentTime}] [${label}] Calling method: ${String(propKey)} with arguments:`, JSON.stringify(args));
                    const result = targetValue.apply(target, args);
                    console.log(`[${label}] Method: ${String(propKey)} returned:`, result);
                    return result;
                };
            }
            return targetValue;
        }
    };
    return new Proxy(object, handler);
}

export function LogMethodCallsSimple<T extends { [key: string]: any }>(object: T, label: string = "",bProcessParent:boolean = false): T {
    const keys = Object.getOwnPropertyNames(object);
    keys.forEach(key => {

        if (typeof Object.getOwnPropertyDescriptor(object, key)?.get === 'function') {
            return;
        }
        
        const method = object[key];
        if (key !== 'constructor' && typeof method === 'function') {
            object[key as keyof T] = function (...args: any[]) {
                const currentTime = new Date().toLocaleTimeString();
                console.log(`[${currentTime}] [${label}] Calling method: ${key} with arguments:`, JSON.stringify(args));
                const result = method.apply(object, args);
                console.log(`[${label}] Method: ${key} returned:`, result);
                return result;
            } as any;
        }
    });
    
    if(bProcessParent)
    {
        LogMethodCallsSimple(Object.getPrototypeOf(object),label,false);
    }

    return object;
}
