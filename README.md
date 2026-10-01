# vue-product-showcase

## Instrucciones de instalación

### Requisitos

Se debe tener instalado node, de la versión 20 en adelante.

### Instalación

Ejecutar:
```
npm install
```
para instalar todas las dependencias

### Ejecución

Una vez instaladas las dependencias se puede ejecutar:
```
npm run iniciar
```
para iniciar el proyecto con la API mock

## Justificaciones técnicas
- Los componentes solicitados con nombre Header y Footer, se cambiaron a PageHader y PageFooter, porque Vue pide que los componentes tengan nombre compuestos por 2 palabras.
- Se decidió utilizar una API mock con json-server porque permite agregar y mostrar productos de mi interes.
- Se decidió agregar un contador de favoritos en el Header del proyecto.

## Pruebas

### Unitarias

Para ejecutar las pruebas unitarias:
```
npm run test:unit
```
Evidencia:
![alt text](image-8.png)

### End to end

Para ejecutar las pruebas end to end:
```
npm run test:e2e
```
Evidencia:
![alt text](image-7.png)

## Demo y evidencias

### Vista principal
![alt text](image.png)

### Modo oscuro
![alt text](image-1.png)

### Filtro por categoria
![alt text](image-2.png)
![alt text](image-3.png)
### Modo responsive
![alt text](image-4.png)
![alt text](image-5.png)

### Contador de favoritos
![alt text](image-6.png)
