import os

# Carpeta donde están los .js
carpeta = '.'

# Línea de autor
autor = '//Samuel Puerto y Jonathan Bernal 3203084\n'

# Recorre todos los archivos de la carpeta
for archivo in os.listdir(carpeta):
    if archivo.endswith('.js'):
        ruta = os.path.join(carpeta, archivo)

        # Leer contenido original (ignorar errores de codificación)
        with open(ruta, 'r', encoding='utf-8', errors='ignore') as f:
            contenido = f.read()

        # Si la línea no está, la agrega al inicio
        if autor.strip() not in contenido:
            with open(ruta, 'w', encoding='utf-8') as f:
                f.write(autor + contenido)
            print(f"Línea de autor agregada a: {archivo}")
        else:
            print(f"Ya tiene autor: {archivo}")
