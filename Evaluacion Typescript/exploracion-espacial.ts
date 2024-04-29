enum ResourceType {
    Water,
    Minerals,
    Plants,
    Unknown
}


class Planet {
    private resourceType: ResourceType;
    private dangerLevel: number;

    constructor(resourceType: ResourceType, dangerLevel: number) {
        this.resourceType = resourceType;
        this.dangerLevel = dangerLevel;
    }

    // Método para obtener el tipo de recurso del planeta
    getResourceType(): ResourceType {
        return this.resourceType;
    }

    // Método para obtener el nivel de peligro del planeta
    getDangerLevel(): number {
        return this.dangerLevel;
    }
}


class RandomEvent {
    private description: string;

    constructor(description: string) {
        this.description = description;
    }

    //  Obtener la descripción del evento
    getDescription(): string {
        return this.description;
    }
}

// interfaz para la nave espacial
interface Spaceship {
    health: number;
    cargoCapacity: number;
    speed: number;
}

function createSpaceship(health: number, cargoCapacity: number, speed: number): Spaceship {
    return {
        health,
        cargoCapacity,
        speed
    };
}

//  tipo de unión para las posibles direcciones de navegación
type Direction = 'norte' | 'sur' | 'este' | 'oeste';

// función para la exploración que acepta una dirección como parámetro
function explore(direction: Direction): void {
    console.log(`Navegando hacia ${direction}...`);
    // Aquí iría la lógica para navegar hacia la dirección especificada
}

// función para la recolección de recursos
function collectResources<T>(planet: Planet, quantity: number): void {
    console.log(`Recolectando ${quantity} recursos del planeta...`);
}

// función para manejar eventos aleatorios
function handleRandomEvent(event: RandomEvent): void {
    console.log(`Se ha encontrado un evento aleatorio: ${event.getDescription()}`);
}

// función para capturar la entrada del usuario desde la consola
function getUserInput(prompt: string): string {
    // Simulamos la entrada del usuario
    return prompt;
}

// función para simular el viaje en el espacio
function simulateTravel(): void {
    console.log("Iniciando simulación de viaje...");
    // Aquí iría la lógica para simular el viaje
}

// Creamos una nueva instancia de la nave espacial
const mySpaceship: Spaceship = createSpaceship(100, 50, 10);

// Imprimimos información sobre la nave espacial
console.log("Nave espacial creada:");
console.log("Salud:", mySpaceship.health);
console.log("Capacidad de carga:", mySpaceship.cargoCapacity);
console.log("Velocidad:", mySpaceship.speed);

// Creamos una nueva instancia de un planeta
const newPlanet: Planet = new Planet(ResourceType.Water, 3);

// Imprimimos información sobre el planeta
console.log("Nuevo planeta encontrado:");
console.log("Tipo de recurso:", newPlanet.getResourceType());
console.log("Nivel de peligro:", newPlanet.getDangerLevel());

// Simulamos la exploración del espacio
explore('norte');

// Simulamos la recolección de recursos en el planeta
collectResources(newPlanet, 10);

// Creamos una nueva instancia de un evento aleatorio
const randomEvent: RandomEvent = new RandomEvent("¡Enorme tormenta de asteroides!");

// Manejamos el evento aleatorio
handleRandomEvent(randomEvent);

// Capturamos la entrada del usuario desde la consola
const userInput: string = getUserInput("Ingrese su nombre:");

// Simulamos el viaje en el espacio
simulateTravel();
