// Array de sucursales
let sucursales = [
    {
        localidad: "LA PLATA", 
        domicilio: "calle 50 n°1326",
        telefono: "+5492216582212"
    },
    {
        localidad: "QUILMES", 
        domicilio: "Av. H. Yrigoyen n°526",
        telefono: "+5491145657898"
    },
    {
        localidad: "BELGRANO", 
        domicilio: "Cramer n°1953",
        telefono: "+5491136962585"
    },
    {
        localidad: "RECOLETA", 
        domicilio: "Laprida n°2147",
        telefono: "+5491174148528"
    },
    {
        localidad: "CABALLITO", 
        domicilio: "Formosa n°259",
        telefono: "+5491198563254"
    },

]
for (const sucursal of sucursales){
    document.write('/ '+sucursal.localidad +' '+sucursal.domicilio+' ')
}