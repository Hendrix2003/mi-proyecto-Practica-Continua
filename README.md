# Practica-Integracion-Continua

Este proyecto demuestra cómo configurar una integración continua básica utilizando GitHub Actions. El objetivo es ejecutar pruebas unitarias automáticamente cuando se suben cambios a la rama `dev` y solo permitir merges a la rama `main` si todas las pruebas pasan exitosamente.

## Estructura del Proyecto

El proyecto contiene un simple programa "Hola Mundo" en JavaScript y su respectiva prueba unitaria utilizando Jest.

### Archivos Principales

- `index.js`: Contiene la función `helloWorld` que devuelve la cadena "Hola Mundo".
- `index.test.js`: Contiene la prueba unitaria para la función `helloWorld`.
- `.github/workflows/node.js.yml`: Configuración de GitHub Actions para ejecutar las pruebas unitarias automáticamente.

## Configuración Inicial

Para iniciar el proyecto localmente:

1. Clona el repositorio:

    ```bash
    git clone https://github.com/tu-usuario/Practica-Integracion-Continua.git
    cd Practica-Integracion-Continua
    ```

2. Instala las dependencias:

    ```bash
    npm install
    ```

3. Ejecuta las pruebas unitarias:

    ```bash
    npm test
    ```

## Integración Continua con GitHub Actions

El flujo de trabajo de GitHub Actions está configurado para:

1. Ejecutar las pruebas unitarias en cada push a la rama `dev`.
2. Ejecutar las pruebas unitarias en cada pull request a la rama `main`.

El archivo de configuración `.github/workflows/node.js.yml` se encarga de:

- Configurar el entorno con la versión especificada de Node.js.
- Instalar las dependencias del proyecto.
- Ejecutar las pruebas unitarias con Jest.

## Protecciones de Rama

Para asegurar que los cambios solo se integran a la rama `main` si todas las pruebas pasan, se ha configurado una protección de rama en GitHub:

1. Ve a la página del repositorio en GitHub.
2. Haz clic en "Settings".
3. Selecciona "Branches" en el menú lateral.
4. En "Branch protection rules", haz clic en "Add rule".
5. En "Branch name pattern", escribe `main`.
6. Activa "Require status checks to pass before merging" y selecciona las checks correspondientes (debería aparecer `Node.js CI`).

## Contribuciones

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Crea un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, revisa el archivo `LICENSE`.
