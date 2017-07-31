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
    editor: true,
    currentlvl: 6,
    maxlvl: 9,
    levels: {
        //done
        1: {
            planet1: { x: 66, y: 226, key: 'planet1', scale: 1, type: 'planet', isStart: true },
            planet2: { x: 324, y: 226, key: 'planet2', scale: 1, isFuel: true, type: 'planet' },
            planet3: { x: 578, y: 235, key: 'planet3', scale: 1, isGoal: true, type: 'planet' },
            message: 'Good job \n BUT, SHE IS ON ANOTHER PLANET!'
        },

        //done
        2: {
            planet1: { x: 66, y: 226, key: 'planet4', scale: 1, type: 'planet', isStart: true },
            planet2: { x: 324, y: 226, key: 'planet3', scale: 1, isFuel: true, type: 'planet' },
            planet3: { x: 578, y: 235, key: 'planet2', scale: 1, isGoal: true, type: 'planet' },
            asteroid1: { x: 170, y: 159, key: 'asteroid1', scale: 2, type: 'asteroid' },
            asteroid2: { x: 446, y: 293, key: 'asteroid1', scale: 2, type: 'asteroid' },
            message: 'You think you won, \n But she is not here either!'
        },
        //done
        3: {
            planet1: { x: 66, y: 226, key: 'planet3', scale: 1, type: 'planet', isStart: true },
            planet2: { x: 578, y: 235, key: 'planet1', scale: 1, isGoal: true, type: 'planet' },
            asteroid1: { x: 324, y: 226, key: 'asteroid2', scale: 0.8, special: true, type: 'asteroid' },
            message: 'Our princess is in another cas...\n I mean, on another planet!'

        },
        //done
        4: {
            planet1: { x: 66, y: 226, key: 'planet1', scale: 1, type: 'planet', isStart: true },
            planet2: { x: 578, y: 235, key: 'planet3', scale: 1, isGoal: true, type: 'planet' },
            asteroid1: { x: 324, y: 324, key: 'asteroid2', scale: 0.8, special: true, type: 'asteroid' },
            asteroid2: { x: 324, y: 226, key: 'asteroid1', scale: 2, type: 'asteroid' },
            message: 'Good job \n BUT, SHE IS ON ANOTHER PLANET!'

        },
        5: {
            planet1: { x: 130, y: 371, key: 'planet3', scale: 1, type: 'planet', isStart: true },
            planet2: { x: 412, y: 64, key: 'planet2', scale: 1, type: 'planet', isGoal: true },

            asteroid1: { x: 10, y: 250, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid2: { x: 30, y: 250, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid3: { x: 50, y: 250, key: 'asteroid3', scale: 1, special: false, type: 'asteroid' },
            asteroid4: { x: 70, y: 250, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid5: { x: 90, y: 250, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid6: { x: 110, y: 250, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid7: { x: 240, y: 250, key: 'asteroid2', scale: 1, special: true, type: 'asteroid' },
            asteroid8: { x: 260, y: 250, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid9: { x: 280, y: 250, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid10: { x: 300, y: 250, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid11: { x: 320, y: 250, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid12: { x: 340, y: 250, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid13: { x: 360, y: 250, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid14: { x: 380, y: 250, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid15: { x: 400, y: 250, key: 'asteroid3', scale: 1, special: false, type: 'asteroid' },
            asteroid16: { x: 420, y: 250, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid17: { x: 440, y: 250, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid18: { x: 460, y: 250, key: 'asteroid3', scale: 1, special: false, type: 'asteroid' },
            asteroid19: { x: 480, y: 250, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid20: { x: 500, y: 250, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid21: { x: 520, y: 250, key: 'asteroid3', scale: 1, special: false, type: 'asteroid' },
            asteroid22: { x: 540, y: 250, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid23: { x: 560, y: 250, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid24: { x: 580, y: 250, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid25: { x: 600, y: 250, key: 'asteroid3', scale: 1, special: false, type: 'asteroid' },
            asteroid26: { x: 620, y: 250, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid27: { x: 640, y: 250, key: 'asteroid3', scale: 1, special: false, type: 'asteroid' },
            asteroid28: { x: 660, y: 250, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid29: { x: 6800, y: 250, key: 'asteroid3', scale: 1, special: false, type: 'asteroid' },
            message: 'Good job \n BUT, SHE IS ON ANOTHER PLANET!'
        },
        6: {
            planet1: { x: 100, y: 128, key: 'planet1', scale: 1, type: 'planet', isStart: true },
            planet2: { x: 450, y: 128, key: 'planet1', scale: 1, type: 'planet' , isGoal:true },
            asteroid1: { x: 184, y: 60, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid2: { x: 195, y: 75, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid3: { x: 206, y: 90, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid4: { x: 215, y: 105, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid5: { x: 224, y: 120, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid6: { x: 235, y: 135, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid7: { x: 245, y: 150, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid8: { x: 256, y: 165, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid9: { x: 266, y: 181, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid10: { x: 265, y: 253, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            message: 'Good job \n BUT, SHE IS ON ANOTHER PLANET!'

        },


        7: {
            planet1: { x: 534, y: 76, key: 'planet2', scale: 1, type: 'planet', isStart: true },
            planet2: { x: 535, y: 192, key: 'planet3', scale: 1, type: 'planet' },
            planet3: { x: 535, y: 300, key: 'planet1', scale: 1, type: 'planet' },
            asteroid1: { x: 481, y: 375, key: 'asteroid2', scale: 1, special: true, type: 'asteroid' },
            planet4: { x: 348, y: 345, key: 'planet4', scale: 1, type: 'planet' },
            asteroid2: { x: 273, y: 384, key: 'asteroid2', scale: 1, special: true, type: 'asteroid' },
            planet5: { x: 187, y: 410, key: 'planet2', scale: 1, type: 'planet' },
            planet6: { x: 94, y: 283, key: 'planet1', scale: 1, type: 'planet' },
            planet7: { x: 132, y: 162, key: 'planet3', scale: 1, type: 'planet' },
            asteroid3: { x: 129, y: 72, key: 'asteroid3', scale: 1, special: true, type: 'asteroid' },
            asteroid4: { x: 237, y: 113, key: 'asteroid1', scale: 1, special: true, type: 'asteroid' },
            planet8: { x: 336, y: 164, key: 'planet3', scale: 1, type: 'planet', isGoal: true },

            asteroid5: { x: 600, y: 119, key: 'asteroid3', scale: 1, special: false, type: 'asteroid' },
            asteroid6: { x: 487, y: 246, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid7: { x: 347, y: 402, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid8: { x: 181, y: 348, key: 'asteroid3', scale: 1, special: false, type: 'asteroid' },
            asteroid9: { x: 49, y: 158, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid10: { x: 450, y: 60, key: 'asteroid3', scale: 1, special: false, type: 'asteroid' },
            asteroid11: { x: 450, y: 80, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid12: { x: 450, y: 100, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid13: { x: 450, y: 120, key: 'asteroid3', scale: 1, special: false, type: 'asteroid' },
            asteroid14: { x: 450, y: 140, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid15: { x: 450, y: 160, key: 'asteroid3', scale: 1, special: false, type: 'asteroid' },
            asteroid16: { x: 450, y: 180, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid17: { x: 450, y: 200, key: 'asteroid3', scale: 1, special: false, type: 'asteroid' },
            asteroid18: { x: 450, y: 220, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid19: { x: 450, y: 240, key: 'asteroid3', scale: 1, special: false, type: 'asteroid' },
            asteroid20: { x: 450, y: 260, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid21: { x: 450, y: 280, key: 'asteroid3', scale: 1, special: false, type: 'asteroid' },
            asteroid22: { x: 430, y: 280, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid23: { x: 410, y: 280, key: 'asteroid3', scale: 1, special: false, type: 'asteroid' },
            asteroid24: { x: 390, y: 280, key: 'asteroid3', scale: 1, special: false, type: 'asteroid' },
            asteroid25: { x: 370, y: 280, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid26: { x: 350, y: 280, key: 'asteroid3', scale: 1, special: false, type: 'asteroid' },
            asteroid27: { x: 330, y: 280, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid28: { x: 310, y: 280, key: 'asteroid3', scale: 1, special: false, type: 'asteroid' },
            asteroid29: { x: 290, y: 280, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid30: { x: 270, y: 280, key: 'asteroid3', scale: 1, special: false, type: 'asteroid' },
            asteroid31: { x: 250, y: 280, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid32: { x: 250, y: 260, key: 'asteroid3', scale: 1, special: false, type: 'asteroid' },
            asteroid33: { x: 250, y: 240, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid34: { x: 250, y: 220, key: 'asteroid3', scale: 1, special: false, type: 'asteroid' },
            asteroid35: { x: 250, y: 200, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid36: { x: 250, y: 180, key: 'asteroid3', scale: 1, special: false, type: 'asteroid' },
            asteroid37: { x: 250, y: 160, key: 'asteroid1', scale: 1, special: false, type: 'asteroid' },
            asteroid38: { x: 250, y: 140, key: 'asteroid3', scale: 1, special: false, type: 'asteroid' },


        },

        8: {
      planet1: { x: 288, y: 312, key: 'planet1', scale: 1, isFuel: true, type: 'planet', isStart: true},
            planet2: { x: 264, y: 120, key: 'planet1', scale: 1, isFuel: true, type: 'planet' },
            planet3: { x: 384, y: 96+24, key: 'planet1', scale: 1, isFuel: true, type: 'planet' },
         planet4: { x: 480, y: 360, key: 'planet1', scale: 1, isFuel: true, type: 'planet', isGoal: true },
            asteroid1: { x: 384, y: 408, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid2: { x: 384, y: 384, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid3: { x: 384, y: 360, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid4: { x: 384, y: 336, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid5: { x: 384, y: 312, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid6: { x: 384, y: 264, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid7: { x: 384, y: 288, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid8: { x: 384, y: 240, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid9: { x: 384, y: 216, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid10: { x: 264, y: 216, key: 'asteroid1', scale: 1.2, special: true, type: 'asteroid' },
            asteroid11: { x: 240, y: 216, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid12: { x: 216, y: 216, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid13: { x: 192, y: 216, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid14: { x: 168, y: 216, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid15: { x: 144, y: 216, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid16: { x: 120, y: 216, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid17: { x: 96, y: 216, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid18: { x: 72, y: 216, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid19: { x: 48, y: 216, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid20: { x: 24, y: 216, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid21: { x: 168, y: 192, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid22: { x: 168, y: 168, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid23: { x: 168, y: 144, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid24: { x: 168, y: 120, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid25: { x: 168, y: 96, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid26: { x: 168, y: 72, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid27: { x: 168, y: 48, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid28: { x: 192, y: 48, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid29: { x: 216, y: 48, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid30: { x: 240, y: 48, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid31: { x: 264, y: 48, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid32: { x: 288, y: 48, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid33: { x: 312, y: 48, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid34: { x: 336, y: 48, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid35: { x: 360, y: 48, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid36: { x: 384, y: 48, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid37: { x: 408, y: 48, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid38: { x: 432, y: 48, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid39: { x: 480, y: 48, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid40: { x: 456, y: 48, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid41: { x: 504, y: 48, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid42: { x: 384, y: 192, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid43: { x: 384, y: 168, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid45: { x: 528, y: 48, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid46: { x: 552, y: 48, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid47: { x: 552, y: 72, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid48: { x: 552, y: 96, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid49: { x: 552, y: 120, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid50: { x: 552, y: 144, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid51: { x: 552, y: 168, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid52: { x: 552, y: 192, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid53: { x: 552, y: 216, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid54: { x: 552, y: 240, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid55: { x: 552, y: 264, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid56: { x: 552, y: 288, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid57: { x: 552, y: 312, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid58: { x: 552, y: 336, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid59: { x: 552, y: 360, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid60: { x: 552, y: 384, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid61: { x: 552, y: 408, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
      
            asteroid62: { x: 528, y: 192, key: 'asteroid1', scale: 1.2, special: true, type: 'asteroid' },
            asteroid63: { x: 408, y: 288, key: 'asteroid1', scale: 1.2, special: true, type: 'asteroid' },
   
        },

        9: {
            asteroid1: { x: 552, y: 48, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid2: { x: 552, y: 48, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid3: { x: 480, y: 120, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid4: { x: 456, y: 144, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid5: { x: 432, y: 168, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid6: { x: 240, y: 168, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid7: { x: 216, y: 144, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid8: { x: 192, y: 120, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid9: { x: 120, y: 48, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid10: { x: 240, y: 264, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid11: { x: 432, y: 264, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid12: { x: 264, y: 264, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid13: { x: 288, y: 264, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid14: { x: 312, y: 264, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid15: { x: 336, y: 264, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid16: { x: 360, y: 264, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid17: { x: 384, y: 264, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid18: { x: 408, y: 264, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid19: { x: 408, y: 168, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid20: { x: 384, y: 168, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid21: { x: 360, y: 168, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid22: { x: 336, y: 168, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid23: { x: 312, y: 168, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid24: { x: 288, y: 168, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid25: { x: 264, y: 168, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid26: { x: 432, y: 192, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid27: { x: 432, y: 216, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid28: { x: 432, y: 240, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid29: { x: 216, y: 288, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid30: { x: 192, y: 312, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid31: { x: 120, y: 384, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid32: { x: 456, y: 288, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid33: { x: 480, y: 312, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid34: { x: 552, y: 384, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            planet1: { x: 336, y: 72, key: 'planet1', scale: 1, isFuel: true, type: 'planet', isStart: true},
            asteroid35: { x: 168, y: 336, key: 'asteroid1', scale: 1.2, special: true, type: 'asteroid' },
            asteroid36: { x: 504, y: 336, key: 'asteroid1', scale: 1.2, special: true, type: 'asteroid' },
            asteroid37: { x: 504, y: 96, key: 'asteroid1', scale: 1.2, special: true, type: 'asteroid' },
            planet2: { x: 336, y: 384, key: 'planet1', scale: 1, isFuel: true, type: 'planet' },
            planet3: { x: 552, y: 216, key: 'planet1', scale: 1, isFuel: true, type: 'planet' },
            planet4: {x: 192, y: 216, key: 'planet1', scale: 1, isFuel: true, type: 'planet' },
            asteroid38: { x: 144, y: 72, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            asteroid39: { x: 168, y: 96, key: 'asteroid1', scale: 1.2, special: false, type: 'asteroid' },
            planet5: { x: 336, y: 216, key: 'planet1', scale: 1, isFuel: true, type: 'planet', isGoal: true },


        },


    }
};