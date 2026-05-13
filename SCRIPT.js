document.addEventListener('DOMContentLoaded', () => {

const productos = [

{
    id:1,
    nombre:"RYZEN 5 5600GT",
    precio:895231,
    imagen:"Img2/ryzen5.jpg",
    descripcion:" Nùcleos: 6 / Hilos: 12 / Socket: AM4 / Velocidad: 3,6 GHz Max: 4,6 GHz / 65W / Arquitectura: zen3 / Gráficos Integrados Radeon Vega 7 ",
    stock:true
    
},
{
    id:2,
    nombre:"RYZEN 5 5600",
    precio:767615,
    imagen:"Img2/ryzen5.jpg",
    descripcion:" Nùcleos: 6 / Hilos: 12 / Socket: AM4 / Velocidad: 3,5 GHz Max: 4,4 GHz / 65W / Arquitectura: zen3 ",
    stock:true
},
{
    id:3,
    nombre:"RYZEN 5 7600",
    precio:839134,
    imagen:"Img2/ryzen5.jpg",
    descripcion:" Nùcleos: 6 / Hilos: 12 / Socket: AM5 / Velocidad: 3,8 GHz Max: 5,1 GHz / 65W / Arquitectura: zen4 / Gráficos Integrados Radeon ",
    stock:true
},
{
    id:4,
    nombre:"RYZEN 5 8600G",
    precio:936695,
    imagen:"Img2/ryzen5.jpg",
    descripcion:" Nùcleos: 6 / Hilos: 12 / Socket: AM5 / Velocidad: 4,3 GHz Max: 5,0 GHz / 65W / Arquitectura: zen4 / Gráficos Integrados Radeon 760M ",
    stock:true
},
{
    id:5,
    nombre:"RYZEN 5 9600x",
    precio:895419,
    imagen:"Img2/ryzen5.jpg",
    descripcion:" Nùcleos: 6 / Hilos: 12 / Socket: AM5 / Velocidad: 3,9 GHz Max: 5,4 GHz / 65W / Arquitectura: zen5 ",
    stock:true
},
{
    id:6,
    nombre:"RYZEN 7 5700G",
    precio:1001009,
    imagen:"Img2/ryzen7.jpg",
    descripcion:" Nùcleos: 8 / Hilos: 16 / Socket: AM4 / Velocidad: 3,8 GHz Max: 4,6 GHz / 65W / Arquitectura: zen3 / Gráficos Integrados Radeon Vega 8 ",
    stock:true
},
{
    id:7,
    nombre:"RYZEN 7 5700",
    precio:835382,
    imagen:"Img2/ryzen7.jpg",
    descripcion:" Nùcleos: 8 / Hilos: 16 / Socket: AM4 / Velocidad: 3,0 GHz Max: 4,1 GHz / 105W / Arquitectura: zen3 / 3D V-Cache ",
    stock:true
},
{
    id:8,
    nombre:"RYZEN 7 7700x",
    precio:1139320,
    imagen:"Img2/ryzen7.jpg",
    descripcion:" Nùcleos: 8 / Hilos: 16 / Socket: AM5 / Velocidad: 4,5 GHz Max: 5,4 GHz / 105W / Arquitectura: zen4 / Gráficos Integrados Radeon ",
    stock:true
},
{
    id:9,
    nombre:"RYZEN 7 7800x3D",
    precio:1631589,
    imagen:"Img2/ryzen7.jpg",
    descripcion:" Nùcleos: 8 / Hilos: 16 / Socket: AM5 / Velocidad: 4,2 GHz Max: 5,0 GHz / 120W / Arquitectura: zen4 / 3D V-Cache ",
    stock:true
},
{
    id:10,
    nombre:"RYZEN 7 9800x3D",
    precio:2553212,
    imagen:"Img2/ryzen7.jpg",
    descripcion:" Nùcleos: 8 / Hilos: 16 / Socket: AM5 / Velocidad: 4,7 GHz Max: 5,2 GHz / 120W / Arquitectura: zen5 / 3D V-Cache ",
    stock:true
},
{
    id:11,
    nombre:"RYZEN 9 9900x",
    precio:1679206,
    imagen:"Img2/ryzen9.jpg",
    descripcion:" Nùcleos: 12 / Hilos: 24 / Socket: AM5 / Velocidad: 4,4 GHz Max: 5,6 GHz / 120W / Arquitectura: zen5 ",
    stock:true
},
{
    id:12,
    nombre:"RYZEN 9 9900x3D",
    precio:2280029,
    imagen:"Img2/ryzen9.jpg",
    descripcion:" Nùcleos: 12 / Hilos: 24 / Socket: AM5 / Velocidad: 4,4 GHz Max: 5,5 GHz / 120W / Arquitectura: zen5 / 3D V-Cache ",
    stock:true
},
{
    id:13,
    nombre:"MSI MAG B550 TOMAHAWK MAX WIFI",
    precio:814331,
    imagen:"Img2/XXX.jpg",
    descripcion:" AM4 / DDR4 / PCIe 4.0 / SATA 6GB/s / M.2 2 slots / USB 3.2 GEN 2 / HDMI/DP / ATX / WIFI 6E / compatible : RYZEN SERIE 3000, 5000 ",
    stock:true
},
{
    id:14,
    nombre:"GIGABYTE B650 AORUS Elite AX",
    precio:770354,
    imagen:"Img2/XXX2.jpg",
    descripcion:" AM5 / DDR5 / PCIe 5.0 SSD + PCIe 4.0 GPU / SATA 6GB/s / M.2 3 slots / USB 3.2 GEN 2 / HDMI/DP / ATX / WIFI 6E / compatible : RYZEN SERIE 7000, 9000 ",
    stock:true
},
{
    id:15,
    nombre:"MSI MAG B650 Tomahawk WiFi",
    precio:820335,
    imagen:"Img2/XXX3.jpg",
    descripcion:"AM5 / DDR5 / PCIe 4.0 x16 / 6x SATA 6Gb/s / M.2 3 slots / USB 3.2 Gen 2 + USB-C 20Gbps / HDMI 2.1 + DP / ATX / WIFI 6E / RYZEN SERIE 7000, 9000 ",
    stock:true
},
{
    id:16,
    nombre:"MSI MPG B550 GAMING PLUS",
    precio:745288,
    imagen:"Img2/XXX4.jpg",
    descripcion:"AM5 / DDR5",
    stock:true
},
{
    id:17,
    nombre:"ASUS TUF GAMING B650-PLUS",
    precio:722812,
    imagen:"Img2/XXX5.jpg",
    descripcion:"AM5 / DDR5",
    stock:true
},
{
    id:18,
    nombre:"ASUS PRIME Z890-P WiFi",
    precio:1070240,
    imagen:"Img2/XXX6.jpg",
    descripcion:"AM5 / DDR5",
    stock:true
},
{
    id:19,
    nombre:"ASUS ROG STRIX Z890-A GAMING WIFI",
    precio:1319395,
    imagen:"Img2/XXX7.jpg",
    descripcion:"AM5 / DDR5",
    stock:true
},
{
    id:20,
    nombre:"ASROCK B850M-X",
    precio:595195,
    imagen:"Img2/XXX8.jpg",
    descripcion:"AM5 / DDR5",
    stock:true
},
{
    id:21,
    nombre:"MSI B650 GAMING PLUS WiFi",
    precio:857708,
    imagen:"Img2/XXX9.jpg",
    descripcion:"AM5 / DDR5",
    stock:true
},
{
    id:22,
    nombre:"GIGABYTE B650 GAMING X AX",
    precio:955456,
    imagen:"Img2/XXX10.jpg",
    descripcion:"AM5 / DDR5",
    stock:true
},
{
    id:23,
    nombre:"ASUS ROG STRIX B850-F GAMING WiFi",
    precio:1173091,
    imagen:"Img2/XXX11.jpg",
    descripcion:"AM5 / DDR5",
    stock:true
},
{
    id:24,
    nombre:"MSI X870E Gaming Plus WiFi",
    precio:970428,
    imagen:"Img2/XXX12.jpg",
    descripcion:"AM5 / DDR5",
    stock:true
},
{
    id:25,
    nombre:"CORSAIR Vengeance  16 GB (2 x 8 GB)",
    precio:1214329,
    imagen:"Img2/XXX13.jpg",
    descripcion:" AM4 / DDR4 / PCIe 4.0 / SATA 6GB/s / M.2 2 slots / USB 3.2 GEN 2 / HDMI/DP / ATX / WIFI 6E / compatible : RYZEN SERIE 3000, 5000 ",
    stock:true
},
{
    id:26,
    nombre:"Kingston Fury Beast RGB 32GB (2 x 16 GB)",
    precio:1829749,
    imagen:"Img2/XXX14.jpg",
    descripcion:" AM5 / DDR5 / PCIe 5.0 SSD + PCIe 4.0 GPU / SATA 6GB/s / M.2 3 slots / USB 3.2 GEN 2 / HDMI/DP / ATX / WIFI 6E / compatible : RYZEN SERIE 7000, 9000 ",
    stock:true
},
{
    id:27,
    nombre:"CORSAIR VENGEANCE RGB  RAM 32 GB (2 x 16 GB)",
    precio:2283743,
    imagen:"Img2/XXX15.jpg",
    descripcion:"AM5 / DDR5 / PCIe 4.0 x16 / 6x SATA 6Gb/s / M.2 3 slots / USB 3.2 Gen 2 + USB-C 20Gbps / HDMI 2.1 + DP / ATX / WIFI 6E / RYZEN SERIE 7000, 9000 ",
    stock:true
},
{
    id:28,
    nombre:"Kingston Fury Beast RGB 16GB (2 x 8 GB)",
    precio:1604572,
    imagen:"Img2/XXX14.jpg",
    descripcion:"AM5 / DDR5",
    stock:true
},
{
    id:29,
    nombre:"G.SKILL Flare X5  32GB (2 x 16 GB) ",
    precio:1945283,
    imagen:"Img2/XXX16.jpg",
    descripcion:"AM5 / DDR5",
    stock:true
},
{
    id:30,
    nombre:"G.SKILL Flare X5  16GB (2 x 8 GB)",
    precio:1143035,
    imagen:"Img2/XXX16.jpg",
    descripcion:"AM5 / DDR5",
    stock:true
},
{
    id:31,
    nombre:"CORSAIR VENEGANCE RGB PRO 16 GB (2 x 8 GB)",
    precio:824087,
    imagen:"Img2/XXX17.jpg",
    descripcion:"AM5 / DDR5",
    stock:true
},
{
    id:32,
    nombre:"CORSAIR Vengeance LPX  16 GB (2 x 8 GB)",
    precio:782811,
    imagen:"Img2/XXX18.jpg",
    descripcion:"AM5 / DDR5",
    stock:true
},
{
    id:33,
    nombre:"CORSAIR Vengeance LPX  32 GB (2 x 16 GB)",
    precio:1270614,
    imagen:"Img2/XXX18.jpg",
    descripcion:"AM5 / DDR5",
    stock:true
},
{
    id:34,
    nombre:"GIGASTONE Game TURBO Kit de 16 GB (2 x 8 GB)",
    precio:704013,
    imagen:"Img2/XXX19.jpg",
    descripcion:"AM5 / DDR5",
    stock:true
},
{
    id:35,
    nombre:" GIGASTONE Game TURBO Kit 32GB (2 x 16 GB)",
    precio:1154292,
    imagen:"Img2/XXX19.jpg",
    descripcion:"AM5 / DDR5",
    stock:true
},
{
    id:36,
    nombre:"CORSAIR Vengeance RGB RS  64GB (2 x 32 GB)",
    precio:34049442,
    imagen:"Img2/XXX20.jpg",
    descripcion:"AM5 / DDR5",
    stock:true
},
{
    id:37,
    nombre:"Kingston NV3 500GB M.2  NVMe SSD",
    precio:698234,
    imagen:"Img2/XXX21.jpg",
    descripcion:"AM5 / DDR5",
    stock:true
},
{
    id:38,
    nombre:"WD Blue SN5100  1 TB  M.2 NVMe SSD",
    precio:932942,
    imagen:"Img2/XXX22.jpg",
    descripcion:"AM5 / DDR5",
    stock:true
},
{
    id:39,
    nombre:"Samsung 990 PRO  2TB M.2 NVMe SSD",
    precio:1833464,
    imagen:"Img2/XXX23.jpg",
    descripcion:"AM5 / DDR5",
    stock:true
},
{
    id:40,
    nombre:"Kingston 480GB A400 SATA 3 2.5",
    precio:629003,
    imagen:"Img2/XXX24.jpg",
    descripcion:"AM5 / DDR5",
    stock:true
},
{
    id:41,
    nombre:"Crucial BX500 1TB 3D NAND SATA SSD interno de 2.5",
    precio:895381,
    imagen:"Img2/XXX25.jpg",
    descripcion:"AM5 / DDR5",
    stock:true
},
{
    id:42,
    nombre:"Samsung Electronics 870 EVO 2TB 2.5",
    precio:2702804,
    imagen:"Img2/XXX26.jpg",
    descripcion:"AM5 / DDR5",
    stock:true
},
{
    id:43,
    nombre:"Seagate BarraCuda - Disco duro interno de 8 TB",
    precio:1189789,
    imagen:"Img2/XXX27.jpg",
    descripcion:"AM5 / DDR5",
    stock:true
},
{
    id:44,
    nombre:"Western Digital - Disco duro interno WD Blue de 4 TB",
    precio:670242,
    imagen:"Img2/XXX28.jpg",
    descripcion:"AM5 / DDR5",
    stock:true
},
{
    id:45,
    nombre:"Western Digital (WD) BLUE Desktop 1TB ",
    precio:550205,
    imagen:"Img2/XXX29.jpg",
    descripcion:"AM5 / DDR5",
    stock:true
},
{
    id:46,
    nombre:"CORSAIR RM1000x ATX 3.1 PCIe 5.1 Ready modular 1000W ",
    precio:820335,
    imagen:"Img2/XXX30.jpg",
    descripcion:"AM5 / DDR5",
    stock:true
},
{
    id:47,
    nombre:"CORSAIR RM750e ATX 3.1 PCIe 5.1 Ready  modular 750W",
    precio:895381,
    imagen:"Img2/XXX31.jpg",
    descripcion:"AM5 / DDR5",
    stock:true
},
{
    id:48,
    nombre:"MSI MAG A650BE, semimodular ATX de 650 W",
    precio:501387,
    imagen:"Img2/XXX32.jpg",
    descripcion:"AM5 / DDR5",
    stock:true
},
{
    id:49,
    nombre:"MSI MAG A1200PLS PCIE5, modular de 1200 W",
    precio:1120501,
    imagen:"Img2/XXX33.jpg",
    descripcion:"AM5 / DDR5",
    stock:true
},
{
    id:50,
    nombre:"ORA PRO G1, ATX  modular de 850 W",
    precio:632718,
    imagen:"Img2/XXX34.jpg",
    descripcion:"AM5 / DDR5",
    stock:true
},
{
    id:51,
    nombre:"ORA PRO G1, ATX  modular de 1000 W",
    precio:670242,
    imagen:"Img2/XXX35.jpg",
    descripcion:"AM5 / DDR5",
    stock:true
},
{
    id:52,
    nombre:"ASUS Dual GeForce RTX™ 5060",
    precio:1545060,
    imagen:"Img2/XXX36.jpg",
    descripcion:"AM5 / DDR5",
    stock:true
},
{
    id:53,
    nombre:"Nvidia Gigabyte Windforce GeForce RTX 40 Series RTX 4060 Ti ",
    precio:2310000,
    imagen:"Img2/XXX37.jpg",
    descripcion:"AM5 / DDR5",
    stock:true
},
{
    id:54,
    nombre:"ASUS TUF Gaming GeForce RTX ™ 5070 Ti",
    precio:3897245,
    imagen:"Img2/XXX38.jpg",
    descripcion:"AM5 / DDR5",
    stock:true
},
{
    id:55,
    nombre:"GIGABYTE Radeon RX 9060 XT Gaming OC",
    precio:1946034,
    imagen:"Img2/XXX39.jpg",
    descripcion:"AM5 / DDR5",
    stock:true
},
{
    id:56,
    nombre:"ASRock AMD Radeon RX 7700 XT Challenger",
    precio:1758417,
    imagen:"Img2/XXX41.jpg",
    descripcion:"AM5 / DDR5",
    stock:true
},
{
    id:57,
    nombre:"GIGABYTE Radeon RX 9070 XT Gaming OC",
    precio:2996686,
    imagen:"Img2/XXX40.jpg",
    descripcion:"AM5 / DDR5",
    stock:true
}

];

const contenedorProductos = document.getElementById("productos-container");

const modal = document.getElementById("modal-caracteristicas");

const modalTitulo = document.getElementById("modal-titulo");

const modalDescripcion = document.getElementById("modal-descripcion");

const cerrarModal = document.getElementById("cerrar-modal");


// ============================
// RENDER PRODUCTOS
// ============================

function renderProductos(idsMostrar){

contenedorProductos.innerHTML = "";

const productosMostrar = productos.filter(producto =>
idsMostrar.includes(producto.id)
);

productosMostrar.forEach(producto => {

contenedorProductos.innerHTML += `

<div class="card">

<img src="${producto.imagen}" class="product-img">

<h3>${producto.nombre}</h3>

<span class="price">
$${producto.precio.toLocaleString('es-CO')}
</span>

<div class="botones-card">

<button class="info-btn"
onclick="verCaracteristicas(${producto.id})">
Características
</button>

<button class="buy-btn"
onclick="enviarWhatsApp(${producto.id})">
Comprar
</button>

</div>

</div>

`;

});

}


// ============================
// MODAL
// ============================

window.verCaracteristicas = (id)=>{

const producto = productos.find(p=>p.id === id);

modalTitulo.textContent = producto.nombre;

modalDescripcion.innerHTML = `
<div class="spec-item">
    <span class="spec-label">Características:</span>
    <span class="spec-value">${producto.descripcion}</span>
</div>

<div class="spec-item">
    <span class="spec-label">Precio:</span>
    <span class="spec-value">$${producto.precio.toLocaleString('es-CO')}</span>
</div>

<div class="spec-item">
    <span class="spec-label">Disponibilidad:</span>
    
    <span class="${producto.stock ? 'spec-stock' : 'spec-no-stock'}">
        ${producto.stock ? '✔ Disponible' : '✖ No Disponible'}
    </span>
</div>
`;

modal.classList.remove("hidden");

};

cerrarModal.addEventListener("click",()=>{

modal.classList.add("hidden");

});

window.enviarWhatsApp = (id) => {

const producto = productos.find(p => p.id === id);

const numero = "573002176292"; // TU NUMERO DE WHATSAPP

const mensaje = `Hola, quiero solicitar link de pago 

Producto: ${producto.nombre}
Precio: $${producto.precio.toLocaleString('es-CO')}
Cantidad: 1`;

const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

window.open(url, "_blank");

};

// ============================
// MENU
// ============================

const menuBtn = document.querySelector('#menu-open');

const menuLinks = document.querySelector('.list-cat');

menuBtn.addEventListener('click', () => {

menuLinks.classList.toggle('active');

});


// ============================
// INICIAR
// ============================

if(contenedorProductos){

const idsHTML = contenedorProductos.dataset.productos
.split(',')
.map(id => parseInt(id));

renderProductos(idsHTML);

}

});