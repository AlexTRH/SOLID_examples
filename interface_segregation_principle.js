//Clients should not be forced to depend upon interfaces that they do not use

class Phone {
    constructor() {
        if (this.constructor.name === 'Phone')
            throw new Error('Phone class is absctract')
    }

    call(number) {}

    takePhoto() {}

    connectToWifi() {}
}

// IMPLEMENTATION

class IPhone extends Phone {
    call(number) {
        // Implementation
    }

    takePhoto() {
        // Implementation
    }

    connectToWifi() {
        // Implementation
    }
}

// VIOLATION

class Nokia3310 extends Phone {
    call(number) {
        // Implementation
    }

    takePhoto() {
        // Argh, I don't have a camera
    }

    connectToWifi() {
        // Argh, I don't know what wifi is
    }
}