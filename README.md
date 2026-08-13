# @tarta/ui

Design system compartido del suite Tarta. Fuente única de verdad para tokens visuales, tipografía, y primitives React reutilizables entre las 7 apps del suite.

## Instalación (desde otra app del suite)

En el `package.json` de la app consumidora:

```json
{
  "dependencies": {
    "@tarta/ui": "file:../packages/tarta-ui"
  }
}
```

Después `npm install`.

## Uso

**Estilos globales** (una sola vez en el entry de la app):

```js
import "@tarta/ui/styles";
```

Esto importa fonts + tokens + primitives CSS.

**Primitives React**:

```jsx
import { Button, Input, Card, Badge } from "@tarta/ui";

<Button variant="primary">Save changes</Button>
<Input placeholder="Search..." />
<Card>...</Card>
<Badge tone="success">Complete</Badge>
```

## Contenido

- `styles/tokens.css` — variables CSS del sistema (colors, radii, shadows, motion, spacing)
- `styles/fonts.css` — Inter + Fraunces + JetBrains Mono self-hosted via Google Fonts
- `styles/primitives.css` — utility classes (`.btn`, `.card`, `.input`, `.badge`, `.chip`, `.divider`, `.eyebrow`, `.kbd`, `.glass`, `.scroll-subtle`)
- `components/` — React wrappers de las utility classes con props tipadas

## Fuente de verdad

El diseño y las decisiones están documentadas en el design system live: **https://tarta.club/design-system** (admin only).

Cualquier cambio visual del suite se hace primero aquí y luego se propaga a las apps consumidoras.

## Reglas duras del sistema

Documentadas en la memoria de trabajo:
- `feedback-no-admin-panel-look` — nada de estética admin panel
- `feedback-escala-contraste-sistema` — tokens tonales con roles fijos
- `feedback-accent-unificado` — un solo accent (deep teal) across apps
- `feedback-ux-ui-unificada-across-apps` — mismos componentes y patrones en las 7 apps
- `feedback-mobile-paridad-100` — 100% mobile friendly con paridad total
- `feedback-no-texto-explicativo-largo` — UI self-explanatory
- `feedback-no-border-left-accent` — prohibido líneas verticales de acento
- `feedback-contrastes-legibilidad` — legible pero apagado, sin chillón
