//Samuel Puerto y Jonathan Bernal 3203084
function obtenerPagina(datos,pagina,porPagina){ let inicio=(pagina-1)*porPagina; return datos.slice(inicio,inicio+porPagina); }
console.log(obtenerPagina([1,2,3,4,5],2,2));
