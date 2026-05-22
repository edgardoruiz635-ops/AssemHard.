document.addEventListener('DOMContentLoaded', () => {

const productos = [

{
    id:1,
    nombre:"RYZEN 5 5600GT",
    precio:800000,
    imagen:"ryzen/r5 5600GT.png",
    descripcion:" Nùcleos: 6 / Hilos: 12 / Socket: AM4 / Velocidad: 3,6 GHz Max: 4,6 GHz / 65W / Arquitectura: zen3 / Gráficos Integrados Radeon Vega 7 ",
    stock:true,
    link:"https://mpago.li/2PgsXuC"
},
{
    id:2,
    nombre:"RYZEN 5 5600",
    precio:652214,
    imagen:"ryzen/r5 5600.png",
    descripcion:" Nùcleos: 6 / Hilos: 12 / Socket: AM4 / Velocidad: 3,5 GHz Max: 4,4 GHz / 65W / Arquitectura: zen3 ",
    stock:true,
    link:"https://mpago.li/1GW85ma"
},
{
    id:3,
    nombre:"RYZEN 5 7600x",
    precio:751008,
    imagen:"ryzen/r5 7600x.png",
    descripcion:" Nùcleos: 6 / Hilos: 12 / Socket: AM5 / Velocidad: 3,8 GHz Max: 5,1 GHz / 65W / Arquitectura: zen4 / Gráficos Integrados Radeon ",
    stock:true,
    link:"https://mpago.li/2biG5jD"
},
{
    id:4,
    nombre:"RYZEN 5 8600G",
    precio:853824,
    imagen:"ryzen/r5 8600G.png",
    descripcion:" Nùcleos: 6 / Hilos: 12 / Socket: AM5 / Velocidad: 4,3 GHz Max: 5,0 GHz / 65W / Arquitectura: zen4 / Gráficos Integrados Radeon 760M ",
    stock:true,
    link:"https://mpago.li/1yr24pj"
},
{
    id:5,
    nombre:"RYZEN 5 9600x",
    precio:804204,
    imagen:"ryzen/r5 9600X.png",
    descripcion:" Nùcleos: 6 / Hilos: 12 / Socket: AM5 / Velocidad: 3,9 GHz Max: 5,4 GHz / 65W / Arquitectura: zen5 ",
    stock:true,
    link:"https://mpago.li/33rbfSy"
},
{
    id:6,
    nombre:"RYZEN 7 5700G",
    precio:930445,
    imagen:"ryzen/r7 5700G.png",
    descripcion:" Nùcleos: 8 / Hilos: 16 / Socket: AM4 / Velocidad: 3,8 GHz Max: 4,6 GHz / 65W / Arquitectura: zen3 / Gráficos Integrados Radeon Vega 8 ",
    stock:true,
    link:"https://mpago.li/1HuT6L5"
},
{
    id:7,
    nombre:"RYZEN 7 5700",
    precio:733082,
    imagen:"ryzen/r7 5700G.png",
    descripcion:" Nùcleos: 8 / Hilos: 16 / Socket: AM4 / Velocidad: 3,0 GHz Max: 4,1 GHz / 105W / Arquitectura: zen3 / 3D V-Cache ",
    stock:true,
    link:"https://mpago.li/2PnxRhq"
},
{
    id:8,
    nombre:"RYZEN 7 7700x",
    precio:1090750,
    imagen:"ryzen/r7 7700x.png",
    descripcion:" Nùcleos: 8 / Hilos: 16 / Socket: AM5 / Velocidad: 4,5 GHz Max: 5,4 GHz / 105W / Arquitectura: zen4 / Gráficos Integrados Radeon ",
    stock:true,
    link:"https://mpago.li/2GbJ9De"
},
{
    id:9,
    nombre:"RYZEN 7 7800x3D",
    precio:2350000,
    imagen:"ryzen/r7 7800x3D.png",
    descripcion:" Nùcleos: 8 / Hilos: 16 / Socket: AM5 / Velocidad: 4,2 GHz Max: 5,0 GHz / 120W / Arquitectura: zen4 / 3D V-Cache ",
    stock:true,
    link:"https://mpago.li/2sTaVSy"
},
{
    id:10,
    nombre:"RYZEN 7 9800x3D",
    precio:2442825,
    imagen:"ryzen/r7 9800x3D.png",
    descripcion:" Nùcleos: 8 / Hilos: 16 / Socket: AM5 / Velocidad: 4,7 GHz Max: 5,2 GHz / 120W / Arquitectura: zen5 / 3D V-Cache ",
    stock:true,
    link:"https://mpago.li/2wKmezZ"
},
{
    id:11,
    nombre:"RYZEN 9 9900x",
    precio:2244823,
    imagen:"ryzen/r9 9900x.png",
    descripcion:" Nùcleos: 12 / Hilos: 24 / Socket: AM5 / Velocidad: 4,4 GHz Max: 5,6 GHz / 120W / Arquitectura: zen5 ",
    stock:true,
    link:"https://mpago.li/15srzy5"
},
{
    id:12,
    nombre:"RYZEN 9 9900x3D",
    precio:2454187,
    imagen:"ryzen/r9 9900x3D.png",
    descripcion:" Nùcleos: 12 / Hilos: 24 / Socket: AM5 / Velocidad: 4,4 GHz Max: 5,5 GHz / 120W / Arquitectura: zen5 / 3D V-Cache ",
    stock:true,
    link:"https://mpago.li/2wpU4Nm"
},
{
    id:13,
    nombre:"MSI MAG B550 TOMAHAWK MAX WIFI",
    precio:707395,
    imagen:"boar/b1.png",
    descripcion:" Chipset: B550 / Socket: AM4 / Formato: ATX / RAM DDR4 hasta 128GB / PCIe 4.0 / 2x M.2 / Wi-Fi + Bluetooth / LAN 2.5G / compatible : RYZEN SERIE 3000, 5000 ",
    stock:false,
    link:"https://mpago.li/1z7WmMA"
},
{
    id:14,
    nombre:"GIGABYTE B650 AORUS Elite AX",
    precio:669879,
    imagen:"boar/b2.png",
    descripcion:" Chipset: B650 / Socket: AM5 / Formato: ATX / RAM DDR5 hasta 192GB / PCIe 5.0 / 3x M.2 / Wi-Fi 6E + Bluetooth 5.3 / LAN 2.5G / compatible : RYZEN SERIE 7000, 9000 ",
    stock:true,
    link:"https://mpago.li/312jfhX"
},
{
    id:15,
    nombre:"MSI MAG B650 Tomahawk WiFi",
    precio:782427,
    imagen:"boar/b3.png",
    descripcion:" Chipset: B650 / Socket: AM5 / Formato: ATX / RAM DDR5 hasta 192GB / PCIe 4.0 / 3x M.2 / Wi-Fi 6E + Bluetooth 5.2 / LAN 2.5G / RYZEN SERIE 7000, 9000 ",
    stock:true,
    link:"https://mpago.li/2QtdXDY"
},
{
    id:16,
    nombre:"MSI MPG B550 GAMING PLUS",
    precio:603378,
    imagen:"boar/b4.png",
    descripcion:" Chipset: B550 / Socket: AM4 / Formato: ATX / RAM DDR4 hasta 128GB / PCIe 4.0 / 2x M.2 / LAN 1G / Compatible Ryzen 3000, 4000G y 5000",
    stock:true,
    link:"https://mpago.li/2Hnug8M"
},
{
    id:17,
    nombre:"ASUS TUF GAMING B650-PLUS",
    precio:720749,
    imagen:"boar/b5.png",
    descripcion:" Chipset: B650 / Socket: AM5 / Formato: ATX / RAM DDR5 hasta 192GB / PCIe 5.0 / 3x M.2 / LAN 2.5G / Compatible Ryzen 7000, 8000G y 9000",
    stock:true,
    link:"https://mpago.li/26m7VjC"
},
{
    id:18,
    nombre:"ASUS PRIME Z890-P WiFi",
    precio:1013684,
    imagen:"boar/b6.png",
    descripcion:" Chipset: Z890 / Socket: LGA1851 / Formato: ATX / RAM DDR5 hasta 256GB / PCIe 5.0 / 4x M.2 / Wi-Fi 7 + Bluetooth 5.4 / LAN 2.5G / Compatible Intel Core Ultra Series 2",
    stock:true,
    link:"https://mpago.li/24DRuBR"
},
{
    id:19,
    nombre:"ASUS ROG STRIX Z890-A GAMING WIFI",
    precio:1294919,
    imagen:"boar/b7.png",
    descripcion:" Chipset: Z890 / Socket: LGA1851 / Formato: ATX / RAM DDR5 hasta 256GB / PCIe 5.0 / 5x M.2 / Wi-Fi 7 + Bluetooth 5.4 / LAN 2.5G / Compatible Intel Core Ultra Series 2",
    stock:true,
    link:"https://mpago.li/2WxLk9M"
},
{
    id:20,
    nombre:"ASROCK B850M-X",
    precio:580556,
    imagen:"boar/b8.png",
    descripcion:" Chipset: B850 / Socket: AM5 / Formato: Micro-ATX / RAM DDR5 hasta 192GB / PCIe 5.0 / 2x M.2 / LAN 2.5G / Compatible Ryzen 7000, 8000G y 9000",
    stock:true,
    link:"https://mpago.li/2jF74BW"
},
{
    id:21,
    nombre:"MSI B650 GAMING PLUS WiFi",
    precio:848348,
    imagen:"boar/b9.png",
    descripcion:" Chipset: B650 / Socket: AM5 / Formato: ATX / RAM DDR5 hasta 256GB / PCIe 4.0 / 2x M.2 / Wi-Fi 6E + Bluetooth 5.3 / LAN 2.5G / Compatible Ryzen 7000, 8000G y 9000",
    stock:true,
    link:"https://mpago.li/192tPJ2"
},
{
    id:22,
    nombre:"GIGABYTE B650 GAMING X AX",
    precio:875368,
    imagen:"boar/b10.png",
    descripcion:" Chipset: B650 / Socket: AM5 / Formato: ATX / RAM DDR5 hasta 192GB / PCIe 4.0 / 3x M.2 / Wi-Fi 6E + Bluetooth 5.3 / LAN 2.5G / Compatible Ryzen 7000, 8000G y 9000",
    stock:true,
    link:"https://mpago.li/2eqAUmC"
},
{
    id:23,
    nombre:"ASUS ROG STRIX B850-F GAMING WiFi",
    precio:1134405,
    imagen:"boar/b11.png",
    descripcion:" Chipset: B850 / Socket: AM5 / Formato: ATX / RAM DDR5 hasta 256GB / PCIe 5.0 / 4x M.2 / Wi-Fi 7 + Bluetooth 5.4 / LAN 2.5G / Compatible Ryzen 7000, 8000G y 9000",
    stock:true,
    link:"https://mpago.li/15JNNp4"
},
{
    id:24,
    nombre:"MSI X870E Gaming Plus WiFi",
    precio:893187,
    imagen:"boar/b12.png",
    descripcion:" Chipset: X870E / Socket: AM5 / Formato: ATX / RAM DDR5 hasta 256GB / PCIe 5.0 / 4x M.2 / Wi-Fi 7 + Bluetooth 5.4 / LAN 5G / Compatible Ryzen 7000, 8000G y 9000",
    stock:true,
    link:"https://mpago.li/26RqXJk"
    
},
{
    id:25,
    nombre:"CORSAIR Vengeance  16 GB (2 x 8 GB)",
    precio:1108862,
    imagen:"ram/r1.png",
    descripcion:" DDR5 / 16GB (2x8GB) / 5200MHz / CL40 / AMD EXPO + Intel XMP / Disipador aluminio / Compatible AMD AM5 e Intel LGA1700",
    stock:true,
    link:"https://mpago.li/2U7zw7o"
},
{
    id:26,
    nombre:"Kingston Fury Beast RGB 32GB (2 x 16 GB)",
    precio:1902883,
    imagen:"ram/r2.png",
    descripcion:" DDR5 / 32GB (2x16GB) / 5600MT/s / CL36 / RGB / AMD EXPO + Intel XMP / Disipador aluminio / Compatible AMD AM5 e Intel LGA1700 ",
    stock:true,
    link:"https://mpago.li/1wRbP9k"
},
{
    id:27,
    nombre:"CORSAIR VENGEANCE RGB  RAM 32 GB (2 x 16 GB)",
    precio:1996236,
    imagen:"ram/r3.png",
    descripcion:" DDR5 / 32GB (2x16GB) / 6000MHz / CL36 / RGB / AMD EXPO + Intel XMP 3.0 / Compatible AMD AM5 e Intel LGA1700-LGA1851",
    stock:true,
    link:"https://mpago.li/1XXmoq2"
},
{
    id:28,
    nombre:"Kingston Fury Beast RGB 16GB (2 x 8 GB)",
    precio:1636701,
    imagen:"ram/r4.png",
    descripcion:" DDR5 / 16GB (2x8GB) / 6000MT/s / CL30 / RGB / AMD EXPO + Intel XMP / Compatible AMD AM5 e Intel LGA1700-LGA1851",
    stock:true,
    link:"https://mpago.li/1Vjw6Pk"
},
{
    id:29,
    nombre:"G.SKILL Flare X5 32GB (2 x 16 GB)",
    precio:1989333,
    imagen:"ram/r5.png",
    descripcion:" DDR5 / 32GB (2x16GB) / 6000MT/s / CL36 / AMD EXPO + Intel XMP 3.0 / Compatible AMD AM5 e Intel LGA1700-LGA1851",
    stock:true,
    link:"https://mpago.li/2eqbhWW"
},
{
    id:30,
    nombre:"G.SKILL Flare X5 16GB (2 x 8 GB)",
    precio:1153218,
    imagen:"ram/r6.png",
    descripcion:" DDR5 / 16GB (2x8GB) / 5600MT/s / CL36 / AMD EXPO / Compatible AMD AM5 e Intel LGA1700",
    stock:true,
    link:"https://mpago.li/1QRTbJs"
},
{
    id:31,
    nombre:"CORSAIR VENGEANCE RGB PRO 16 GB (2 x 8 GB)",
    precio:714091,
    imagen:"ram/r7.png",
    descripcion:" DDR4 / 16GB (2x8GB) / 3200MHz / CL16 / RGB / Intel XMP / Compatible AMD AM4 e Intel LGA1200-LGA1700",
    stock:true,
    link:"https://mpago.li/11V4YgJ"
},
{
    id:32,
    nombre:"CORSAIR Vengeance LPX 16 GB (2 x 8 GB)",
    precio:665122,
    imagen:"ram/r8.png",
    descripcion:" DDR4 / 16GB (2x8GB) / 3200MHz / CL16 / Intel XMP 2.0 / Low Profile / Compatible AMD AM4 e Intel LGA1200-LGA1700",
    stock:true,
    link:"https://mpago.li/27mX2AA"
},
{
    id:33,
    nombre:"CORSAIR Vengeance LPX 32 GB (2 x 16 GB)",
    precio:1108684,
    imagen:"ram/r9.png",
    descripcion:" DDR4 / 32GB (2x16GB) / 3600MHz / CL18 / Intel XMP 2.0 / Low Profile / Compatible AMD AM4 e Intel LGA1200-LGA1700",
    stock:true,
    link:"https://mpago.li/2iFpngV"
},
{
    id:34,
    nombre:"GIGASTONE Game TURBO Kit de 16 GB (2 x 8 GB)",
    precio:572151,
    imagen:"ram/r11.png",
    descripcion:" DDR4 / 16GB (2x8GB) / 3200MHz / CL16 / Intel XMP 2.0 / No ECC / Compatible AMD AM4 e Intel LGA1200-LGA1700",
    stock:true,
    link:"https://mpago.li/2wAyEMW"
},
{
    id:35,
    nombre:"GIGASTONE Game TURBO Kit 32GB (2 x 16 GB)",
    precio:1104426,
    imagen:"ram/r12.png",
    descripcion:" DDR4 RGB / 32GB (2x16GB) / 3200MHz / CL16 / Intel XMP 2.0 / No ECC / Compatible AMD AM4 e Intel LGA1200-LGA1700",
    stock:true,
    link:"https://mpago.li/1qxU6Jr"
},
{
    id:36,
    nombre:"CORSAIR Vengeance RGB RS 64GB (2 x 32 GB)",
    precio:3725880,
    imagen:"ram/r10.png",
    descripcion:" DDR5 RGB / 64GB (2x32GB) / 5200MHz / CL40 / AMD EXPO + Intel XMP / Compatible AMD AM5 e Intel LGA1700-LGA1851",
    stock:true,
    link:"https://mpago.li/18kcCzm"
},
{
    id:37,
    nombre:"Kingston NV3 500GB M.2 NVMe SSD",
    precio:698234,
    imagen:"alma/a1.png",
    descripcion:"500GB / M.2 NVMe / PCIe 4.0 / 5000MB/s Lectura",
    stock:true
},
{
    id:38,
    nombre:"WD Blue SN5100 1TB M.2 NVMe SSD",
    precio:932942,
    imagen:"alma/a2.png",
    descripcion:"1TB / M.2 NVMe / PCIe 4.0 / 5150MB/s Lectura",
    stock:true
},
{
    id:39,
    nombre:"Samsung 990 PRO 2TB M.2 NVMe SSD",
    precio:1833464,
    imagen:"alma/a3.png",
    descripcion:"2TB / M.2 NVMe / PCIe 4.0 / 7450MB/s Lectura",
    stock:true
},
{
    id:40,
    nombre:"Kingston 480GB A400 SATA 3 2.5",
    precio:629003,
    imagen:"alma/r4.png",
    descripcion:"480GB / SATA III / 2.5 Pulgadas / 500MB/s Lectura",
    stock:true
},
{
    id:41,
    nombre:"Crucial BX500 1TB 3D NAND SATA SSD interno de 2.5",
    precio:895381,
    imagen:"alma/r5.png",
    descripcion:"1TB / SATA III / 2.5 Pulgadas / 540MB/s Lectura",
    stock:true
},
{
    id:42,
    nombre:"Samsung Electronics 870 EVO 2TB 2.5",
    precio:2702804,
    imagen:"alma/r6.png",
    descripcion:"2TB / SATA III / 2.5 Pulgadas / 560MB/s Lectura",
    stock:true
},
{
    id:43,
    nombre:"Seagate BarraCuda - Disco duro interno de 8 TB",
    precio:1189789,
    imagen:"alma/r7.png",
    descripcion:"8TB / HDD / 7200RPM / SATA III / 256MB Cache",
    stock:true
},
{
    id:44,
    nombre:"Western Digital - Disco duro interno WD Blue de 4 TB",
    precio:670242,
    imagen:"alma/r8.png",
    descripcion:"4TB / HDD / 5400RPM / SATA III / 256MB Cache",
    stock:true
},
{
    id:45,
    nombre:"Western Digital (WD) BLUE Desktop 1TB",
    precio:550205,
    imagen:"alma/r9.png",
    descripcion:"1TB / HDD / 7200RPM / SATA III / 64MB Cache",
    stock:true
},
{
    id:46,
    nombre:"CORSAIR RM1000x ATX 3.1 PCIe 5.1 Ready modular 1000W",
    precio:820335,
    imagen:"fue/f1.png",
    descripcion:"1000W / 80 Plus Gold / Modular / PCIe 5.1 / ATX 3.1",
    stock:true
},
{
    id:47,
    nombre:"CORSAIR RM750e ATX 3.1 PCIe 5.1 Ready modular 750W",
    precio:895381,
    imagen:"fue/f2.png",
    descripcion:"750W / 80 Plus Gold / Modular / PCIe 5.1 / ATX 3.1",
    stock:true
},
{
    id:48,
    nombre:"MSI MAG A650BE, semimodular ATX de 650 W",
    precio:501387,
    imagen:"fue/f3.png",
    descripcion:"650W / 80 Plus Bronze / Semi Modular / ATX",
    stock:true
},
{
    id:49,
    nombre:"MSI MAG A1200PLS PCIE5, modular de 1200 W",
    precio:1120501,
    imagen:"fue/f4.png",
    descripcion:"1200W / 80 Plus Platinum / Modular / PCIe 5.0",
    stock:true
},
{
    id:50,
    nombre:"ORA PRO G1, ATX modular de 850 W",
    precio:632718,
    imagen:"fue/f5.png",
    descripcion:"850W / 80 Plus Gold / Modular / ATX",
    stock:true
},
{
    id:51,
    nombre:"ORA PRO G1, ATX modular de 1000 W",
    precio:670242,
    imagen:"fue/f6.png",
    descripcion:"1000W / 80 Plus Gold / Modular / ATX",
    stock:true
},
{
    id:52,
    nombre:"ASUS Dual GeForce RTX™ 5060",
    precio:1545060,
    imagen:"grafi/g1.png",
    descripcion:"8GB GDDR7 / RTX 5060 / DLSS 4 / PCIe 5.0",
    stock:true
},
{
    id:53,
    nombre:"Nvidia Gigabyte Windforce GeForce RTX 40 Series RTX 4060 Ti",
    precio:2310000,
    imagen:"grafi/g2.png",
    descripcion:"16GB GDDR6 / RTX 4060 Ti / DLSS 3 / PCIe 4.0",
    stock:true
},
{
    id:54,
    nombre:"ASUS TUF Gaming GeForce RTX™ 5070 Ti",
    precio:3897245,
    imagen:"grafi/g3.png",
    descripcion:"16GB GDDR7 / RTX 5070 Ti / DLSS 4 / PCIe 5.0",
    stock:true
},
{
    id:55,
    nombre:"GIGABYTE Radeon RX 9060 XT Gaming OC",
    precio:1946034,
    imagen:"grafi/g4.png",
    descripcion:"16GB GDDR6 / RX 9060 XT / PCIe 5.0 / Ray Tracing",
    stock:true
},
{
    id:56,
    nombre:"ASRock AMD Radeon RX 7700 XT Challenger",
    precio:1758417,
    imagen:"grafi/g5.png",
    descripcion:"12GB GDDR6 / RX 7700 XT / PCIe 4.0 / Ray Tracing",
    stock:true
},
{
    id:57,
    nombre:"GIGABYTE Radeon RX 9070 XT Gaming OC",
    precio:2996686,
    imagen:"grafi/g6.png",
    descripcion:"16GB GDDR6 / RX 9070 XT / PCIe 5.0 / Ray Tracing",
    stock:true
},
{
    id:58,
    nombre:"ASUS TUF Gaming GT302 ARGB Edición Blanca ATX",
    precio:999043,
    imagen:"XXX42.jpg",
    descripcion:"ATX / ARGB / Vidrio Templado / Flujo de Aire",
    stock:true
},
{
    id:59,
    nombre:"Fractal Design North",
    precio:1120625,
    imagen:"XXX43.jpg",
    descripcion:"ATX / Madera Natural / Vidrio Templado / Airflow",
    stock:true
},
{
    id:60,
    nombre:"Hyte Y70 Touch Infinite Dual Chamber ATX",
    precio:2372398,
    imagen:"XXX44.jpg",
    descripcion:"ATX / Pantalla Touch / Dual Chamber / Vidrio Templado",
    stock:true
},
{
    id:61,
    nombre:"Lian Li Lancool 207 Compact ATX",
    precio:771177,
    imagen:"XXX45.jpg",
    descripcion:"ATX Compacto / Airflow / Vidrio Templado / ARGB",
    stock:true
},
{
    id:62,
    nombre:"Gabinete CORSAIR 4000D",
    precio:756069,
    imagen:"XXX46.jpg",
    descripcion:"ATX / Airflow / Vidrio Templado / Gestión de Cables",
    stock:true
},
{
    id:63,
    nombre:"CORSAIR 3500X",
    precio:970602,
    imagen:"XXX47.jpg",
    descripcion:"ATX / Vidrio Templado / ARGB / Alto Flujo de Aire",
    stock:true
},
{
    id:64,
    nombre:"Logitech G Pro X Superlight 2",
    precio:778996,
    imagen:"XXX48.jpg",
    descripcion:" Mouse Gamer Inalámbrico / Sensor HERO 2 / 32000 DPI / Ultraligero 60g / USB-C / RGB / Compatible Windows y Mac ",
    stock:true
},
{
    id:65,
    nombre:"Razer DeathAdder V3 Pro",
    precio:522122,
    imagen:"XXX49.jpg",
    descripcion:" Mouse Gamer Inalámbrico / Sensor Focus Pro 30000 DPI / Ergonomico / 63g / USB-C / Hasta 90 horas de batería ",
    stock:true
},
{
    id:66,
    nombre:"SteelSeries Apex Pro TKL",
    precio:895365,
    imagen:"XXX50.jpg",
    descripcion:" Teclado Mecánico Gamer / Switches OmniPoint ajustables / RGB / Reposamuñecas magnético / USB / Formato Full Size ",
    stock:true
},
{
    id:67,
    nombre:"Corsair K70 RGB PRO TKL",
    precio:748742,
    imagen:"XXX51.jpg",
    descripcion:" Teclado Mecánico Gamer / Switches Cherry MX / RGB / Anti-Ghosting / Teclas multimedia / USB-C ",
    stock:true
},
{
    id:68,
    nombre:"Logitech G733 LIGHTSPEED",
    precio:673202,
    imagen:"XXX52.jpg",
    descripcion:" Audífonos Gamer Inalámbricos / RGB LIGHTSYNC / Micrófono removible / Hasta 29 horas de batería / USB inalámbrico ",
    stock:true
},
{
    id:69,
    nombre:"Razer BlackShark V2 Pro",
    precio:703456,
    imagen:"XXX53.jpg",
    descripcion:" Headset Gamer Inalámbrico / THX Spatial Audio / Micrófono HyperClear / Baja latencia / Hasta 70 horas de batería ",
    stock:true
},
{
    id:70,
    nombre:"Blue Yeti USB",
    precio:590146,
    imagen:"XXX54.jpg",
    descripcion:" Micrófono USB Profesional / Grabación cardioide / Plug & Play / Ideal streaming y podcast / Compatible PC y Mac ",
    stock:true
},
{
    id:71,
    nombre:"Elgato Stream Deck MK.2",
    precio:786512,
    imagen:"XXX55.jpg",
    descripcion:" Controlador para Streaming / 15 teclas LCD personalizables / Compatible OBS, Twitch y YouTube / USB-C ",
    stock:true
},
{
    id:72,
    nombre:"Logitech C920 HD Pro",
    precio:478497,
    imagen:"XXX56.jpg",
    descripcion:" Webcam Full HD 1080p / Micrófonos estéreo integrados / Autofocus / Corrección automática de luz / USB ",
    stock:true
},
{
    id:73,
    nombre:"Razer Kiyo Pro",
    precio:708894,
    imagen:"XXX57.jpg",
    descripcion:" Webcam Full HD 1080p 60FPS / Sensor adaptativo de luz / HDR / Gran angular ajustable / USB 3.0 ",
    stock:true
},
{
    id:74,
    nombre:"Elgato Facecam MK.2",
    precio:710972,
    imagen:"XXX58.jpg",
    descripcion:" Webcam Full HD 1080p 60FPS / Lente profesional / Baja latencia / Ideal para streaming / USB-C ",
    stock:true
},
{
    id:75,
    nombre:"Logitech MX Brio Ultra HD 4K",
    precio:786512,
    imagen:"XXX59.jpg",
    descripcion:" Webcam Ultra HD 4K / HDR / Zoom digital 5x / Reconocimiento facial Windows Hello / USB ",
    stock:true
},
{
    id:76,
    nombre:"HyperX Vision S",
    precio:1027900,
    imagen:"XXX60.jpg",
    descripcion:" Webcam 4K UHD / Micrófonos duales / Autoenfoque rápido / Compatible OBS y Discord / USB-C ",
    stock:true
},
{
    id:77,
    nombre:"ASUS ROG Eye S",
    precio:824282,
    imagen:"XXX61.jpg",
    descripcion:" Webcam Full HD 1080p 60FPS / Micrófono con cancelación de ruido IA / Compacta y portátil / USB ",
    stock:true
},
{
    id:78,
    nombre:"TP-Link Archer TX3000E",
    precio:334669,
    imagen:"XXX62.jpg",
    descripcion:" Adaptador PCIe WiFi 6 / Hasta 2400 Mbps / Bluetooth 5.0 / Antenas de alta ganancia / Compatible Windows ",
    stock:true
},
{
    id:79,
    nombre:"UGREEN Adaptador USB-C a Ethernet",
    precio:286900,
    imagen:"XXX63.jpg",
    descripcion:" Adaptador USB Tipo C a RJ45 / Velocidad Gigabit 1000 Mbps / Plug & Play / Compatible laptops y PC ",
    stock:true
},
{
    id:80,
    nombre:"TP-Link UB500 Bluetooth 5.0",
    precio:320000,
    imagen:"XXX64.jpg",
    descripcion:" Adaptador Bluetooth USB / Bluetooth 5.0 / Baja latencia / Compatible audífonos y controles inalámbricos ",
    stock:true
},
{
    id:81,
    nombre:"CableMod Vertical GPU Mount",
    precio:361552,
    imagen:"XXX65.jpg",
    descripcion:" Adaptador vertical para tarjeta gráfica / Compatible PCIe 4.0 / Soporte metálico premium / Mejora estética RGB ",
    stock:true
},
{
    id:82,
    nombre:"ASUS TUF Gaming ARGB PWM Fan Hub ARGB + PWM",
    precio:333272,
    imagen:"XXX66.jpg",
    descripcion:" Hub para ventiladores y RGB / Control PWM / Compatible ARGB 5V / Hasta 6 ventiladores ",
    stock:true
},
{
    id:83,
    nombre:"Concentrador USB 3.0 de 10 puertos de aluminio alimentado ",
    precio:600608,
    imagen:"XXX67.jpg",
    descripcion:" Hub USB 3.0 / 10 puertos de alta velocidad / Compatible PC y laptops ",
    stock:true
},{
    id:84,
    nombre:"Secretlab TITAN Evo",
    precio:4646135,
    imagen:"XXX68.jpeg",
    descripcion:" Silla Gamer Premium / Reclinación 165° / Soporte lumbar ajustable / Cojín magnético / Acabado cuero híbrido ",
    stock:true
},
{
    id:85,
    nombre:"Razer Iskur V2",
    precio:3077000,
    imagen:"XXX69.jpg",
    descripcion:" Silla Gamer Ergonómica / Soporte lumbar adaptable / Reclinación ajustable / Espuma de alta densidad ",
    stock:true
},
{
    id:86,
    nombre:"Corsair TC100 Relaxed",
    precio:1462800,
    imagen:"XXX70.jpeg",
    descripcion:" Silla Gamer / Diseño amplio y cómodo / Reclinación hasta 160° / Almohadas cervical y lumbar incluidas ",
    stock:true
},
{
    id:87,
    nombre:"DXRacer Master V2",
    precio:1771062,
    imagen:"XXX71.jpg",
    descripcion:" Silla Gamer Profesional / Reposabrazos 4D / Soporte lumbar integrado / Estructura metálica resistente ",
    stock:true
},
{
    id:88,
    nombre:"SIHOO M57 Ergonomic Chair",
    precio:3702990,
    imagen:"XXX72.jpg",
    descripcion:" Silla de Oficina Ergonómica / Respaldo de malla transpirable / Soporte lumbar / Reposacabezas ajustable ",
    stock:true
},
{
    id:89,
    nombre:"Hbada Office Ergonomic Chair",
    precio:2648686,
    imagen:"XXX73.jpg",
    descripcion:" Silla de Oficina / Diseño ergonómico / Reposabrazos abatibles / Respaldo transpirable / Ajuste de altura ",
    stock:true
},
{
    id:90,
    nombre:"ASUS ROG Strix G16",
    precio:7899990,
    imagen:"XXX74.jpg",
    descripcion:" Laptop Gamer / Intel Core i7 / RTX 4070 / 16GB RAM DDR5 / SSD 1TB NVMe / Pantalla 16'' 240Hz ",
    stock:true
},
{
    id:91,
    nombre:"MSI Katana 15",
    precio:6499990,
    imagen:"XXX75.jpg",
    descripcion:" Laptop Gamer / Intel Core i7 / RTX 4060 / 16GB RAM / SSD 1TB / Pantalla Full HD 144Hz ",
    stock:true
},
{
    id:92,
    nombre:"Lenovo Legion Pro 5",
    precio:8699990,
    imagen:"XXX76.jpg",
    descripcion:" Laptop Gamer / Ryzen 7 / RTX 4070 / 32GB RAM DDR5 / SSD 1TB / Pantalla 16'' 165Hz ",
    stock:true
},
{
    id:93,
    nombre:"AssemHard Starter Gaming PC",
    precio:4599990,
    imagen:"XXX77.jpg",
    descripcion:" Torre Gamer / Ryzen 5 / RTX 4060 / 16GB RAM / SSD NVMe 1TB / RGB / Ideal gaming Full HD ",
    stock:true
},
{
    id:94,
    nombre:"AssemHard Ultra Gaming PC",
    precio:9899990,
    imagen:"XXX78.jpg",
    descripcion:" Torre Gamer / Ryzen 7 / RTX 5070 Ti / 32GB RAM DDR5 / SSD NVMe 2TB / Refrigeración líquida ",
    stock:true
},
{
    id:95,
    nombre:"AssemHard Creator Workstation",
    precio:14999990,
    imagen:"XXX79.jpg",
    descripcion:" Torre Profesional / Ryzen 9 / RTX 5080 / 64GB RAM DDR5 / SSD 2TB / Edición y Streaming ",
    stock:true
},
    {
    id:96,
    nombre:"RYZEN 7 8700G",
    precio:1193566,
    imagen:"ryzen/r7 8700G.png",
    descripcion:" Nùcleos: 8 / Hilos: 16 / Socket: AM5 / Velocidad: 4,23 GHz Max: 5,1 GHz / 65W / Arquitectura: zen4 / Gráficos Integrados Radeon 780M ",
    stock:true,
    link:"https://mpago.li/13SAsZX"
},
    {
    id:97,
    nombre:" INTEL i3-12100",
    precio:1076300,
    imagen:"intel/i3 12100.png",
    descripcion:" Núcleos: 4 / Hilos: 8 / Socket: LGA1700 / Velocidad: 3,3 GHz Max: 4,3 GHz / 60W / Arquitectura: Alder Lake / Gráficos UHD 730",
    stock:true,
    link:"https://mpago.li/23zmVbB"
},
{
    id:98,
    nombre:" INTEL i5-12400F ",
    precio:669701,
    imagen:"intel/i5 12400f.png",
    descripcion:" Núcleos: 6 / Hilos: 12 / Socket: LGA1700 / Velocidad: 2,5 GHz Max: 4,4 GHz / 65W / Arquitectura: Alder Lake / Sin gráficos integrados ",
    stock:true,
    link:"https://mpago.li/1XcWV3E"
},
{
    id:99,
    nombre:" INTEL i5-13600K ",
    precio:1424705,
    imagen:"intel/i5 13600k.png",
    descripcion:" Núcleos: 14 / Hilos: 20 / Socket: LGA1700 / Velocidad: 3,5 GHz Max: 5,1 GHz / 125W / Arquitectura: Raptor Lake / Gráficos UHD 770",
    stock:true,
    link:"https://mpago.li/1BJP4Qk"
},
{
    id:100,
    nombre:"INTEL CORE ULTRA 5 245K ",
    precio:803865,
    imagen:"intel/core 5 245k.png",
    descripcion:" Núcleos: 14 (6P + 8E) / Hilos: 14 / Socket: LGA1851 / Velocidad: 4,2 GHz Max: 5,2 GHz / 125W / Arquitectura: Arrow Lake / Gráficos Intel Graphics",
    stock:true,
    link:"https://mpago.li/26tqi29"
},
{
    id:101,
    nombre:" INTEL i7-12700kf ",
    precio:1174601,
    imagen:"intel/i7 12700kf.png",
    descripcion:" Núcleos: 12 / Hilos: 20 / Socket: LGA1700 / Velocidad: 3,6 GHz Max: 5,0 GHz / 125W / Arquitectura: Alder Lake / Sin gráficos integrados",
    stock:true,
    link:"https://mpago.li/1HK393F"
},
{
    id:102,
    nombre:" INTEL i7-14700K ",
    precio:1648014,
    imagen:"intel/i7 14700k.png",
    descripcion:" Núcleos: 20 / Hilos: 28 / Socket: LGA1700 / Velocidad: 3,4 GHz Max: 5,6 GHz / 125W / Arquitectura: Raptor Lake Refresh / Gráficos UHD 770",
    stock:true,
    link:"https://mpago.li/2FsgwbZ"
},
{
    id:103,
    nombre:" INTEL CORE ULTRA 7 265KF ",
    precio:1251686,
    imagen:"intel/core 7 265kf.png",
    descripcion:" Núcleos: 20 / Hilos: 20 / Socket: LGA1851 / Velocidad: 3,9 GHz Max: 5,5 GHz / 125W / Arquitectura: Arrow Lake / Sin gráficos integrados ",
    stock:true,
    link:"https://mpago.li/2vhaszg"
},
{
    id:104,
    nombre:" INTEL i9-12900KF ",
    precio:1558646,
    imagen:"intel/i9 12900kf.png",
    descripcion:" Núcleos: 16 / Hilos: 24 / Socket: LGA1700 / Velocidad: 3,2 GHz Max: 5,2 GHz / 125W / Arquitectura: Alder Lake / Sin gráficos integrados",
    stock:true,
    link:"https://mpago.li/2BJoE51"
},
    {
    id:105,
    nombre:" INTEL CORE ULTRA 9 285K ",
    precio:2479613,
    imagen:"intel/core 9 285k.png",
    descripcion:" Núcleos: 24 / Hilos: 24 / Socket: LGA1851 / Velocidad: 3,7 GHz Max: 5,7 GHz / 125W / Arquitectura: Arrow Lake / Gráficos Intel Arc ",
    stock:true,
    link:"https://mpago.li/2Kmvp1c"
},
    {
    id:106,
    nombre:" ASUS TUF GAMING Z790-PLUS WIFI ",
    precio:826240,
    imagen:"boar/b13.png",
    descripcion:" Chipset: Z790 / Socket: LGA1700 / Formato: ATX / RAM DDR5 hasta 192GB / PCIe 5.0 / 4x M.2 / Wi-Fi 6 + Bluetooth / LAN 2.5G / Compatible Intel Core i 12th, 13th y 14th Gen ",
    stock:true,
    link:"https://mpago.li/2NDhUKd"
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
${!producto.stock ? 'disabled' : ''}
onclick="${producto.stock ? `irFormulario(${producto.id})` : ''}">
${producto.stock ? 'Comprar' : 'Sin stock'}
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

window.irFormulario = (id) => {

    window.location.href = `formulario.html?id=${id}`;

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

const form = document.getElementById("customForm");

if(form){

form.addEventListener("submit", function(e){

  e.preventDefault();

  const presupuesto = document.getElementById("presupuesto").value;
  const componentes = document.getElementById("componentes").value;
  const proposito = document.getElementById("proposito").value;

  const numero = "573002176292";

  const mensaje =
`Hola, quiero una Custom PC

💰 Presupuesto:
${presupuesto || "No especificado"}

🖥️ Componentes de referencia:
${componentes || "No especificado"}

🎯 Propósito:
${proposito}`;

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");

});

}

const sugerenciasForm =
document.getElementById("sugerenciasForm");

if(sugerenciasForm){

sugerenciasForm.addEventListener("submit",(e)=>{

e.preventDefault();

const nombre =
document.getElementById("nombre").value;

const tipo =
document.getElementById("tipo").value;

const mensajeTexto =
document.getElementById("mensaje").value;

const numero = "573002176292";

const mensaje =
`📩 Nueva sugerencia AssemHard

👤 Nombre:
${nombre}

📌 Tipo:
${tipo}

💬 Mensaje:
${mensajeTexto}`;

const url =
`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

window.open(url,"_blank");

});

}

document.querySelectorAll(".info-container").forEach(container => {

    const bloques = container.querySelectorAll(".info-box");

    const btnIzq = container.querySelector(".izquierda");
    const btnDer = container.querySelector(".derecha");

    let pasoActual = 0;

    btnDer.addEventListener("click", () => {

        bloques[pasoActual].classList.remove("active");

        pasoActual++;

        if(pasoActual >= bloques.length){
            pasoActual = 0;
        }

        bloques[pasoActual].classList.add("active");

    });

    btnIzq.addEventListener("click", () => {

        bloques[pasoActual].classList.remove("active");

        pasoActual--;

        if(pasoActual < 0){
            pasoActual = bloques.length - 1;
        }

        bloques[pasoActual].classList.add("active");

    });

});

// ============================
// FORMULARIO COMPRA
// ============================

const compraForm =
document.getElementById("compraForm");

if(compraForm){

    // OBTENER ID DEL PRODUCTO

    const params =
    new URLSearchParams(window.location.search);

    const id =
    parseInt(params.get("id"));

    // BUSCAR PRODUCTO

    const producto =
    productos.find(p => p.id === id);

    // COLOCAR NOMBRE PRODUCTO

    document.getElementById("producto").value =
    producto.nombre;

    // ENVIAR FORMULARIO

    compraForm.addEventListener("submit",
    async (e)=>{

        e.preventDefault();

        const data =
        new FormData(compraForm);

        await fetch(compraForm.action,{

            method:"POST",
            body:data,
            headers:{
                'Accept':'application/json'
            }

        });

        // REDIRECCIONAR AL PAGO

        if(producto.link){

            window.location.href =
            producto.link;

        }else{

            alert("Producto sin link de pago");

        }

    });

}

/* ===== SLIDER ===== */

const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;

function showSlide(i){

    slides.forEach(slide =>{
        slide.classList.remove("active");
    });

    slides[i].classList.add("active");
}

/* SIGUIENTE */

function nextSlide(){

    index++;

    if(index >= slides.length){
        index = 0;
    }

    showSlide(index);
}

/* ANTERIOR */

function prevSlide(){

    index--;

    if(index < 0){
        index = slides.length -1;
    }

    showSlide(index);
}

/* BOTONES */

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

/* AUTOMATICO INFINITO */

setInterval(() => {

    nextSlide();

}, 3000);    

    
});
