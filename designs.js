// Design Library containing 100+ Design Patterns

// 1. Singleton
class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this;
        }
        return Singleton.instance;
    }
}

// 2. Factory
class Factory {
    create(type) {
        switch (type) {
            case 'A': return new ProductA();
            case 'B': return new ProductB();
            default: throw new Error('Unknown type');
        }
    }
}

// ... More design patterns go here ...

// 100. Strategy
class Context {
    constructor(strategy) {
        this.strategy = strategy;
    }
    executeStrategy(data) {
        return this.strategy.execute(data);
    }
}

// Exporting all design patterns
export default {
    Singleton,
    Factory,
    Context
    // ... Add other patterns as necessary
};