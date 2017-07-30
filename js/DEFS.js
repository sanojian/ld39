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
    specialAsteroids: [],
    currentlvl: 1,
    levels: {
        1: {
           planet1: { x:66, y:226,key: 'planet2',scale: 1, type: 'planet'},
           planet2: { x:324, y:226,key: 'planet1',scale: 1, type: 'planet'},
          planet3: { x:578, y:235,key: 'planet2',scale: 1, isGoal:true, type: 'planet'},
            //asteroid1: { x: 300, y: 100, key: 'asteroid', scale: 2, type: 'asteroid' },
        },

        2: {
           planet1: { x:66, y:226,key: 'planet2',scale: 1, type: 'planet'},
           planet2: { x:324, y:226,key: 'planet1',scale: 1, type: 'planet'},
          planet3: { x:578, y:235,key: 'planet2',scale: 1, isGoal:true, type: 'planet'},
            asteroid1: { x:170, y:159, key: 'asteroid', scale: 2, type: 'asteroid' },
            asteroid2: {x:446, y:293, key: 'asteroid', scale: 2, type: 'asteroid' },

//            asteroid2: {  x:308, y:270, key: 'asteroid', scale: 0.8, special: true,type: 'asteroid' },


        },

        3: {
           planet1: { x:66, y:226,key: 'planet2',scale: 1, type: 'planet'},
          planet2: { x:578, y:235,key: 'planet2',scale: 1, isGoal:true, type: 'planet'},
            asteroid1: {  x:324, y:226, key: 'asteroid', scale: 0.8, special: true,type: 'asteroid' },


        },

        4: {
            planet1: { x: 100, y: 100, key: 'planet1', scale: 1, type: 'planet' },
            planet2: { x: 200, y: 300, key: 'planet2', scale: 1, type: 'planet' },
            planet3: { x: 400, y: 100, key: 'planet1', isGoal: true, scale: 1.5, type: 'planet' },
            asteroid1: { x: 300, y: 100, key: 'asteroid', scale: 2, type: 'asteroid' },


        },


        5: {
            planet1: { x: 100, y: 100, key: 'planet1', scale: 1, type: 'planet' },
            planet2: { x: 200, y: 300, key: 'planet2', scale: 1, type: 'planet' },
            planet3: { x: 400, y: 100, key: 'planet1', isGoal: true, scale: 1.5, type: 'planet' },
            asteroid1: { x: 300, y: 100, key: 'asteroid', scale: 2, type: 'asteroid' },


        },


        6: {
            planet1: { x: 100, y: 100, key: 'planet1', scale: 1, type: 'planet' },
            planet2: { x: 200, y: 300, key: 'planet2', scale: 1, type: 'planet' },
            planet3: { x: 400, y: 100, key: 'planet1', isGoal: true, scale: 1.5, type: 'planet' },
            asteroid1: { x: 300, y: 100, key: 'asteroid', scale: 2, type: 'asteroid' },


        },


        7: {
            planet1: { x: 100, y: 100, key: 'planet1', scale: 1, type: 'planet' },
            planet2: { x: 200, y: 300, key: 'planet2', scale: 1, type: 'planet' },
            planet3: { x: 400, y: 100, key: 'planet1', isGoal: true, scale: 1.5, type: 'planet' },
            asteroid1: { x: 300, y: 100, key: 'asteroid', scale: 2, type: 'asteroid' },


        },


        8: {
            planet1: { x: 100, y: 100, key: 'planet1', scale: 1, type: 'planet' },
            planet2: { x: 200, y: 300, key: 'planet2', scale: 1, type: 'planet' },
            planet3: { x: 400, y: 100, key: 'planet1', isGoal: true, scale: 1.5, type: 'planet' },
            asteroid1: { x: 300, y: 100, key: 'asteroid', scale: 2, type: 'asteroid' },


        },


        9: {
            planet1: { x: 100, y: 100, key: 'planet1', scale: 1, type: 'planet' },
            planet2: { x: 200, y: 300, key: 'planet2', scale: 1, type: 'planet' },
            planet3: { x: 400, y: 100, key: 'planet1', isGoal: true, scale: 1.5, type: 'planet' },
            asteroid1: { x: 300, y: 100, key: 'asteroid', scale: 2, type: 'asteroid' },


        },



    }
};