import sqlite3

conn = sqlite3.connect('database.db')
cursor = conn.cursor()

cursor.execute(''' 
    CREATE TABLE IF NOT EXISTS Usuarios  (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    NombreUsuario TEXT NOT NULL,
    CorreoElectronico TEXT NOT NULL,
    Contraseña TEXT NOT NULL,
    UrlImagenPerfil TEXT DEFAULT 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.webp'
)

''')

cursor.execute('''
CREATE TABLE IF NOT EXISTS Inventario  (
    ProductoID INTEGER PRIMARY KEY AUTOINCREMENT,
    UsuarioID INTEGER,
    CategoriaID INTEGER,
    NombreProducto TEXT NOT NULL,
    Cantidad INTEGER,
    PrecioOriginal DECIMAL(10, 2) NOT NULL,
    PrecioVenta DECIMAL(10, 2) NOT NULL,
    FechaActualizacion DATE,
    FOREIGN KEY (UsuarioID) REFERENCES Usuarios(ID),
    FOREIGN KEY (CategoriaID) REFERENCES Categorias(ID)
)
''')

cursor.execute('''CREATE TABLE IF NOT EXISTS Categorias  (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NombreCategoria TEXT NOT NULL,
    Descripcion TEXT
)
''')


cursor.execute('''
CREATE TABLE IF NOT EXISTS Ventas (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    FechaVenta DATE NOT NULL,
    UsuarioID INTEGER,
    NombreProductoVendido TEXT NOT NULL,
    CantidadVendida INTEGER,
    TotalVentas DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (UsuarioID) REFERENCES Usuarios(ID)
)
''')


categorias = [
    ("Maquillaje", "Todo lo que necesitas para un look espectacular"),
    ("Ropa", "Moda de alta calidad para todas las estaciones"),
    ("Carteras", "Elegantes y funcionales, un complemento perfecto"),
    ("Billeteras", "Guarda tu dinero con estilo y seguridad"),
    ("Perfumes", "Fragancias irresistibles para cada ocasión"),
    ("Mochilas", "Lleva todo contigo en nuestras mochilas de diseño")
]

for categoria in categorias:
    cursor.execute("INSERT INTO Categorias (NombreCategoria, Descripcion) VALUES (?, ?)", categoria)

conn.commit()
conn.close()

print("Tablas creadas exitosamente en 'database.db'")
print("Categorías con descripciones llamativas insertadas exitosamente en 'database.db'")