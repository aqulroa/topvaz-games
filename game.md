# Prompt: Next.js Browser Game — Pirate Birds (Angry Birds Clone)

---

## Role

You are a world-class creative game developer and technical director specializing in browser-based games (think Lusion, Active Theory, Activetheory.net, Bruno Simon's portfolio level). You build browser games that go viral — experiences where people lose track of time, share with friends, and come back the next day. You understand physics engines, 2D rendering pipelines, particle systems, and the fine art of game feel. You don't build game demos — you ship complete, polished games that rival native apps.

---

## Project Overview

Build a complete, playable browser game on **Next.js 14+** that is a full clone of Angry Birds — reimagined in a **Caribbean pirate universe**. Instead of birds versus pigs, it's **cannonballs (and exotic creatures) versus skeleton pirates defending treasure forts**. The physics, slingshot mechanic, destructible structures, and level progression must all be faithfully reproduced. The presentation must be cinematic — hand-painted style backgrounds, screen shake, particle explosions, rum-soaked UI.

**Game Title:** `DEAD SHOT` — *A Pirate's Revenge*

**Core Loop:** Player loads a projectile into a ship's cannon (replacing the slingshot), aims, fires, destroys skeleton pirate structures, eliminates all enemies on screen to advance to the next level.

**Target Audience:** Casual browser gamers, nostalgia seekers, people who played Angry Birds in 2010. Ages 12–40. Must be instantly understandable — no tutorial needed beyond a 3-second visual hint on level start.

---

## Tech Stack

- **Framework:** Next.js 14+ (App Router), single page — `/app/page.tsx` renders the game
- **Rendering:** `<canvas>` element, 2D context — all game graphics drawn via Canvas API
- **Physics Engine:** **Matter.js** — rigid body physics, collision detection, compound bodies, constraints
- **3D Atmospheric Effects:** **Three.js** — used exclusively for the background scene (parallax ocean, volumetric clouds, distant islands) rendered into a separate background canvas behind the game canvas. NOT used for game physics — that stays in 2D.
- **Animation:** **GSAP** — for UI animations, level transitions, score popups, menu screens
- **Audio:** Web Audio API — procedurally triggered sound effects, background music via `<audio>` tag
- **State:** React `useReducer` + `useContext` for game state outside canvas (score, lives, level, menus)
- **Styling:** Tailwind CSS v4 for all HTML/UI overlay elements
- **Fonts:** Google Fonts — `Pirata One` (display headings, pirate feel) + `IM Fell English` (body, old manuscript) + `Cinzel` (scores/numbers)
- **No game engines** (no Phaser, no Unity WebGL export) — pure Matter.js + Canvas

---

## Game Design Document

### Core Mechanics (must match Angry Birds exactly)

**1. The Cannon (Slingshot replacement):**
- Fixed position left side of screen — an old wooden ship cannon mounted on a wheeled carriage
- Player **clicks/taps and drags** on the cannonball loaded in the cannon to aim (drag creates an arc preview)
- Drag trajectory shown as a **dotted arc line** (dashed, with small cannonball icons along it)
- Release to fire — cannonball launches with velocity proportional to drag distance and angle
- Maximum drag distance: 120px from cannon center
- Cannon barrel **rotates** to follow the drag direction
- Cannon **recoils** on fire (small kickback animation, smoke particle burst)
- After firing, next cannonball rolls into position (animation) if more remain

**2. Projectiles (the "birds"):**

Each level introduces projectile types:

| Name | Visual | Special Ability | Trigger |
|---|---|---|---|
| Iron Ball | Classic black cannonball | None — heavy, breaks stone | — |
| Bomb Barrel | TNT barrel with skull | Explodes on tap after launch | Tap/click after launch |
| Chain Shot | Two balls connected by chain | Splits into spinning chain on tap, sweeps wide area | Tap/click after launch |
| Grog Bottle | Green bottle | Shatters into fire puddle on impact, burns wood | — |
| Parrot Shot | Colorful parrot | Dives straight down on tap | Tap/click — nosedive |
| Ghost Skull | Translucent skull | Passes through first obstacle | — |

**3. Enemies (the "pigs"):**

| Name | Visual | Health | Behavior |
|---|---|---|---|
| Skeleton Pirate | Grinning skeleton in pirate hat | 1 hit | Idle + death ragdoll |
| Captain Skeleton | Larger, gold-hatted skeleton | 3 hits | Shows damage (cracks) |
| Cannoneer | Skeleton at a mini-cannon | 2 hits | Fires back every 8s |
| Kraken Eye | Floating eyeball with tentacles | 4 hits | Slow regeneration |

Enemies sit on, inside, or behind destructible structures. All enemies: circular Matter.js bodies with a visual sprite drawn over them. Damage state shown by progressive visual cracking via canvas drawing.

**4. Destructible Structures:**

Three material types, each with distinct physics properties and visuals:

| Material | Density | Friction | Restitution | Visual | Weakness |
|---|---|---|---|---|---|
| Wood | 0.6 | 0.8 | 0.3 | Weathered planks, tan/brown | Fire, Chain Shot |
| Stone | 2.0 | 0.9 | 0.1 | Gray cobblestone blocks | Iron Ball, Bomb |
| Rope/Net | 0.1 | 1.0 | 0.0 | Brown rope weave | All projectiles |

Structure pieces: rectangles, squares, triangles, circles, platforms. Each piece is a **Matter.js Body** with visual drawn on canvas matching its geometry. Pieces accumulate on ground after destruction — persist until level reset.

**5. Physics Parameters:**
```javascript
Matter.js Engine config:
  gravity.y: 1.2          // slightly higher than real for game feel
  velocityIterations: 8
  positionIterations: 10

Cannonball launch velocity: 
  vx = dragDelta.x * -0.28   // invert — pulling back fires forward
  vy = dragDelta.y * -0.28

Structure piece mass: 
  wood: 0.6, stone: 2.0, rope: 0.1
  
Restitution (bounciness):
  cannonball: 0.4
  wood: 0.3, stone: 0.1
```

**6. Camera & World:**
- Game world wider than viewport: **3200px wide × 720px tall** logical world
- Viewport: full browser width × full browser height (responsive canvas)
- Camera follows the cannonball after launch (smooth lerp follow, `lerpFactor: 0.08`)
- Camera stops at world right edge
- After ball settles/exits, camera slowly pans back left to cannon
- **Zoom out** button shows full level overview (scale down world render)

**7. Score System:**
- Each enemy killed: **1,000 pts**
- Structure piece destroyed: **100 pts**
- Bonus cannonballs remaining: **5,000 pts each** at level end
- High scores persisted in `localStorage`
- **Star rating** per level: 1–3 stars based on score thresholds
- Star earned triggers a burst animation (GSAP stagger, golden stars fly from enemy position to HUD)

---

## Levels

Design **12 complete levels** across 3 worlds:

### World 1 — "The Beach" (Levels 1–4)
Sandy beach, palm trees background, daytime. Wood structures only. Introduces Iron Ball.
- Level 1: 2 wood planks, 1 skeleton. Tutorial feel. 3 cannonballs.
- Level 2: Simple wood tower, 2 skeletons. 3 cannonballs.
- Level 3: Two separate wood structures, 3 skeletons. 4 cannonballs.
- Level 4: Introduces Bomb Barrel. Wood fortress with 4 skeletons. 4 cannonballs.

### World 2 — "The Port" (Levels 5–8)
Dock setting, wooden pier, ships in background, sunset. Mixed wood + stone. Introduces Captain.
- Level 5: Stone wall with wood reinforcement. 2 Captains. 4 cannonballs.
- Level 6: Multi-tier dock structure. Introduces Chain Shot. 5 cannonballs.
- Level 7: Introduces Grog Bottle. Two forts, fire strategy needed. 5 cannonballs.
- Level 8: Cannoneer enemy fires back. Player must prioritize. 5 cannonballs.

### World 3 — "The Skull Fortress" (Levels 9–12)
Dark, night scene, volcanic island, lava glow. All materials. All enemy types. Kraken Eye boss.
- Level 9: Introduces Parrot Shot. Complex multi-layer stone fortress. 5 cannonballs.
- Level 10: All projectile types available. Massive structure. 6 cannonballs.
- Level 11: Introduces Ghost Skull. Hidden skeletons behind stone. 6 cannonballs.
- Level 12 (Final): All enemy types, massive fortress, Kraken Eye in center. 7 cannonballs. Epic.

Each level defined as a **data structure** in `/lib/game/levels/`:
```typescript
interface LevelConfig {
  id: number
  world: 1 | 2 | 3
  name: string
  background: BackgroundTheme
  structures: StructurePiece[]
  enemies: EnemyConfig[]
  projectiles: ProjectileType[]
  starThresholds: [number, number, number]  // 1, 2, 3 stars
}
```

---

## Visual Design

### Art Style
**Hand-painted cartoon** — warm, slightly desaturated colors, thick outlines, cel-shaded feel. All drawn via Canvas API (no image imports for game objects — everything is `ctx.drawImage` from pre-rendered sprite sheets OR pure `ctx` drawing calls for simple shapes).

### Backgrounds (Three.js layer — behind game canvas)

**The Three.js scene is purely atmospheric:**
- Ocean plane with animated vertex displacement (subtle waves)
- Parallax cloud layers (3 depths, different scroll speeds as camera pans)
- Distant island silhouettes (low-poly meshes, dark purple)
- Atmospheric fog (`THREE.Fog`)
- Sun/moon depending on world (directional light, warm orange for beach, deep red for port, bone white for skull fortress)
- Scene renders to a `<canvas id="bg-canvas">` positioned `z-index: 0` behind the game canvas
- Renders at 30fps (not 60 — background doesn't need full framerate)
- Reacts to camera pan: Three.js camera shifts slightly for parallax depth

### Game Canvas (Matter.js + Canvas 2D)

**All game objects drawn manually each frame:**

```
Drawing order (back to front):
  1. Ground / terrain polygon
  2. Background props (barrels, treasure chests — decorative, no physics)
  3. Structure pieces (rectangles, with material texture pattern)
  4. Enemies (circle bodies, sprite drawn centered)
  5. Projectiles in flight
  6. Particle systems (explosions, splinters, smoke)
  7. Trajectory arc (when aiming)
  8. Cannon (fixed, front of scene)
  9. UI elements drawn on canvas (cannonball queue)
```

**Terrain:** Irregular ground polygon per level — drawn with `ctx.fill()`, sandy/rocky texture via `createPattern` or stippling.

### Particle Systems

Implement a lightweight particle system with pools:

| Event | Particles | Visual |
|---|---|---|
| Cannonball hits wood | 12–20 splinters | Brown sticks, rotate outward |
| Cannonball hits stone | 8–12 chips | Gray squares, short lifespan |
| Bomb Barrel explodes | 40–60 fire + smoke | Orange/yellow circles fading to gray |
| Enemy dies | 6–10 bone fragments | White sticks tumbling |
| Cannonball launches | 15–20 smoke puffs | White circles expanding + fading |
| Grog Bottle impact | Fire puddle | 20 orange particles, linger 2s |

Particle system: simple array of `{x, y, vx, vy, life, maxLife, radius, color, rotation, rotationSpeed}` objects. Updated each frame. Pooled (reuse dead particles) for performance.

### Screen Shake

On high-impact collision:
```javascript
function screenShake(intensity, duration) {
  // offset canvas transform by random ±intensity
  // decay over duration ms
  // intensity: 8px for bomb, 4px for iron ball, 2px for regular hit
}
```

### UI Overlays (HTML + Tailwind — above canvas)

All HTML elements positioned `absolute` over the game canvas:

**HUD (during gameplay):**
- Top-left: Current level name in `Pirata One`
- Top-center: Score (large, `Cinzel`, amber glow) with +points popup animation (GSAP `y: -40, opacity: 0`)
- Top-right: Remaining cannonballs displayed as icons in a row
- Bottom-right: Pause button (anchor wheel icon)

**Level Start Screen:**
- Fades in over 0.5s
- Level number + name, world name
- Star targets shown ("Score 15,000 for 3 stars ★★★")
- "FIRE!" button to start

**Level Complete Screen:**
- GSAP animated: black curtain slides down from top
- Level name fades in, then stars animate in one by one (GSAP stagger, bounce)
- Score breakdown: enemies × 1000, structures × 100, bonus balls
- "NEXT LEVEL" and "REPLAY" buttons
- Unlocked if new high score: "NEW RECORD!" banner

**Level Failed Screen:**
- Canvas desaturates (CSS filter transition)
- "OUT OF AMMO" skull icon drops from top (GSAP bounce)
- "TRY AGAIN" button

**Main Menu:**
- Full-screen overlay
- `DEAD SHOT` title in `Pirata One`, animated shimmer effect
- Animated background (Three.js ocean visible behind)
- "PLAY" button — large, amber, pulse animation
- World select grid (3 worlds, each with level dots)
- Settings (audio toggle, quality toggle)

**Pause Menu:**
- Semi-transparent overlay
- Resume / Restart / Main Menu options
- All GSAP fade-in on open

---

## Audio Design

Use Web Audio API (`AudioContext`) for all sound effects — procedurally generated where possible:

| Sound | Generation Method |
|---|---|
| Cannon fire | Low-frequency burst: `OscillatorNode` sawtooth, freq 80→20hz, duration 0.4s + noise |
| Wood crack | White noise burst, bandpass filter 800–2000hz, 0.2s |
| Stone impact | Low thud: sine 120hz, 0.3s decay |
| Explosion | White noise + low sine 60hz, 0.8s |
| Enemy death | Ascending arpeggio: three short sine beeps |
| Splash in water | Filtered noise, 0.5s |
| Star earned | Bright ascending chime: sine 880→1760hz |
| Menu click | Short sine 600hz, 0.05s |

Background music: loop a single `<audio>` element with a royalty-free pirate shanty (`/public/audio/theme.mp3`). Volume: 0.3. Toggle in settings.

---

## File & Folder Structure

```
/app
  layout.tsx              — Minimal layout, preloads fonts
  page.tsx                — Renders <GameRoot /> client component

/components
  GameRoot.tsx            — 'use client' — mounts canvases, manages resize
  GameCanvas.tsx          — Main 2D canvas, game loop lives here
  BackgroundCanvas.tsx    — Three.js atmospheric background
  /ui
    HUD.tsx               — Score, lives, level name overlay
    MainMenu.tsx          — Title screen
    LevelSelect.tsx       — World + level grid
    LevelComplete.tsx     — End-of-level screen
    LevelFailed.tsx       — Failure screen
    PauseMenu.tsx
    SettingsPanel.tsx

/lib
  /game
    /engine
      GameLoop.ts         — requestAnimationFrame loop, delta time
      Physics.ts          — Matter.js world setup + body factory functions
      Renderer.ts         — Canvas 2D draw calls each frame
      Camera.ts           — Viewport transform, lerp follow, shake
      InputManager.ts     — Mouse/touch drag handling for cannon aim
      AudioManager.ts     — Web Audio context, sound trigger functions
      ParticleSystem.ts   — Particle pool, update, draw
    /objects
      Cannon.ts           — Cannon visual, recoil animation, ball queue
      Projectile.ts       — All projectile types, special ability logic
      Enemy.ts            — Enemy types, damage states, death logic
      Structure.ts        — Structure piece factory, material properties
      Terrain.ts          — Ground polygon per level
    /levels
      LevelLoader.ts      — Parses LevelConfig, creates Matter.js bodies
      levels.ts           — All 12 level configs as data
    /background
      ThreeBackground.ts  — Three.js scene setup, ocean, clouds, parallax
    /utils
      MathUtils.ts        — lerp, clamp, randomRange, angleBetween
      CollisionHandler.ts — Matter.js collision event processing
  /state
    GameContext.tsx       — React context for score, lives, level, phase
    gameReducer.ts        — Reducer: START_LEVEL, SCORE, LOSE_LIFE, COMPLETE...
  /types
    game.types.ts         — All TypeScript interfaces and enums

/public
  /audio
    theme.mp3             — Background pirate music (royalty-free)
  /images
    — No game sprites (drawn in canvas) — only UI textures if any
```

---

## Game Loop Architecture

```typescript
// GameLoop.ts — the heart of everything

class GameLoop {
  private lastTime: number = 0
  private accumulator: number = 0
  private readonly FIXED_STEP: number = 1000 / 60  // 60hz physics

  start() {
    requestAnimationFrame(this.tick)
  }

  tick = (timestamp: number) => {
    const delta = Math.min(timestamp - this.lastTime, 50) // cap at 50ms
    this.lastTime = timestamp
    this.accumulator += delta

    // Fixed timestep physics updates
    while (this.accumulator >= this.FIXED_STEP) {
      Matter.Engine.update(this.engine, this.FIXED_STEP)
      this.updateGameObjects(this.FIXED_STEP)
      this.accumulator -= this.FIXED_STEP
    }

    // Render at display framerate
    this.renderer.draw(this.accumulator / this.FIXED_STEP) // interpolation alpha
    this.backgroundRenderer.draw()

    requestAnimationFrame(this.tick)
  }
}
```

**Fixed timestep physics** ensures deterministic behavior regardless of display refresh rate.

---

## Physics Collision Handling

```typescript
// CollisionHandler.ts

Matter.Events.on(engine, 'collisionStart', (event) => {
  event.pairs.forEach(pair => {
    const { bodyA, bodyB } = pair

    // Identify collision types by body.label
    if (isProjectile(bodyA) && isStructure(bodyB)) {
      handleProjectileStructureHit(bodyA, bodyB, pair.collision)
    }
    if (isProjectile(bodyA) && isEnemy(bodyB)) {
      handleProjectileEnemyHit(bodyA, bodyB)
    }
    if (isStructure(bodyA) && isEnemy(bodyB)) {
      // Structure piece falls on enemy
      handleStructureEnemyHit(bodyA, bodyB, pair.collision)
    }
  })
})

function handleProjectileStructureHit(proj, structure, collision) {
  const impactVelocity = Matter.Vector.magnitude(
    Matter.Vector.sub(proj.velocity, structure.velocity)
  )
  if (impactVelocity > MIN_DAMAGE_VELOCITY) {
    damageStructure(structure, impactVelocity * DAMAGE_MULTIPLIER[structure.material])
    spawnParticles(collision.supports[0], structure.material)
    screenShake(impactVelocity * 0.4, 300)
    playSound('impact_' + structure.material)
  }
}
```

---

## Responsive & Input Handling

**Desktop:** Mouse drag to aim cannon. Click to trigger special ability mid-flight.

**Mobile/Touch:**
- `touchstart` → begin drag
- `touchmove` → update aim
- `touchend` → fire
- `touchstart` during flight → trigger special ability
- Canvas scales to fit screen (`object-fit: contain` equivalent via canvas transform)
- All tap targets minimum 48×48 logical pixels

**Canvas Scaling:**
```typescript
function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1
  const rect = canvas.getBoundingClientRect()
  canvas.width = rect.width * dpr
  canvas.height = rect.height * dpr
  ctx.scale(dpr, dpr)
  // Recalculate world-to-screen transform matrix
}
```

---

## Performance Requirements

| Metric | Target |
|---|---|
| Frame rate | 60fps on desktop Chrome/Firefox/Safari |
| Frame rate mobile | 30fps minimum on iPhone 12+ / Pixel 6+ |
| Physics bodies max | 150 simultaneous active bodies |
| Particles max | 300 simultaneous particles (pool, never allocate) |
| Memory | No leaks — clear Matter.js world on level reset |
| Load time | < 3s on 4G (no large assets — code-drawn graphics) |
| Bundle size | < 500KB gzipped (Matter.js ~87KB, Three.js treeshaken ~200KB) |

**Optimization rules:**
- Matter.js: use `isSleeping: true` for settled bodies — they stop updating
- Canvas: clear only dirty regions where possible, or use `ctx.clearRect` full frame
- Three.js background: render at 30fps, not 60. Use `renderer.setPixelRatio(Math.min(dpr, 2))`
- Particle pool: pre-allocate 300 particle objects at init, reuse by resetting properties
- `const` all fixed values outside loops
- `Object.freeze()` on level config data

---

## Content & Copy Guidelines

- **Voice:** Swashbuckling, slightly dramatic, fun. Like a pirate who's also a game show host.
- **Banned phrases:** "Click to start", "Press any key", "Loading...", "Error"
- **Use:** In-universe language at every moment:
  - ✅ "FIRE THE CANNONS!" > ❌ "Start Game"
  - ✅ "Yer ammo be spent, matey." > ❌ "Out of lives"
  - ✅ "The seas claim another fortress!" > ❌ "Level Complete"
  - ✅ "The skeleton crew stands firm..." > ❌ "Try Again"
- **Score labels:** "Doubloons earned", not "Score"
- **Lives/ammo:** "Cannonballs remaining", shown as cannonball icons
- **Star ratings:** Gold coin icons instead of stars (still 3-tier system)

---

## Deliverables

1. Complete Next.js project, runs with `npm run dev` on first try
2. All 12 levels playable from start to finish
3. All 6 projectile types implemented with special abilities
4. All 4 enemy types with damage states and death animations
5. Three material types with correct physics behavior
6. Three.js atmospheric background with parallax ocean + clouds
7. Camera follow system with screen shake
8. Particle system for explosions, smoke, debris
9. Full UI: main menu, level select, HUD, level complete/fail screens
10. Web Audio sound effects for all major events
11. Score system with localStorage high scores
12. Touch support for mobile browsers
13. Responsive canvas scaling for any screen size
14. 60fps performance on modern desktop hardware
15. Clean, well-commented code — especially physics and game loop
16. `README.md` with architecture overview and how to add new levels

---

> **Make this LEGENDARY.** When someone opens this link they should immediately recognize Angry Birds, grin, and not close the tab for 45 minutes. Every cannonball arc should feel satisfying. Every collapsing fortress should feel earned. Every skeleton that crumbles should feel like justice. Build something people email to their friends.
