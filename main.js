//Main.js File

function main() {
    //Access the canvas through DOM: Document Object Model
    var canvas = document.getElementById('myCanvas');   // The paper
    var gl = canvas.getContext('webgl');                // The brush and the paints

    // radius, height, segment, teta, position;

    // Define vertices data
    /**
     * A ( -0.5, -0.5 )
     * B (  0.5, -0.5 )
     * C (  0.5,  0.5 )
     * D ( -0.5,  0.5 )
     */

    // Biru 0.3, 0.5, 0.9
    // pink 0.7, 0.5, 0.7
    // abu 0.5, 0.5, 0.5
    // coklat 0.7, 0.5, 0.3

    let rightObject = [
        //OBJECT 1
        //persegi depan
            //segitiga kiri-atas
            -0.30, -0.01, 0.5, 0.5, 0.5, //A
            -0.22, -0.73, 0.3, 0.5, 0.9, //B
            0.40, -0.01, 0.7, 0.5, 0.7, // C
            
            //segitiga kanan-bawah
            0.32, -0.73, 0.5, 0.5, 0.5, //D
            -0.22, -0.73, 0.3, 0.5, 0.9, //B
            0.40, -0.01, 0.7, 0.5, 0.7, //A
            
            //curve atas 1
                //kiri-atas
                -0.28, 0.01, 0.5, 0.5, 0.5,
                -0.30, -0.01, 0.5, 0.5, 0.5,
                0.38, 0.01, 0.7, 0.5, 0.7,

                //kanan-bawah
                0.40, -0.01, 0.7, 0.5, 0.7,
                -0.30, -0.01, 0.5, 0.5, 0.5,
                0.38, 0.01, 0.7, 0.5, 0.7,
            
            //curve atas 2
                //kiri-atas
                -0.25, 0.03, 0.5, 0.5, 0.5,
                -0.28, 0.01, 0.5, 0.5, 0.5,
                0.35, 0.03, 0.7, 0.5, 0.7,

                //kanan-bawah
                0.38, 0.01, 0.7, 0.5, 0.7,
                -0.28, 0.01, 0.5, 0.5, 0.5,
                0.35, 0.03, 0.7, 0.5, 0.7,
            
            //curve atas 3
                -0.23, 0.04, 0.5, 0.5, 0.5,
                0.33, 0.04, 0.7, 0.5, 0.7,
                -0.25, 0.03, 0.5, 0.5, 0.5,

                0.35, 0.03, 0.7, 0.5, 0.7,
                0.33, 0.04, 0.7, 0.5, 0.7,
                -0.25, 0.03, 0.5, 0.5, 0.5,

            //curve bawah 1
                -0.22, -0.73, 0.3, 0.5, 0.9,
                0.32, -0.73,  0.5, 0.5, 0.5,
                -0.21, -0.76, 0.3, 0.5, 0.9,

                0.31, -0.76, 0.5, 0.5, 0.5,
                0.32, -0.73, 0.5, 0.5, 0.5,
                -0.21, -0.76, 0.3, 0.5, 0.9,

            //curve bawah 2
                -0.21, -0.76, 0.3, 0.5, 0.9,
                -0.19, -0.79, 0.3, 0.5, 0.9,
                0.31, -0.76, 0.5, 0.5, 0.5,

                0.29, -0.79, 0.5, 0.5, 0.5,
                -0.19, -0.79, 0.3, 0.5, 0.9,
                0.31, -0.76, 0.5, 0.5, 0.5,

            //curve bawah 3
                -0.19, -0.79, 0.3, 0.5, 0.9,
                0.29, -0.79, 0.3, 0.5, 0.9,
                -0.15, -0.80, 0.3, 0.5, 0.9,

                0.25, -0.80, 0.5, 0.5, 0.5,
                0.29, -0.79, 0.5, 0.5, 0.5,
                -0.15, -0.79, 0.3, 0.5, 0.9,

        //persegi atas
            // kiri-atas
            -0.20, 0.24, 0.5, 0.5, 0.5,
            -0.23, 0.04, 0.5, 0.5, 0.5,
            0.30, 0.24, 0.7, 0.5, 0.7,

            //kanan-bawah
            0.33, 0.04, 0.7, 0.5, 0.7,
            -0.23, 0.04, 0.5, 0.5, 0.5,
            0.30, 0.24, 0.7, 0.5, 0.7,

            //kurva kiri 1
                //kiri-atas
                -0.25, 0.22, 0.5, 0.5, 0.5,
                -0.23, 0.23,  0.5, 0.5, 0.5,
                -0.30, -0.02, 0.5, 0.5, 0.5,

                //kanan-bawah
                -0.28, 0.01, 0.5, 0.5, 0.5,
                -0.24, 0.23, 0.5, 0.5, 0.5,
                -0.30, -0.01, 0.5, 0.5, 0.5,
            
            //kurva kiri 2
                //kiri-atas
                -0.24, 0.23, 0.5, 0.5, 0.5,
                -0.22, 0.24, 0.5, 0.5, 0.5,
                -0.28, 0.01, 0.5, 0.5, 0.5,

                //kanan-bawah
                -0.25, 0.03, 0.5, 0.5, 0.5,
                -0.22, 0.24, 0.5, 0.5, 0.5,
                -0.28, 0.01, 0.5, 0.5, 0.5,
            
            //kurva kiri 3
                -0.22, 0.24, 0.5, 0.5, 0.5,
                -0.20, 0.24, 0.5, 0.5, 0.5,
                -0.25, 0.03, 0.5, 0.5, 0.5,

                -0.23, 0.03, 0.5, 0.5, 0.5,
                -0.20, 0.24, 0.5, 0.5, 0.5,
                -0.25, 0.03, 0.5, 0.5, 0.5,

            //kurva kanan 1
                //kiri-atas
                0.35, 0.22, 0.7, 0.5, 0.7,
                0.33, 0.23,  0.7, 0.5, 0.7,
                0.40, -0.02, 0.7, 0.5, 0.7,

                //kanan-bawah
                0.38, 0.01, 0.7, 0.5, 0.7,
                0.34, 0.23, 0.7, 0.5, 0.7,
                0.40, -0.02, 0.7, 0.5, 0.7,
            
            //kurva kanan 2
                //kiri-atas
                0.34, 0.23, 0.7, 0.5, 0.7,
                0.32, 0.24, 0.7, 0.5, 0.7,
                0.38, 0.01, 0.7, 0.5, 0.7,

                //kanan-bawah
                0.35, 0.01, 0.7, 0.5, 0.7,
                0.32, 0.24, 0.7, 0.5, 0.7,
                0.38, 0.01, 0.7, 0.5, 0.7,
            
            //kurva kiri 3
                0.32, 0.24, 0.7, 0.5, 0.7,
                0.30, 0.24, 0.7, 0.5, 0.7,
                0.35, 0.03, 0.7, 0.5, 0.7,

                0.33, 0.03, 0.7, 0.5, 0.7,
                0.30, 0.24, 0.7, 0.5, 0.7,
                0.35, 0.03, 0.7, 0.5, 0.7,
        
        //silinder
            //roof
            -0.02, 0.73, 1.0, 1.0, 1.0, //S
            -0.09, 0.72, 1.0, 1.0, 1.0, //K
            0.04, 0.67, 1.0, 1.0, 1.0,

            -0.09, 0.72, 1.0, 1.0, 1.0, //K
            -0.15, 0.70, 1.0, 1.0, 1.0, //P
            0.04, 0.67, 1.0, 1.0, 1.0,

            -0.15, 0.70, 1.0, 1.0, 1.0, //P
            -0.19, 0.66, 1.0, 1.0, 1.0, //E
            0.04, 0.67, 1.0, 1.0, 1.0,

            -0.19, 0.66, 1.0, 1.0, 1.0, //E
            -0.15, 0.61, 1.0, 1.0, 1.0, //M
            0.04, 0.67, 1.0, 1.0, 1.0,

            -0.15, 0.61, 1.0, 1.0, 1.0, //M
            -0.10, 0.59, 1.0, 1.0, 1.0, //L
            0.04, 0.67, 1.0, 1.0, 1.0,

            -0.10, 0.59, 1.0, 1.0, 1.0, //L
            -0.03, 0.58, 1.0, 1.0, 1.0, //N
            0.04, 0.67, 1.0, 1.0, 1.0,

            -0.03, 0.58, 1.0, 1.0, 1.0, //N
            0.05, 0.58, 1.0, 1.0, 1.0, //H
            0.04, 0.67, 1.0, 1.0, 1.0,

            0.05, 0.58, 1.0, 1.0, 1.0, //H
            0.13, 0.59, 1.0, 1.0, 1.0, //O
            0.04, 0.67, 1.0, 1.0, 1.0,

            0.13, 0.59, 1.0, 1.0, 1.0, //O
            0.19, 0.61, 1.0, 1.0, 1.0, //J
            0.04, 0.67, 1.0, 1.0, 1.0,

            0.19, 0.61, 1.0, 1.0, 1.0, //J
            0.23, 0.63, 1.0, 1.0, 1.0, //P
            0.04, 0.67, 1.0, 1.0, 1.0,

            0.23, 0.63, 1.0, 1.0, 1.0, //P
            0.26, 0.67, 1.0, 1.0, 1.0, //F
            0.04, 0.67, 1.0, 1.0, 1.0,

            0.26, 0.67, 1.0, 1.0, 1.0, //F
            0.23, 0.70, 1.0, 1.0, 1.0, //Q
            0.04, 0.67, 1.0, 1.0, 1.0,

            0.23, 0.70, 1.0, 1.0, 1.0, //Q
            0.17, 0.72, 1.0, 1.0, 1.0, //I
            0.04, 0.67, 1.0, 1.0, 1.0,

            0.17, 0.72, 1.0, 1.0, 1.0, //I
            0.11, 0.73, 1.0, 1.0, 1.0, //R
            0.04, 0.67, 1.0, 1.0, 1.0,

            0.11, 0.73, 1.0, 1.0, 1.0, //R
            0.05, 0.73, 1.0, 1.0, 1.0, //G
            0.04, 0.67, 1.0, 1.0, 1.0,

            0.05, 0.73, 1.0, 1.0, 1.0, //G
            -0.02, 0.73, 1.0, 1.0, 1.0, //S
            0.04, 0.67, 1.0, 1.0, 1.0,
        
            //selimut silinder
            -0.19, 0.66, 1.0, 1.0, 1.0, //E
            -0.15, 0.61, 1.0, 1.0, 1.0, //M
            -0.16, 0.15, 1.0, 1.0, 1.0,

            -0.14, 0.12, 1.0, 1.0, 1.0,
            -0.16, 0.15, 1.0, 1.0, 1.0,
            -0.15, 0.61, 1.0, 1.0, 1.0,

            -0.15, 0.61, 1.0, 1.0, 1.0, //M
            -0.10, 0.59, 1.0, 1.0, 1.0, //L
            -0.14, 0.12, 1.0, 1.0, 1.0,

            -0.10, 0.09, 1.0, 1.0, 1.0,
            -0.14, 0.12, 1.0, 1.0, 1.0,
            -0.10, 0.59, 1.0, 1.0, 1.0,

            -0.10, 0.59, 1.0, 1.0, 1.0, //L
            -0.03, 0.58, 1.0, 1.0, 1.0, //N
            -0.10, 0.09, 1.0, 1.0, 1.0,

            -0.04, 0.07, 1.0, 1.0, 1.0,
            -0.03, 0.58, 1.0, 1.0, 1.0, 
            -0.10, 0.09, 1.0, 1.0, 1.0,

            -0.03, 0.58, 1.0, 1.0, 1.0, //N
            0.05, 0.58, 1.0, 1.0, 1.0, //H
            -0.04, 0.07, 1.0, 1.0, 1.0,

            0.02, 0.06, 1.0, 1.0, 1.0,
            0.05, 0.58, 1.0, 1.0, 1.0,
            -0.04, 0.07, 1.0, 1.0, 1.0,

            0.05, 0.58, 1.0, 1.0, 1.0, //H
            0.13, 0.59, 1.0, 1.0, 1.0, //O
            0.02, 0.06, 1.0, 1.0, 1.0,

            0.11, 0.07, 1.0, 1.0, 1.0,
            0.13, 0.59, 1.0, 1.0, 1.0,
            0.02, 0.06, 1.0, 1.0, 1.0,

            0.13, 0.59, 1.0, 1.0, 1.0, //O
            0.19, 0.61, 1.0, 1.0, 1.0, //J
            0.11, 0.07, 1.0, 1.0, 1.0,

            0.16, 0.09, 1.0, 1.0, 1.0,
            0.19, 0.61, 1.0, 1.0, 1.0,
            0.11, 0.07, 1.0, 1.0, 1.0,

            0.19, 0.61, 1.0, 1.0, 1.0, //J
            0.23, 0.63, 1.0, 1.0, 1.0, //P
            0.16, 0.09, 1.0, 1.0, 1.0,

            0.22, 0.11, 1.0, 1.0, 1.0,
            0.23, 0.63, 1.0, 1.0, 1.0,
            0.16, 0.09, 1.0, 1.0, 1.0,

            0.23, 0.63, 1.0, 1.0, 1.0, //P
            0.26, 0.67, 1.0, 1.0, 1.0, //F
            0.22, 0.11, 1.0, 1.0, 1.0,

            0.24, 0.15, 1.0, 1.0, 1.0,
            0.26, 0.67, 1.0, 1.0, 1.0,
            0.22, 0.11, 1.0, 1.0, 1.0,

        //label 1
            -0.15, -0.21, 1.0, 1.0, 1.0,
            -0.11, -0.29, 1.0, 1.0, 1.0,
            0.25, -0.21, 1.0, 1.0, 1.0,

            0.21, -0.29, 1.0, 1.0, 1.0,
            -0.11, -0.29, 1.0, 1.0, 1.0,
            0.25, -0.21, 1.0, 1.0, 1.0,

        //label 2
            -0.08, -0.32, 1.0, 1.0, 1.0,
            -0.07, -0.35, 1.0, 1.0, 1.0,
            0.18, -0.32, 1.0, 1.0, 1.0,

            0.17, -0.35, 1.0, 1.0, 1.0,
            -0.07, -0.35, 1.0, 1.0, 1.0,
            0.18, -0.32, 1.0, 1.0, 1.0,

        //label 3
            -0.12, -0.56, 1.0, 1.0, 1.0,
            -0.10, -0.60, 1.0, 1.0, 1.0,
            0.22, -0.56, 1.0, 1.0, 1.0,

            0.20, -0.60, 1.0, 1.0, 1.0,
            0.22, -0.56, 1.0, 1.0, 1.0,
            -0.10, -0.60, 1.0, 1.0, 1.0
    ];

    let leftObject = [
        //OBJECT 2 KIRI

        //persegi depan
            //segitiga kiri-atas
            -2.30, -0.01, 0.5, 0.5, 0.5, //A
            -2.22, -0.73, 0.3, 0.5, 0.9, //B
            -1.60, -0.01, 0.7, 0.5, 0.7, // C
            
            //segitiga kanan-bawah
            -1.68, -0.73, 0.5, 0.5, 0.5, //D
            -2.22, -0.73, 0.3, 0.5, 0.9, //B
            -1.60, -0.01, 0.7, 0.5, 0.7, //A
            
            //curve atas 1
                //kiri-atas
                -2.28, 0.01, 0.5, 0.5, 0.5,
                -2.30, -0.01, 0.5, 0.5, 0.5,
                -1.62, 0.01, 0.7, 0.5, 0.7,

                //kanan-bawah
                -1.60, -0.01, 0.7, 0.5, 0.7,
                -2.30, -0.01, 0.5, 0.5, 0.5,
                -1.62, 0.01, 0.7, 0.5, 0.7,
            
            //curve atas 2
                //kiri-atas
                -2.25, 0.03, 0.5, 0.5, 0.5,
                -2.28, 0.01, 0.5, 0.5, 0.5,
                -1.65, 0.03, 0.7, 0.5, 0.7,

                //kanan-bawah
                -1.62, 0.01, 0.7, 0.5, 0.7,
                -2.28, 0.01, 0.5, 0.5, 0.5,
                -1.65, 0.03, 0.7, 0.5, 0.7,
            
            //curve atas 3
                -2.23, 0.04, 0.5, 0.5, 0.5,
                -1.67, 0.04, 0.7, 0.5, 0.7,
                -2.25, 0.03, 0.5, 0.5, 0.5,

                -1.65, 0.03, 0.7, 0.5, 0.7,
                -1.67, 0.04, 0.7, 0.5, 0.7,
                -2.25, 0.03, 0.5, 0.5, 0.5,

            //curve bawah 1
                -2.22, -0.73, 0.3, 0.5, 0.9,
                -1.68, -0.73,  0.5, 0.5, 0.5,
                -2.21, -0.76, 0.3, 0.5, 0.9,

                -1.69, -0.76, 0.5, 0.5, 0.5,
                -1.68, -0.73, 0.5, 0.5, 0.5,
                -2.21, -0.76, 0.3, 0.5, 0.9,

            //curve bawah 2
                -2.21, -0.76, 0.3, 0.5, 0.9,
                -2.19, -0.79, 0.3, 0.5, 0.9,
                -1.69, -0.76, 0.5, 0.5, 0.5,

                -1.71, -0.79, 0.5, 0.5, 0.5,
                -2.19, -0.79, 0.3, 0.5, 0.9,
                -1.69, -0.76, 0.5, 0.5, 0.5,

            //curve bawah 3
                -2.19, -0.79, 0.3, 0.5, 0.9,
                -1.71, -0.79, 0.3, 0.5, 0.9,
                -2.15, -0.80, 0.3, 0.5, 0.9,

                -1.75, -0.80, 0.5, 0.5, 0.5,
                -1.71, -0.79, 0.5, 0.5, 0.5,
                -2.15, -0.79, 0.3, 0.5, 0.9,

        //persegi atas
            // kiri-atas
            -2.20, 0.24, 0.5, 0.5, 0.5,
            -2.23, 0.04, 0.5, 0.5, 0.5,
            -1.70, 0.24, 0.7, 0.5, 0.7,

            //kanan-bawah
            -1.67, 0.04, 0.7, 0.5, 0.7,
            -2.23, 0.04, 0.5, 0.5, 0.5,
            -1.70, 0.24, 0.7, 0.5, 0.7,

            //kurva kiri 1
                //kiri-atas
                -2.25, 0.22, 0.5, 0.5, 0.5,
                -2.23, 0.23,  0.5, 0.5, 0.5,
                -2.30, -0.02, 0.5, 0.5, 0.5,

                //kanan-bawah
                -2.28, 0.01, 0.5, 0.5, 0.5,
                -2.24, 0.23, 0.5, 0.5, 0.5,
                -2.30, -0.01, 0.5, 0.5, 0.5,
            
            //kurva kiri 2
                //kiri-atas
                -2.24, 0.23, 0.5, 0.5, 0.5,
                -2.22, 0.24, 0.5, 0.5, 0.5,
                -2.28, 0.01, 0.5, 0.5, 0.5,

                //kanan-bawah
                -2.25, 0.03, 0.5, 0.5, 0.5,
                -2.22, 0.24, 0.5, 0.5, 0.5,
                -2.28, 0.01, 0.5, 0.5, 0.5,
            
            //kurva kiri 3
                -2.22, 0.24, 0.5, 0.5, 0.5,
                -2.20, 0.24, 0.5, 0.5, 0.5,
                -2.25, 0.03, 0.5, 0.5, 0.5,

                -2.23, 0.03, 0.5, 0.5, 0.5,
                -2.20, 0.24, 0.5, 0.5, 0.5,
                -2.25, 0.03, 0.5, 0.5, 0.5,

            //kurva kanan 1
                //kiri-atas
                -1.65, 0.22, 0.7, 0.5, 0.7,
                -1.67, 0.23,  0.7, 0.5, 0.7,
                -1.60, -0.02, 0.7, 0.5, 0.7,

                //kanan-bawah
                -1.62, 0.01, 0.7, 0.5, 0.7,
                -1.66, 0.23, 0.7, 0.5, 0.7,
                -1.60, -0.02, 0.7, 0.5, 0.7,
            
            //kurva kanan 2
                //kiri-atas
                -1.66, 0.23, 0.7, 0.5, 0.7,
                -1.68, 0.24, 0.7, 0.5, 0.7,
                -1.62, 0.01, 0.7, 0.5, 0.7,

                //kanan-bawah
                -1.65, 0.01, 0.7, 0.5, 0.7,
                -1.68, 0.24, 0.7, 0.5, 0.7,
                -1.62, 0.01, 0.7, 0.5, 0.7,
            
            //kurva kiri 3
                -1.68, 0.24, 0.7, 0.5, 0.7,
                -1.70, 0.24, 0.7, 0.5, 0.7,
                -1.65, 0.03, 0.7, 0.5, 0.7,

                -1.67, 0.03, 0.7, 0.5, 0.7,
                -1.70, 0.24, 0.7, 0.5, 0.7,
                -1.65, 0.03, 0.7, 0.5, 0.7,
        
        //silinder
            //roof
            -2.02, 0.73, 1.0, 1.0, 1.0, //S
            -2.09, 0.72, 1.0, 1.0, 1.0, //K
            -1.96, 0.67, 1.0, 1.0, 1.0,

            -2.09, 0.72, 1.0, 1.0, 1.0, //K
            -2.15, 0.70, 1.0, 1.0, 1.0, //P
            -1.96, 0.67, 1.0, 1.0, 1.0,

            -2.15, 0.70, 1.0, 1.0, 1.0, //P
            -2.19, 0.66, 1.0, 1.0, 1.0, //E
            -1.96, 0.67, 1.0, 1.0, 1.0,

            -2.19, 0.66, 1.0, 1.0, 1.0, //E
            -2.15, 0.61, 1.0, 1.0, 1.0, //M
            -1.96, 0.67, 1.0, 1.0, 1.0,

            -2.15, 0.61, 1.0, 1.0, 1.0, //M
            -2.10, 0.59, 1.0, 1.0, 1.0, //L
            -1.96, 0.67, 1.0, 1.0, 1.0,

            -2.10, 0.59, 1.0, 1.0, 1.0, //L
            -2.03, 0.58, 1.0, 1.0, 1.0, //N
            -1.96, 0.67, 1.0, 1.0, 1.0,

            -2.03, 0.58, 1.0, 1.0, 1.0, //N
            -1.95, 0.58, 1.0, 1.0, 1.0, //H
            -1.96, 0.67, 1.0, 1.0, 1.0,

            -1.95, 0.58, 1.0, 1.0, 1.0, //H
            -1.87, 0.59, 1.0, 1.0, 1.0, //O
            -1.96, 0.67, 1.0, 1.0, 1.0,

            -1.87, 0.59, 1.0, 1.0, 1.0, //O
            -1.81, 0.61, 1.0, 1.0, 1.0, //J
            -1.96, 0.67, 1.0, 1.0, 1.0,

            -1.81, 0.61, 1.0, 1.0, 1.0, //J
            -1.77, 0.63, 1.0, 1.0, 1.0, //P
            -1.96, 0.67, 1.0, 1.0, 1.0,

            -1.77, 0.63, 1.0, 1.0, 1.0, //P
            -1.74, 0.67, 1.0, 1.0, 1.0, //F
            -1.96, 0.67, 1.0, 1.0, 1.0,

            -1.74, 0.67, 1.0, 1.0, 1.0, //F
            -1.77, 0.70, 1.0, 1.0, 1.0, //Q
            -1.96, 0.67, 1.0, 1.0, 1.0,

            -1.77, 0.70, 1.0, 1.0, 1.0, //Q
            -1.83, 0.72, 1.0, 1.0, 1.0, //I
            -1.96, 0.67, 1.0, 1.0, 1.0,

            -1.83, 0.72, 1.0, 1.0, 1.0, //I
            -1.89, 0.73, 1.0, 1.0, 1.0, //R
            -1.96, 0.67, 1.0, 1.0, 1.0,

            -1.89, 0.73, 1.0, 1.0, 1.0, //R
            -1.95, 0.73, 1.0, 1.0, 1.0, //G
            -1.96, 0.67, 1.0, 1.0, 1.0,

            -1.95, 0.73, 1.0, 1.0, 1.0, //G
            -2.02, 0.73, 1.0, 1.0, 1.0, //S
            -1.96, 0.67, 1.0, 1.0, 1.0,
        
        //selimut silinder
            -2.19, 0.66, 1.0, 1.0, 1.0, //E
            -2.15, 0.61, 1.0, 1.0, 1.0, //M
            -2.16, 0.15, 1.0, 1.0, 1.0,

            -2.14, 0.12, 1.0, 1.0, 1.0,
            -2.16, 0.15, 1.0, 1.0, 1.0,
            -2.15, 0.61, 1.0, 1.0, 1.0,

            -2.15, 0.61, 1.0, 1.0, 1.0, //M
            -2.10, 0.59, 1.0, 1.0, 1.0, //L
            -2.14, 0.12, 1.0, 1.0, 1.0,

            -2.10, 0.09, 1.0, 1.0, 1.0,
            -2.14, 0.12, 1.0, 1.0, 1.0,
            -2.10, 0.59, 1.0, 1.0, 1.0,

            -2.10, 0.59, 1.0, 1.0, 1.0, //L
            -2.03, 0.58, 1.0, 1.0, 1.0, //N
            -2.10, 0.09, 1.0, 1.0, 1.0,

            -2.04, 0.07, 1.0, 1.0, 1.0,
            -2.03, 0.58, 1.0, 1.0, 1.0, 
            -2.10, 0.09, 1.0, 1.0, 1.0,

            -2.03, 0.58, 1.0, 1.0, 1.0, //N
            -1.95, 0.58, 1.0, 1.0, 1.0, //H
            -2.04, 0.07, 1.0, 1.0, 1.0,

            -1.98, 0.06, 1.0, 1.0, 1.0,
            -1.95, 0.58, 1.0, 1.0, 1.0,
            -2.04, 0.07, 1.0, 1.0, 1.0,

            -1.95, 0.58, 1.0, 1.0, 1.0, //H
            -1.87, 0.59, 1.0, 1.0, 1.0, //O
            -1.98, 0.06, 1.0, 1.0, 1.0,

            -1.89, 0.07, 1.0, 1.0, 1.0,
            -1.87, 0.59, 1.0, 1.0, 1.0,
            -1.98, 0.06, 1.0, 1.0, 1.0,

            -1.87, 0.59, 1.0, 1.0, 1.0, //O
            -1.81, 0.61, 1.0, 1.0, 1.0, //J
            -1.89, 0.07, 1.0, 1.0, 1.0,

            -1.84, 0.09, 1.0, 1.0, 1.0,
            -1.81, 0.61, 1.0, 1.0, 1.0,
            -1.89, 0.07, 1.0, 1.0, 1.0,

            -1.81, 0.61, 1.0, 1.0, 1.0, //J
            -1.77, 0.63, 1.0, 1.0, 1.0, //P
            -1.84, 0.09, 1.0, 1.0, 1.0,

            -1.78, 0.11, 1.0, 1.0, 1.0,
            -1.77, 0.63, 1.0, 1.0, 1.0,
            -1.84, 0.09, 1.0, 1.0, 1.0,

            -1.77, 0.63, 1.0, 1.0, 1.0, //P
            -1.74, 0.67, 1.0, 1.0, 1.0, //F
            -1.78, 0.11, 1.0, 1.0, 1.0,

            -1.76, 0.15, 1.0, 1.0, 1.0,
            -1.74, 0.67, 1.0, 1.0, 1.0,
            -1.78, 0.11, 1.0, 1.0, 1.0

        // //label 1
        //     -2.15, -0.21, 1.0, 1.0, 1.0,
        //     -2.11, -0.29, 1.0, 1.0, 1.0,
        //     -1.75, -0.21, 1.0, 1.0, 1.0,

        //     -1.77, -0.29, 1.0, 1.0, 1.0,
        //     -2.11, -0.29, 1.0, 1.0, 1.0,
        //     -1.75, -0.21, 1.0, 1.0, 1.0,

        // //label 2
        //     -2.08, -0.32, 1.0, 1.0, 1.0,
        //     -2.07, -0.35, 1.0, 1.0, 1.0,
        //     -1.72, -0.32, 1.0, 1.0, 1.0,

        //     -1.83, -0.35, 1.0, 1.0, 1.0,
        //     -2.07, -0.35, 1.0, 1.0, 1.0,
        //     -1.82, -0.32, 1.0, 1.0, 1.0,

        // //label 3
        //     -2.12, -0.56, 1.0, 1.0, 1.0,
        //     -2.10, -0.60, 1.0, 1.0, 1.0,
        //     -1.78, -0.56, 1.0, 1.0, 1.0,

        //     -1.80, -0.60, 1.0, 1.0, 1.0,
        //     -1.78, -0.56, 1.0, 1.0, 1.0,
        //     -2.10, -0.60, 1.0, 1.0, 1.0
    ];

    let vertices = [
        ...rightObject,
        ...leftObject
    ];

    // Create a linked-list for storing the vertices data
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform mat4 uMatrix;
        void main() {
            gl_PointSize = 10.0;
            gl_Position = uMatrix * vec4(aPosition, 0.0, 3.0);
            vColor = aColor;
        }
    `;

    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        void main() {
            gl_FragColor = vec4(vColor, 1.0);    // Yellow
        }
    `;

    // Create .c in GPU
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);

    // Compile .c into .o
    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);

    // Prepare a .exe shell (shader program)
    var shaderProgram = gl.createProgram();

    // Put the two .o files into the shell
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);

    // Link the two .o files, so together they can be a runnable program/context.
    gl.linkProgram(shaderProgram);

    // Start using the context (analogy: start using the paints and the brushes)
    gl.useProgram(shaderProgram);

    // Teach the computer how to collect
    //  the positional values from ARRAY_BUFFER
    //  to each vertex being processed
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(
        aPosition,
        2,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        0
    );
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(
        aColor,
        3,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        2 * Float32Array.BYTES_PER_ELEMENT
    );
    gl.enableVertexAttribArray(aColor);

    var freeze = false;

    // Apply some interaction using mouse
    function onMouseClick(event) {
        freeze = !freeze;
    }

    document.addEventListener("click", onMouseClick, false);

    // var speed = [0, 1/600];
    // Create a uniform to animate the vertices
    // var uChange = gl.getUniformLocation(shaderProgram, "uChange");
    // var change = [0, 0];

    var dy = 0;
    var speed = 0.109;
    function render() {
        if(dy >= 0.55 || dy <= -0.55)
            speed = -speed;

        dy += speed;
        gl.useProgram(shaderProgram);

        const leftPosition = [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.25, 0.0, 0.0, 1.0,
        ]
            
        const rightPosition = [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.25, dy, 0.0, 1.0,
        ]
        

        gl.clearColor(0.1, 0.1, 0.1, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        const uMatrix = gl.getUniformLocation(shaderProgram, 'uMatrix');

        gl.uniformMatrix4fv(uMatrix, false, rightPosition);
        gl.drawArrays(gl.TRIANGLES, 0, rightObject.length/5);

        gl.uniformMatrix4fv(uMatrix, false, leftPosition);
        gl.drawArrays(gl.TRIANGLES, rightObject.length/5, leftObject.length/5);

        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
}
