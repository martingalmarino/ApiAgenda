# ApiAgenda - Calendario y Alertas para Apicultores Argentinos

Una plataforma moderna de calendario y alertas diseñada específicamente para apicultores argentinos. Organiza tu temporada apícola con recordatorios personalizados para tratamientos, floraciones y eventos climáticos específicos de tu provincia.

## 🚀 Características

- **Landing Page Responsiva**: Diseño mobile-first con Tailwind CSS
- **Formulario de Suscripción**: Validación con React Hook Form + Zod
- **Calendario Integrado**: Embed de Google Calendar para eventos apícolas
- **Alertas Personalizadas**: Por provincia, WhatsApp y email
- **SEO Optimizado**: Meta tags, Open Graph, y estructura semántica
- **Accesibilidad**: WCAG AA compliant

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS + HeadlessUI
- **Forms**: React Hook Form + Zod validation
- **Icons**: Heroicons
- **Fonts**: Inter (Google Fonts)

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone <repository-url>
cd api-agenda
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🔧 Configuración de Integraciones

### 1. Zapier/Make Integration

Para conectar el formulario de suscripción con servicios externos:

1. **Crear un Webhook en Zapier/Make**:
   - Ve a tu cuenta de Zapier/Make
   - Crea un nuevo scenario/zap
   - Añade un trigger "Webhooks by Zapier" o "Webhook" en Make
   - Copia la URL del webhook

2. **Configurar el endpoint**:
   - Edita `src/app/api/subscribe/route.ts`
   - Descomenta y configura la sección del webhook:
   ```typescript
   const zapierResponse = await fetch('https://hooks.zapier.com/hooks/catch/YOUR_WEBHOOK_ID/', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       name: validatedData.name,
       email: validatedData.email,
       whatsapp: validatedData.whatsapp,
       province: validatedData.province,
       timestamp: new Date().toISOString(),
       source: 'apiagenda-landing'
     }),
   });
   ```

### 2. Google Sheets Integration

**Opción A: Via Zapier/Make**
- Conecta el webhook a "Google Sheets" action
- Configura para añadir filas a tu hoja de cálculo

**Opción B: Direct API**
- Usa Google Sheets API directamente
- Requiere autenticación OAuth2

### 3. Airtable Integration

**Via Zapier/Make**:
- Conecta el webhook a "Airtable" action
- Configura para crear records en tu base de datos

### 4. Mailchimp Integration

**Via Zapier/Make**:
- Conecta el webhook a "Mailchimp" action
- Configura para añadir subscribers a tu lista

### 5. WhatsApp Business API

**Via Zapier/Make**:
- Conecta el webhook a "WhatsApp Business" action
- Configura para enviar mensajes de bienvenida

## 📅 Google Calendar Integration

Para integrar el calendario de Google:

1. **Crear un calendario público**:
   - Ve a Google Calendar
   - Crea un nuevo calendario
   - Hazlo público
   - Copia el ID del calendario

2. **Configurar el embed**:
   - Edita `src/components/CalendarEmbed.tsx`
   - Reemplaza el placeholder con el iframe real:
   ```typescript
   <iframe
     src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=America/Argentina/Buenos_Aires"
     style={{ border: 0 }}
     width="100%"
     height="600"
     frameBorder="0"
     scrolling="no"
     title="Calendario de Apicultura Argentina"
   ></iframe>
   ```

## 🎨 Personalización

### Colores de Marca

Los colores están definidos en `tailwind.config.ts`:

```typescript
colors: {
  honey: {
    400: '#ffc107', // Amarillo miel principal
  },
  field: {
    400: '#4caf50', // Verde campo
  },
  gray: {
    100: '#f5f5f5', // Gris claro
    900: '#212121', // Gris oscuro
  }
}
```

### Contenido

- **Textos**: Todos los textos están en español en los componentes
- **Provincias**: Lista completa de provincias argentinas en `SubscriptionForm.tsx`
- **SEO**: Meta tags configurados en `layout.tsx`

## 🚀 Deployment

### Vercel (Recomendado)

1. **Conecta tu repositorio a Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Haz clic en "New Project"
   - Importa el repositorio `martingalmarino/ApiAgenda`
   - Vercel detectará automáticamente que es un proyecto Next.js

2. **Configura las variables de entorno:**
   - En el dashboard de Vercel, ve a Settings > Environment Variables
   - Añade las variables necesarias desde `.env.example`
   - Para empezar, solo necesitas `ZAPIER_WEBHOOK_URL` si vas a usar integraciones

3. **Deploy automático:**
   - Cada push a la rama `main` desplegará automáticamente
   - Vercel te dará una URL como `https://api-agenda-xxx.vercel.app`

4. **Dominio personalizado (opcional):**
   - En Settings > Domains puedes configurar un dominio personalizado
   - Recomendado: `apiagenda.com` o `apiagenda.vercel.app`

### Otras Plataformas

- **Netlify**: Compatible con Next.js
- **Railway**: Soporte completo para Next.js
- **DigitalOcean App Platform**: Fácil deployment

## 📊 Analytics

Para añadir analytics:

1. **Google Analytics 4**:
   - Añade el script en `layout.tsx`
   - Configura el tracking ID

2. **Plausible**:
   - Añade el script en `layout.tsx`
   - Configura el dominio

## 🔒 Seguridad

- Validación de formularios con Zod
- Sanitización de inputs
- CORS configurado para el API endpoint
- Headers de seguridad recomendados

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Componentes optimizados para todos los dispositivos

## ♿ Accesibilidad

- Navegación por teclado
- ARIA labels apropiados
- Contraste de colores WCAG AA
- Textos alternativos para imágenes

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Soporte

- Email: info@apiagenda.com
- WhatsApp: +54 9 11 2345-6789
- GitHub Issues: Para reportar bugs o solicitar features

---

**Desarrollado con ❤️ para la comunidad apícola argentina**
