let validator = {
        set(target, property, accept) {
                if (property === 'age') {

                        if (!Number.isInteger(accept))
                                throw new TypeError('The age is not an integer');

                        if (accept > 100)
                                throw new RangeError('The age is invalid');

                }
                target[property] = accept;
                return true;
        },

        get: function(target, property) {
                if (property in target ) {
                        console.log(`Trying to access the property \'${property}\'...`);
                        return target[property];
                } else
                        throw new Error(`Property ${property} do not exist...`);
        }
}