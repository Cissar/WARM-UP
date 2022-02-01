Warm Up- Proyect
-––––––––––––––––––––––––––––––--––––––––––––––––––––––––––––––-

Se utilizo un back end(nestjs  - mongodb) y un front con angular .


En el BACK:


Para ayudar a typesript se realizo un interfaz que contaba con las definiciones de las variables Titulo, Autor y fecha de creacion.

El mismo proceso se realizo para mongodb (dto y schema).

En appmodule se importo mongoose para tener conexion con la base de datos.

Ya para finalizar se agrego un cron con el objetivo de realizar un tarea automatizada, para este proyecto se aplico un rango de 1 hora se realice un refresh de noticias en el end-point externo y esto se vea reflejado tambien en el cliente.

Luego se disponibilizarón dos end-points (Un get y un delete)

La petición get tiene un parametro para disponibilizar las 10 ultimas noticias.






-––––––––––––––––––––––––––––––--––––––––––––––––––––––––––––––-

En el FRONT:

 Se generaron dos componentes (nav y listado noticias), siempre buscando atomic-desing. Una vez que se generaron esos componentes cada uno se enlazo con un archivo .css para realizar los diseños solicitados.

Para exportar los componentes, estos se agregaron a un modulo para posteriormente exportarlo a app.module.ts. Si bien no era necesario ya que no se trataban de muchos elementos, se aplico esta forma para resguardar buenas practicas.

Dentro del componenente ts de noticias. Se creo un metodo que realiza el delete de la noticia para que si el usuario desea, pueda eliminar la noticia.

Si la noticia se elimina correctamente se desplegara una alerta que dira que se realizo correctamente, sino, se desplegara otra alerta que dira lo contrario.

Tambien se aplico un reloadnoticia para cuando el usuario eliminara una noticia, una nueva desde la cola tomara el puesto numero 10.

Ademas para que no existiese la necesidad de crear 10 componentes, se aplico un ngfor para el llenado fuera automatico

Para finalizar la carpeta providers se realizaron las importaciones correspondientes a http y se realizaron los metodos para hacer el get y el delete de las noticias.

__________ 
solo el back y mongo fueron dockerizados, hubo un problema con el cliente que desconozco 
