import java.util.Random;

public class TorneoHipico {

    public static void main(String[] args) {
        // Declaración de los nombres de los jinetes
        String[] nombresJinetes = {"Ana", "Pedro", "Juan", "Cesar", "Diana", "María"};

        // Declaración del arreglo para almacenar los resultados de las carreras
        int[][] resultadosCarreras;

        // Paso 1: Capturar datos de jinetes y generar carreras de forma aleatoria
        Random aleatorio = new Random();
        int numJinetes = nombresJinetes.length;
        int numCarreras = aleatorio.nextInt(20) + 1; // Número de carreras entre 1 y 20
        resultadosCarreras = new int[numCarreras][3]; // Arreglo para almacenar los resultados de las carreras

        // Generación de datos de las carreras de forma aleatoria
        for (int i = 0; i < numCarreras; i++) {
            resultadosCarreras[i][0] = aleatorio.nextInt(numJinetes); // Código del jinete ganador
            resultadosCarreras[i][1] = aleatorio.nextInt(100) + 100; // Tiempo del ganador (entre 100 y 200 segundos)
            resultadosCarreras[i][2] = aleatorio.nextInt(numJinetes); // Código del jinete en segundo lugar
        }

        // Paso 2: Generar arreglo con puntajes de jinetes
        int[][] puntajesJinetes = new int[numJinetes][5]; // Arreglo para almacenar los puntajes de los jinetes

        // Cálculo de puntajes de jinetes
        for (int i = 0; i < numCarreras; i++) {
            // Primer puesto
            int codigoPrimerPuesto = resultadosCarreras[i][0];
            puntajesJinetes[codigoPrimerPuesto][0]++; // Incrementar carreras ganadas
            puntajesJinetes[codigoPrimerPuesto][4] += 5; // Sumar 5 puntos

            // Segundo puesto
            int codigoSegundoPuesto = resultadosCarreras[i][2];
            puntajesJinetes[codigoSegundoPuesto][1]++; // Incrementar carreras en segundo lugar
            puntajesJinetes[codigoSegundoPuesto][4] += 3; // Sumar 3 puntos

            // Tercer puesto
            int codigoTercerPuesto = obtenerTercerPuesto(resultadosCarreras[i]);
            puntajesJinetes[codigoTercerPuesto][2]++; // Incrementar carreras en tercer lugar
            puntajesJinetes[codigoTercerPuesto][4] += 1; // Sumar 1 punto
        }

        // Paso 3: Generar podio
        int[] podio = obtenerPodio(puntajesJinetes);

        // Mostrar resultados
        System.out.println("Podio:");
        System.out.println("1er Lugar: " + nombresJinetes[podio[0]]);
        System.out.println("2do Lugar: " + nombresJinetes[podio[1]]);
        System.out.println("3er Lugar: " + nombresJinetes[podio[2]]);
    }

    // Método para obtener el tercer puesto en una carrera
    public static int obtenerTercerPuesto(int[] carrera) {
        int codigoGanador = carrera[0];
        int codigoSegundo = carrera[2];
        for (int i = 0; i < carrera.length; i += 2) {
            int codigoJinete = carrera[i];
            if (codigoJinete != codigoGanador && codigoJinete != codigoSegundo) {
                return codigoJinete;
            }
        }
        return -1; // Si no se encuentra, devolver -1
    }

    // Método para obtener el podio
    public static int[] obtenerPodio(int[][] puntajesJinetes) {
        int[] podio = new int[3];
        int maxPuntos = -1;
        for (int i = 0; i < puntajesJinetes.length; i++) {
            int[] puntajes = puntajesJinetes[i];
            int puntos = puntajes[4];
            if (puntos > maxPuntos) {
                maxPuntos = puntos;
                podio[0] = i; // Primer lugar
            }
        }
        maxPuntos = -1;
        for (int i = 0; i < puntajesJinetes.length; i++) {
            int[] puntajes = puntajesJinetes[i];
            int puntos = puntajes[4];
            if (puntos < maxPuntos) {
                maxPuntos = puntos;
                podio[1] = i; // Segundo lugar
            }
        }
        maxPuntos = -1;
        for (int i = 0; i < puntajesJinetes.length; i++) {
            int[] puntajes = puntajesJinetes[i];
            int puntos = puntajes[4];
            if (puntos < maxPuntos && i != podio[0] && i != podio[1]) {
                maxPuntos = puntos;
                podio[2] = i; // Tercer lugar
            }
        }
        return podio;
    }

    // Código y nombre: 20232218299-MillerNicolasManriqueAgudelo
}
