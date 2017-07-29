window.g_game = {
    sounds: {},
    //gameWidth: window.innerWidth * window.devicePixelRatio,
    //gameHeight: window.innerHeight * window.devicePixelRatio,
    baseWidth: 640,
    baseHeight: 480,
    scale: 3,
    masterVolume: 0.3,
    sfx: {},
    planets: [],
    asteroids: [],
    currentlvl: 1,
    levels: {
        1: {
            planet1: { x: 100, y: 100, key: 'planet1', scale: 1 },
            planet2: { x: 200, y: 300, key: 'planet2', scale: 1 },
            planet3: { x: 400, y: 100, key: 'planet1', scale: 1.5 },
            asteroid1: { x: 300, y: 100, key: 'asteroid', scale: 2 },
       
        },
        2: {
            planet1: { x: 100, y: 100, key: 'planet1', scale: 1 },
            planet2: { x: 200, y: 300, key: 'planet2', scale: 1 },
            planet3: { x: 400, y: 100, key: 'planet1', scale: 1 },
            asteroid1: { x: 300, y: 100, key: 'asteroid', scale: 2 },

        },
        3: {
            planet1: { x: 100, y: 100, key: 'planet1', scale: 1 },
            planet2: { x: 200, y: 300, key: 'planet2', scale: 1 },
            planet3: { x: 400, y: 100, key: 'planet1', scale: 1 },
            asteroid1: { x: 300, y: 100, key: 'asteroid', scale: 2 },

        },


    }
};