#  POPUP FIRST DISCOUNT

El componente firs-discount es un modal de promocion donde te hace un descuento en tu primera compra.
Nota: esta promocion es solo para los clientes nuevos

- ![image](https://user-images.githubusercontent.com/107804493/220363253-291b1dc3-1c70-412b-a665-7f91fe8f663a.png)

## Configuración
 ### Paso 1 - Configuración Básica 
- verificar en el package.json en la carpeta raiz y en la carpeta react
- name: debe tener el nombre del componente a usar
- version: 0.01
- ![image](https://user-images.githubusercontent.com/107804493/220363903-49721ae0-4569-4607-8f80-e14d683fdad0.png)


### Paso 2 - Clonación del repositorio
- Clona el repositorio a tu maquina local
- ![image](https://user-images.githubusercontent.com/107804493/219084064-3f513fd5-766a-4d7e-915a-29ee20a8b71b.png)


### Paso 3 - Editar el Manifest.json 
- Deberas editar el campo vendor que se refiere al  cliente que se este trabajando y en name el nombre del componente  custom
- ![image](https://user-images.githubusercontent.com/107804493/220366572-4fbb6698-1017-441c-8738-c12b057c3d80.png)



### Paso 4 - Instalar apps necesarias
 Nos Ubicamos en la carpeta react
```bash
cd react
```
Se ejecuta yarn para que se instalen las dependencias necesarias para que react funcione correctamente
```bash
yarn
```


### Paso 5 - Ejecute un preview  del componente custom 
- Estando ubicado en la carpeta raiz del repositorio de Popup first discount deberas ejecutar vtex link para tener el componente linkeado a la tienda principal
```bash
vtex link
```
### Declara la dependencia del componente Custom en el manifest.json de tu Tienda 

```bash
 "dependencies": {
"itgloberspartnercl.first-discount": "0.x"
}
```

### podras llamarlo en la tienda principal con este bloque
![image](https://user-images.githubusercontent.com/107804493/220368017-d477cd63-1205-4f09-a25a-102f31afaceb.png)

## Declaralo en  firstDiscount.jsonc
```bash
 "first-discount": {
    "title": "popup de primer descuento",
    "props":{
      "logoSrc":"assets/img/header/logo__header.png",
      "bannerSrc":"assets/img/bullet-group-recomendados/swich5.jpg",
      "titleDiscount":"Ofertas increibles que no te puedes perder",
      "discount":50
    }
  }
```
### preview de la tienda 
- Una vez ya hayas hecho login y hayas creado tu workspace para ejecutar tu tienda, deberas ejecutar vtex link en el workspace donde quieras usar tu componente custom
```bash
vtex link
```
Este permitira sincronizar los archivos de tu computadora con una direccion web que te permitira visualizar la pagina en el navegador.
- Luego ejecutaras 
```bash
vtex browse
```


Este comando sirve para abrir el navegador en la url destinada para visualizar tu tienda


### Dependencies
- manifest.json
- ![image](https://user-images.githubusercontent.com/107804493/220369202-7e561cfe-c731-4e68-95cb-3c6bed8f4fca.png)
- package.json en la carpeta raiz
```bash
"dependencies": {
    "vtex.css-handles": "0.x",
    "vtex.modal-layout": "0.x",
    "vtex.store-newsletter": "1.x",
    "vtex.admin-customers-graphql": "3.x",
    "vtex.store-graphql": "2.x",
    "vtex.device-detector": "0.x"
  },
```
- package.json en la carpeta react
```bash
 "dependencies": {
    "apollo-client": "^2.6.8",
    "react": "^16.12.0",
    "react-apollo": "^3.1.3",
    "react-dom": "^16.12.0",
    "react-intl": "^3.12.0",
    "react-modal": "^3.16.1"
  },
  "devDependencies": {
    "@apollo/react-testing": "^3.1.3",
    "@types/jest": "^25.1.4",
    "@types/node": "^13.9.8",
    "@types/react": "^16.9.31",
    "@vtex/test-tools": "^3.3.2",
    "@vtex/tsconfig": "^0.4.4",
    "apollo-cache-inmemory": "^1.6.5",
    "graphql": "^14.6.0",
    "prop-types": "^15.8.1",
    "typescript": "3.9.7"
  }
  ```



### Contributors
1. MAICOL ALEXIZ ORTIZ HERNANDEZ
