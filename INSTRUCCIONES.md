# Blog de Eduardo José Moreno — Instrucciones de Despliegue

## PASO 1 — Preparar su computadora (una sola vez)

1. Instale **Node.js** desde https://nodejs.org (elija la versión "LTS")
2. Instale **Git** desde https://git-scm.com
3. Cree una cuenta gratuita en **GitHub**: https://github.com
4. Cree una cuenta gratuita en **Netlify**: https://netlify.com (use "Sign up with GitHub")

---

## PASO 2 — Subir el proyecto a GitHub

Abra la Terminal (Mac) o el Símbolo del sistema (Windows) y ejecute:

```bash
# Entrar a la carpeta del proyecto
cd ruta/a/eduardo-moreno-blog

# Inicializar Git
git init
git add .
git commit -m "Primer commit: blog de Eduardo José Moreno"

# Crear repositorio en GitHub (reemplazar YOUR_USERNAME)
# Primero cree el repositorio vacío en github.com, luego:
git remote add origin https://github.com/YOUR_USERNAME/eduardo-moreno-blog.git
git branch -M main
git push -u origin main
```

---

## PASO 3 — Desplegar en Netlify

1. Ingrese a https://app.netlify.com
2. Haga clic en **"Add new site"** → **"Import an existing project"**
3. Seleccione **GitHub** y autorice el acceso
4. Elija el repositorio `eduardo-moreno-blog`
5. Configure:
   - **Branch**: `main`
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
6. Haga clic en **"Deploy site"**
7. Espere 2-3 minutos. El sitio quedará en línea en una URL tipo `xxx.netlify.app`

---

## PASO 4 — Activar Netlify Identity (para el CMS)

1. En el panel de Netlify, vaya a **Site configuration → Identity**
2. Haga clic en **"Enable Identity"**
3. En **Registration preferences** seleccione **"Invite only"**
4. En **Services → Git Gateway**, haga clic en **"Enable Git Gateway"**

---

## PASO 5 — Crear el usuario administrador (Eduardo)

1. En Netlify → Identity → **"Invite users"**
2. Ingrese el correo de Eduardo
3. Eduardo recibirá un email — hacer clic en el enlace para crear la contraseña
4. Listo: Eduardo puede ingresar al panel en `su-sitio.netlify.app/admin`

---

## PASO 6 — Agregar la foto del autor

Guarde una foto del autor como `autor.jpg` en la carpeta:
```
public/images/autor.jpg
```
Luego suba los cambios a GitHub:
```bash
git add public/images/autor.jpg
git commit -m "Agrega foto del autor"
git push
```
Netlify redesplegará el sitio automáticamente.

---

## PASO 7 — Actualizar los datos de contacto

Edite el archivo `src/lib/utils.ts` y reemplace los placeholders:
```typescript
email:    'correo@ejemplo.com',
phone:    '+54 XX XXXX-XXXX',
linkedin: 'linkedin.com/in/eduardomoreno',
```
Suba los cambios con `git add . && git commit -m "Actualiza datos de contacto" && git push`

---

## CÓMO PUBLICA EDUARDO UN ARTÍCULO

1. Ir a `su-sitio.netlify.app/admin`
2. Iniciar sesión con su correo y contraseña
3. Hacer clic en **"✍️ Artículos"** → **"Nuevo Artículo"**
4. Completar: Título, Fecha, Categoría, Resumen, Imagen (opcional), Contenido
5. Para guardar sin publicar: activar **"Guardar como borrador"**
6. Para publicar: hacer clic en **"Publicar"** (botón azul arriba a la derecha)
7. El sitio se actualiza automáticamente en 2-3 minutos

---

## ESTRUCTURA DEL PROYECTO

```
eduardo-moreno-blog/
├── content/
│   ├── posts/          ← Artículos en formato Markdown
│   └── settings/       ← Datos del autor
├── public/
│   ├── admin/          ← Panel CMS (Decap)
│   │   ├── index.html
│   │   └── config.yml
│   └── images/         ← Imágenes del sitio
│       └── uploads/    ← Imágenes subidas desde el CMS
└── src/
    ├── app/            ← Páginas del sitio (Next.js App Router)
    ├── components/     ← Componentes reutilizables
    ├── lib/            ← Utilidades (leer posts, configuración)
    └── types/          ← Tipos TypeScript
```

---

## COMANDOS ÚTILES

```bash
npm install       # Instalar dependencias (primera vez)
npm run dev       # Ver el blog en su computadora (localhost:3000)
npm run build     # Compilar para producción
```
