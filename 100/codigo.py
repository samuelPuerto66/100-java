import os
for i in range (99, 101):
    nombre_archivo = f"ejercicio{i}.js"
    with open(nombre_archivo, "w") as archivo:
        archivo.write(f"# Este es el archivo número {i}\n")

