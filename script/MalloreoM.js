window.onload = function mostrarTabla() {
    var color = document.createAttribute("style")
    const productos = ["Pan Frances", "Mini baguet", "Pan de muerto", "Bolillo", "Baguet", "Pan dulce", "Mediasnoches", "Cuernos", "Pan de Concha", "Tartala", "Panque", "Casuelas"];
    const piezas = [100, 130, 120, 100, 120,160,150,200,180,110,150,100]
    const mayoreo = [2, 1.50, 2, 1, 5, 1, 3.50, 1.50, 1.50, , 4, 15];
    const menudeo = [4.00, 2.50, 3.00, 2.00, 8.00, 2.00, 5.00, 2.50, 2.00, 3.00, 5.00, 20.00];
    var mym = document.getElementById("mym");
    var tl = document.getElementById("tl");
    color.value = "color: antiquewhite"
    tl.setAttributeNode(color);
    var tabla = "";
    const long = productos.length;
    for (var i = 0; i < long; i++) {
        tabla += "<tr><td>" + productos[i] + "<td>$" + mayoreo[i] + "<td>" + piezas[i] + "Pz<td>$" + menudeo[i] +"<td>" + (piezas[i]-50) + "Pz";
    }
    console.log(tabla);
   mym.innerHTML= tabla ;
}